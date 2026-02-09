import Link from "next/link";

export default function WorkPermitOptions() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Work Permit Options in Ireland
        </h2>

        {/* Opções */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* GENERAL */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <img
              src="/images/work-permits/general.webp"
              alt="General Employment Permit"
              className="mb-6 h-56 w-full rounded-lg object-cover"
            />

            <h3 className="text-xl font-semibold text-primary">
              General Employment Permit
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Designed for non-EU workers filling essential roles where local
              labour demand exists. Typical roles include electricians, chefs,
              carers, and other skilled professionals.
            </p>

            <Link
              href="/work-permit-types/general-employment"
              className="mt-4 inline-block text-sm font-semibold text-accent"
            >
              View details →
            </Link>
          </div>

          {/* CRITICAL */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <img
              src="/images/work-permits/critical.webp"
              alt="Critical Skills Employment Permit"
              className="mb-6 h-56 w-full rounded-lg object-cover"
            />

            <h3 className="text-xl font-semibold text-primary">
              Critical Skills Employment Permit
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Targeted at highly qualified professionals such as engineers,
              architects, HR managers, and IT specialists, offering fast-track
              residency benefits.
            </p>

            <Link
              href="/work-permit-types/critical-skills"
              className="mt-4 inline-block text-sm font-semibold text-accent"
            >
              View details →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
