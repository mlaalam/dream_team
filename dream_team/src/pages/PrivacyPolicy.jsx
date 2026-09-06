import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#0A0C10] text-gray-300 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-gray-800 pb-8 mb-10">
          <p className="text-[#D5EF69] font-bold text-xs uppercase tracking-widest mb-2">
            Legal Information
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-gray-300">Last Updated:</span> September 6, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed">
          
          {/* Introduction */}
          <p>
            <strong className="text-white">Maarrach LLC</strong> (“Maarrach LLC,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you provide when visiting our website, contacting us, or purchasing our services.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#D5EF69]">•</span> Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Name and contact information, including email address and phone number.</li>
              <li>Business or company information.</li>
              <li>Billing and transaction-related information.</li>
              <li>Project requirements, files, content, credentials, and communications you voluntarily provide.</li>
              <li>Technical information such as IP address, browser type, device information, and website usage data where collected.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#D5EF69]">•</span> How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide, manage, and deliver our services.</li>
              <li>Communicate with you about your project, order, or support request.</li>
              <li>Process transactions and maintain business records.</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Prevent fraud, abuse, and unauthorized transactions.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Payment Information
            </h2>
            <p className="text-gray-400">
              Payments may be processed by third-party payment service providers. Maarrach LLC does not directly store complete payment card information when a transaction is processed by a third-party payment processor. Payment information is handled according to the payment provider’s own security and privacy practices.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Cookies and Analytics
            </h2>
            <p className="text-gray-400">
              Our website may use cookies or similar technologies to support website functionality, understand visitor activity, and improve our services. You may control cookies through your browser settings, although some website features may not function correctly if cookies are disabled.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Sharing of Information
            </h2>
            <p className="text-gray-400">
              We do not sell or rent your personal information. We may share information with trusted service providers when reasonably necessary to operate our business, process payments, deliver services, maintain our website, or comply with legal requirements.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Data Security and Retention
            </h2>
            <p className="text-gray-400">
              We use reasonable administrative and technical measures designed to protect personal information. No internet-based system can guarantee absolute security. We retain information only for as long as reasonably necessary to provide services, maintain records, resolve disputes, enforce agreements, and meet applicable legal obligations.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Your Choices
            </h2>
            <p className="text-gray-400">
              You may contact us to request access to, correction of, or deletion of personal information we maintain about you, subject to applicable legal and recordkeeping requirements.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Third-Party Services
            </h2>
            <p className="text-gray-400">
              Our website or services may use or link to third-party platforms. Maarrach LLC is not responsible for the independent privacy practices of third parties.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-400">
              We may update this Privacy Policy periodically. Updates will be posted with a revised Last Updated date.
            </p>
          </div>

          {/* Section 10: Contact Box */}
          <div className="bg-[#131C22] p-6 sm:p-8 rounded-2xl border border-gray-800/60 mt-10">
            <h2 className="text-xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 font-semibold mb-2">Maarrach LLC</p>
            <address className="not-italic text-gray-400 space-y-1 text-sm">
              <p>30 N Gould St Ste R</p>
              <p>Sheridan, WY 82801</p>
              <p>United States</p>
              <p className="pt-2">
                <span className="text-gray-300 font-medium">Email: </span>
                <a href="mailto:support@maarrach.com" className="text-[#D5EF69] hover:underline">
                  support@maarrach.com
                </a>
              </p>
            </address>
          </div>

        </div>

      </div>
    </section>
  );
}