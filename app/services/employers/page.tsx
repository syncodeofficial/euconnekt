import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";

export default function EmployersPage() {
  return (
    <main>
      {/* HERO */}
      <Hero
          title="Services for Employers"
          subtitle="Support for Irish companies hiring international talent, including guidance on eligibility and permit processing."
          variant="image"
          image="/images/services/employers.webp"
          overlay
      />

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-[#101828]">
          How We Help Employers
        </h2>

        <div className="space-y-8">
          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">
                Recruitment & Talent Sourcing
              </h3>
              <p className="text-gray-600">
                We support Irish companies facing talent shortages by identifying
                qualified international professionals aligned with your business
                needs.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">
                Work Permit & Legalisation Process
              </h3>
              <p className="text-gray-600">
                We manage the full employment permit process, ensuring compliance
                with Irish immigration and employment regulations.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">
                Compliance & Advisory Support
              </h3>
              <p className="text-gray-600">
                Clear and objective guidance on the legal hiring of non-EEA
                professionals, reducing risks and delays.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">
                Employee Integration Support
              </h3>
              <p className="text-gray-600">
                Assistance to ensure a smooth transition for international hires
                into the Irish workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Hire International Talent?
          </h2>
          <p className="mb-8 text-blue-100">
            Speak with a specialist and understand how to legally hire qualified
            international professionals for your business.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Speak with a Specialist
          </Link>
        </div>
      </section>
    </main>
  );
}
