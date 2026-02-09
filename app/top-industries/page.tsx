import {
  Laptop,
  HeartPulse,
  Landmark,
  HardHat,
  Utensils,
  GraduationCap,
} from "lucide-react";

import Hero from "@/components/Hero";

export default function TopIndustriesPage() {
  return (
    <main>
      {/* HERO */}
      <Hero
          title="Top Industries in Ireland"
          subtitle="Sectors with the highest demand for international workers"
          variant="image"
          image="/images/top-industries.webp"
          overlay
      />

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Technology */}
          <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <Laptop className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Technology</h3>
              <p className="text-gray-600">
                Software development, IT, and technology innovation roles across
                Ireland.
              </p>
            </div>
          </div>

          {/* Healthcare */}
          <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <HeartPulse className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
              <p className="text-gray-600">
                Medical professionals, caregivers, and healthcare specialists in
                high demand.
              </p>
            </div>
          </div>

          {/* Finance */}
          <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <Landmark className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Finance</h3>
              <p className="text-gray-600">
                Banking, accounting, financial analysis, and corporate finance
                services.
              </p>
            </div>
          </div>

          {/* Engineering */}
          <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <HardHat className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Engineering</h3>
              <p className="text-gray-600">
                Civil, mechanical, electrical, and software engineering roles.
              </p>
            </div>
          </div>

          {/* Hospitality */}
          <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <Utensils className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Hospitality</h3>
              <p className="text-gray-600">
                Hotel management, tourism services, chefs, and hospitality
                professionals.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="text-gray-600">
                Teachers, lecturers, and academic professionals across multiple
                disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
