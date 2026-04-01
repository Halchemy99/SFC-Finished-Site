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
        subtitle: "Performance-based partnerships. Transparent pricing. Real specialists who actually know Amazon, not account managers reading from playbooks.",
        feature1: 'Pay for high results, not high retainers',
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
        feature1: 'A global collective of Amazon specialists, part of your team',
        feature2: 'Retainers tied to results. We grow when you grow',
        feature3: 'Discounted fees for verified sustainable brands',
        feature4: '360 Amazon management at a fraction of the cost. No bloated teams, no ultra-long contracts',
        feature5: 'Fractional account operators embedded in your business',
        feature6: 'We choose who we work with. We don't work with brands that profit from genocide, exploitation, or human rights abuses'
      },
      contact: {
        badge: 'Partner With Us',
        title: 'Ready to Grow Sustainably?',
        description: 'Book a discovery call to explore performance-based retainers and sustainability discounts. No sales pitch, just honest advice about sustainable Amazon growth.',
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
        subscribeSuccess: "You will receive our growth tips soon."
      },
      caseStudies: {
        badge: 'Success Stories',
        title: 'Real Results from',
        titleGreen: 'Real Brands',
        subtitle: 'See how we have helped Amazon sellers achieve sustainable growth through our transparent, performance-based approach.',
        challenge: 'Challenge',
        solution: 'Solution',
        getResults: 'Get Similar Results',
        ctaTitle: 'Ready to Write Your Success Story?',
        ctaSubtitle: 'Let us discuss how we can help you achieve similar results for your Amazon business.',
        ctaButton: 'Book Discovery Call',
        pachakuti: {
          category: 'Amazon Launch',
          client: 'Pachakuti',
          industry: 'Ceremonial Cacao',
          challenge: 'Entering Amazon UK with no sales history, low review count, and premium pricing in a highly competitive cacao category dominated by established brands. Ceremonial cacao straight from the Ecuadorian Amazon needed to stand out.',
          solution: 'Structured UK launch via FBA, keyword-driven listing build, A+ content creation, brand store creation, and controlled PPC testing to validate conversion before scaling. Strategically focused on ranking for under-appreciated keywords.',
          testimonial: 'Superfly helped us launch our ceremonial cacao from the Ecuadorian Amazon and hit Top 4 in one of the most competitive categories on Amazon UK.',
          author: 'Pachakuti Team'
        },
        hairGuru: {
          category: 'Brand Rebrand & Recovery',
          client: 'Hair Guru',
          industry: 'Hair Fibres',
          challenge: 'EU competitors were being outspent by non-EU brands on content and advertising, leading to erosion of market share in the high-competition haircare category. Hair fibres for men and women needed a complete repositioning.',
          solution: 'Full listing rebuild, keyword strategy overhaul, A+ content creation, and aggressive PPC structure designed to reclaim category visibility and regain market share. Initiated a full brand rebrand that inspired their website and packaging.',
          testimonial: 'Superfly initiated a full brand rebrand that has even inspired our website and packaging. So much for little Amazon agencies!',
          author: 'Hair Guru Team'
        },
        leon: {
          category: 'Amazon Fresh Launch',
          client: 'LEON',
          industry: 'Restaurant Ready Meals',
          challenge: 'Launching a restaurant brand\'s ambient product range on Amazon Fresh UK, which operates with different rules, buy box dynamics, and consumer expectations compared to standard Amazon.',
          solution: 'Vendor Central onboarding, product categorization, and content optimization tailored for Amazon Fresh\'s unique search behavior. Used data to inform next steps and create new products for seller accounts.',
          testimonial: 'Fresh trial proved so successful that Superfly are now helping us create new products to launch on our seller accounts. They found a way and used data to inform our next steps.',
          author: 'LEON Team'
        },
        reborn: {
          category: 'Buy Box Recovery & Sustainability',
          client: 'ReBorn',
          industry: 'Sustainable Homeware',
          challenge: 'Resellers had hijacked key listings, eroding margin and brand perception. Lost Buy Box control (down to 65%) and lacked visibility over which SKUs were profitable under FBA versus FBM. Homeware made from recycled materials needed protection.',
          solution: 'Comprehensive FBA/FBM inventory audit, Buy Box tracking and recapture strategy, full listing rebuild (copy, images, A+ content, infographic briefs), 3-month sprint plan with phased US market setup, and Climate Pledge Friendly certification via ClimatePartner.',
          testimonial: 'Superfly recaptured our Buy Box share from a flagging 65% to 99%, optimized our FBA/FBM strategy, and helped us achieve Climate Pledge Friendly certification.',
          author: 'ReBorn Homes Team'
        }
      },
      pricing: {
        urgencyAcademy: 'Currently FULL until May 2026 - Join Waiting List',
        urgencyExpert: 'Coming Soon - Bringing Talent Closer Within Reach',
        badge: 'Transparent Pricing',
        title: 'Choose Your',
        titleGreen: 'Growth Path',
        subtitle: 'Clear pricing, no hidden fees. Pick what works for your business stage.',
        partnershipsTitle: 'Ongoing Partnerships',
        partnershipsSubtitle: 'Monthly retainer for full-service Amazon management. Cancel anytime.',
        partnershipsBadge: '💡 Best for brands committed to long-term growth',
        oneOffTitle: 'One-Off Services',
        oneOffSubtitle: 'No commitment. Pay once, get results.',
        oneOffBadge: '🎯 Perfect for specific needs or testing our work',
        slotsLeft: 'partnership slots left this quarter',
        perMonth: '/month',
        getStarted: 'Get Started',
        contactUs: 'Contact Us',
        whatsIncluded: "What's Included",
        startup: {
          name: 'Startup',
          description: 'Perfect for new Amazon sellers finding their feet',
          feature1: 'Full account management',
          feature2: 'Basic listing optimization',
          feature3: 'PPC management & setup',
          feature4: 'Monthly strategy session',
          feature5: 'Email support',
          feature6: 'Weekly reporting',
          cta: 'Start Partnership'
        },
        growing: {
          name: 'Growing',
          description: 'For brands scaling their Amazon presence',
          badge: 'Most Popular',
          feature1: 'Everything in Startup',
          feature2: 'Advanced listing optimization',
          feature3: 'A+ Content management',
          feature4: 'Competitive analysis',
          feature5: 'Bi-weekly strategy calls',
          feature6: 'Dedicated specialist',
          feature7: 'Priority support',
          cta: 'Start Growing'
        },
        scaling: {
          name: 'Scaling',
          description: '7-figure brands ready to dominate',
          feature1: 'Everything in Growing',
          feature2: 'International expansion support',
          feature3: 'Brand Store design',
          feature4: 'Video & photography coordination',
          feature5: 'Weekly strategy calls',
          feature6: 'Multi-specialist team',
          feature7: '24/7 priority support',
          cta: 'Scale Faster'
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Full-service collective for market leaders',
          feature1: 'Everything in Scaling',
          feature2: 'Custom growth strategy',
          feature3: 'Analytics & BI dashboard',
          feature4: 'Quarterly business reviews',
          feature5: 'Direct founder access',
          feature6: 'White-glove service',
          feature7: 'Guaranteed response times',
          cta: 'Contact Us'
        },
        services: {
          listingOptimization: {
            name: 'Listing Optimization Sprint',
            description: 'Listing optimization for up to 5 listings',
            detailedDescription: 'Complete listing optimization for up to 5 Amazon product listings with keyword research and SEO.',
            scope1: 'Up to 5 product listings',
            scope2: 'Keyword research & SEO',
            scope3: 'Title optimization',
            scope4: 'Bullet point optimization',
            scope5: 'Backend search terms',
            scope6: '7-10 business days delivery'
          },
          aPlusContent: {
            name: 'A+ Content Package',
            description: 'Professional A+ content for one product',
            detailedDescription: 'Complete A+ content module design for a single Amazon product listing.',
            scope1: '1 product A+ content only',
            scope2: '5 custom modules maximum',
            scope3: 'Up to 2 design revisions',
            scope4: 'Mobile-optimized layout',
            scope5: '7-10 business days delivery',
            scope6: 'Source files included'
          },
          photography: {
            name: 'Product Photography',
            description: 'Professional product shoot',
            detailedDescription: 'Studio product photography session with professional editing.',
            scope1: 'Up to 10 edited images',
            scope2: 'White background shots only',
            scope3: '1 product, multiple angles',
            scope4: 'High-resolution files (300 DPI)',
            scope5: 'Amazon-compliant formatting',
            scope6: '14 business days turnaround'
          },
          infographics: {
            name: 'Amazon Infographic Set',
            description: 'Up to 6 custom infographics',
            detailedDescription: 'Professional infographic design for Amazon listings (not photography).',
            scope1: 'Up to 6 custom infographics',
            scope2: 'Product feature highlights',
            scope3: 'Comparison charts',
            scope4: 'Amazon-ready dimensions',
            scope5: 'Source files included',
            scope6: '5-7 business days delivery'
          },
          copywriting: {
            name: 'Expert Copywriting',
            description: 'Conversion-focused copy for 1 listing',
            detailedDescription: 'Professional Amazon listing copywriting focused on conversion.',
            scope1: '1 product listing only',
            scope2: 'SEO keyword integration',
            scope3: 'Title & bullet points',
            scope4: 'Product description',
            scope5: 'Backend search terms',
            scope6: '3-5 business days delivery'
          },
          ppcAudit: {
            name: 'PPC Audit & Setup',
            description: 'Complete PPC audit with campaign setup',
            detailedDescription: 'Comprehensive PPC audit and initial campaign configuration.',
            scope1: 'Current campaign audit',
            scope2: 'Up to 3 new campaigns setup',
            scope3: 'Keyword research (50 keywords)',
            scope4: 'Bid strategy recommendations',
            scope5: 'Does NOT include ad spend',
            scope6: '5-7 business days delivery'
          },
          brandStorefront: {
            name: 'Brand Storefront',
            description: 'Custom Amazon Storefront design',
            detailedDescription: 'Complete Amazon Brand Store design with up to 5 pages.',
            scope1: 'Up to 5 storefront pages',
            scope2: 'Custom page layouts',
            scope3: 'Brand story integration',
            scope4: 'Product category sections',
            scope5: '2 rounds of revisions',
            scope6: '14-21 business days delivery'
          },
          businessAnalysis: {
            name: 'Full Business Analysis',
            description: 'Deloitte-level strategic report',
            detailedDescription: 'Comprehensive business analysis with detailed report and strategy call.',
            scope1: '15-20 page detailed report',
            scope2: '3-hour strategy process call',
            scope3: 'Market analysis & insights',
            scope4: 'Growth opportunities',
            scope5: 'Competitive benchmarking',
            scope6: '14-21 business days delivery'
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Force English as default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage'], // Only check localStorage (user's explicit choice)
      caches: ['localStorage']
    }
  });

export default i18n;