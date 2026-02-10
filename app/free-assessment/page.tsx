"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

export default function FreeAssessmentPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");
  const [qualifications, setQualifications] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "free-assessment",
        payload: {
          name,
          email,
          phone,
          occupation,
          experience,
          qualifications,
        },
      }),
    });

    if (res.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setOccupation("");
      setExperience("");
      setQualifications("");
    } else {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

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
            {[
              {
                step: "1",
                title: "Submit Your Details",
                text: "Complete the assessment form with your professional information.",
              },
              {
                step: "2",
                title: "Expert Review",
                text: "Our specialists analyse your profile and eligibility.",
              },
              {
                step: "3",
                title: "Personalised Guidance",
                text: "We contact you with clear next steps and recommendations.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="assessment-form"
        className="mx-auto max-w-3xl px-6 py-20"
      >
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Current Occupation
              </label>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Years of Experience
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select...</option>
                <option>0–2 years</option>
                <option>2–5 years</option>
                <option>5–10 years</option>
                <option>10+ years</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Qualifications & Professional Background
              </label>
              <textarea
                rows={4}
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                placeholder="Briefly describe your qualifications, certifications, and professional experience"
                className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {success && (
              <p className="text-sm text-green-600">
                ✅ Assessment submitted successfully. Our team will contact you soon.
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600">
                ❌ {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-brand py-3 font-semibold text-white hover:bg-blue-900 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Assessment"}
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
