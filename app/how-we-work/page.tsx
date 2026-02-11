"use client";

import Hero from "@/components/Hero";
import { use } from "react";

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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-bold">
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
      <section className="bg-[#F3F7FF] py-20">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="mb-10 text-3xl font-bold text-[#101828]">
      About Us
    </h2>

    <div className="grid gap-10 lg:grid-cols-2">
      {/* TEXTO */}
      <div className="space-y-6 text-[#101828]">
        <p>
          At EuConnekt, we understand the challenges faced by those seeking
          new opportunities in another country.
        </p>

        <p>
          That’s why we offer tailored solutions to ensure you have all the
          necessary support for obtaining your Stamp 4, work visa,
          citizenship, or for securing your rights as a European citizen.
        </p>

        <p>
          With our experienced and dedicated team, your transition will be
          smooth and efficient. We connect you to your new beginning! We
          specialise in facilitating your immigration journey to Europe,
          focusing on Ireland and Portugal.
        </p>

        <p>
          We provide comprehensive support for visas, citizenship,
          professional development for the Irish market, benefits, and
          much more.
        </p>
      </div>

      {/* CARD DIREITA */}
      <div className="flex items-start lg:justify-end">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-blue-600">💡</span>
              <div>
                <h4 className="font-semibold text-[#101828]">
                  Expert Knowledge
                </h4>
                <p className="text-sm text-gray-600">
                  Deep expertise in Irish immigration law
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 text-blue-600">💬</span>
              <div>
                <h4 className="font-semibold text-[#101828]">
                  Client Support
                </h4>
                <p className="text-sm text-gray-600">
                  24/7 support throughout your journey
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 text-blue-600">⭐</span>
              <div>
                <h4 className="font-semibold text-[#101828]">
                  Success Focused
                </h4>
                <p className="text-sm text-gray-600">
                  95% approval rate for our clients
                </p>
              </div>
            </li>
          </ul>
        </div>
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
              src="/images/founders.webp"
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
                className="rounded-xl bg-white p-8 shadow-sm"
              >
                {/* STARS */}
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.539 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.095 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.287-3.97z" />
                    </svg>
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-sm text-gray-600">
                  “{item.text}”
                </p>

                {/* AUTHOR */}
                <p className="mt-6 font-semibold text-primary">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
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
              {
                question: "How long does the permit application process take?",
                answer:
                  "The processing time typically ranges from 4 to 8 weeks, depending on the type of permit and the completeness of your application. Our team works to expedite the process wherever possible.",
              },
              {
                question: "What documents do I need to prepare?",
                answer:
                  "Required documents vary by permit type, but typically include a valid passport, employment contract, proof of qualifications, and financial documentation. We provide a detailed checklist for your specific situation.",
              },
              {
                question: "Can I apply for a work permit without an employer?",
                answer:
                  "Most work permits require employer sponsorship. However, certain categories like the Critical Skills Employment Permit may have different requirements. We can advise you on your specific situation.",
              },
              {
                question: "What is your success rate?",
                answer:
                  "We maintain a 95% approval rate for applications we process, thanks to our thorough preparation and deep knowledge of Irish immigration requirements.",
              },
              {
                question: "How much does your service cost?",
                answer:
                  "Our fees vary depending on the type of permit and the complexity of your case. We offer transparent pricing and provide a detailed quote after the initial consultation.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group rounded-xl bg-gray-50 px-6 py-4"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-primary">
                  {item.question}
                  <span className="transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>

                <p className="mt-4 text-sm text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
