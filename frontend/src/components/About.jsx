import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3'),
    t('about.feature4'),
    t('about.feature5'),
    t('about.feature6')
  ];

  return (
    <section id="about" className="py-12 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-[#22C55E] rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{t('about.badge')}</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('about.title')}{' '}
              <span className="text-[#22C55E]">{t('about.titleGreen')}</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Founder Image with Signature */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                src="https://customer-assets.emergentagent.com/job_design-75/artifacts/wc0xevb7_IMG_8323.png"
                alt="Harry - Founder of Superfly Commerce"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '600px' }}
              />
              {/* Signature - Top Right */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <img
                  src="https://customer-assets.emergentagent.com/job_design-75/artifacts/azwqe0t2_getsitecontrol__generate-calligraphy-text__free.png"
                  alt="Harry's Signature"
                  className="h-12 w-auto"
                  style={{ filter: 'brightness(0.3)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
  </svg>
);

export default About;