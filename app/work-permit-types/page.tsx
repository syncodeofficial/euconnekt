import Hero from "@/components/Hero";
import WorkPermitOptions from "@/components/WorkPermitOptions";

export default function WorkPermitTypesPage() {
  return (
    <>
      <Hero
          title="All Work Permit"
          subtitle="Understand your options to live and work legally in Ireland"
          variant="image"
          image="/images/work-permits/overview.webp"
          overlay
      />

      <WorkPermitOptions />
    </>
  );
}
