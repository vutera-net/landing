"use client";

import { OrbitHero } from "@/components/orbit/OrbitHero";
import { OrbitProductStack } from "@/components/orbit/OrbitProductStack";
import { OrbitPhilosophy } from "@/components/orbit/OrbitPhilosophy";
import { OrbitVisualization } from "@/components/orbit/OrbitVisualization";
import { FinalCTA } from "@/components/orbit/FinalCTA";

export default function OrbitPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <OrbitHero />
      <OrbitVisualization />
      <OrbitProductStack />
      <OrbitPhilosophy />
      <FinalCTA />
    </main>
  );
}
