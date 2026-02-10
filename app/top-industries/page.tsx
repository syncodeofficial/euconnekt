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
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <Laptop className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Technology</h3>
              </div>
              <div>
              <p className="text-gray-600">
                Software development, IT, and technology innovation roles across
                Ireland.
              </p>
            </div>
          </div>

          {/* Healthcare */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <HeartPulse className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Medical professionals, caregivers, and healthcare specialists in
                high demand.
              </p>
            </div>
          </div>

          {/* Finance */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <Landmark className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Banking, accounting, financial analysis, and corporate finance
                services.
              </p>
            </div>
          </div>

          {/* Engineering */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <HardHat className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Engineering</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Civil, mechanical, electrical, and software engineering roles.
              </p>
            </div>
          </div>

          {/* Hospitality */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <Utensils className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Hospitality</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Hotel management, tourism services, chefs, and hospitality
                professionals.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div>
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
