import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function IndividualsPage() {
  return (
    <main>
      {/* HERO */}
      <Hero
          title="Individuals"
          subtitle="Understand your options to live and work legally in Ireland"
          variant="image"
          image="/images/services/individual.webp"
          overlay
      />

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-[#101828]">
          How We Help You
        </h2>

        <div className="space-y-8">
          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                Eligibility Assessment
              </h3>
              <p className="text-gray-600">
                We carefully analyse your professional background and personal
                profile to identify the most suitable immigration pathway.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                Document Preparation
              </h3>
              <p className="text-gray-600">
                Clear guidance and review of all required documentation to avoid
                delays, refusals, or unnecessary complications.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                Application Submission & Tracking
              </h3>
              <p className="text-gray-600">
                We submit your application and closely monitor each stage of the
                process, keeping you informed at all times.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="mt-1 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous support throughout your journey, from initial
                assessment to final approval.
              </p>
            </div>
          </div>
        </div>

        {/* COMPLEMENTARY TEXT */}
        <div className="mt-14 max-w-4xl text-gray-700">
          <p className="mb-4">
            If you are an international professional looking to work, grow, and
            build a new life in Ireland, EuConnekt is your trusted partner.
          </p>
          <p>
            We provide humanised, strategic, and reliable support to ensure your
            legalisation through work or residency permits, allowing you to live
            and work safely, confidently, and in full compliance with Irish
            regulations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Start Your Irish Career Today
          </h2>
          <p className="mb-8 text-blue-100">
            Take our free assessment and understand your eligibility.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/free-assessment"
              className="rounded-md bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50"
            >
              Get Free Assessment
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-blue-600"
            >
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
