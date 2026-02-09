import Hero from "@/components/Hero";

export default function CriticalSkillsPage() {
  return (
    <>
      <Hero
          title="Free Eligibility Assessment"
          subtitle="Understand your options to live and work legally in Ireland"
          variant="image"
          image="/images/work-permits/critical.webp"
          overlay
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-6 text-gray-700">
          <p>
            The Critical Skills Employment Permit is aimed at highly qualified
            professionals whose skills are considered essential to Ireland’s
            economy.
          </p>

          <p>
            Common professions include engineers, IT specialists, architects,
            financial professionals, and HR managers.
          </p>

          <p>
            This permit offers significant benefits, including a fast-track
            pathway to long-term residency and reduced dependency on employer
            sponsorship.
          </p>
        </div>
      </section>
    </>
  );
}
