'use client'

import { useEffect, useRef } from 'react'

export default function ParticleWaves() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    let animFrameId: number
    let renderer: import('three').WebGLRenderer
    let count = 0

    const mount = mountRef.current

    ;(async () => {
      const THREE = await import('three')

      const SEPARATION = 100
      const AMOUNTX = 50
      const AMOUNTY = 50

      let mouseX = 0
      let mouseY = 0
      const windowHalfX = mount.clientWidth / 2
      const windowHalfY = mount.clientHeight / 2

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        mount.clientWidth / mount.clientHeight,
        1,
        10000
      )
      camera.position.z = 1000

      // Scene
      const scene = new THREE.Scene()

      // Geometry
      const numParticles = AMOUNTX * AMOUNTY
      const positions = new Float32Array(numParticles * 3)
      const scales = new Float32Array(numParticles)

      let i = 0
      let j = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
          positions[i + 1] = 0
          positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
          scales[j] = 1
          i += 3
          j++
        }
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

      // Shader — points ronds, couleur adaptée à la DA
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
        },
        vertexShader: `
          attribute float scale;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          void main() {
            if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
            gl_FragColor = vec4(color, 0.55);
          }
        `,
        transparent: true,
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Renderer — fond transparent pour laisser le fond noir du site
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      renderer.setClearColor(0x000000, 0)
      mount.appendChild(renderer.domElement)

      // Mouse
      const onPointerMove = (e: PointerEvent) => {
        if (!e.isPrimary) return
        mouseX = e.clientX - windowHalfX
        mouseY = e.clientY - windowHalfY
      }
      mount.addEventListener('pointermove', onPointerMove)

      // Resize
      const onResize = () => {
        camera.aspect = mount.clientWidth / mount.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(mount.clientWidth, mount.clientHeight)
      }
      window.addEventListener('resize', onResize)

      // Animate
      function animate() {
        animFrameId = requestAnimationFrame(animate)

        camera.position.x += (mouseX - camera.position.x) * 0.04
        camera.position.y += (-mouseY - camera.position.y) * 0.04
        camera.lookAt(scene.position)

        const pos = particles.geometry.attributes.position.array as Float32Array
        const sc = particles.geometry.attributes.scale.array as Float32Array

        let ii = 0
        let jj = 0
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            pos[ii + 1] =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50
            sc[jj] =
              (Math.sin((ix + count) * 0.3) + 1) * 14 +
              (Math.sin((iy + count) * 0.5) + 1) * 14
            ii += 3
            jj++
          }
        }

        particles.geometry.attributes.position.needsUpdate = true
        particles.geometry.attributes.scale.needsUpdate = true

        renderer.render(scene, camera)
        count += 0.06
      }

      animate()

      // Cleanup
      return () => {
        cancelAnimationFrame(animFrameId)
        mount.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement)
        }
      }
    })()

    return () => {
      cancelAnimationFrame(animFrameId)
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
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.3,
      }}
    />
  )
}
