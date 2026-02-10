"use client";

import { useState } from "react";
import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
        type: "contact",
        payload: {
          name,
          email,
          phone,
          message,
        },
      }),
    });

    if (res.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* TITLE */}
        <h1 className="mb-16 text-center text-3xl font-bold text-primary">
          Get In Touch
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT – MAP + CONTACT INFO */}
          <div className="space-y-10">
            {/* MAP */}
            <div className="h-64 w-full overflow-hidden rounded-xl border">
              <iframe
                title="EuConnekt Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924.117989845797!2d-8.474403222993868!3d51.89638748221195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844901aa2b491ed%3A0x70dd3b2b65f6e44f!2s28%20S%20Mall%2C%20Centre%2C%20Cork%2C%20T12%20X6CP!5e0!3m2!1spt-BR!2sie!4v1770722175577!5m2!1spt-BR!2sie"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CONTACT INFO */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-primary">
                Contact Information
              </h2>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-brand" />
                  <a
                    href="mailto:contact@euconnekt.com"
                    className="text-brand hover:underline"
                  >
                    contact@EuConnekt.com
                  </a>
                </li>

                <li className="flex items-start gap-4">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <a
                    href="https://wa.me/353899589985"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    +353 89 958 9985
                  </a>
                </li>

                <li className="flex items-start gap-4">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>

                <li className="flex items-start gap-4">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none"
                />
              </div>

              {success && (
                <p className="text-sm text-green-600">
                  ✅ Message sent successfully. We’ll be in touch soon.
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
                className="w-full rounded-md bg-brand py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
