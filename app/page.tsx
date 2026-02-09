import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Your Path to Euconnekt"
        subtitle="Expert guidance for employment permits in Ireland. We help employers and individuals navigate the EuConnekt process with confidence."
        variant="video"
        video="/videos/hero.webm"
        overlay
      />


      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Our Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "For Employers",
                text: "Streamline your recruitment process with our comprehensive employer services.",
                link: "/services/employers",
              },
              {
                title: "For Individuals",
                text: "Get expert guidance for your EuConnekt application journey.",
                link: "/services/individuals",
              },
              {
                title: "Free Assessment",
                text: "Find out your eligibility for EuConnekt with our free assessment tool.",
                link: "/free-assessment",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{item.text}</p>
                <Link
                  href={item.link}
                  className="mt-4 inline-block text-sm font-medium text-accent"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permit Types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Work Permit Types
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Critical Skills Employment Permit",
                text: "For highly skilled workers in areas where there is a shortage of Irish workers.",
                link: "/work-permit-types/critical-skills",
              },
              {
                title: "General Employment Permit",
                text: "For non-EU workers seeking employment in Ireland with employer sponsorship.",
                link: "/work-permit-types/general-employment",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-4 border-accent bg-white p-8"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                <Link
                  href={item.link}
                  className="mt-3 inline-block text-sm font-medium text-accent"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/work-permit-types"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              View All Permit Types
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4">
          Take our free assessment to find out your eligibility for an
          EuConnekt.
        </p>
        <Link
          href="/free-assessment"
          className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent"
        >
          Start Your Free Assessment
        </Link>
      </section>
    </>
  );
}
