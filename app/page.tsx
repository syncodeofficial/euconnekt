import Hero from "@/components/Hero";
import Link from "next/link";
import { Briefcase, Home, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* HERO – MANTIDO COM VÍDEO */}
      <Hero
        title="Your Path to Euconnekt"
        subtitle="Expert guidance for employment permits in Ireland. We help employers and individuals navigate the EuConnekt process with confidence."
        variant="video"
        video="/videos/hero.webm"
        overlay
        ctaPrimary={{
          label: "Free Assessment",
          href: "/free-assessment",
        }}
        ctaSecondary={{
          label: "Learn More",
          href: "/how-we-work",
        }}
        features={[
          {
            title: "Expert Guidance",
            description: "Professional advice for all permit types",
          },
          {
            title: "Fast Processing",
            description: "Streamlined application procedures",
          },
          {
            title: "Success Rate",
            description: "High approval rates for our clients",
          },
        ]}
      />

      {/* OUR SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-primary">
            Our Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Work Visas */}
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Briefcase className="mb-4 h-9 w-9 text-brand" />

              <h3 className="mb-3 text-lg font-semibold text-primary">
                Work Visas
              </h3>

              <p className="mb-6 text-sm text-gray-600">
                Comprehensive support for work permits in Ireland, including
                Critical Skills and General Employment Permits.
              </p>

              <Link
                href="/work-permit-types"
                className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Citizenship */}
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Globe className="mb-4 h-9 w-9 text-brand" />

              <h3 className="mb-3 text-lg font-semibold text-primary">
                Citizenship
              </h3>

              <p className="mb-6 text-sm text-gray-600">
                Guidance and legal support for citizenship applications through
                residency, descent, or naturalisation.
              </p>

              <Link
                href="/services/citizenship"
                className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Residence Visas */}
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Home className="mb-4 h-9 w-9 text-brand" />

              <h3 className="mb-3 text-lg font-semibold text-primary">
                Residence Visas
              </h3>

              <p className="mb-6 text-sm text-gray-600">
                Assistance with residence permissions, Stamp 4 applications,
                family reunification, and long-term residency.
              </p>

              <Link
                href="/services/residency-visa"
                className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WORK PERMIT TYPES */}
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
                className="rounded-xl border-l-4 border-brand bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                <Link
                  href={item.link}
                  className="mt-3 inline-block text-sm font-medium text-brand"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/work-permit-types"
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
            >
              View All Permit Types
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="mt-4">
          Take our free assessment to find out your eligibility for EuConnekt.
        </p>
        <Link
          href="/free-assessment"
          className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-gray-100"
        >
          Start Your Free Assessment
        </Link>
      </section>
    </>
  );
}
