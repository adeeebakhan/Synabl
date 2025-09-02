  'use server';
import { z } from 'zod';

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  serviceInterest: z.string(),
  message: z.string(),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export async function handleFormSubmission(values: ContactFormValues) {
  // Lazy-import server-only modules inside the action to avoid client bundling issues
  const { Resend } = await import('resend');
  const { ContactFormEmail } = await import('@/components/emails/contact-form-email');

  // Validate form data
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) {
    throw new Error('Invalid form data.');
  }

  const data = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY. Set it in your .env.local file.');
    throw new Error('Email service not configured.');
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const to = process.env.CONTACT_TO_EMAIL || 'info@synabl.com';
    const from = process.env.CONTACT_FROM_EMAIL || 'Synabl Website <onboarding@resend.dev>';

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Contact Form Submission - ${data.serviceInterest}`,
      reply_to: data.email,
      // Pass the React Email component directly for Resend to render
      react: ContactFormEmail({
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        phone: data.phone,
        serviceInterest: data.serviceInterest,
        message: data.message,
      }),
    });

    if ((result as any).error) {
      console.error('Resend error:', (result as any).error);
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('There was a problem sending your message. Please try again later.');
  }
}
