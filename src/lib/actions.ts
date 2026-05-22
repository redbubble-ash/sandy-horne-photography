"use server";

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

  // TODO: wire up to Resend / SendGrid / Nodemailer
  console.log("Contact form submission:", { name, email, subject, message });

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
