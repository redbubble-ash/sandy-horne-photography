"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "horne@senet.com.au";
const FROM_EMAIL = "noreply@sandyhornephoto.com";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const subjectLine = subject
    ? `Sandy Horne Photography – ${subject}`
    : "Sandy Horne Photography – New enquiry";

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: subjectLine,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Sorry, your message could not be sent. Please try again or email directly." };
  }

  return { success: true };
}

export type NewsletterState = {
  success: boolean;
  error?: string;
};

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, error: "Please enter your email address." };
  }

  // TODO: wire up to Mailchimp / ConvertKit / Resend Audiences
  console.log("Newsletter signup:", email);

  return { success: true };
}
