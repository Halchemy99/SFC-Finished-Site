import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PARTNER_EMAIL = 'harry@superflycommerce.com';
const PARTNER_NAME = 'Harry Allen';

const SELLER_CENTRAL_LINKS = {
  india: [
    { label: 'Amazon India', url: 'https://sellercentral.amazon.in/gp/account-manager/home.html', flag: '🇮🇳' },
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' }
  ],
  uae: [
    { label: 'Amazon UAE', url: 'https://sellercentral.amazon.ae/gp/account-manager/home.html', flag: '🇦🇪' },
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' }
  ],
  mexico: [
    { label: 'Amazon Mexico', url: 'https://sellercentral.amazon.com.mx/gp/account-manager/home.html', flag: '🇲🇽' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' },
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' }
  ],
  default: [
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' },
    { label: 'Amazon EU', url: 'https://sellercentral.amazon.de/gp/account-manager/home.html', flag: '🇪🇺' }
  ]
};

const PartnerAccessGuide = ({ region }) => {
  const [copied, setCopied] = useState(false);
  const [done, setDone] = useState(false);
  const links = SELLER_CENTRAL_LINKS[region?.toLowerCase()] || SELLER_CENTRAL_LINKS.default;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PARTNER_EMAIL);
    } catch {
      const el = document.createElement('textarea');
      el.value = PARTNER_EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Card data-testid="partner-access-guide" className="mt-8 border-2 border-[#22C55E] shadow-xl text-left overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white">
        <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
          <ShieldCheck className="w-6 h-6" />
          Want your audit faster? Add us now — takes 2 minutes
        </CardTitle>
        <p className="text-white/90 text-sm sm:text-base">
          Invite us as a user in Seller Central and we'll start your audit today instead of waiting for the call.
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">

        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-2">Copy our email address</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <code className="bg-gray-100 px-4 py-3 rounded-lg text-sm font-mono text-gray-800 flex-1 break-all" data-testid="partner-email-display">
                {PARTNER_EMAIL}
              </code>
              <Button
                onClick={copyEmail}
                data-testid="copy-partner-email-btn"
                className={`${copied ? 'bg-gray-900' : 'bg-[#22C55E] hover:bg-[#16A34A]'} text-white rounded-lg px-5`}
              >
                {copied ? <><Check className="w-4 h-4 mr-2" />Copied!</> : <><Copy className="w-4 h-4 mr-2" />Copy</>}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Name to enter: <strong>{PARTNER_NAME}</strong></p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-2">Open User Permissions in your Seller Central</p>
            <p className="text-sm text-gray-600 mb-3">These links take you straight to the right page:</p>
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`seller-central-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:border-[#22C55E] hover:bg-green-50 transition-colors text-sm font-semibold text-gray-800"
                >
                  <span>{link.flag}</span>
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-2">Click "Add a new user", paste our email, send the invite</p>
            <p className="text-sm text-gray-600">
              We only need <strong>View</strong> permissions to audit. You stay in full control and can revoke access anytime from the same page.
            </p>
          </div>
        </div>

        {/* Confirmation */}
        <div className="pt-2 border-t border-gray-100">
          {done ? (
            <div className="flex items-center gap-2 text-[#16A34A] font-semibold" data-testid="invite-sent-confirmation">
              <Check className="w-5 h-5" />
              Perfect — we'll accept your invite and start the audit within a few hours.
            </div>
          ) : (
            <Button
              onClick={() => setDone(true)}
              variant="outline"
              data-testid="invite-sent-btn"
              className="w-full border-2 border-[#22C55E] text-[#16A34A] hover:bg-green-50 rounded-full py-5 font-bold"
            >
              I've sent the invite ✓
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerAccessGuide;
