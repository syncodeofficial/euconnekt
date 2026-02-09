import Hero from "@/components/Hero";

export default function GeneralEmploymentPage() {
  return (
    <>
      <Hero
          title="Free Eligibility Assessment"
          subtitle="Understand your options to live and work legally in Ireland"
          variant="image"
          image="/images/work-permits/general.webp"
          overlay
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-6 text-gray-700">
          <p>
            The General Employment Permit is designed for non-EU nationals who
            wish to work in Ireland in occupations where there is a demand for
            skilled labour.
          </p>

          <p>
            Typical roles include electricians, chefs, carers, construction
            workers, and other essential professions across multiple sectors.
          </p>

          <p>
            This permit requires employer sponsorship and is suitable for
            candidates who meet the necessary qualifications and experience
            requirements.
          </p>
        </div>
      </section>
    </>
  );
}
