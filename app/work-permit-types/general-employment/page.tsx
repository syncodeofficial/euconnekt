import Hero from "@/components/Hero";
import Link from "next/link";

export default function GeneralEmploymentPage() {
  return (
    <>
      <Hero
          title="General Employment Permit"
          subtitle="For non-EU nationals eligible to work in Ireland with employer sponsorship across many sectors."
          variant="image"
          image="/images/work-permits/general.webp"
          overlay
      />

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Work Opportunities Across Key Sectors
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The General Employment Permit is designed for non-EU nationals
            seeking employment in Ireland in occupations where skills are
            needed but may not fall under the Critical Skills list.
          </p>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary">
              Key Features
            </h2>
            <p className="text-gray-600 mt-4">
              A structured route for skilled professionals and employers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">
                Employer Sponsorship
              </h3>
              <p className="text-gray-600">
                Requires a valid job offer from an Irish employer approved
                to sponsor non-EU workers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">
                Wide Range of Occupations
              </h3>
              <p className="text-gray-600">
                Covers many sectors including hospitality, construction,
                healthcare, manufacturing, and services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">
                Renewable Permit
              </h3>
              <p className="text-gray-600">
                Typically granted for up to 2 years and renewable,
                offering a long-term pathway in Ireland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ELIGIBILITY ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Who Is Eligible?
          </h2>

          <p className="text-gray-600 mb-10">
            Suitable for professionals with a valid job offer
            in eligible occupations across multiple industries.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Electricians",
              "Chefs",
              "Carers",
              "Construction Workers",
              "Technicians",
              "Manufacturing Operatives",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 bg-gray-50 rounded-full shadow-sm text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Choose EuConnekt?
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Full application management and document review</li>
              <li>✔ Employer compliance guidance</li>
              <li>✔ Transparent timelines and clear communication</li>
              <li>✔ Ongoing support after approval</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 leading-relaxed">
              Our team ensures your application meets all Irish immigration
              requirements, minimizing delays and increasing approval
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Application?
          </h2>

          <p className="mb-8">
            Speak to our advisors today and receive tailored guidance for your situation.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

    </>
  );
}
