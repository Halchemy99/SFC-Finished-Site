import React from 'react';
import { Badge } from '../components/ui/badge';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="bg-blue-100 text-blue-600 mb-4">Legal</Badge>
        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: March 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Superfly Commerce ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.superfly-commerce.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Fill out a contact form or inquiry</li>
              <li>Subscribe to our newsletter</li>
              <li>Book a discovery call</li>
              <li>Purchase our services</li>
              <li>Create an account on our client portal</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              This information may include: name, email address, company name, phone number, Amazon seller details, and payment information.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800">Automatically Collected Information</h3>
            <p className="text-gray-600 leading-relaxed">
              When you visit our website, we automatically collect certain information about your device, including: IP address, browser type, operating system, referring URLs, page views, and time spent on pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you service updates and marketing communications (with consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Service Providers:</strong> Payment processors (Stripe), email services (for newsletters), analytics tools (Google Analytics), and calendar booking (Calendly)</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Client data is retained for 7 years for tax and accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Rights (GDPR)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you are in the European Economic Area, you have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise these rights, contact us at harry@superflycommerce.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience. See our Cookie Policy for details. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information. However, no internet transmission is 100% secure. We use SSL encryption, secure payment processing, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about this Privacy Policy or our privacy practices, contact us:
            </p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p><strong>Email:</strong> harry@superflycommerce.com</p>
              <p><strong>Phone:</strong> +44 7969 614703</p>
              <p><strong>Address:</strong> Superfly Commerce, Global Amazon Specialists</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;