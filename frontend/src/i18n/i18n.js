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
        title: 'Precios que Tienen Sentido',
        subtitle: 'Sin tarifas ocultas. Sin retenedores inflados. Solo precios honestos para crecimiento real.',
        oneOff: 'Servicios Únicos',
        partnerships: 'Asociaciones',
        viewAll: 'Ver Todos los Servicios',
        hero: {
          title: 'Precios Transparentes',
          subtitle: 'Elige Tu Camino de Crecimiento',
          description: 'Precios claros, sin tarifas ocultas, sin trucos.'
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
        expertMatching: {
          badge: 'Próximamente',
          description: 'Acercando talento especializado en Amazon.',
          cta: 'Más Información'
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
        cta: 'Obtener Resultados Similares',
        bottomCTA: {
          title: '¿Listo para Escribir Tu Historia de Éxito?',
          description: 'Hablemos de cómo podemos ayudarte a lograr resultados similares.',
          cta: 'Agendar Llamada Gratuita'
        }
      },
      team: {
        badge: 'Nuestro Equipo',
        title: 'Conoce al Colectivo',
        subtitle: 'Especialistas globales en crecimiento de mercado, parte de tu equipo.',
        leadership: 'Equipo de Liderazgo',
        values: {
          title: 'Lo Que Defendemos',
          transparency: {
            title: 'Transparencia Primero',
            description: 'Sin tarifas ocultas, sin retenedores inflados. Sabes exactamente lo que pagas y por qué.'
          },
          performance: {
            title: 'Basado en Rendimiento',
            description: 'Solo tenemos éxito cuando tú tienes éxito. Nuestros retenedores están vinculados a tu crecimiento.'
          },
          sustainable: {
            title: 'Crecimiento Sostenible',
            description: 'Pensamiento a largo plazo sobre trucos rápidos. Construimos marcas que duran.'
          },
          global: {
            title: 'Colectivo Global',
            description: 'Especialistas en todos los continentes trabajando como tu equipo extendido.'
          }
        },
        mission: {
          title: 'Nuestra Misión',
          description: 'Eliminar las tarifas pesadas de agencias y hacer que el crecimiento experto en Amazon sea accesible para todas las marcas a través de precios transparentes basados en rendimiento.'
        },
        join: {
          title: '¿Quieres Unirte al Colectivo?',
          description: 'Siempre buscamos especialistas talentosos en crecimiento de mercado que compartan nuestros valores.',
          form: {
            name: 'Nombre',
            email: 'Correo Electrónico',
            linkedin: 'URL de Perfil de LinkedIn (revisaremos tu perfil en lugar de CV)',
            why: '¿Por qué quieres unirte a Superfly?',
            submit: 'Enviar Solicitud'
          }
        },
        stats: {
          specialists: 'Especialistas Globales',
          revenue: 'Ingresos Impulsados',
          continents: 'Continentes'
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