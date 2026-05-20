import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  business?: string;
  service?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 2000) : '';
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const business = clean(payload.business);
  const service = clean(payload.service);
  const message = clean(payload.message);

  if (!name || !emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid name and email.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'Agency.tobeseen@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'TO BE SEEN <onboarding@resend.dev>';

  if (!apiKey) {
    return NextResponse.json({ error: 'Contact form is not configured yet.' }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New TO BE SEEN enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || 'Not provided'}`,
        `Service: ${service || 'Not selected'}`,
        '',
        'Message:',
        message || 'No message provided.',
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed', error);
    return NextResponse.json({ error: 'Message could not be sent.' }, { status: 500 });
  }
}
