import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sandy Horne — an Australian bird and nature photographer with over 15 years capturing the wild.",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function AboutPage() {
  const about = await reader.singletons.about.read();

  const heading = about?.heading ?? "Finding stillness in the wild places of Australia";
  const bio1 = about?.bio1 ?? "";
  const bio2 = about?.bio2 ?? "";
  const bio3 = about?.bio3 ?? "";
  const bio4 = about?.bio4 ?? "";
  const stats = about?.stats ?? [
    { value: "15+", label: "Years behind the lens" },
    { value: "200+", label: "Bird species photographed" },
    { value: "50+", label: "Locations explored" },
    { value: "12", label: "Exhibition appearances" },
  ];

  return (
    <div className="bg-[#f7f4ef]">
      <div className="pt-32 pb-12 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase font-sans text-[#4a7a3c] mb-3">
          The Photographer
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#1e3520]">About Sandy</h1>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/profile/sandy-contemplative.png"
                alt="Sandy Horne — Australian nature photographer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <p className="absolute bottom-2 right-2 text-[9px] text-white/50 font-sans">Photo: Simon Ashfield-Smith</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#4a7a3c]/30 -z-10" />
          </div>

          <div className="lg:pt-6">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#1e3520] mb-6 leading-snug">
              {heading}
            </h2>
            <div className="space-y-5 text-[#3a4e3c] font-sans text-[15px] leading-relaxed">
              {[bio1, bio2, bio3, bio4].filter(Boolean).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/gallery" className="bg-[#1e3520] text-[#f7f4ef] text-xs tracking-[0.2em] uppercase font-sans px-8 py-3.5 hover:bg-[#4a7a3c] transition-colors duration-300">
                View Gallery
              </Link>
              <Link href="/contact" className="border border-[#1e3520] text-[#1e3520] text-xs tracking-[0.2em] uppercase font-sans px-8 py-3.5 hover:bg-[#1e3520] hover:text-[#f7f4ef] transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e3520] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-4xl lg:text-5xl text-[#f7f4ef] mb-2">{value}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#f7f4ef]/40 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#4a7a3c] mb-3">Behind the Camera</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1e3520]">In the Field</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { src: "/images/profile/Profile_round_sml.png", alt: "Sandy Horne portrait" },
            { src: "/images/profile/Profile_round_mono.png", alt: "Sandy Horne black and white portrait" },
          ].map(({ src, alt }) => (
            <div key={src} className="relative aspect-square overflow-hidden">
              <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#ede8df] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#4a7a3c] mb-3">Equipment</p>
          <h2 className="font-serif text-3xl text-[#1e3520] mb-8">What I Shoot With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { category: "Bodies", items: ["Canon R6", "Canon RP"] },
              { category: "Lenses", items: ["Canon RF 100-500mm f4.5-7.1L IS USM", "Canon EF 16-35mm f/4L IS USM wide-angle", "Canon EF100mm f/2.8L macro IS USM", "Canon 2x extender"] },
              { category: "Support", items: ["Velbon Videomate 538 tripod", "Hoya 77mm Circular polarizer filter", "Swift Enduro camera trap"] },
            ].map(({ category, items }) => (
              <div key={category} className="bg-[#f7f4ef] p-5">
                <h3 className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#4a7a3c] mb-3">{category}</h3>
                <ul className="space-y-1.5 text-sm text-[#3a4e3c] font-sans">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
