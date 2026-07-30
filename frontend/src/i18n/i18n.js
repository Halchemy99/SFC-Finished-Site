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
        team: 'Our Team',
        login: 'Login',
        bookCall: 'Book Discovery Call'
      },
      hero: {
        badge: 'Sustainable Amazon Collective',
        title: 'Amazon Growth Without The Agency Tax',
        subtitle: "Performance-based partnerships. Transparent pricing. Real specialists who actually know Amazon, not account managers reading from playbooks.",
        feature1: 'Pay for high results, not high retainers',
        feature2: 'Direct access to marketplace growth specialists',
        feature3: 'Built for sustainable, long-term growth',
        cta1: 'Start Growing Today',
        cta2: 'See Transparent Pricing',
        stat1: 'Brands Supported',
        stat2: 'Revenue in 6 Years',
        stat3: 'Satisfaction',
        stat4: 'Fought for Clients',
        badge2: 'AMAZON GROWTH',
        badge3: 'Sustainable & Fair',
        sustainableBadge: 'Sustainable Amazon Solutions',
        stat1Label: 'Brands Supported',
        stat2Label: 'Revenue Generated',
        stat3Label: 'Avg. Growth Rate',
        stat4Label: 'Client Satisfaction',
        alsoOn: 'ALSO ON',
        listingOpt: 'LISTING OPTIMIZATION',
        brandStrategy: 'BRAND & STRATEGY',
        ppcAds: 'PPC & ADVERTISING',
        contentCreative: 'CONTENT & CREATIVE',
        yourBrand: 'YOUR BRAND'
      },
      brands: {
        trustedBy: 'Trusted by Leading Brands',
        title: 'Brands We\'ve Helped',
        titleGreen: 'Grow on Amazon',
        stat1: 'Brands Supported',
        stat2: 'Revenue Generated',
        stat3: 'Avg. Growth Rate',
        stat4: 'Client Satisfaction'
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
        description: "We're marketplace growth specialists who cut through heavy agency fees with transparent, performance-based partnerships.",
        feature1: 'A global collective of marketplace growth specialists, part of your team',
        feature2: 'Retainers tied to results. We grow when you grow',
        feature3: 'Discounted fees for verified sustainable brands',
        feature4: '360 Amazon management at a fraction of the cost. No bloated teams, no ultra-long contracts',
        feature5: 'Fractional account operators embedded in your business',
        feature6: "We choose who we work with. We don't work with brands that profit from genocide, exploitation, or human rights abuses"
      },
      contact: {
        badge: 'Partner With Us',
        title: 'Ready to Grow Sustainably?',
        description: 'Book a discovery call to explore performance-based retainers and sustainability discounts. No sales pitch, just honest advice about sustainable Amazon growth.',
        card1Title: 'Book Discovery Call',
        card1Desc: 'Schedule via Calendly',
        card2Title: 'Send a WhatsApp Message',
        card3Title: 'Email Us',
        card4Title: 'Location',
        card4Desc: 'Global Marketplace Growth Specialists',
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
        metrics: {
          revenue: 'Revenue',
          categoryRanking: 'Category Ranking',
          ctrIncrease: 'CTR Increase',
          troas: 'TROAS',
          ctrImprovement: 'CTR Improvement',
          freshTrial: 'Fresh Trial',
          plannedDuration: 'Planned Duration',
          nextPhase: 'Next Phase',
          buyBoxShare: 'Buy Box Share',
          fbaFbm: 'FBA/FBM',
          usMarket: 'US Market',
          sustainability: 'Sustainability'
        },
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
        partnershipsTitle: 'Performance-Based Partnerships',
        partnershipsSubtitle: 'We grow when you grow. Choose a partnership model that aligns our success with yours.',
        partnershipsBadge: 'Skin in the Game Pricing',
        seeExamples: 'See Examples',
        buyNow: 'Buy Now',
        caseStudySoon: 'Case study coming soon! Contact us to see examples.',
        amazonAcademy: {
          title: 'Amazon Academy',
          status: 'Currently FULL until May 2026. Join waiting list for next cohort.',
          cta: 'Join Waiting List'
        },
        expertMatching: {
          title: 'Expert Matching',
          status: 'Coming Soon - Bringing specialized Amazon talent closer within reach.',
          cta: 'Learn More'
        },
        finalCta: {
          title: 'Not Sure Which to Choose?',
          subtitle: "Book a free 30-minute discovery call and we'll recommend the best path for your business.",
          button: 'Book Free Discovery Call'
        },
        partnerships: {
          starter: {
            name: 'Starter Partnership',
            price: '£650',
            priceNote: '/month',
            description: 'Perfect for brands ready to test performance-based growth',
            features: [
              'Base retainer: £650/month',
              '+ % of monthly revenue growth',
              'Full Amazon account management',
              'Listing optimization & PPC',
              'Monthly strategy calls',
              'Performance reporting'
            ],
            cta: 'Discuss This Plan'
          },
          growth: {
            name: 'Growth Partnership',
            badge: 'Most Popular',
            price: '£1,100',
            priceNote: '/month',
            description: 'For established brands scaling with skin in the game',
            features: [
              'Base retainer: £1,100/month',
              '+ % of monthly revenue growth',
              'Everything in Starter, plus:',
              'A+ Content & Brand Store',
              'Advanced PPC strategies',
              'Quarterly business reviews',
              'Priority support'
            ],
            cta: 'Discuss This Plan'
          },
          scale: {
            name: 'Scale Partnership',
            price: '£1,800',
            priceNote: '/month',
            description: 'Aggressive growth for brands doing £50k+ monthly revenue',
            features: [
              'Base retainer: £1,800/month',
              '+ % of monthly revenue growth',
              'Everything in Growth, plus:',
              'Dedicated account manager',
              'International expansion support',
              'Custom analytics & automation',
              'White-glove service'
            ],
            cta: 'Discuss This Plan'
          }
        },
        revenueShare: {
          badge: 'High Risk/Reward',
          title: 'Pure Revenue Share',
          subtitle: 'High risk, high reward - we only win when you win',
          features: [
            'No monthly retainer',
            '10% of all revenue above £10,000/month',
            'Full-service Amazon management',
            'We eat what we kill mentality',
            'Perfect for ambitious startups',
            'Subject to application approval'
          ],
          cta: 'Apply for Revenue Share'
        },
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
          brandStory: {
            name: 'Brand Story Element',
            description: 'Goes above A+ content',
            detailedDescription: 'Premium brand story module that sits above your A+ content.',
            scope1: '1 brand story module',
            scope2: 'Custom brand narrative',
            scope3: 'Professional design',
            scope4: 'Mobile-optimized',
            scope5: '5-7 business days delivery',
            scope6: 'Includes copywriting'
          },
          brandVideo: {
            name: 'Brand Video',
            description: 'Up to 45 seconds',
            detailedDescription: 'Professional video editing from your supplied files (non-studio).',
            scope1: 'Up to 45 seconds final video',
            scope2: 'Editing from YOUR supplied files',
            scope3: 'No studio filming included',
            scope4: 'Music & transitions',
            scope5: 'Amazon video specs',
            scope6: '10-14 business days delivery'
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
      },
      team: {
        badge: 'Our Team',
        title: 'Meet the',
        titleGreen: 'Collective',
        subtitle: "We're not your typical agency. We're marketplace growth specialists united by a mission: transparent pricing, sustainable growth, and cutting through the bloat.",
        leadership: 'Leadership Team',
        ourTeam: 'Our Team',
        meetCollective: 'Meet the Collective',
        harry: {
          name: 'Harry Allen',
          role: 'Founder',
          location: 'Global',
          bio: 'Founder of Superfly Commerce with a vision to democratize Amazon success through transparent, performance-based partnerships. Harry believes in cutting through agency bloat and aligning incentives with sustainable growth.'
        },
        fernando: {
          name: 'Fernando Clementin',
          role: 'LATAM Lead & Account Manager',
          location: 'Latin America',
          bio: 'Leading our Latin American expansion and managing key client accounts. With expertise in cross-border commerce and multilingual operations, Fernando bridges brands with global markets.'
        },
        john: {
          name: 'John Lawrence',
          role: 'Operations Lead',
          location: 'Global',
          bio: 'Streamlining operations and ensuring smooth delivery across all client engagements. John brings systems thinking and operational excellence to every project.'
        },
        yadnesh: {
          name: 'Yadnesh Kulkarni',
          role: 'Indian Brand Lead',
          location: 'Pune, India',
          bio: 'Based in Pune, Yadnesh is our integral link between Indian brands and the wider market. He specializes in helping Indian sellers navigate international Amazon marketplaces with cultural insight and local expertise.'
        },
        values: {
          title: 'What We Stand For',
          transparency: {
            title: 'Transparency First',
            description: 'No hidden fees, no inflated retainers. Every pound accounted for.'
          },
          performance: {
            title: 'Performance-Based',
            description: 'We only succeed when you succeed. Aligned incentives, shared wins.'
          },
          sustainable: {
            title: 'Sustainable Growth',
            description: 'Long-term thinking over quick hacks. Building brands, not just sales spikes.'
          },
          global: {
            title: 'Global Collective',
            description: 'Specialists across continents, united by expertise and commitment.'
          }
        },
        mission: {
          title: 'Our Mission',
          description: 'To democratize Amazon success by providing transparent, performance-based partnerships that cut through heavy agency fees. We believe in sustainable growth, aligned incentives, and building long-term success for brands worldwide.',
          stat1: '50+',
          stat1Label: 'Global Specialists',
          stat2: '£1M+',
          stat2Label: 'Revenue Driven',
          stat3: '4',
          stat3Label: 'Continents'
        },
        join: {
          title: 'Want to Join the Collective?',
          subtitle: "We're always looking for talented marketplace growth specialists who share our values.",
          formTitle: 'Career Application',
          nameLabel: 'Name',
          namePlaceholder: 'Your full name',
          emailLabel: 'Email',
          emailPlaceholder: 'your@email.com',
          linkedinLabel: "LinkedIn Profile URL (we'll check your profile instead of CV)",
          linkedinPlaceholder: 'https://linkedin.com/in/yourprofile',
          messageLabel: 'Why do you want to join Superfly?',
          messagePlaceholder: 'Tell us about your Amazon experience, what you specialize in (PPC, listings, creative, etc.), and why you\'d be a great fit for the collective...',
          submitButton: 'Submit Application',
          required: '*'
        }
      },
      marketplace: {
        growthSynthesis: 'Growing in Synthesis with Amazon',
        synthesisTitle: 'Growing in Synthesis with Amazon',
        whyTitle: 'Why',
        whatsIncluded: "What's Included",
        readyTitle: 'Ready to expand beyond Amazon?',
        weAlsoManage: 'We Also Manage',
        walmart: {
          name: 'Walmart',
          description: 'Walmart Marketplace management in synthesis with your Amazon strategy',
          pricing: '£300+',
          pricingNote: 'per month',
          why: [
            '120M+ monthly US shoppers',
            'Lower competition than Amazon',
            'Higher profit margins (lower fees)',
            'Complements Amazon sales perfectly'
          ],
          what: [
            'Listing optimization & content',
            'Inventory sync with Amazon',
            'Walmart Fulfillment Services setup',
            'Cross-platform PPC strategy',
            'Performance reporting'
          ],
          synthesis: 'We manage Walmart while optimizing your Amazon presence. Same inventory, double the revenue channels.',
          cta: 'Start Selling on Walmart'
        },
        mercadolibre: {
          name: 'Mercado Libre',
          description: 'Mercado Libre management for Latin America expansion',
          pricing: '£300+',
          pricingNote: 'per month',
          why: [
            '900M+ users across Latin America',
            'Dominate Mexico, Brazil, Argentina',
            'Lower advertising costs',
            'Perfect Amazon complement for LATAM'
          ],
          what: [
            'Multi-country listing management',
            'Mercado Envios logistics',
            'Local payment processing',
            'Portuguese & Spanish optimization',
            'Cross-border compliance'
          ],
          synthesis: 'Expand beyond Amazon USA into Latin America. We handle local complexities while you scale.',
          cta: 'Launch in Latin America'
        },
        temu: {
          name: 'Temu',
          description: 'Temu marketplace management for explosive growth',
          pricing: '£300+',
          pricingNote: 'per month',
          why: [
            'Fastest-growing marketplace in USA',
            '50M+ active US users',
            'Lower entry barriers',
            'Complements Amazon perfectly'
          ],
          what: [
            'Product listing & optimization',
            'Temu-specific content strategy',
            'Pricing & promotion management',
            'Customer service coordination',
            'Performance analytics'
          ],
          synthesis: 'Diversify beyond Amazon. Temu shoppers are different - we know how to convert them.',
          cta: 'Start on Temu'
        },
        shopify: {
          name: 'Shopify',
          description: 'Full Shopify store management + Amazon integration',
          pricing: '£500',
          pricingNote: 'per month flat',
          why: [
            'Own your customer data',
            'Higher margins (no marketplace fees)',
            'Build brand equity',
            'Syncs with Amazon inventory'
          ],
          what: [
            'Complete store setup & design',
            'Product catalog management',
            'Shopify-Amazon inventory sync',
            'Email marketing automation',
            'Conversion optimization',
            'Monthly performance reports'
          ],
          synthesis: 'Amazon brings traffic. Shopify builds your brand. We manage both so they work together seamlessly.',
          cta: 'Build Your Shopify Store'
        },
        specialNote: 'Flat monthly fee. No surprises. Full store management.',
        performanceNote: 'Performance-based pricing. We grow when you grow.'
      },
      tiktok: {
        badge: '🎉 Limited Time Offer',
        title: 'Free TikTok Management',
        titleGradient: 'For 4 Months',
        subtitle: 'Launch your brand on TikTok with zero management fees. You only pay for ads, content, and UGC.',
        worth: 'Worth £3,000+ in management fees',
        whatYouGet: 'What You Get FREE',
        whatYouGetDesc: 'Full-service TikTok management for 4 months',
        benefits: [
          'Full TikTok account management',
          'Content strategy & planning',
          'UGC content coordination',
          'Ad campaign setup & optimization',
          'Analytics & performance reporting',
          'Weekly strategy calls'
        ],
        normalValue: '💰 Normal Value: £750/month × 4 months = £3,000',
        youPay: 'You pay: £0 management fees',
        yourInvestment: 'Your Investment',
        investmentDesc: 'What you need to commit',
        minBudget: '£1,000',
        minBudgetDesc: 'Minimum budget for ads + content + UGC',
        requirements: 'Requirements:',
        requirementsList: [
          'Minimum £1,000 budget for ads/content/UGC',
          'Commitment to 4-month program',
          'Product must be TikTok-suitable',
          'Willingness to test & iterate'
        ],
        budgetBreakdown: 'Budget Breakdown: Your £1,000+ covers TikTok ads, content creation, and UGC creators. We manage everything for FREE.',
        howItWorks: 'How It Works',
        steps: [
          { step: '01', title: 'Apply', desc: 'Fill out our TikTok interest form' },
          { step: '02', title: 'Strategy Call', desc: 'We plan your 4-month TikTok launch' },
          { step: '03', title: 'Launch', desc: 'We execute content, ads, and UGC' },
          { step: '04', title: 'Scale', desc: 'Optimize based on performance data' }
        ],
        cta: {
          title: 'Ready to Dominate TikTok?',
          subtitle: 'Limited spots available. This offer is for serious brands ready to invest in TikTok growth.',
          apply: 'Apply Now - Free Management',
          viewTikTok: 'View Our TikTok',
          footer: '⚡ Spots are limited • 🎯 First-come, first-served • 💎 Worth £3,000'
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        services: 'Servicios',
        about: 'Nosotros',
        caseStudies: 'Casos de Éxito',
        pricing: 'Precios',
        login: 'Iniciar Sesión',
        bookCall: 'Agendar Llamada',
        team: 'Nuestro Equipo'
      },
      hero: {
        badge: 'Colectivo Sostenible de Amazon',
        title: 'Crecimiento en Amazon Sin el Impuesto de Agencia',
        subtitle: "Asociaciones basadas en rendimiento. Precios transparentes. Especialistas reales que conocen Amazon, no gerentes leyendo manuales.",
        feature1: 'Paga por resultados altos, no por retenedores altos',
        feature2: 'Acceso directo a especialistas en crecimiento de mercado',
        feature3: 'Construido para crecimiento sostenible a largo plazo',
        cta1: 'Comienza a Crecer Hoy',
        cta2: 'Ver Precios Transparentes',
        stat1: 'Marcas Apoyadas',
        stat2: 'Ingresos en 6 Años',
        stat3: 'Satisfacción',
        stat4: 'Luchado por Clientes',
        badge2: 'CRECIMIENTO EN AMAZON',
        badge3: 'Sostenible y Justo',
        sustainableBadge: 'Soluciones Sostenibles de Amazon',
        stat1Label: 'Marcas Apoyadas',
        stat2Label: 'Ingresos Generados',
        stat3Label: 'Tasa de Crecimiento Promedio',
        stat4Label: 'Satisfacción del Cliente',
        alsoOn: 'TAMBIÉN EN',
        listingOpt: 'OPTIMIZACIÓN DE LISTADOS',
        brandStrategy: 'MARCA Y ESTRATEGIA',
        ppcAds: 'PPC Y PUBLICIDAD',
        contentCreative: 'CONTENIDO Y CREATIVO',
        yourBrand: 'TU MARCA'
      },
      brands: {
        trustedBy: 'Confiado por Marcas Líderes',
        title: 'Marcas que Hemos Ayudado a',
        titleGreen: 'Crecer en Amazon',
        stat1: 'Marcas Apoyadas',
        stat2: 'Ingresos Generados',
        stat3: 'Tasa de Crecimiento Promedio',
        stat4: 'Satisfacción del Cliente'
      },
      services: {
        title: 'Cuatro Formas de Crecer',
        titleGreen: 'Tu Negocio en Amazon',
        popular: 'MÁS POPULAR',
        service1Title: 'Paquetes de Victoria Rápida',
        service1Subtitle: 'Sprints de Amazon a Precio Fijo',
        service1Feature1: 'Sprint de Optimización de Listados',
        service1Feature2: 'Paquete de Contenido A+',
        service1Button: 'Ver Victorias Rápidas',
        service2Title: 'Emparejamiento de Expertos',
        service2Subtitle: 'Especialistas Seleccionados a Mano',
        service2Feature1: 'Red de especialistas verificados',
        service2Feature2: 'Alcance de proyecto incluido',
        service2Button: 'Conocer Especialistas',
        service3Title: 'Asociación de Crecimiento Compartido',
        service3Subtitle: 'Modelo Basado en Rendimiento',
        service3Feature1: 'Retenedores de participación en ingresos',
        service3Feature2: 'Incentivos alineados',
        service3Button: 'Explorar Asociación',
        service4Title: 'Academia de Maestría en Amazon',
        service4Subtitle: 'Capacitación y Asesoría',
        service4Feature1: 'Talleres dirigidos por expertos',
        service4Feature2: 'Soporte continuo',
        service4Button: 'Comenzar a Aprender'
      },
      about: {
        badge: 'Colectivo Sostenible de Amazon',
        title: "No Somos una Agencia.",
        titleGreen: "Somos un Colectivo.",
        description: "Somos especialistas en crecimiento de mercado que eliminan las tarifas pesadas de agencias con asociaciones transparentes basadas en rendimiento.",
        feature1: 'Un colectivo global de especialistas en crecimiento de mercado, parte de tu equipo',
        feature2: 'Retenedores vinculados a resultados. Crecemos cuando tú creces',
        feature3: 'Tarifas con descuento para marcas sostenibles verificadas',
        feature4: 'Gestión 360 de Amazon a una fracción del costo. Sin equipos inflados, sin contratos ultra largos',
        feature5: 'Operadores de cuenta fraccionarios integrados en tu negocio',
        feature6: "Elegimos con quién trabajamos. No trabajamos con marcas que se benefician del genocidio, explotación o abuso de derechos humanos"
      },
      contact: {
        badge: 'Asóciate con Nosotros',
        title: '¿Listo para Crecer de Manera Sostenible?',
        description: 'Agenda una llamada de descubrimiento para explorar retenedores basados en rendimiento y descuentos de sostenibilidad. Sin charlas de ventas, solo consejos honestos sobre crecimiento sostenible en Amazon.',
        card1Title: 'Agendar Llamada',
        card1Desc: 'Programar vía Calendly',
        card2Title: 'Enviar Mensaje de WhatsApp',
        card3Title: 'Correo Electrónico',
        card4Title: 'Ubicación',
        card4Desc: 'Especialistas Globales en Crecimiento de Mercado',
        formTitle: 'Agenda Tu Llamada de Descubrimiento',
        formDesc: 'Cuéntanos sobre tu negocio en Amazon y diseñaremos una asociación basada en rendimiento para crecimiento sostenible.',
        benefitsTitle: 'Lo que Obtendrás en Nuestra Llamada',
        benefit1: 'Evaluación gratuita de cuenta de Amazon',
        benefit2: 'Opciones de retenedor basadas en rendimiento',
        benefit3: 'Evaluación de descuento de sostenibilidad',
        benefit4: 'Hoja de ruta de estrategia de crecimiento',
        nameLabel: 'Tu nombre',
        emailLabel: 'tu@email.com',
        companyLabel: 'Tu empresa',
        messageLabel: 'Comparte tus objetivos y desafíos...',
        interestedLabel: 'Interesado en',
        submitButton: 'Enviar Solicitud',
        placeholders: {
          name: 'John Doe',
          email: 'tu@email.com',
          message: 'Cuéntanos sobre tu negocio en Amazon...'
        }
      },
      newsletter: {
        title: '¡Mantente Informado!',
        description: 'Recibe consejos exclusivos de crecimiento en Amazon, perspectivas de sostenibilidad y actualizaciones de la industria en tu bandeja de entrada.',
        feature1: 'Consejos de crecimiento sostenible',
        feature2: 'Perspectivas de Amazon',
        feature3: 'Sin spam, solo valor',
        emailTitle: 'Ingresa tu correo para consejos de crecimiento',
        joinButton: 'Únete Ahora',
        placeholder: 'tu@email.com'
      },
      footer: {
        description: 'Colectivo Sostenible de Amazon eliminando tarifas pesadas con asociaciones transparentes basadas en rendimiento.',
        servicesTitle: 'Servicios',
        companyTitle: 'Empresa',
        contactTitle: 'Contáctanos',
        aboutUs: 'Sobre Nosotros',
        caseStudies: 'Casos de Éxito',
        pricing: 'Precios',
        contact: 'Contacto',
        team: 'Equipo',
        blog: 'Blog',
        copyright: 'Superfly Commerce. Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        cookies: 'Política de Cookies'
      },
      toast: {
        formSubmitted: '¡Formulario Enviado!',
        formSuccess: "Te contactaremos pronto.",
        subscribed: '¡Suscrito!',
        subscribeSuccess: "Recibirás nuestros consejos de crecimiento pronto."
      },
      pricing: {
        badge: 'Precios Transparentes',
        title: 'Elige Tu',
        titleGreen: 'Camino de Crecimiento',
        subtitle: 'Precios claros, sin tarifas ocultas. Elige lo que funciona para tu etapa de negocio.',
        partnershipsTitle: 'Asociaciones Basadas en Rendimiento',
        partnershipsSubtitle: 'Crecemos cuando tú creces. Elige un modelo de asociación que alinee nuestro éxito con el tuyo.',
        partnershipsBadge: 'Precios con Piel en el Juego',
        oneOffTitle: 'Servicios Únicos',
        oneOffSubtitle: 'Sin compromiso. Paga una vez, obtén resultados.',
        oneOffBadge: '🎯 Perfecto para necesidades específicas o probar nuestro trabajo',
        seeExamples: 'Ver Ejemplos',
        buyNow: 'Comprar Ahora',
        caseStudySoon: '¡Caso de estudio próximamente! Contáctanos para ver ejemplos.',
        amazonAcademy: {
          title: 'Amazon Academy',
          status: 'Actualmente LLENO hasta Mayo 2026. Únete a la lista de espera para el próximo grupo.',
          cta: 'Unirse a Lista de Espera'
        },
        expertMatching: {
          title: 'Emparejamiento de Expertos',
          status: 'Próximamente - Acercando talento especializado de Amazon.',
          cta: 'Saber Más'
        },
        finalCta: {
          title: '¿No Estás Seguro Cuál Elegir?',
          subtitle: 'Agenda una llamada de descubrimiento gratuita de 30 minutos y recomendaremos el mejor camino para tu negocio.',
          button: 'Agendar Llamada de Descubrimiento Gratuita'
        },
        partnerships: {
          badge: 'ASOCIACIONES BASADAS EN RENDIMIENTO',
          title: 'Crecemos cuando tú creces',
          subtitle: 'Retenedores de participación en ingresos. Cuando tú ganas, nosotros ganamos.',
          starter: {
            name: 'Asociación Inicial',
            price: '£1,500',
            priceNote: '/mes + 3% de ventas',
            description: 'Perfecto para marcas que comienzan su viaje en Amazon',
            features: [
              'Gestión completa de cuenta de Amazon',
              'Optimización de listados y PPC',
              'Llamadas de estrategia mensuales',
              'Informes de rendimiento',
              'Soporte por correo y chat'
            ],
            cta: 'Discutir Este Plan'
          },
          growth: {
            name: 'Asociación de Crecimiento',
            badge: 'MÁS POPULAR',
            price: '£3,000',
            priceNote: '/mes + 2% de ventas',
            description: 'Para marcas establecidas listas para escalar',
            features: [
              'Todo en Inicial, más:',
              'Contenido A+ y Tienda de Marca',
              'Estrategias avanzadas de PPC',
              'Revisiones trimestrales de negocio',
              'Soporte prioritario',
              'Gerente de cuenta dedicado'
            ],
            cta: 'Discutir Este Plan'
          },
          scale: {
            name: 'Asociación de Escala',
            price: '£5,000',
            priceNote: '/mes + 1.5% de ventas',
            description: 'Servicio premium para marcas ambiciosas',
            features: [
              'Todo en Crecimiento, más:',
              'Soporte de expansión internacional',
              'Analítica personalizada y automatización',
              'Servicio de guante blanco',
              'Acceso directo al fundador',
              'Revisiones semanales de estrategia'
            ],
            cta: 'Discutir Este Plan'
          }
        },
        revenueShare: {
          badge: 'ALTO RIESGO/RECOMPENSA',
          title: 'Participación Pura en Ingresos',
          subtitle: 'Alto riesgo, alta recompensa - solo ganamos cuando tú ganas',
          features: [
            'Sin retenedor mensual',
            '10% de todos los ingresos superiores a £10,000/mes',
            'Mentalidad "comemos lo que cazamos"',
            'Perfecto para startups ambiciosas',
            'Sujeto a aprobación de solicitud'
          ],
          cta: 'Solicitar Participación en Ingresos'
        },
        services: {
          listingOptimization: {
            name: 'Sprint de Optimización de Listados',
            description: 'Optimización completa de un listado',
            detailedDescription: 'Optimización exhaustiva de un solo listado de producto de Amazon.',
            scope1: 'Solo 1 listado de producto',
            scope2: 'Optimización de título (200 caracteres)',
            scope3: 'Bullets mejorados (5 puntos)',
            scope4: 'Descripción del producto',
            scope5: 'Términos de búsqueda backend',
            scope6: 'Entrega en 5-7 días hábiles'
          },
          aPlusContent: {
            name: 'Paquete de Contenido A+',
            description: 'Contenido A+ profesional para un producto',
            detailedDescription: 'Diseño completo de módulo de contenido A+ para un solo listado de producto de Amazon.',
            scope1: 'Solo contenido A+ de 1 producto',
            scope2: 'Máximo 5 módulos personalizados',
            scope3: 'Hasta 2 revisiones de diseño',
            scope4: 'Diseño optimizado para móvil',
            scope5: 'Entrega en 7-10 días hábiles',
            scope6: 'Archivos fuente incluidos'
          },
          photography: {
            name: 'Fotografía de Producto',
            description: 'Sesión fotográfica profesional de producto',
            detailedDescription: 'Sesión de fotografía de producto en estudio con edición profesional.',
            scope1: 'Hasta 10 imágenes editadas',
            scope2: 'Solo tomas con fondo blanco',
            scope3: '1 producto, múltiples ángulos',
            scope4: 'Archivos de alta resolución (300 DPI)',
            scope5: 'Formato compatible con Amazon',
            scope6: 'Entrega en 14 días hábiles'
          },
          infographics: {
            name: 'Set de Infografías de Amazon',
            description: 'Hasta 6 infografías personalizadas',
            detailedDescription: 'Diseño profesional de infografías para listados de Amazon (no fotografía).',
            scope1: 'Hasta 6 infografías personalizadas',
            scope2: 'Destacados de características del producto',
            scope3: 'Gráficos de comparación',
            scope4: 'Dimensiones listas para Amazon',
            scope5: 'Archivos fuente incluidos',
            scope6: 'Entrega en 5-7 días hábiles'
          },
          brandStory: {
            name: 'Elemento de Historia de Marca',
            description: 'Va encima del contenido A+',
            detailedDescription: 'Módulo premium de historia de marca que se sitúa encima de tu contenido A+.',
            scope1: '1 módulo de historia de marca',
            scope2: 'Narrativa de marca personalizada',
            scope3: 'Diseño profesional',
            scope4: 'Optimizado para móvil',
            scope5: 'Entrega en 5-7 días hábiles',
            scope6: 'Incluye redacción'
          },
          brandVideo: {
            name: 'Video de Marca',
            description: 'Hasta 45 segundos',
            detailedDescription: 'Edición de video profesional a partir de tus archivos proporcionados (sin estudio).',
            scope1: 'Hasta 45 segundos de video final',
            scope2: 'Edición de TUS archivos proporcionados',
            scope3: 'No incluye filmación en estudio',
            scope4: 'Música y transiciones',
            scope5: 'Especificaciones de video de Amazon',
            scope6: 'Entrega en 10-14 días hábiles'
          },
          copywriting: {
            name: 'Redacción Experta',
            description: 'Copia enfocada en conversión para 1 listado',
            detailedDescription: 'Redacción profesional de listados de Amazon enfocada en conversión.',
            scope1: 'Solo 1 listado de producto',
            scope2: 'Integración de palabras clave SEO',
            scope3: 'Título y viñetas',
            scope4: 'Descripción del producto',
            scope5: 'Términos de búsqueda backend',
            scope6: 'Entrega en 3-5 días hábiles'
          },
          ppcAudit: {
            name: 'Auditoría y Configuración de PPC',
            description: 'Auditoría completa de PPC con configuración de campaña',
            detailedDescription: 'Auditoría exhaustiva de PPC y configuración inicial de campaña.',
            scope1: 'Auditoría de campaña actual',
            scope2: 'Configuración de hasta 3 campañas nuevas',
            scope3: 'Investigación de palabras clave (50 palabras clave)',
            scope4: 'Recomendaciones de estrategia de oferta',
            scope5: 'NO incluye gasto publicitario',
            scope6: 'Entrega en 5-7 días hábiles'
          },
          brandStorefront: {
            name: 'Escaparate de Marca',
            description: 'Diseño personalizado de Escaparate de Amazon',
            detailedDescription: 'Diseño completo de Tienda de Marca de Amazon con hasta 5 páginas.',
            scope1: 'Hasta 5 páginas de escaparate',
            scope2: 'Diseños de página personalizados',
            scope3: 'Integración de historia de marca',
            scope4: 'Secciones de categorías de productos',
            scope5: '2 rondas de revisiones',
            scope6: 'Entrega en 14-21 días hábiles'
          },
          businessAnalysis: {
            name: 'Análisis Completo de Negocio',
            description: 'Informe estratégico nivel Deloitte',
            detailedDescription: 'Análisis exhaustivo de negocio con informe detallado y llamada de estrategia.',
            scope1: 'Informe detallado de 15-20 páginas',
            scope2: 'Llamada de proceso de estrategia de 3 horas',
            scope3: 'Análisis de mercado e insights',
            scope4: 'Oportunidades de crecimiento',
            scope5: 'Benchmarking competitivo',
            scope6: 'Entrega en 14-21 días hábiles'
          }
        },
        oneOffServices: {
          badge: 'SERVICIOS ÚNICOS',
          title: 'Paquetes de Victoria Rápida',
          subtitle: 'Sin compromiso. Paga una vez, obtén resultados.',
          listing: {
            name: 'Sprint de Optimización de Listados',
            price: '£350',
            features: [
              'Hasta 5 listados de productos',
              'Investigación de palabras clave y SEO',
              'Entrega en 7-10 días hábiles'
            ],
            cta: 'Comprar Ahora'
          },
          aplus: {
            name: 'Paquete de Contenido A+',
            price: '£500',
            features: [
              'Hasta 3 módulos A+',
              'Diseño profesional',
              'Texto optimizado para conversión'
            ],
            cta: 'Comprar Ahora'
          },
          photography: {
            name: 'Fotografía de Producto',
            price: '£600',
            features: [
              '6 imágenes profesionales',
              'Fondo blanco + estilo de vida',
              'Listas para Amazon'
            ],
            cta: 'Comprar Ahora'
          },
          infographic: {
            name: 'Set de Infografías de Amazon',
            price: '£300',
            features: [
              '3 imágenes infográficas',
              'Características destacadas',
              'Optimizado para conversión'
            ],
            cta: 'Comprar Ahora'
          },
          brandStory: {
            name: 'Elemento de Historia de Marca',
            price: '£200',
            features: [
              'Módulo de historia de marca',
              'Diseño personalizado',
              'Texto de marca'
            ],
            cta: 'Comprar Ahora'
          },
          video: {
            name: 'Video de Marca',
            price: '£800',
            features: [
              'Video de 30 segundos',
              'Edición profesional',
              'Listo para Amazon'
            ],
            cta: 'Comprar Ahora'
          },
          copywriting: {
            name: 'Redacción de Listados',
            price: '£250',
            features: [
              'Título + viñetas + descripción',
              'Optimizado para SEO',
              'Enfocado en conversión'
            ],
            cta: 'Comprar Ahora'
          },
          ppcAudit: {
            name: 'Auditoría y Configuración de PPC',
            price: '£400',
            features: [
              'Auditoría completa de PPC',
              'Configuración de campaña',
              'Guía de optimización'
            ],
            cta: 'Comprar Ahora'
          },
          storefront: {
            name: 'Escaparate de Marca',
            price: '£700',
            features: [
              'Diseño de tienda completa',
              'Hasta 5 páginas',
              'Marca personalizada'
            ],
            cta: 'Comprar Ahora'
          },
          businessAnalysis: {
            name: 'Análisis Completo de Negocio',
            price: '£1,000',
            features: [
              'Auditoría profunda de 2 semanas',
              'Hoja de ruta de crecimiento',
              'Presentación ejecutiva'
            ],
            cta: 'Comprar Ahora'
          }
        },
        modal: {
          title: 'Ejemplo de Cliente Real',
          challenge: 'El Desafío',
          whatWeDid: 'Lo Que Hicimos',
          results: 'Resultados',
          conversionRate: 'Tasa de Conversión',
          salesIncrease: 'Aumento de Ventas',
          ranking: 'Ranking',
          oneTime: 'único'
        },
        academy: {
          badge: 'Actualmente LLENO hasta Mayo 2026',
          cta: 'Unirse a Lista de Espera'
        },
        bottomCTA: {
          title: '¿No Estás Seguro Cuál Elegir?',
          description: 'Agenda una llamada de descubrimiento gratuita de 30 minutos y diseñaremos el plan perfecto para tu negocio.',
          cta: 'Agendar Llamada de Descubrimiento Gratuita'
        }
      },
      caseStudies: {
        badge: 'Historias de Éxito',
        title: 'Resultados Reales de',
        titleGreen: 'Marcas Reales',
        subtitle: 'Así es como ayudamos a las marcas a crecer de manera sostenible en Amazon.',
        challenge: 'Desafío',
        solution: 'Solución',
        getResults: 'Obtener Resultados Similares',
        ctaTitle: '¿Listo para Escribir Tu Historia de Éxito?',
        ctaSubtitle: 'Hablemos de cómo podemos ayudarte a lograr resultados similares para tu negocio de Amazon.',
        ctaButton: 'Agendar Llamada de Descubrimiento',
        metrics: {
          revenue: 'Ingresos',
          categoryRanking: 'Ranking de Categoría',
          ctrIncrease: 'Aumento de CTR',
          troas: 'TROAS',
          ctrImprovement: 'Mejora de CTR',
          freshTrial: 'Prueba Fresh',
          plannedDuration: 'Duración Planificada',
          nextPhase: 'Siguiente Fase',
          buyBoxShare: 'Cuota de Buy Box',
          fbaFbm: 'FBA/FBM',
          usMarket: 'Mercado de EE.UU.',
          sustainability: 'Sostenibilidad'
        },
        pachakuti: {
          category: 'Lanzamiento en Amazon',
          client: 'Pachakuti',
          industry: 'Cacao Ceremonial',
          challenge: 'Entrar en Amazon UK sin historial de ventas, bajo conteo de reseñas, y precios premium en una categoría de cacao altamente competitiva dominada por marcas establecidas. El cacao ceremonial directamente de la Amazonía ecuatoriana necesitaba destacarse.',
          solution: 'Lanzamiento estructurado en UK vía FBA, construcción de listado basado en palabras clave, creación de contenido A+, creación de tienda de marca, y pruebas controladas de PPC para validar conversión antes de escalar. Enfoque estratégico en ranking para palabras clave subapreciadas.',
          testimonial: 'Superfly nos ayudó a lanzar nuestro cacao ceremonial de la Amazonía ecuatoriana y llegar al Top 4 en una de las categorías más competitivas de Amazon UK.',
          author: 'Equipo Pachakuti'
        },
        hairGuru: {
          category: 'Rebranding y Recuperación de Marca',
          client: 'Hair Guru',
          industry: 'Cuidado del Cabello',
          challenge: 'Recuperar una marca de cuidado capilar con contenido desactualizado, empaques inconsistentes y mezcla FBA/FBM que confundía a compradores. Necesitaban refrescarse sin perder momentum.',
          solution: 'Rebranding completo de listados, optimización de imágenes, consolidación de SKUs, transición FBA completa, y PPC estructurado para recuperar rankings.',
          testimonial: 'Nuestro CTR mejoró 5x inmediatamente después de que Superfly reconstruyera nuestros listados. Los resultados hablan por sí mismos.',
          author: 'Jamie Shepard, Hair Guru'
        },
        leon: {
          category: 'Lanzamiento en Amazon Fresh',
          client: 'LEON',
          industry: 'Alimentos Preparados',
          challenge: 'Lanzar la comida rápida saludable de LEON en Amazon Fresh UK - un terreno completamente nuevo para la marca. Posicionamiento premium en entrega de comida de mismo día.',
          solution: 'Estrategia de lanzamiento de Fresh, configuración logística, pruebas de conversión de listados, y coordinación de inventario JIT. Todo el stock de prueba se agotó en 3 semanas.',
          testimonial: 'Superfly gestionó nuestro lanzamiento en Amazon Fresh. Se agotó en 3 semanas cuando planeamos 12. Ahora escalando a nuevos productos.',
          author: 'Equipo LEON'
        },
        reborn: {
          category: 'Expansión Internacional & Sostenibilidad',
          client: 'Reborn Coffee',
          industry: 'Café Sostenible',
          challenge: 'Marca de café sostenible luchaba con cuota de Buy Box inconsistente, estrategia FBA/FBM no optimizada, y sin camino claro hacia el mercado de EE.UU.',
          solution: 'Optimización de estrategia FBA/FBM por SKU, recuperación de cuota de Buy Box al 99%, hoja de ruta de expansión a EE.UU., y calificación para el Acelerador de Sostenibilidad de Amazon.',
          testimonial: 'Superfly nos ayudó a recuperar nuestra cuota de Buy Box y construyó nuestra hoja de ruta para EE.UU. Ahora somos parte del Acelerador de Sostenibilidad de Amazon.',
          author: 'Equipo Reborn Coffee'
        },
      team: {
        badge: 'Nuestro Equipo',
        title: 'Conoce al',
        titleGreen: 'Colectivo',
        subtitle: 'No somos una agencia típica. Somos especialistas en crecimiento de mercado unidos por una misión: precios transparentes, crecimiento sostenible y eliminación de la burocracia.',
        leadership: 'Equipo de Liderazgo',
        ourTeam: 'Nuestro Equipo',
        meetCollective: 'Conoce al Colectivo',
        harry: {
          name: 'Harry Allen',
          role: 'Fundador',
          location: 'Global',
          bio: 'Fundador de Superfly Commerce con una visión de democratizar el éxito en Amazon a través de asociaciones transparentes basadas en rendimiento. Harry cree en eliminar la burocracia de las agencias y alinear incentivos con crecimiento sostenible.'
        },
        fernando: {
          name: 'Fernando Clementin',
          role: 'Líder LATAM y Gerente de Cuenta',
          location: 'América Latina',
          bio: 'Liderando nuestra expansión en América Latina y gestionando cuentas clave de clientes. Con experiencia en comercio transfronterizo y operaciones multilingües, Fernando conecta marcas con mercados globales.'
        },
        john: {
          name: 'John Lawrence',
          role: 'Líder de Operaciones',
          location: 'Global',
          bio: 'Optimizando operaciones y asegurando una entrega fluida en todos los compromisos con clientes. John aporta pensamiento sistemático y excelencia operativa a cada proyecto.'
        },
        yadnesh: {
          name: 'Yadnesh Kulkarni',
          role: 'Líder de Marcas Indias',
          location: 'Pune, India',
          bio: 'Con sede en Pune, Yadnesh es nuestro vínculo integral entre marcas indias y el mercado más amplio. Se especializa en ayudar a vendedores indios a navegar mercados internacionales de Amazon con perspicacia cultural y experiencia local.'
        },
        values: {
          title: 'Lo Que Defendemos',
          transparency: {
            title: 'Transparencia Primero',
            description: 'Sin tarifas ocultas, sin retenedores inflados. Cada libra contabilizada.'
          },
          performance: {
            title: 'Basado en Rendimiento',
            description: 'Solo tenemos éxito cuando tú tienes éxito. Incentivos alineados, victorias compartidas.'
          },
          sustainable: {
            title: 'Crecimiento Sostenible',
            description: 'Pensamiento a largo plazo sobre trucos rápidos. Construyendo marcas, no solo picos de ventas.'
          },
          global: {
            title: 'Colectivo Global',
            description: 'Especialistas en todos los continentes, unidos por experiencia y compromiso.'
          }
        },
        mission: {
          title: 'Nuestra Misión',
          description: 'Democratizar el éxito en Amazon proporcionando asociaciones transparentes basadas en rendimiento que eliminan las tarifas pesadas de agencias. Creemos en el crecimiento sostenible, incentivos alineados y construir éxito a largo plazo para marcas en todo el mundo.',
          stat1: '50+',
          stat1Label: 'Especialistas Globales',
          stat2: '£1M+',
          stat2Label: 'Ingresos Impulsados',
          stat3: '4',
          stat3Label: 'Continentes'
        },
        join: {
          title: '¿Quieres Unirte al Colectivo?',
          subtitle: 'Siempre buscamos especialistas talentosos en crecimiento de mercado que compartan nuestros valores.',
          formTitle: 'Solicitud de Carrera',
          nameLabel: 'Nombre',
          namePlaceholder: 'Tu nombre completo',
          emailLabel: 'Correo Electrónico',
          emailPlaceholder: 'tu@email.com',
          linkedinLabel: 'URL de Perfil de LinkedIn (revisaremos tu perfil en lugar de CV)',
          linkedinPlaceholder: 'https://linkedin.com/in/tuperfil',
          messageLabel: '¿Por qué quieres unirte a Superfly?',
          messagePlaceholder: 'Cuéntanos sobre tu experiencia en Amazon, en qué te especializas (PPC, listados, creativo, etc.), y por qué serías una gran incorporación al colectivo...',
          submitButton: 'Enviar Solicitud',
          required: '*'
        }
      },
      marketplace: {
        growthSynthesis: 'Creciendo en Síntesis con Amazon',
        synthesisTitle: 'Creciendo en Síntesis con Amazon',
        whyTitle: '¿Por Qué',
        whatsIncluded: 'Qué Está Incluido',
        readyTitle: '¿Listo para expandirse más allá de Amazon?',
        weAlsoManage: 'También Gestionamos',
        walmart: {
          name: 'Walmart',
          description: 'Gestión del Mercado de Walmart en síntesis con tu estrategia de Amazon',
          pricing: '£300+',
          pricingNote: 'por mes',
          why: [
            'Más de 120M de compradores mensuales en EE.UU.',
            'Menor competencia que Amazon',
            'Mayores márgenes de ganancia (tarifas más bajas)',
            'Complementa las ventas de Amazon perfectamente'
          ],
          what: [
            'Optimización de listados y contenido',
            'Sincronización de inventario con Amazon',
            'Configuración de Servicios de Cumplimiento de Walmart',
            'Estrategia de PPC multiplataforma',
            'Informes de rendimiento'
          ],
          synthesis: 'Gestionamos Walmart mientras optimizamos tu presencia en Amazon. Mismo inventario, doble canal de ingresos.',
          cta: 'Comenzar a Vender en Walmart'
        },
        mercadolibre: {
          name: 'Mercado Libre',
          description: 'Gestión de Mercado Libre para expansión en América Latina',
          pricing: '£300+',
          pricingNote: 'por mes',
          why: [
            'Más de 900M de usuarios en América Latina',
            'Domina México, Brasil, Argentina',
            'Costos de publicidad más bajos',
            'Complemento perfecto de Amazon para LATAM'
          ],
          what: [
            'Gestión de listados multi-país',
            'Logística Mercado Envíos',
            'Procesamiento de pagos locales',
            'Optimización en portugués y español',
            'Cumplimiento transfronterizo'
          ],
          synthesis: 'Expande más allá de Amazon EE.UU. hacia América Latina. Nosotros manejamos las complejidades locales mientras tú escalas.',
          cta: 'Lanzar en América Latina'
        },
        temu: {
          name: 'Temu',
          description: 'Gestión del mercado de Temu para crecimiento explosivo',
          pricing: '£300+',
          pricingNote: 'por mes',
          why: [
            'Mercado de más rápido crecimiento en EE.UU.',
            'Más de 50M de usuarios activos en EE.UU.',
            'Barreras de entrada más bajas',
            'Complementa Amazon perfectamente'
          ],
          what: [
            'Listado y optimización de productos',
            'Estrategia de contenido específica para Temu',
            'Gestión de precios y promociones',
            'Coordinación de servicio al cliente',
            'Análisis de rendimiento'
          ],
          synthesis: 'Diversifica más allá de Amazon. Los compradores de Temu son diferentes - sabemos cómo convertirlos.',
          cta: 'Comenzar en Temu'
        },
        shopify: {
          name: 'Shopify',
          description: 'Gestión completa de tienda Shopify + integración con Amazon',
          pricing: '£500',
          pricingNote: 'por mes fijo',
          why: [
            'Posee los datos de tus clientes',
            'Márgenes más altos (sin tarifas de mercado)',
            'Construye equidad de marca',
            'Se sincroniza con el inventario de Amazon'
          ],
          what: [
            'Configuración y diseño completo de tienda',
            'Gestión de catálogo de productos',
            'Sincronización de inventario Shopify-Amazon',
            'Automatización de marketing por correo',
            'Optimización de conversión',
            'Informes de rendimiento mensuales'
          ],
          synthesis: 'Amazon trae tráfico. Shopify construye tu marca. Gestionamos ambos para que funcionen juntos sin problemas.',
          cta: 'Construir Tu Tienda Shopify'
        },
        specialNote: 'Tarifa mensual fija. Sin sorpresas. Gestión completa de tienda.',
        performanceNote: 'Precios basados en rendimiento. Crecemos cuando tú creces.'
      },
      tiktok: {
        badge: '🎉 Oferta por Tiempo Limitado',
        title: 'Gestión Gratuita de TikTok',
        titleGradient: 'Durante 4 Meses',
        subtitle: 'Lanza tu marca en TikTok con cero tarifas de gestión. Solo pagas por anuncios, contenido y UGC.',
        worth: 'Vale más de £3,000 en tarifas de gestión',
        whatYouGet: 'Lo Que Obtienes GRATIS',
        whatYouGetDesc: 'Gestión completa de TikTok durante 4 meses',
        benefits: [
          'Gestión completa de cuenta de TikTok',
          'Estrategia y planificación de contenido',
          'Coordinación de contenido UGC',
          'Configuración y optimización de campañas publicitarias',
          'Análisis e informes de rendimiento',
          'Llamadas de estrategia semanales'
        ],
        normalValue: '💰 Valor Normal: £750/mes × 4 meses = £3,000',
        youPay: 'Tú pagas: £0 tarifas de gestión',
        yourInvestment: 'Tu Inversión',
        investmentDesc: 'Lo que necesitas comprometer',
        minBudget: '£1,000',
        minBudgetDesc: 'Presupuesto mínimo para anuncios + contenido + UGC',
        requirements: 'Requisitos:',
        requirementsList: [
          'Presupuesto mínimo de £1,000 para anuncios/contenido/UGC',
          'Compromiso al programa de 4 meses',
          'El producto debe ser adecuado para TikTok',
          'Disposición para probar e iterar'
        ],
        budgetBreakdown: 'Desglose del Presupuesto: Tus £1,000+ cubren anuncios de TikTok, creación de contenido y creadores de UGC. Nosotros gestionamos todo GRATIS.',
        howItWorks: 'Cómo Funciona',
        steps: [
          { step: '01', title: 'Aplicar', desc: 'Completa nuestro formulario de interés en TikTok' },
          { step: '02', title: 'Llamada de Estrategia', desc: 'Planificamos tu lanzamiento de TikTok de 4 meses' },
          { step: '03', title: 'Lanzamiento', desc: 'Ejecutamos contenido, anuncios y UGC' },
          { step: '04', title: 'Escalar', desc: 'Optimizar basado en datos de rendimiento' }
        ],
        cta: {
          title: '¿Listo para Dominar TikTok?',
          subtitle: 'Lugares limitados disponibles. Esta oferta es para marcas serias listas para invertir en crecimiento de TikTok.',
          apply: 'Aplicar Ahora - Gestión Gratuita',
          viewTikTok: 'Ver Nuestro TikTok',
          footer: '⚡ Lugares limitados • 🎯 Por orden de llegada • 💎 Vale £3,000'
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