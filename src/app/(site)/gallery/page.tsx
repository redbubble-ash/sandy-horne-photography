import type { Metadata } from "next";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LightboxGallery from "@/components/LightboxGallery";
import type { GalleryPhoto, GalleryCategory } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Sandy Horne's photography portfolio — birds, landscapes, flora, animals, and people across Australia.",
};

const reader = createReader(process.cwd(), keystaticConfig);

const categories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "birds", label: "Birds" },
  { value: "people", label: "People" },
  { value: "animals", label: "Animals" },
  { value: "landscapes", label: "Landscapes" },
  { value: "flora", label: "Flora" },
];

export default async function GalleryPage() {
  const entries = await reader.collections.gallery.all();

  const photos: GalleryPhoto[] = entries
    .map((entry) => ({
      id: entry.slug,
      src: entry.entry.image ?? "",
      width: 800,
      height: 800,
      alt: entry.entry.alt ?? entry.entry.title as string,
      title: entry.entry.title as string,
      category: entry.entry.category as GalleryCategory,
      featured: entry.entry.featured ?? false,
    }))
    .filter((p) => p.src)
    .sort((a, b) => {
      const aOrder = (entries.find((e) => e.slug === a.id)?.entry.order ?? 0);
      const bOrder = (entries.find((e) => e.slug === b.id)?.entry.order ?? 0);
      return aOrder - bOrder;
    });

  const byCategory = (cat: GalleryCategory) =>
    photos.filter((p) => p.category === cat);

  return (
    <div className="bg-[#f7f4ef] min-h-screen">
      <div className="pt-32 pb-14 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase font-sans text-[#4a7a3c] mb-3">
          Portfolio
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl text-[#1e3520] mb-5">Gallery</h1>
        <p className="text-sm text-[#6b7869] font-sans max-w-md mx-auto leading-relaxed">
          A collection of moments from across Australia — in the field, at the
          water&apos;s edge, and deep in the bush.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <Tabs defaultValue="all">
          <TabsList className="flex flex-wrap justify-center gap-1 bg-transparent mb-12 h-auto">
            {categories.map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="text-[10px] tracking-[0.2em] uppercase font-sans px-5 py-2.5 rounded-none border border-[#d6d0c6] bg-transparent text-[#6b7869] data-[state=active]:bg-[#1e3520] data-[state=active]:text-[#f7f4ef] data-[state=active]:border-[#1e3520] hover:border-[#1e3520] hover:text-[#1e3520] transition-all"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <LightboxGallery photos={photos} />
          </TabsContent>

          {(["birds", "people", "animals", "landscapes", "flora"] as GalleryCategory[]).map(
            (cat) => (
              <TabsContent key={cat} value={cat}>
                <LightboxGallery photos={byCategory(cat)} />
              </TabsContent>
            )
          )}
        </Tabs>
      </div>
    </div>
  );
}
