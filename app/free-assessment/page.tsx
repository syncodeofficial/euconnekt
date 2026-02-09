import Hero from "@/components/Hero";

export default function FreeAssessmentPage() {
  return (
    <main>
      {/* HERO COM IMAGEM */}
      <Hero
            title="Free Eligibility Assessment"
            subtitle="Understand your options to live and work legally in Ireland"
            variant="image"
            image="/images/free-assessment.webp"
            overlay
        />

    {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-12 text-2xl font-bold">How It Works</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">
                1
              </div>
              <h3 className="mb-2 font-semibold">Submit Your Details</h3>
              <p className="text-gray-600">
                Complete the assessment form with your professional information.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">
                2
              </div>
              <h3 className="mb-2 font-semibold">Expert Review</h3>
              <p className="text-gray-600">
                Our specialists analyse your profile and eligibility.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">
                3
              </div>
              <h3 className="mb-2 font-semibold">Personalised Guidance</h3>
              <p className="text-gray-600">
                We contact you with clear next steps and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="assessment-form"
        className="mx-auto max-w-3xl px-6 py-20"
      >
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Current Occupation */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Current Occupation
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Years of Experience
              </label>
              <select className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select...</option>
                <option>0–2 years</option>
                <option>2–5 years</option>
                <option>5–10 years</option>
                <option>10+ years</option>
              </select>
            </div>

            {/* QUALIFICATIONS / TEXTAREA */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Qualifications & Professional Background
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your qualifications, certifications, and professional experience"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full rounded-md bg-brand py-3 font-semibold text-white hover:bg-blue-900"
            >
              Submit Assessment
            </button>

            <p className="text-center text-sm text-gray-500">
              This assessment is free and does not represent a legal commitment.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
