import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sandy Horne for print enquiries, image licensing, workshop bookings, or general enquiries.",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function ContactPage() {
  const settings = await reader.singletons.settings.read();
  const email = settings?.email ?? "hello@sandyhornephoto.com";
  const instagram = settings?.instagram ?? "sandyhornephoto";
  const facebook = settings?.facebook ?? "https://facebook.com/sandyhornephoto";
  const location = settings?.location ?? "Australia";

  return (
    <div className="bg-[#f7f4ef]">
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

      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-2xl text-[#1e3520] mb-8">Send a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#4a7a3c] mb-5">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-[#4a7a3c] shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-[#3a4e3c] font-sans hover:text-[#1e3520] transition-colors break-all"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#4a7a3c] shrink-0" />
                <p className="text-sm text-[#3a4e3c] font-sans">{location}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#4a7a3c] mb-5">
              Follow Along
            </h3>
            <div className="space-y-3">
              <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#3a4e3c] font-sans hover:text-[#1e3520] transition-colors group"
              >
                <InstagramIcon size={16} />
                @{instagram}
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#3a4e3c] font-sans hover:text-[#1e3520] transition-colors group"
              >
                <FacebookIcon size={16} />
                Sandy Horne Photography
              </a>
            </div>
          </div>

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

    </div>
  );
}
