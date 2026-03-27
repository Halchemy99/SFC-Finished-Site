import React from 'react';
import { Badge } from '../components/ui/badge';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="bg-blue-100 text-blue-600 mb-4">Legal</Badge>
        <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: March 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Superfly Commerce's services, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Superfly Commerce provides Amazon marketplace optimization, management, and training services including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Fixed-price service packages (listing optimization, A+ content, etc.)</li>
              <li>Performance-based retainer agreements</li>
              <li>Expert specialist matching</li>
              <li>Amazon Mastery Academy training</li>
              <li>TikTok marketing management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Service Scope & Deliverables</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Each service has a defined scope outlined on our website and in service agreements. Key terms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Services are delivered as described; scope changes require new agreement</li>
              <li>Standard revision rounds are included as specified per service</li>
              <li>Additional work beyond scope is charged separately</li>
              <li>Timelines are estimates; delays due to client provide feedback extend delivery</li>
              <li>We reserve the right to refuse service if requirements are unclear</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fixed-Price Services:</strong> 50% deposit required to begin work, 50% due upon completion.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Performance Retainers:</strong> Base fee due monthly in advance. Revenue share percentage calculated and invoiced monthly based on incremental growth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Late Payments:</strong> Interest of 1.5% per month applied to overdue invoices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Currency:</strong> All prices in GBP unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Refund & Cancellation Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fixed-Price Services:</strong> 100% satisfaction guarantee. If you're not happy with deliverables (within scope), we'll revise or issue a full refund within 14 days of completion.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Performance Retainers:</strong> Cancel anytime after initial 90-day commitment period with 30 days written notice. Base fee non-refundable once month begins.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>No Refunds For:</strong> Client-caused delays, scope creep, or services already delivered and accepted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Client Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide accurate information and timely feedback</li>
              <li>Grant necessary access to Amazon Seller Central (user permissions)</li>
              <li>Comply with Amazon's Terms of Service</li>
              <li>Pay invoices on time</li>
              <li>Not hold us liable for Amazon policy changes or suspensions</li>
              <li>Maintain appropriate product inventory and fulfillment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Results & Guarantees</h2>
            <p className="text-gray-600 leading-relaxed">
              We guarantee quality work and professional effort. However, we cannot guarantee specific sales results, rankings, or conversions as these depend on many factors outside our control including Amazon's algorithm, competition, product quality, pricing, reviews, and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain ownership of your product information, images, and brand assets.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Our Work Product:</strong> Upon full payment, you receive ownership of deliverables created specifically for you (designs, copy, etc.).
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Our Methods:</strong> We retain ownership of our proprietary processes, templates, and methodologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Confidentiality</h2>
            <p className="text-gray-600 leading-relaxed">
              Both parties agree to keep confidential information private. We will not share your Amazon data, sales figures, or business strategies with third parties except as necessary to provide services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Our total liability shall not exceed the amount paid by you for the specific service in question. We are not liable for indirect, incidental, or consequential damages including lost profits, lost sales, or Amazon account suspensions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              Either party may terminate with written notice per the agreement terms. Upon termination, you pay for work completed to date. We will provide handover of materials and access within 14 days of final payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Disputes shall be resolved through arbitration in London, UK.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use of services after changes constitutes acceptance of new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about these Terms? Contact us at harry@superflycommerce.com or +44 7969 614703.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;