import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { photos, photosByCategory, type GalleryCategory } from "@/lib/images";
import LightboxGallery from "@/components/LightboxGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Sandy Horne's photography portfolio — birds, landscapes, flora, animals, and people across Australia.",
};

const categories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "birds", label: "Birds" },
  { value: "people", label: "People" },
  { value: "animals", label: "Animals" },
  { value: "landscapes", label: "Landscapes" },
  { value: "flora", label: "Flora" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#f7f4ef] min-h-screen">
      {/* Page Header */}
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

      {/* Tabs */}
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
                <LightboxGallery photos={photosByCategory(cat)} />
              </TabsContent>
            )
          )}
        </Tabs>
      </div>
    </div>
  );
}
