import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources - English as base
const resources = {
  en: {
    translation: {
      nav: {
        services: 'Services',
        about: 'About',
        caseStudies: 'Case Studies',
        pricing: 'Pricing',
        login: 'Login',
        bookCall: 'Book Discovery Call'
      },
      hero: {
        badge: 'Sustainable Amazon Collective',
        title: 'Amazon Growth Without The Agency Tax',
        subtitle: "Performance-based partnerships. Transparent pricing. Real specialists who actually know Amazon—not account managers reading from playbooks.",
        feature1: 'Pay for results, not retainers',
        feature2: 'Direct access to Amazon specialists',
        feature3: 'Built for sustainable, long-term growth',
        cta1: 'Start Growing Today',
        cta2: 'See Transparent Pricing',
        stat1: 'Brands Supported',
        stat2: 'Revenue in 6 Years',
        stat3: 'Satisfaction',
        stat4: 'Fought for Clients',
        badge2: 'AMAZON GROWTH',
        badge3: 'Sustainable & Fair'
      },
      services: {
        title: 'Four Ways to Grow',
        titleGreen: 'Your Amazon Business',
        popular: 'MOST POPULAR',
        service1Title: 'Quick Win Packages',
        service1Subtitle: 'Fixed-Price Amazon Sprints',
        service1Feature1: 'Listing Optimization Sprint',
        service1Feature2: 'A+ Content Package',
        service1Button: 'View Quick Wins',
        service2Title: 'Expert Matching',
        service2Subtitle: 'Hand-Picked Specialists',
        service2Feature1: 'Vetted specialist network',
        service2Feature2: 'Project scoping included',
        service2Button: 'Meet Specialists',
        service3Title: 'Growth Share Partnership',
        service3Subtitle: 'Performance-Based Model',
        service3Feature1: 'Revenue-share retainers',
        service3Feature2: 'Aligned incentives',
        service3Button: 'Explore Partnership',
        service4Title: 'Amazon Mastery Academy',
        service4Subtitle: 'Training & Advisory',
        service4Feature1: 'Expert-led workshops',
        service4Feature2: 'Ongoing support',
        service4Button: 'Start Learning'
      },
      about: {
        badge: 'Sustainable Amazon Collective',
        title: "We're Not an Agency.",
        titleGreen: "We're a Collective.",
        description: "We're Amazon specialists who cut through heavy agency fees with transparent, performance-based partnerships.",
        feature1: 'Global collective of Amazon specialists',
        feature2: 'Performance-based retainers',
        feature3: 'Transparent pricing with no hidden fees',
        feature4: 'Sustainability discounts',
        feature5: 'Low-cost, Low-Friction, Fractional Management'
      },
      contact: {
        badge: 'Partner With Us',
        title: 'Ready to Grow Sustainably?',
        description: 'Book a discovery call to explore performance-based retainers and sustainability discounts. No sales pitch—just honest advice about sustainable Amazon growth.',
        card1Title: 'Book Discovery Call',
        card1Desc: 'Schedule via Calendly',
        card2Title: 'WhatsApp Us',
        card3Title: 'Email Us',
        card4Title: 'Location',
        card4Desc: 'Global Amazon Specialists',
        formTitle: 'Book Your Discovery Call',
        formDesc: "Tell us about your Amazon business and we'll design a performance-based partnership for sustainable growth.",
        benefitsTitle: "What You'll Get on Our Call",
        benefit1: 'Free Amazon account assessment',
        benefit2: 'Performance-based retainer options',
        benefit3: 'Sustainability discount assessment',
        benefit4: 'Growth strategy roadmap',
        nameLabel: 'Name',
        emailLabel: 'Email',
        companyLabel: 'Company Name',
        specialistLabel: 'Interested in Working With',
        serviceLabel: 'Service Interest',
        messageLabel: 'Tell Us About Your Amazon Goals',
        submitButton: 'Book Discovery Call',
        formFooter: 'Free consultation • Performance-based options • Sustainability discounts available',
        specialists: {
          any: "Any specialist (we'll match you)",
          sarah: 'Sarah (PPC & Campaign Expert)',
          marcus: 'Marcus (Listing & SEO Expert)',
          elena: 'Elena (Global Expansion Expert)',
          james: 'James (Photography & Video Expert)',
          priya: 'Priya (Analytics & Data Expert)',
          alex: 'Alex (Launch & Strategy Expert)'
        },
        services: {
          sprints: 'Amazon Sprint Packages (Fixed-Price)',
          team: 'Amazon Dream Team (Curated Specialists)',
          partnership: 'Growth Share Partnership (Performance-Based)',
          academy: 'Amazon Mastery Academy (Training & Advisory)',
          guidance: 'Not sure - need guidance'
        },
        placeholders: {
          name: 'Your name',
          email: 'your@email.com',
          company: 'Your company',
          message: 'Share your goals and challenges...'
        }
      },
      newsletter: {
        title: 'Stay in the Loop!',
        description: 'Get exclusive Amazon growth tips, sustainability insights, and industry updates delivered to your inbox.',
        feature1: 'Sustainable growth tips',
        feature2: 'Amazon insights',
        feature3: 'No spam, just value',
        emailTitle: 'Enter your email for growth tips',
        joinButton: 'Join Now',
        placeholder: 'your@email.com'
      },
      footer: {
        description: 'Sustainable Amazon Collective cutting through heavy fees with transparent, performance-based partnerships.',
        servicesTitle: 'Services',
        companyTitle: 'Company',
        contactTitle: 'Get in Touch',
        aboutUs: 'About Us',
        caseStudies: 'Case Studies',
        pricing: 'Pricing',
        contact: 'Contact',
        copyright: 'Superfly Commerce. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
      },
      toast: {
        formSubmitted: 'Form Submitted!',
        formSuccess: "We'll get back to you soon.",
        subscribed: 'Subscribed!',
        subscribeSuccess: "You'll receive our growth tips soon."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;