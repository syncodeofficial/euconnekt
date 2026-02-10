import Hero from "@/components/Hero";
import Link from "next/link";

export default function WorkVisasPage() {
  return (
    <main>
      <Hero
        title="Residency & Visa Services in Ireland"
        subtitle="Clear and professional guidance for legal residency and visa solutions in Ireland."
        variant="image"
        image="/images/services/visa.webp"
        overlay
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-12">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Residency & Visa Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Navigating residency permissions and visas in Ireland can be complex.
              EuConnekt provides structured, transparent, and fully legal support
              to help individuals and families understand their options and maintain
              lawful residency in Ireland.
            </p>
          </div>

          {/* SERVICES */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="font-semibold text-primary mb-2">
                Long-Term Residency & Stamp 4
              </h3>
              <p className="text-sm text-gray-600">
                Support for individuals eligible for long-term residency,
                including Stamp 4 applications. We guide you through eligibility
                checks, documentation, and submission in line with Irish
                immigration regulations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="font-semibold text-primary mb-2">
                Family Reunification & Dependant Visas
              </h3>
              <p className="text-sm text-gray-600">
                Assistance with family reunification and dependant visa applications.
                We ensure each case is assessed correctly and processed in compliance
                with Irish immigration and residency rules.
              </p>
            </div>
          </div>

          {/* APPROACH */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Our Commitment
            </h3>
            <p className="text-gray-600 max-w-3xl">
              EuConnekt does not sell visas or residency permissions.
              We provide expert guidance through recognised legal pathways,
              offering clarity, compliance, and realistic timelines so you can
              plan your future in Ireland with confidence.
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
