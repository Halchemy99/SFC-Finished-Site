import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#22C55E] font-bold text-lg">SUPERFLY</span>
              <span className="text-white font-semibold text-sm">COMMERCE</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/superflycollective" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@superflycollective" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/superflycollective" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-[#22C55E] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">{t('services.service1Title')}</a></li>
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">{t('services.service2Title')}</a></li>
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">{t('services.service3Title')}</a></li>
              <li><a href="#services" className="hover:text-[#22C55E] transition-colors">{t('services.service4Title')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.companyTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/team" className="hover:text-[#22C55E] transition-colors">Team</a></li>
              <li><a href="/case-studies" className="hover:text-[#22C55E] transition-colors">{t('footer.caseStudies')}</a></li>
              <li><a href="/blog" className="hover:text-[#22C55E] transition-colors">Blog</a></li>
              <li><a href="/pricing" className="hover:text-[#22C55E] transition-colors">{t('footer.pricing')}</a></li>
              <li><a href="/#contact" className="hover:text-[#22C55E] transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span>harry@superflycommerce.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span>+44 7969 614703</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <span>{t('contact.card4Desc')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} {t('footer.copyright')}</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-[#22C55E] transition-colors">{t('footer.privacy')}</a>
              <a href="/terms" className="hover:text-[#22C55E] transition-colors">{t('footer.terms')}</a>
              <a href="/cookies" className="hover:text-[#22C55E] transition-colors">{t('footer.cookies')}</a>
              <a href="/faq" className="hover:text-[#22C55E] transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;