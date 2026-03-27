import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQ = () => {
  const faqSections = [
    {
      category: 'Pricing & Contracts',
      questions: [
        {
          q: 'How does your pricing work?',
          a: 'We offer transparent, flexible pricing: Fixed-price packages from £150-£1,800, Performance retainers starting at £700/month + revenue share, and custom enterprise solutions. No hidden fees, no long-term contracts on most services.'
        },
        {
          q: 'What\'s the difference between performance retainer and fixed pricing?',
          a: 'Fixed pricing is one-time projects with set deliverables (e.g., listing optimization). Performance retainers are ongoing partnerships where we charge a base fee + percentage of growth we generate. You only pay more when you make more.'
        },
        {
          q: 'Do you require long-term contracts?',
          a: 'No. One-off services require no commitment. Performance retainers are month-to-month after initial 90-day period. We believe in earning your business every month.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept bank transfers, credit/debit cards via Stripe, and can accommodate NET30 terms for established businesses over £5k/month.'
        },
        {
          q: 'Is there a refund policy?',
          a: 'For fixed-price services, we offer a 100% satisfaction guarantee. If you\'re not happy with deliverables, we\'ll revise or refund. Performance retainers are results-based - you only pay the revenue share when we grow your sales.'
        }
      ]
    },
    {
      category: 'Service Delivery',
      questions: [
        {
          q: 'How long does each service take?',
          a: 'Timeline varies: Listing copywriting (3-5 days), Infographics (7-10 days), A+ Content (7-10 days), Photography (14 days), Brand Video (10-14 days), PPC Audit (5-7 days), Full Business Analysis (14-21 days). Rush delivery available for +50% fee.'
        },
        {
          q: 'What\'s included vs what\'s NOT included?',
          a: 'Our scopes are crystal clear. E.g., Photography includes 10 edited images, white background ONLY - lifestyle shots extra. PPC Audit includes campaign setup but NOT ad spend. Brand Video includes editing only - filming/content creation separate. Check each service page for exact scope.'
        },
        {
          q: 'How many revisions do I get?',
          a: 'Most services include 2 rounds of revisions. Additional revisions charged at £75/hour. Major scope changes require new quote.'
        },
        {
          q: 'Do you work with new Amazon sellers?',
          a: 'Yes! Our Amazon Mastery Academy and Starter Sprint packages are perfect for beginners. We also match new sellers with specialists for hands-on guidance.'
        },
        {
          q: 'Can you help with international expansion?',
          a: 'Absolutely. Elena, our global expansion specialist, handles EU, US, Canada, Japan, and Australia marketplaces. Includes VAT setup, translations, and local compliance.'
        }
      ]
    },
    {
      category: 'Working Together',
      questions: [
        {
          q: 'How do I get started?',
          a: 'Book a free discovery call via Calendly, WhatsApp us, or fill out our contact form. We\'ll discuss your needs, recommend the best solution, and can start within 3-5 business days.'
        },
        {
          q: 'Will I have a dedicated contact?',
          a: 'Yes. One-off services have a project manager. Performance retainers include a dedicated specialist. Enterprise clients get a full team with account director.'
        },
        {
          q: 'How do you communicate progress?',
          a: 'Weekly email updates minimum. Performance retainers include weekly video reports. We use Slack, email, or your preferred tool. Monthly strategy calls included in ongoing services.'
        },
        {
          q: 'What access do you need to my Amazon account?',
          a: 'We need Seller Central access (user permissions, not your login). For PPC, we need Campaign Manager access. We\'ll guide you through secure permission setup.'
        },
        {
          q: 'Do you sign NDAs?',
          a: 'Yes, we\'re happy to sign NDAs before discussing your business. All client data is confidential by default.'
        }
      ]
    },
    {
      category: 'Results & Guarantees',
      questions: [
        {
          q: 'What results can I expect?',
          a: 'While results vary, our clients typically see: 80-200% sales increase within 90 days (with PPC optimization), 30-50% improvement in conversion rates (listing optimization), 5-15x ROAS on campaigns. Case studies show specific results.'
        },
        {
          q: 'Do you guarantee results?',
          a: 'We guarantee quality deliverables and effort, not specific outcomes (Amazon\'s algorithm changes constantly). However, our performance-based model means we only earn more when you earn more - total alignment.'
        },
        {
          q: 'What if I\'m not happy with results?',
          a: 'For fixed services: revise or refund. For retainers: cancel anytime after initial period with 30 days notice. We track everything so you can see our impact clearly.'
        },
        {
          q: 'How do you measure success?',
          a: 'Key metrics: Revenue growth, Profit margins, Conversion rate, ACoS/TACoS, Organic ranking, Review velocity. We provide monthly dashboards with all metrics in one place.'
        }
      ]
    },
    {
      category: 'Amazon-Specific',
      questions: [
        {
          q: 'Which Amazon marketplaces do you support?',
          a: 'UK (primary), US, EU (Germany, France, Spain, Italy), Canada, Japan, Australia. We handle VAT registration, translations, and local compliance for each.'
        },
        {
          q: 'Do you work with FBA and FBM?',
          a: 'Yes, both. We optimize for whichever model you use. For FBM, we help with fast shipping setup and Buy Shipping optimization.'
        },
        {
          q: 'Can you help with Amazon suspensions?',
          a: 'We don\'t specialize in reinstatements, but can recommend trusted partners. We focus on prevention through compliant operations.'
        },
        {
          q: 'Do you handle product sourcing?',
          a: 'No, we focus on marketing and optimization. We can recommend sourcing partners in our network.'
        },
        {
          q: 'What about Amazon\'s Brand Registry?',
          a: 'We help with enrollment if you have a trademark. We also optimize brand stores and A+ content for registered brands.'
        }
      ]
    },
    {
      category: 'TikTok Offer Specific',
      questions: [
        {
          q: 'How does the free 4-month TikTok management work?',
          a: 'You pay £0 in management fees for 4 months (worth £3,000). You only cover your TikTok ad spend, content creation costs, and UGC creators (minimum £1,000/month budget). We handle strategy, content planning, campaign management, and optimization.'
        },
        {
          q: 'What happens after the 4 months?',
          a: 'No obligation to continue. If you want to keep going, standard TikTok management is £750/month. Most clients continue because they\'re seeing strong ROI by month 3.'
        },
        {
          q: 'What\'s the catch with the free offer?',
          a: 'No catch. It\'s a limited pilot program to build TikTok case studies. We limit intake to 5 brands per quarter. You must commit to the £1,000/month ad+content budget and be willing to test & iterate.'
        }
      ]
    }
  ];

  return (
    <div className=\"min-h-screen bg-gray-50 pt-24 pb-20\">
      <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Header */}
        <div className=\"text-center mb-16\">
          <Badge className=\"bg-green-100 text-[#22C55E] mb-4\">FAQ</Badge>
          <h1 className=\"text-5xl font-bold mb-6\">
            Frequently Asked <span className=\"text-[#22C55E]\">Questions</span>
          </h1>
          <p className=\"text-xl text-gray-600\">
            Everything you need to know about working with Superfly Commerce
          </p>
        </div>

        {/* FAQ Sections */}
        <div className=\"space-y-8\">
          {faqSections.map((section, sIdx) => (
            <div key={sIdx} className=\"bg-white rounded-2xl p-8 shadow-sm\">
              <h2 className=\"text-2xl font-bold mb-6 text-gray-900\">{section.category}</h2>
              <Accordion type=\"single\" collapsible className=\"w-full\">
                {section.questions.map((faq, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${sIdx}-${qIdx}`} className=\"border-b border-gray-200\">
                    <AccordionTrigger className=\"text-left font-semibold text-gray-900 hover:text-[#22C55E] transition-colors\">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className=\"text-gray-600 leading-relaxed\">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className=\"mt-16 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white\">
          <h2 className=\"text-3xl font-bold mb-4\">Still Have Questions?</h2>
          <p className=\"text-lg mb-8 opacity-90\">
            Book a free discovery call and we'll answer everything specific to your business.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <a href=\"/#contact\">
              <button className=\"bg-white text-[#22C55E] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors\">
                Book Discovery Call
              </button>
            </a>
            <a href=\"https://wa.me/447969614703\" target=\"_blank\" rel=\"noopener noreferrer\">
              <button className=\"bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors\">
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
