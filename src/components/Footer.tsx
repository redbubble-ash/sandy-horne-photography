import Link from "next/link";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Footer() {
  const settings = await reader.singletons.settings.read();
  const instagram = settings?.instagram ?? "sandyhornephoto";
  const facebook = settings?.facebook ?? "https://facebook.com/sandyhornephoto";
  const location = settings?.location ?? "Australia";

  return (
    <footer className="bg-[#0F4C81] text-[#f7f4ef]/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-xl text-[#f7f4ef] mb-1 leading-none">Sandy Horne</p>
          <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#f7f4ef]/40 mb-5">
            Photography
          </p>
          <p className="text-sm leading-relaxed text-[#f7f4ef]/60 max-w-xs">
            Capturing the beauty of Australia&apos;s birds and wild places — one quiet moment at a time.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-[#f7f4ef]/40 mb-5">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            {([["Home", "/"], ["Gallery", "/gallery"], ["About", "/about"], ["Contact", "/contact"]] as [string, string][]).map(
              ([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#f7f4ef]/60 hover:text-[#f7f4ef] transition-colors">
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-[#f7f4ef]/40 mb-5">
            Connect
          </h4>
          <div className="flex gap-4 mb-6">
            <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#f7f4ef]/60 hover:text-[#f7f4ef] transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#f7f4ef]/60 hover:text-[#f7f4ef] transition-colors">
              <FacebookIcon size={20} />
            </a>
          </div>
          <p className="text-xs text-[#f7f4ef]/30">Based in {location}</p>
          <p className="text-xs text-[#f7f4ef]/30 mt-1">sandyhornephoto.com</p>
        </div>
      </div>

      <div className="border-t border-[#f7f4ef]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#f7f4ef]/25">
          <p>Copyright Sandy Horne {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
