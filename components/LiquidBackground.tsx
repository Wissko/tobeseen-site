'use client'

import { useEffect, useRef } from 'react'

const VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const FRAG = `
  uniform float uTime;
  uniform vec2  uResolution;
  varying vec2  vUv;

  // Smooth noise helpers
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                     + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x  = 2.0 * fract(p * C.www) - 1.0;
    vec3 h  = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.18;

    // Layered noise for organic liquid feel
    float n1 = snoise(uv * 2.2 + vec2(t * 0.6, t * 0.4));
    float n2 = snoise(uv * 3.8 + vec2(-t * 0.5, t * 0.7) + n1 * 0.3);
    float n3 = snoise(uv * 1.4 + vec2(t * 0.3, -t * 0.5) + n2 * 0.2);

    float liquid = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2) * 0.5 + 0.5;

    // Dark monochrome palette — stays cohesive with #0a0a0a bg
    // Base: near-black, highlights: very subtle whites + hint of lime accent
    vec3 colDark  = vec3(0.04, 0.04, 0.04);       // #0a0a0a
    vec3 colMid   = vec3(0.07, 0.075, 0.065);     // subtle warm dark
    vec3 colLight = vec3(0.11, 0.115, 0.09);      // soft highlight with tiny lime tint

    vec3 color = mix(colDark, colMid,  smoothstep(0.35, 0.6,  liquid));
    color      = mix(color,  colLight, smoothstep(0.62, 0.82, liquid));

    // Vignette — darken edges
    float vignette = 1.0 - smoothstep(0.4, 1.2, length(uv - 0.5) * 1.8);
    color *= mix(0.5, 1.0, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`

export default function LiquidBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const mount = mountRef.current
    let animId: number
    let renderer: import('three').WebGLRenderer

    ;(async () => {
      const THREE = await import('three')

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

      const geometry = new THREE.PlaneGeometry(2, 2)
      const uniforms = {
        uTime:       { value: 0 },
        uResolution: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      }

      const material = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms,
      })

      scene.add(new THREE.Mesh(geometry, material))

      renderer = new THREE.WebGLRenderer({ antialias: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      mount.appendChild(renderer.domElement)

      const onResize = () => {
        renderer.setSize(mount.clientWidth, mount.clientHeight)
        uniforms.uResolution.value.set(mount.clientWidth, mount.clientHeight)
      }
      window.addEventListener('resize', onResize)

      const clock = new THREE.Clock()
      const animate = () => {
        animId = requestAnimationFrame(animate)
        uniforms.uTime.value = clock.getElapsedTime()
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      }
    })()

    return () => {
      cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
