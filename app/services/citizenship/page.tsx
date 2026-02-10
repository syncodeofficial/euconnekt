import Hero from "@/components/Hero";
import Link from "next/link";

export default function WorkVisasPage() {
  return (
    <main>
      <Hero
        title="Citizenship & Naturalisation in Ireland"
        subtitle="Expert guidance to help you secure Irish and European citizenship through legal pathways."
        variant="image"
        image="/images/services/citizenship.webp"
        overlay
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-12">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Citizenship Services
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Obtaining Irish or European citizenship can open doors to new professional,
              educational, and lifestyle opportunities. At EuConnekt, we provide clear,
              legal, and personalised guidance to help you understand your eligibility
              and navigate the citizenship process with confidence.
            </p>
          </div>

          {/* TYPES */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="font-semibold text-primary mb-2">
                Citizenship by Descent
              </h3>
              <p className="text-sm text-gray-600">
                For individuals with Irish or European ancestry. We assess your family
                background, verify documentation, and guide you through the official
                application process to ensure full compliance with nationality laws.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="font-semibold text-primary mb-2">
                Citizenship through Residency
              </h3>
              <p className="text-sm text-gray-600">
                For individuals who have legally resided in Ireland or another European
                country for the required period. We support you with eligibility checks,
                documentation preparation, and application submission.
              </p>
            </div>
          </div>

          {/* APPROACH */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Our Approach
            </h3>
            <p className="text-gray-600 max-w-3xl">
              EuConnekt provides ethical and transparent immigration consulting.
              We do not sell citizenships — we guide our clients through recognised
              legal routes, ensuring accuracy, compliance, and realistic expectations
              at every stage of the process.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/free-assessment"
              className="inline-block rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
            >
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
