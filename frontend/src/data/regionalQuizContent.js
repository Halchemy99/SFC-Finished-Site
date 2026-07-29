// Regional Quiz Content - Targeted Pain Points
// EN/HI for India, EN/AR for UAE, EN/ES for Mexico

export const quizContent = {
  india: {
    en: {
      heroTitle: "Free Amazon UK/EU/USA Audit for Indian Sellers",
      heroSubtitle: "Most Indian sellers lose their first £10k to mistakes we can see in 5 minutes",
      questions: [
        {
          id: 'vat_compliance',
          question: 'Do you know if your VAT registration will block your first UK/EU sales?',
          subtext: '73% of Indian sellers get suspended within 30 days due to VAT issues',
          options: [
            { value: 'compliant', label: 'Yes, I\'m VAT registered and compliant', score: 0 },
            { value: 'registered', label: 'I have a VAT number but not sure if it\'s set up right', score: 2 },
            { value: 'no_idea', label: 'I don\'t know what this means', score: 3 }
          ],
          issue: 'VAT compliance gaps = account suspension'
        },
        {
          id: 'true_costs',
          question: 'Are you calculating UK/EU/USA landed costs including ALL fees and duties?',
          subtext: 'Import duties + FBA fees + VAT + returns = 40-60% of your sale price',
          options: [
            { value: 'yes', label: 'Yes, I have a full cost model', score: 0 },
            { value: 'roughly', label: 'I have rough estimates', score: 1 },
            { value: 'no', label: 'I\'m just looking at product cost + shipping', score: 3 }
          ],
          issue: 'Hidden costs eating 50%+ of profit'
        },
        {
          id: 'compliance_certs',
          question: 'Do your products have the required safety certificates for UK/EU/USA?',
          subtext: 'CE marking (EU), UKCA (UK), FCC/FDA (USA) - missing any = instant takedown',
          options: [
            { value: 'all', label: 'All products are certified', score: 0 },
            { value: 'some', label: 'Some products, not all', score: 2 },
            { value: 'none', label: 'I haven\'t checked this', score: 3 }
          ],
          issue: 'Compliance issues = listings suppressed'
        },
        {
          id: 'cultural_messaging',
          question: 'Have you tested if UK/EU/USA buyers trust your brand messaging?',
          subtext: 'Indian sellers often use language that doesn\'t convert in Western markets',
          options: [
            { value: 'tested', label: 'I\'ve A/B tested with native speakers', score: 0 },
            { value: 'tried', label: 'I wrote it myself in English', score: 1 },
            { value: 'translated', label: 'I just translated from Hindi/regional language', score: 2 }
          ],
          issue: 'Poor messaging = low conversion rates'
        },
        {
          id: 'competition',
          question: 'How are you competing against established UK/EU/USA brands with 1000+ reviews?',
          subtext: 'Your £15 product vs. their £20 with 4.8 stars and Prime badge',
          options: [
            { value: 'strategy', label: 'I have a differentiation strategy', score: 0 },
            { value: 'price', label: 'I\'m cheaper so I\'ll win', score: 2 },
            { value: 'hope', label: 'I\'m hoping quality speaks for itself', score: 3 }
          ],
          issue: 'No competitive strategy = death by 1000 competitors'
        },
        {
          id: 'partner_access',
          question: 'Have you given anyone read-only access to your Amazon account for audits?',
          subtext: 'This is how we find the issues Amazon doesn\'t show you',
          options: [
            { value: 'yes', label: 'Yes, I understand how this works', score: 0 },
            { value: 'open', label: 'No, but I\'m open to it', score: 0 },
            { value: 'unsure', label: 'I need to understand this better', score: 1 }
          ],
          issue: 'Access barrier'
        }
      ]
    },
    hi: {
      heroTitle: "भारतीय विक्रेताओं के लिए मुफ्त Amazon UK/EU/USA ऑडिट",
      heroSubtitle: "अधिकांश भारतीय विक्रेता गलतियों में अपने पहले £10k खो देते हैं जिन्हें हम 5 मिनट में देख सकते हैं",
      questions: [
        {
          id: 'vat_compliance',
          question: 'क्या आप जानते हैं कि आपका VAT पंजीकरण आपकी पहली UK/EU बिक्री को ब्लॉक कर देगा?',
          subtext: '73% भारतीय विक्रेता VAT मुद्दों के कारण 30 दिनों के भीतर निलंबित हो जाते हैं',
          options: [
            { value: 'compliant', label: 'हां, मैं VAT पंजीकृत और अनुपालन हूं', score: 0 },
            { value: 'registered', label: 'मेरे पास VAT नंबर है लेकिन सही सेट अप नहीं पता', score: 2 },
            { value: 'no_idea', label: 'मुझे नहीं पता यह क्या है', score: 3 }
          ],
          issue: 'VAT अनुपालन अंतराल = खाता निलंबन'
        }
        // ... rest of Hindi translations
      ]
    }
  },

  uae: {
    en: {
      heroTitle: "Free Amazon UK/EU/USA Audit for UAE Sellers",
      heroSubtitle: "MENA sellers waste months on compliance issues we solve in one call",
      questions: [
        {
          id: 'product_compliance',
          question: 'Do you know which certifications your products need for UK/EU/USA?',
          subtext: 'CE (EU), UKCA (UK), FCC/UL (USA) - wrong paperwork = £10k+ in blocked inventory',
          options: [
            { value: 'certified', label: 'All products have correct certifications', score: 0 },
            { value: 'some', label: 'Some products, checking others', score: 2 },
            { value: 'unknown', label: 'I thought Amazon handles this', score: 3 }
          ],
          issue: 'Compliance gaps = inventory stuck in FBA'
        },
        {
          id: 'western_buyers',
          question: 'Have you tested if Western buyers perceive your brand as "premium" or "cheap"?',
          subtext: 'UAE sellers often price too high without the brand story to support it',
          options: [
            { value: 'tested', label: 'I\'ve validated positioning with target customers', score: 0 },
            { value: 'assumed', label: 'My products are premium so pricing reflects that', score: 2 },
            { value: 'guessing', label: 'I set prices based on competitors', score: 1 }
          ],
          issue: 'Positioning mismatch = low conversion'
        },
        {
          id: 'currency_impact',
          question: 'How are you handling AED → GBP/EUR/USD fluctuations on your margins?',
          subtext: 'Currency swings can wipe out 15-20% of profit overnight',
          options: [
            { value: 'hedged', label: 'I have a currency strategy', score: 0 },
            { value: 'watching', label: 'I monitor it but don\'t hedge', score: 1 },
            { value: 'ignoring', label: 'I haven\'t thought about this', score: 2 }
          ],
          issue: 'Currency risk = profit volatility'
        },
        {
          id: 'logistics',
          question: 'Are you using FBA Pan-European or sending stock to each country separately?',
          subtext: 'Wrong logistics setup = 2-3x higher fees + slow delivery',
          options: [
            { value: 'optimized', label: 'I\'m using Pan-EU with proper setup', score: 0 },
            { value: 'local', label: 'Sending to each marketplace separately', score: 2 },
            { value: 'confused', label: 'I don\'t understand the options', score: 3 }
          ],
          issue: 'Logistics inefficiency = cash burn'
        },
        {
          id: 'local_competition',
          question: 'How are you beating local UK/EU brands that have home advantage?',
          subtext: 'They have faster shipping, local reviews, and brand recognition',
          options: [
            { value: 'differentiated', label: 'I have clear unique selling points', score: 0 },
            { value: 'price', label: 'Lower prices', score: 2 },
            { value: 'hoping', label: 'Product quality will win', score: 3 }
          ],
          issue: 'No differentiation = race to bottom'
        },
        {
          id: 'partner_access',
          question: 'Have you given anyone read-only Seller Central access for professional audits?',
          subtext: 'We need to see inside to find what Amazon won\'t tell you',
          options: [
            { value: 'yes', label: 'Yes, I\'ve worked with agencies before', score: 0 },
            { value: 'open', label: 'No, but I understand it\'s standard practice', score: 0 },
            { value: 'concerned', label: 'I\'m worried about security', score: 1 }
          ],
          issue: 'Access barrier'
        }
      ]
    },
    ar: {
      heroTitle: "تدقيق مجاني لـ Amazon UK/EU/USA للبائعين الإماراتيين",
      heroSubtitle: "معظم بائعي منطقة الشرق الأوسط وشمال أفريقيا يضيعون شهورًا في مشاكل الامتثال التي نحلها في مكالمة واحدة",
      questions: [
        {
          id: 'product_compliance',
          question: 'هل تعرف أي الشهادات تحتاجها منتجاتك لـ UK/EU/USA؟',
          subtext: 'CE (EU), UKCA (UK), FCC/UL (USA) - أوراق خاطئة = £10k+ مخزون محظور',
          options: [
            { value: 'certified', label: 'جميع المنتجات لديها شهادات صحيحة', score: 0 },
            { value: 'some', label: 'بعض المنتجات، أتحقق من الأخرى', score: 2 },
            { value: 'unknown', label: 'اعتقدت أن Amazon تتعامل مع هذا', score: 3 }
          ],
          issue: 'فجوات الامتثال = مخزون عالق في FBA'
        }
        // ... rest of Arabic translations
      ]
    }
  },

  mexico: {
    en: {
      heroTitle: "Free Amazon USA/UK/EU Audit for Mexican Sellers",
      heroSubtitle: "Mexican brands lose thousands to USMCA mistakes and tariffs they shouldn't pay",
      questions: [
        {
          id: 'usmca',
          question: 'Are you actually using USMCA zero-tariff benefits for USA sales?',
          subtext: 'Most Mexican sellers overpay 15-25% in tariffs they could avoid',
          options: [
            { value: 'yes', label: 'Yes, I have USMCA certification', score: 0 },
            { value: 'heard', label: 'I\'ve heard of it but haven\'t set it up', score: 2 },
            { value: 'no', label: 'What is USMCA?', score: 3 }
          ],
          issue: 'USMCA missed = paying unnecessary tariffs'
        },
        {
          id: 'usa_competition',
          question: 'How are you competing against massive USA brands with unlimited ad budgets?',
          subtext: 'Walmart/Target sellers moving to Amazon with brand recognition + deep pockets',
          options: [
            { value: 'niche', label: 'I target underserved niches', score: 0 },
            { value: 'price', label: 'Lower prices', score: 2 },
            { value: 'organic', label: 'Hoping for organic ranking', score: 3 }
          ],
          issue: 'No strategy = crushed by big brands'
        },
        {
          id: 'hispanic_market',
          question: 'Are you targeting the 62 million Hispanic Americans who prefer bilingual brands?',
          subtext: 'Mexican authenticity is a superpower in USA - most sellers waste it',
          options: [
            { value: 'targeting', label: 'Yes, my brand story leverages this', score: 0 },
            { value: 'bilingual', label: 'I have bilingual listings', score: 1 },
            { value: 'english_only', label: 'English-only, targeting everyone', score: 2 }
          ],
          issue: 'Missing heritage advantage = generic brand'
        },
        {
          id: 'cross_border',
          question: 'Do you know your true landed cost in USA after ALL fees, duties, and FBA?',
          subtext: 'MXN → USD conversion + shipping + customs + FBA + returns = 50%+ of sale price',
          options: [
            { value: 'calculated', label: 'Yes, I have detailed cost model', score: 0 },
            { value: 'estimates', label: 'I have rough estimates', score: 1 },
            { value: 'guessing', label: 'I\'m guessing based on product cost', score: 3 }
          ],
          issue: 'Hidden costs = no profit'
        },
        {
          id: 'certifications',
          question: 'Do your products have FCC/UL/FDA certifications required for USA?',
          subtext: 'Incorrect certs = account suspension + inventory destruction',
          options: [
            { value: 'certified', label: 'All products certified', score: 0 },
            { value: 'some', label: 'Working on it', score: 2 },
            { value: 'none', label: 'Didn\'t know this was required', score: 3 }
          ],
          issue: 'Compliance gaps = blocked inventory'
        },
        {
          id: 'partner_access',
          question: '¿Has dado acceso de solo lectura a tu cuenta de Amazon para auditorías?',
          subtext: 'Así encontramos lo que Amazon no te muestra',
          options: [
            { value: 'yes', label: 'Sí, entiendo cómo funciona', score: 0 },
            { value: 'open', label: 'No, pero estoy abierto a ello', score: 0 },
            { value: 'unsure', label: 'Necesito entender esto mejor', score: 1 }
          ],
          issue: 'Barrera de acceso'
        }
      ]
    },
    es: {
      heroTitle: "Auditoría Gratuita de Amazon USA/UK/EU para Vendedores Mexicanos",
      heroSubtitle: "Las marcas mexicanas pierden miles por errores USMCA y aranceles que no deberían pagar",
      questions: [
        {
          id: 'usmca',
          question: '¿Estás realmente usando los beneficios de cero aranceles del USMCA para ventas en USA?',
          subtext: 'La mayoría de vendedores mexicanos sobrepagan 15-25% en aranceles que podrían evitar',
          options: [
            { value: 'yes', label: 'Sí, tengo certificación USMCA', score: 0 },
            { value: 'heard', label: 'He oído de ello pero no lo configuré', score: 2 },
            { value: 'no', label: '¿Qué es USMCA?', score: 3 }
          ],
          issue: 'USMCA perdido = pago de aranceles innecesarios'
        },
        {
          id: 'usa_competition',
          question: '¿Cómo compites contra marcas estadounidenses masivas con presupuestos publicitarios ilimitados?',
          subtext: 'Vendedores de Walmart/Target moviéndose a Amazon con reconocimiento de marca + bolsillos profundos',
          options: [
            { value: 'niche', label: 'Me dirijo a nichos desatendidos', score: 0 },
            { value: 'price', label: 'Precios más bajos', score: 2 },
            { value: 'organic', label: 'Esperando ranking orgánico', score: 3 }
          ],
          issue: 'Sin estrategia = aplastado por grandes marcas'
        },
        {
          id: 'hispanic_market',
          question: '¿Estás dirigiéndote a los 62 millones de hispanoamericanos que prefieren marcas bilingües?',
          subtext: 'La autenticidad mexicana es un superpoder en USA - la mayoría de vendedores la desperdician',
          options: [
            { value: 'targeting', label: 'Sí, mi historia de marca aprovecha esto', score: 0 },
            { value: 'bilingual', label: 'Tengo listados bilingües', score: 1 },
            { value: 'english_only', label: 'Solo inglés, dirigido a todos', score: 2 }
          ],
          issue: 'Perder ventaja de herencia = marca genérica'
        },
        {
          id: 'cross_border',
          question: '¿Conoces tu costo real en USA después de TODAS las tarifas, aranceles y FBA?',
          subtext: 'Conversión MXN → USD + envío + aduana + FBA + devoluciones = 50%+ del precio de venta',
          options: [
            { value: 'calculated', label: 'Sí, tengo modelo de costos detallado', score: 0 },
            { value: 'estimates', label: 'Tengo estimaciones aproximadas', score: 1 },
            { value: 'guessing', label: 'Estoy adivinando basado en costo del producto', score: 3 }
          ],
          issue: 'Costos ocultos = sin ganancia'
        },
        {
          id: 'certifications',
          question: '¿Tus productos tienen certificaciones FCC/UL/FDA requeridas para USA?',
          subtext: 'Certificados incorrectos = suspensión de cuenta + destrucción de inventario',
          options: [
            { value: 'certified', label: 'Todos los productos certificados', score: 0 },
            { value: 'some', label: 'Trabajando en ello', score: 2 },
            { value: 'none', label: 'No sabía que esto era requerido', score: 3 }
          ],
          issue: 'Brechas de cumplimiento = inventario bloqueado'
        },
        {
          id: 'partner_access',
          question: '¿Has dado acceso de solo lectura a tu cuenta de Amazon para auditorías?',
          subtext: 'Así encontramos lo que Amazon no te muestra',
          options: [
            { value: 'yes', label: 'Sí, entiendo cómo funciona', score: 0 },
            { value: 'open', label: 'No, pero estoy abierto', score: 0 },
            { value: 'unsure', label: 'Necesito entender mejor', score: 1 }
          ],
          issue: 'Barrera de acceso'
        }
      ]
    }
  }
};
