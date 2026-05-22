import Image from "next/image";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import { featuredPhotos } from "@/lib/images";
import NewsletterSignup from "@/components/NewsletterSignup";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function HomePage() {
  const home = await reader.singletons.home.read();

  const heroTagline =
    home?.heroTagline ??
    "Capturing Australia's wild birds and hidden landscapes through patience, light, and reverence for the natural world.";
  const quote = home?.quote ?? "The forest is my cathedral, the birds my choir.";
  const quoteAttribution = home?.quoteAttribution ?? "Sandy Horne";

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/sh-hero-main/1920/1080"
          alt="Australian bird in natural habitat"
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
      <section className="bg-[#f7f4ef] py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#4a7a3c] mb-3">Selected Work</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1e3520]">From the Field</h2>
          </div>
          <div className="masonry">
            {featuredPhotos.map((photo) => (
              <Link key={photo.id} href="/gallery" className="masonry-item block group relative overflow-hidden cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#1e3520]/0 group-hover:bg-[#1e3520]/50 transition-all duration-500 flex items-end">
                  <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="font-serif text-lg text-[#f7f4ef]">{photo.title}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#f7f4ef]/60 font-sans mt-1">{photo.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/gallery" className="inline-block bg-[#1e3520] text-[#f7f4ef] text-xs tracking-[0.25em] uppercase font-sans px-10 py-4 hover:bg-[#4a7a3c] transition-colors duration-300">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <section className="bg-[#1e3520] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f4ef] leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#4a7a3c]" />
            <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#f7f4ef]/40">{quoteAttribution}</p>
            <div className="h-px w-12 bg-[#4a7a3c]" />
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
