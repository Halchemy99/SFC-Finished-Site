import React from 'react';
import { ArrowRight, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const { t } = useTranslation();
  
  const caseStudies = [
    {
      id: 'pachakuti',
      category: t('caseStudies.pachakuti.category'),
      client: t('caseStudies.pachakuti.client'),
      industry: t('caseStudies.pachakuti.industry'),
      challenge: t('caseStudies.pachakuti.challenge'),
      solution: t('caseStudies.pachakuti.solution'),
      results: [
        { metric: 'Revenue', value: '£50k', period: '60 days' },
        { metric: 'Category Ranking', value: 'Top 4', period: 'Cacao' },
        { metric: 'CTR Increase', value: '5x', period: 'post-optimization' },
        { metric: 'TROAS', value: '13.00', period: '2.5 months' }
      ],
      image: 'https://customer-assets.emergentagent.com/job_design-75/artifacts/mt1i9td5_Pachakuti.jpg',
      pressLink: 'https://www.confectioneryproduction.com/news/57201/ecuadorian-and-uk-cacao-firm-pachakuti-reports-online-success/',
      testimonial: t('caseStudies.pachakuti.testimonial'),
      author: t('caseStudies.pachakuti.author')
    },
    {
      id: 'hair-guru',
      category: t('caseStudies.hairGuru.category'),
      client: t('caseStudies.hairGuru.client'),
      industry: t('caseStudies.hairGuru.industry'),
      challenge: t('caseStudies.hairGuru.challenge'),
      solution: t('caseStudies.hairGuru.solution'),
      results: [
        { metric: 'Revenue', value: '£25k', period: '30 days' },
        { metric: 'CTR Improvement', value: '5x', period: 'immediate' },
        { metric: 'Category Ranking', value: 'Top 4', period: 'haircare' }
      ],
      image: 'https://customer-assets.emergentagent.com/job_design-75/artifacts/orz3hp50_Jamie%20Shepard%20hair%20Guru.jpg',
      pressLink: null,
      testimonial: t('caseStudies.hairGuru.testimonial'),
      author: t('caseStudies.hairGuru.author')
    },
    {
      id: 'leon',
      category: t('caseStudies.leon.category'),
      client: t('caseStudies.leon.client'),
      industry: t('caseStudies.leon.industry'),
      challenge: t('caseStudies.leon.challenge'),
      solution: t('caseStudies.leon.solution'),
      results: [
        { metric: 'Fresh Trial', value: 'Sold Out', period: '3 weeks' },
        { metric: 'Planned Duration', value: '12 weeks', period: 'exceeded' },
        { metric: 'Next Phase', value: 'New Products', period: 'ready meals' }
      ],
      image: 'https://customer-assets.emergentagent.com/job_design-75/artifacts/vdymt266_LEON.jpg',
      pressLink: null,
      testimonial: t('caseStudies.leon.testimonial'),
      author: t('caseStudies.leon.author')
    },
    {
      id: 'reborn',
      category: t('caseStudies.reborn.category'),
      client: t('caseStudies.reborn.client'),
      industry: t('caseStudies.reborn.industry'),
      challenge: t('caseStudies.reborn.challenge'),
      solution: t('caseStudies.reborn.solution'),
      results: [
        { metric: 'Buy Box Share', value: '99%', period: 'from 65%' },
        { metric: 'FBA/FBM', value: 'Optimized', period: 'by SKU' },
        { metric: 'US Market', value: 'Ready', period: 'roadmap built' },
        { metric: 'Sustainability', value: 'Certified', period: 'Climate Pledge' }
      ],
      image: 'https://customer-assets.emergentagent.com/job_design-75/artifacts/i714ugcm_Reborn%20Team.jpeg',
      pressLink: 'https://www.housewaresnews.net/amazon-selects-reborn-for-its-sustainability-accelerator/',
      testimonial: t('caseStudies.reborn.testimonial'),
      author: t('caseStudies.reborn.author')
    }
  ];

  return (
    <>
      <SEO 
        title="Amazon Marketing Case Studies | Proven Client Results & Success Stories"
        description="Real Amazon PPC & SEO case studies showing 3-5x ROI, 240% sales growth, and international expansion success. See how we grow e-commerce brands."
        keywords="amazon case study, amazon ppc results, amazon seo case study, ecommerce success stories, amazon agency results 2026"
        canonical="https://www.superfly-commerce.com/case-studies"
      />
      <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">{t('caseStudies.badge')}</Badge>
          <h1 className="text-5xl font-bold mb-6">
            {t('caseStudies.title')} <span className="text-[#22C55E]">{t('caseStudies.titleGreen')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, idx) => (
            <div key={study.id} className={`flex flex-col ${
              idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center`}>
              {/* Image */}
              <div className="lg:w-1/2">
                {study.pressLink ? (
                  <a 
                    href={study.pressLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  >
                    <img 
                      src={study.image} 
                      alt={study.client}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ) : (
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={study.image} 
                      alt={study.client}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <Badge className="bg-blue-100 text-blue-600 mb-4">{study.category}</Badge>
                <h2 className="text-4xl font-bold mb-4">{study.client}</h2>
                <p className="text-lg text-gray-600 mb-2">{study.industry}</p>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#22C55E]" />
                      {t('caseStudies.challenge')}
                    </h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#22C55E]" />
                      {t('caseStudies.solution')}
                    </h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className={`mt-8 grid ${study.results.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-3'} gap-4`}>
                  {study.results.map((result, ridx) => (
                    <div key={ridx} className="bg-green-50 p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-[#22C55E] mb-1">{result.value}</div>
                      <div className="text-sm text-gray-600 mb-1">{result.metric}</div>
                      <div className="text-xs text-gray-500">{result.period}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-8 bg-white p-6 rounded-xl border-l-4 border-[#22C55E]">
                  <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                  <p className="text-sm font-semibold text-gray-900">{study.author}</p>
                </div>

                <a href="/#contact">
                  <Button className="mt-6 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full">
                    {t('caseStudies.getResults')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{t('caseStudies.ctaTitle')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('caseStudies.ctaSubtitle')}
          </p>
          <a href="/#contact">
            <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              {t('caseStudies.ctaButton')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default CaseStudies;