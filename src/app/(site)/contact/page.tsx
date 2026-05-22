import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sandy Horne for print enquiries, image licensing, workshop bookings, or general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7f4ef]">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="pt-32 pb-14 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase font-sans text-[#4a7a3c] mb-3">
          Get in Touch
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#1e3520] mb-5">Contact</h1>
        <p className="text-sm text-[#6b7869] font-sans max-w-md mx-auto leading-relaxed">
          For print enquiries, licensing, workshop bookings, or just to say
          hello — I&apos;d love to hear from you.
        </p>
      </div>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <h2 className="font-serif text-2xl text-[#1e3520] mb-8">Send a Message</h2>
          <ContactForm />
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#4a7a3c] mb-5">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-[#4a7a3c] shrink-0" />
                <a
                  href="mailto:hello@sandyhornephoto.com"
                  className="text-sm text-[#3a4e3c] font-sans hover:text-[#1e3520] transition-colors break-all"
                >
                  hello@sandyhornephoto.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#4a7a3c] shrink-0" />
                <p className="text-sm text-[#3a4e3c] font-sans">Australia</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#4a7a3c] mb-5">
              Follow Along
            </h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/sandyhornephoto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#3a4e3c] font-sans hover:text-[#1e3520] transition-colors group"
              >
                <InstagramIcon size={16} />
                @sandyhornephoto
              </a>
              <a
                href="https://facebook.com/sandyhornephoto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#3a4e3c] font-sans hover:text-[#1e3520] transition-colors group"
              >
                <FacebookIcon size={16} />
                Sandy Horne Photography
              </a>
            </div>
          </div>

          {/* Response time */}
          <div className="bg-[#ede8df] p-5">
            <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#4a7a3c] mb-2">
              Response Time
            </p>
            <p className="text-sm text-[#3a4e3c] font-sans leading-relaxed">
              I aim to respond to all enquiries within 2 business days. For
              urgent matters please email directly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────────── */}
      <NewsletterSignup />
    </div>
  );
}
