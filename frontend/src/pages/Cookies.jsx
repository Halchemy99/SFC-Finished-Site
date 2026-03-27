import React from 'react';
import { Badge } from '../components/ui/badge';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge className="bg-blue-100 text-blue-600 mb-4">Legal</Badge>
        <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: March 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience, remember your preferences, and understand how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Essential Cookies (Required)</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Session management</li>
                  <li>Security and authentication</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  We use Google Analytics to understand how visitors interact with our website. These cookies collect anonymous information about:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Pages visited and time spent</li>
                  <li>Traffic sources</li>
                  <li>Device and browser information</li>
                  <li>Geographic location (country/city level)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Functional Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  These enhance your experience by remembering your preferences:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Language selection</li>
                  <li>Form inputs you've entered</li>
                  <li>Newsletter subscription preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Marketing Cookies (With Consent)</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  With your permission, we may use marketing cookies for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Facebook Pixel - retargeting campaigns</li>
                  <li>LinkedIn Insight Tag - B2B targeting</li>
                  <li>TikTok Pixel - social media advertising</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the following third-party services that set their own cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Google Analytics:</strong> Web analytics</li>
              <li><strong>Calendly:</strong> Appointment booking</li>
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>Mailchimp/Beehiiv:</strong> Email marketing (if subscribed)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. How Long Do Cookies Last?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Session Cookies:</strong> Deleted when you close your browser
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Persistent Cookies:</strong> Remain on your device for a set period:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
              <li>Analytics cookies: Up to 2 years</li>
              <li>Functional cookies: Up to 1 year</li>
              <li>Marketing cookies: Up to 90 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can control and delete cookies through your browser settings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Note: Blocking essential cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookie Consent</h2>
            <p className="text-gray-600 leading-relaxed">
              When you first visit our website, we'll ask for your consent to use non-essential cookies. You can change your preferences at any time through our cookie banner or browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Do Not Track</h2>
            <p className="text-gray-600 leading-relaxed">
              Some browsers have "Do Not Track" features. When enabled, we will respect this signal and not track your activity for analytics or marketing purposes (essential cookies will still function).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy to reflect changes in technology or regulations. Check this page periodically for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about our cookie use? Contact us at harry@superflycommerce.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;