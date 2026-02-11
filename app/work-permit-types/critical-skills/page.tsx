import Hero from "@/components/Hero";
import Link from "next/link";

export default function CriticalSkillsPage() {
  return (
    <>
      <Hero
          title="Critical Skills Employment Permit"
          subtitle="For highly skilled workers whose professions are in shortage in Ireland."
          variant="image"
          image="/images/work-permits/critical.webp"
          overlay
      />
      {/* ELIGIBILITY REQUIREMENTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              Key Benefits
            </h2>
            <p className="text-gray-600 mt-4">
              Designed to attract highly skilled professionals to Ireland.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">
                Fast-Track Residency
              </h3>
              <p className="text-gray-600">
                Eligible for long-term residency after just two years.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">
                Family Reunification
              </h3>
              <p className="text-gray-600">
                Immediate family members can join and work in Ireland.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">
                Reduced Employer Dependency
              </h3>
              <p className="text-gray-600">
                Greater flexibility compared to other permit types.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WHO IS THIS PERMIT FOR? */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Who Is This Permit For?
          </h2>

          <p className="text-gray-600 mb-8">
            This permit targets professionals in shortage occupations such as:
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Engineers",
              "IT Specialists",
              "Healthcare Professionals",
              "Financial Experts",
              "Architects",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 bg-white rounded-full shadow-sm text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* READY TO START? */}
      <section className="py-20 bg-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Application?
          </h2>
          <p className="mb-8">
            Our specialists will guide you through every step of the process.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Speak to an Advisor
          </Link>
        </div>
      </section>

    </>
  );
}
