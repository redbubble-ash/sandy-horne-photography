import Image from "next/image";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import type { GalleryPhoto, GalleryCategory } from "@/lib/images";
import LightboxGallery from "@/components/LightboxGallery";
import NewsletterSignup from "@/components/NewsletterSignup";

// Regenerate page every hour so the hero image rotates
export const revalidate = 3600;

const reader = createReader(process.cwd(), keystaticConfig);

const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg",
];

export default async function HomePage() {
  const [home, galleryEntries] = await Promise.all([
    reader.singletons.home.read(),
    reader.collections.gallery.all(),
  ]);

  const heroImage = heroImages[new Date().getHours() % heroImages.length];

  const heroTagline =
    home?.heroTagline ??
    "Capturing Australia's wild birds and hidden landscapes through patience, light, and reverence for the natural world.";
  const quote = home?.quote ?? "The forest is my cathedral, the birds my choir.";
  const quoteAttribution = home?.quoteAttribution ?? "Sandy Horne";

  const featuredPhotos: GalleryPhoto[] = galleryEntries
    .filter((e) => e.entry.featured && e.entry.image)
    .map((e) => ({
      id: e.slug,
      src: e.entry.image ?? "",
      width: 800,
      height: 800,
      alt: e.entry.alt ?? e.entry.title as string,
      title: e.entry.title as string,
      category: e.entry.category as GalleryCategory,
      featured: true,
    }))
    .slice(0, 12);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt="Australian nature photography by Sandy Horne"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3520]/60 via-[#1e3520]/40 to-[#1e3520]/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#f7f4ef]/70 text-xs tracking-[0.4em] uppercase font-sans mb-6">
            Australian Bird & Nature Photography
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#f7f4ef] leading-[1.1] mb-8">
            Sandy Horne
          </h1>
          <p className="text-[#f7f4ef]/80 text-lg sm:text-xl font-sans font-light max-w-lg mx-auto leading-relaxed mb-10">
            {heroTagline}
          </p>
          <Link
            href="/gallery"
            className="inline-block border border-[#f7f4ef]/60 text-[#f7f4ef] text-xs tracking-[0.25em] uppercase font-sans px-10 py-4 hover:bg-[#f7f4ef] hover:text-[#1e3520] transition-all duration-300"
          >
            Explore Gallery
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f7f4ef]/40">
          <span className="text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <div className="w-px h-10 bg-[#f7f4ef]/30 animate-pulse" />
        </div>
      </section>

      {/* Featured Grid */}
      {featuredPhotos.length > 0 && (
        <section className="bg-[#f7f4ef] py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#4a7a3c] mb-3">
                Selected Work
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1e3520]">From the Field</h2>
            </div>
            <LightboxGallery photos={featuredPhotos} />
            <div className="text-center mt-14">
              <Link
                href="/gallery"
                className="inline-block bg-[#1e3520] text-[#f7f4ef] text-xs tracking-[0.25em] uppercase font-sans px-10 py-4 hover:bg-[#4a7a3c] transition-colors duration-300"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quote Strip */}
      <section className="bg-[#1e3520] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f4ef] leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#4a7a3c]" />
            <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#f7f4ef]/40">
              {quoteAttribution}
            </p>
            <div className="h-px w-12 bg-[#4a7a3c]" />
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
