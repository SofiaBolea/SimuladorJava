import { HeroSection } from "@/components/sections/HeroSection";
import { FlowComparisonSection } from "@/components/sections/FlowComparisonSection";
import { ClassesGridSection } from "@/components/sections/ClassesGridSection";
import { XMLConfiguratorSection } from "@/components/sections/XMLConfiguratorSection";
import { ExamplesSection } from "@/components/sections/ExamplesSection";
import { AnnexSection } from "@/components/sections/AnnexSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans">
      <HeroSection />
      
      <div className="space-y-16 pb-32">
        <FlowComparisonSection />
        <ClassesGridSection />
        <XMLConfiguratorSection />
        <ExamplesSection />
        <AnnexSection />
      </div>

    </main>
  );
}
