import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "About Superfly Commerce",
      questions: [
        {
          question: "What makes Superfly Commerce different from other Amazon agencies?",
          answer: "Superfly Commerce operates on transparent, performance-based pricing models, cutting through traditional heavy agency fees. We align our success with yours through revenue-share partnerships, ensuring we're incentivized to grow your business. Our approach is built on doughnut economics principles - sustainable growth that benefits both your brand and our partnership. Unlike traditional agencies that charge fixed retainers regardless of results, we only succeed when you succeed."
        },
        {
          question: "What is performance-based pricing?",
          answer: "Performance-based pricing means our fees are directly tied to your revenue growth. We offer tiered partnership models where our compensation increases as your sales increase. This ensures our goals are 100% aligned with yours. For example, our Growth Partnership tier operates on a revenue-share model, where we invest our expertise and only earn when you earn. This eliminates the risk of paying hefty agency fees without guaranteed results."
        },
        {
          question: "Do you work with brands of all sizes?",
          answer: "We work with e-commerce brands generating $500K to $50M+ in annual revenue. Our services scale based on your business stage. Smaller brands benefit from our Starter tier with transparent hourly rates, while larger brands often choose our Growth Partnership model for full-service support. We're selective about partnerships to ensure we can deliver exceptional results for every client."
        }
      ]
    },
    {
      category: "Services & Expertise",
      questions: [
        {
          question: "What services does Superfly Commerce offer?",
          answer: "We offer comprehensive Amazon marketplace services including: Amazon PPC Management (Sponsored Products, Brands, Display), Amazon SEO & Listing Optimization, Brand Strategy & Development, International Marketplace Expansion (EU, UK, Canada, Australia), Walmart Marketplace Management, Performance Analytics & Reporting, and Training & Academy programs. All services can be bundled or selected individually based on your needs."
        },
        {
          question: "Do you manage Amazon PPC in-house or outsource?",
          answer: "All Amazon PPC management is handled 100% in-house by our certified team. We never outsource to third parties. Our PPC specialists are Amazon Ads certified and manage campaigns daily using proprietary optimization frameworks. You'll have a dedicated account manager who knows your brand inside-out and makes data-driven decisions to maximize your ROAS (Return on Ad Spend)."
        },
        {
          question: "Can you help with international Amazon marketplaces?",
          answer: "Yes, international expansion is one of our core specialties. We manage brands across Amazon North America (US, Canada, Mexico), Amazon Europe (UK, Germany, France, Italy, Spain), and Amazon Asia-Pacific (Australia, Japan). Our team handles everything from marketplace setup, localization, international PPC, compliance, and cross-border logistics strategy. We've helped brands successfully launch in 15+ countries."
        },
        {
          question: "Do you work with Walmart marketplace?",
          answer: "Absolutely! Walmart marketplace is a high-growth opportunity we actively manage for clients. We provide Walmart PPC management, listing optimization, category strategy, and seller performance improvement. Many Amazon sellers overlook Walmart, but we've seen brands increase total marketplace revenue by 30-40% by diversifying to Walmart with the right strategy."
        }
      ]
    },
    {
      category: "Pricing & Contracts",
      questions: [
        {
          question: "How much does Superfly Commerce cost?",
          answer: "We offer three transparent pricing tiers: Starter (hourly rate for specific projects), Professional (monthly retainer starting at $2,500/month), and Growth Partnership (revenue-share model with no upfront retainer). Pricing depends on your revenue, marketplace presence, and service scope. We provide custom quotes after a free discovery call where we assess your business goals and recommend the best-fit model."
        },
        {
          question: "Is there a minimum contract length?",
          answer: "Our Professional tier requires a 3-month minimum commitment to allow time for strategy implementation and results. Growth Partnership agreements are typically 6-12 months to align with sustainable growth goals. We offer month-to-month for Starter tier projects. All contracts include performance benchmarks and transparency in reporting, so you always know what you're getting."
        },
        {
          question: "What's included in the Growth Partnership model?",
          answer: "The Growth Partnership is our most comprehensive offering. It includes: Full-service Amazon/Walmart management, Dedicated account team, Unlimited PPC budget management, Monthly strategy sessions, Priority support, International expansion strategy, Brand development, and Custom analytics dashboards. We operate as an extension of your team with a revenue-share model, meaning we invest resources heavily because we only win when you win."
        },
        {
          question: "Do you charge a percentage of ad spend?",
          answer: "No, we do NOT charge a percentage of your Amazon PPC ad spend. Many agencies charge 10-20% of ad spend, which incentivizes them to increase your budget regardless of efficiency. Instead, our fees are based on overall revenue growth or fixed monthly retainers. This ensures we focus on profitability and ROAS, not just spending more money on ads."
        }
      ]
    },
    {
      category: "Results & Performance",
      questions: [
        {
          question: "What kind of results can I expect?",
          answer: "While results vary by brand and category, our clients typically see: 3-5x ROI on Amazon PPC within 6 months, 30-50% increase in organic ranking within 90 days, 20-40% revenue growth in year one, and improved profit margins through better ad efficiency. We provide detailed case studies during discovery calls showing real client results in your industry."
        },
        {
          question: "How long does it take to see results?",
          answer: "Initial improvements typically appear within 30-45 days as we optimize existing campaigns and listings. Significant growth momentum builds in months 2-4 as strategies mature. By month 6, most clients see substantial year-over-year improvements. Amazon SEO and organic ranking improvements take 60-90 days. International expansion shows results within 90-120 days of market entry."
        },
        {
          question: "What reporting do you provide?",
          answer: "We provide comprehensive monthly performance reports including: PPC metrics (ACOS, ROAS, CPC, conversion rates), Organic ranking changes, Revenue and profit analysis, Competitive landscape updates, and Strategic recommendations for next month. You also get 24/7 access to real-time dashboards showing campaign performance. Monthly strategy calls review results and align on goals."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I get started with Superfly Commerce?",
          answer: "Getting started is simple: 1) Book a free discovery call through our contact form or calendar link, 2) We'll audit your current Amazon presence and discuss goals, 3) Receive a custom proposal with pricing and strategy, 4) Sign agreement and grant account access, 5) Onboarding begins within 48 hours. Most clients are fully onboarded and seeing optimizations within 2 weeks."
        },
        {
          question: "What access do you need to my Amazon account?",
          answer: "We require access to your Amazon Seller Central or Vendor Central account (view and edit permissions for advertising and catalog). We never need access to banking information or withdrawal capabilities. We use secure role-based access controls and can provide NDAs. Your data security is a top priority - we're SOC 2 compliant and follow industry-standard security protocols."
        },
        {
          question: "Can you take over from my current agency?",
          answer: "Yes, we frequently help brands transition from underperforming agencies. We'll conduct a comprehensive audit of your current setup, identify gaps, and create a transition plan that minimizes disruption. We'll review existing contracts to ensure smooth handoff and can often improve results within the first 30 days by fixing common agency mistakes like poor keyword targeting or inefficient bid strategies."
        }
      ]
    }
  ];

  // Flatten all questions for schema
  const allQuestions = faqs.flatMap(category => category.questions);

  // Create schema markup
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allQuestions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [allQuestions]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Everything you need to know about working with Superfly Commerce
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = `${categoryIndex}-${index}`;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 flex-1">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-1" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                          )}
                        </button>
                        {isOpen && (
                          <CardContent className="px-6 pb-6 pt-0">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg mb-6 text-white/90">
                Book a free discovery call and we'll answer all your questions
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#22C55E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default FAQPage;
