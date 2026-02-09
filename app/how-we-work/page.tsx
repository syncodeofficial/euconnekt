import Hero from "@/components/Hero";

export default function HowWeWorkPage() {
  return (
    <>
      {/* HERO COM VÍDEO */}
      <Hero
        title="How We Work"
        subtitle="Our proven process to help you navigate the EuConnekt system."
        variant="video"
        video="/videos/hero.webm"
        overlay
      />

      {/* OUR PROCESS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-primary">
            Our Process
          </h2>

          <div className="grid gap-10 md:grid-cols-4 text-center">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                text: "We assess your eligibility and understand your specific needs.",
              },
              {
                step: "2",
                title: "Documentation",
                text: "We guide you through preparing all required documents.",
              },
              {
                step: "3",
                title: "Application",
                text: "We submit your application and track its progress.",
              },
              {
                step: "4",
                title: "Approval",
                text: "Receive your permit and begin your Irish career journey.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-primary">About Us</h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6 text-gray-700">
              <p>
                At EuConnekt, we understand the challenges faced by those seeking
                new opportunities in another country.
              </p>

              <p>
                That’s why we offer tailored solutions to ensure you have all
                the necessary support for obtaining your Stamp 4, work visa,
                citizenship, or for securing your rights as a European citizen.
              </p>

              <p>
                With our experienced and dedicated team, your transition will
                be smooth and efficient. We connect you to your new beginning!
                We specialise in facilitating your immigration journey to
                Europe, focusing on Ireland and Portugal.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <ul className="space-y-6">
                <li>
                  <strong className="block text-primary">
                    Expert Knowledge
                  </strong>
                  <span className="text-sm text-gray-600">
                    Deep expertise in Irish immigration law
                  </span>
                </li>
                <li>
                  <strong className="block text-primary">
                    Client Support
                  </strong>
                  <span className="text-sm text-gray-600">
                    24/7 support throughout your journey
                  </span>
                </li>
                <li>
                  <strong className="block text-primary">
                    Success Focused
                  </strong>
                  <span className="text-sm text-gray-600">
                    95% approval rate for our clients
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR FOUNDER */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-primary">
            Our Founder
          </h2>

          <div className="grid gap-10 md:grid-cols-2 items-center">
            <img
              src="/images/founders.png"
              alt="Founders of EuConnekt"
              className="rounded-xl object-cover"
            />

            <div className="space-y-4 text-gray-700">
              <p>
                Héber and Alexandra founded EuConnekt with a mission to simplify
                the immigration process for talented individuals and
                forward-thinking employers across the globe.
              </p>

              <p>
                With a background in immigration law and over 15 years of
                experience in the field, they have personally guided over 5,000
                successful permit applications.
              </p>

              <p>
                Their dedication to excellence and client satisfaction has made
                EuConnekt the trusted choice for immigration consulting in
                Ireland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-primary">
            What Our Customers Say
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Mitchell",
                role: "Software Engineer, Dublin",
                text:
                  "The team at EuConnekt made the entire process so smooth. My application was approved in record time!",
              },
              {
                name: "Michael Chen",
                role: "HR Director, Cork",
                text:
                  "As an employer, I was impressed with their professionalism and knowledge. They handled everything perfectly.",
              },
              {
                name: "Emma Rodriguez",
                role: "Marketing Manager, Galway",
                text:
                  "Highly recommended! Their team answered all my questions and guided me through every step.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-gray-600">“{item.text}”</p>
                <p className="mt-4 font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              "How long does the permit application process take?",
              "What documents do I need to prepare?",
              "Can I apply for a work permit without an employer?",
              "What is your success rate?",
              "How much does your service cost?",
            ].map((q) => (
              <div
                key={q}
                className="rounded-lg bg-gray-50 px-6 py-4 text-sm font-medium text-primary"
              >
                ▶ {q}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
