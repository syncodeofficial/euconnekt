import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-semibold">EuConnekt</h3>
            <p className="text-sm text-gray-300">
              Expert guidance for your EuConnekt journey.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/how-we-work">How We Work</Link></li>
              <li><Link href="/work-permit-types">Permit Types</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/employers">For Employers</Link></li>
              <li><Link href="/services/individuals">For Individuals</Link></li>
              <li><Link href="/free-assessment">Free Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>contact@euconnekt.com</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2026 EuConnekt Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
