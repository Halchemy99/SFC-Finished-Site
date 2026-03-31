import React from 'react';
import { ArrowRight, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'pachakuti',
      category: 'Amazon Launch',
      client: 'Pachakuti',
      industry: 'Ceremonial Cacao',
      challenge: 'Entering Amazon UK with no sales history, low review count, and premium pricing in a highly competitive cacao category dominated by established brands. Ceremonial cacao straight from the Ecuadorian Amazon needed to stand out.',
      solution: 'Structured UK launch via FBA, keyword-driven listing build, A+ content creation, brand store creation, and controlled PPC testing to validate conversion before scaling. Strategically focused on ranking for under-appreciated keywords.',
      results: [
        { metric: 'Revenue', value: '£50k', period: '60 days' },
        { metric: 'Category Ranking', value: 'Top 4', period: 'Cacao' },
        { metric: 'CTR Increase', value: '5x', period: 'post-optimization' },
        { metric: 'TROAS', value: '13.00', period: '2.5 months' }
      ],
      image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Superfly helped us launch our ceremonial cacao from the Ecuadorian Amazon and hit Top 4 in one of the most competitive categories on Amazon UK.',
      author: 'Pachakuti Team'
    },
    {
      id: 'hair-guru',
      category: 'Brand Rebrand & Recovery',
      client: 'Hair Guru',
      industry: 'Hair Fibres',
      challenge: 'EU competitors were being outspent by non-EU brands on content and advertising, leading to erosion of market share in the high-competition haircare category. Hair fibres for men and women needed a complete repositioning.',
      solution: 'Full listing rebuild, keyword strategy overhaul, A+ content creation, and aggressive PPC structure designed to reclaim category visibility and regain market share. Initiated a full brand rebrand that inspired their website and packaging.',
      results: [
        { metric: 'Revenue', value: '£25k', period: '30 days' },
        { metric: 'CTR Improvement', value: '5x', period: 'immediate' },
        { metric: 'Category Ranking', value: 'Top 4', period: 'haircare' }
      ],
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Superfly initiated a full brand rebrand that has even inspired our website and packaging. So much for little Amazon agencies!',
      author: 'Hair Guru Team'
    },
    {
      id: 'leon',
      category: 'Amazon Fresh Launch',
      client: 'LEON',
      industry: 'Restaurant Ready Meals',
      challenge: 'Launching a restaurant brand\'s ambient product range on Amazon Fresh UK, which operates with different rules, buy box dynamics, and consumer expectations compared to standard Amazon.',
      solution: 'Vendor Central onboarding, product categorization, and content optimization tailored for Amazon Fresh\'s unique search behavior. Used data to inform next steps and create new products for seller accounts.',
      results: [
        { metric: 'Fresh Trial', value: 'Sold Out', period: '3 weeks' },
        { metric: 'Planned Duration', value: '12 weeks', period: 'exceeded' },
        { metric: 'Next Phase', value: 'New Products', period: 'ready meals' }
      ],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Fresh trial proved so successful that Superfly are now helping us create new products to launch on our seller accounts. They found a way and used data to inform our next steps.',
      author: 'LEON Team'
    },
    {
      id: 'reborn',
      category: 'Buy Box Recovery & Sustainability',
      client: 'ReBorn',
      industry: 'Sustainable Homeware',
      challenge: 'Resellers had hijacked key listings, eroding margin and brand perception. Lost Buy Box control (down to 65%) and lacked visibility over which SKUs were profitable under FBA versus FBM. Homeware made from recycled materials needed protection.',
      solution: 'Comprehensive FBA/FBM inventory audit, Buy Box tracking and recapture strategy, full listing rebuild (copy, images, A+ content, infographic briefs), 3-month sprint plan with phased US market setup, and Climate Pledge Friendly certification via ClimatePartner.',
      results: [
        { metric: 'Buy Box Share', value: '99%', period: 'from 65%' },
        { metric: 'FBA/FBM', value: 'Optimized', period: 'by SKU' },
        { metric: 'US Market', value: 'Ready', period: 'roadmap built' },
        { metric: 'Sustainability', value: 'Certified', period: 'Climate Pledge' }
      ],
      image: 'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Superfly recaptured our Buy Box share from a flagging 65% to 99%, optimized our FBA/FBM strategy, and helped us achieve Climate Pledge Friendly certification.',
      author: 'ReBorn Homes Team'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">Success Stories</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Real Results from <span className="text-[#22C55E]">Real Brands</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped Amazon sellers achieve sustainable growth through our transparent, performance-based approach.
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
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-96 object-cover"
                  />
                </div>
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
                      Challenge
                    </h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#22C55E]" />
                      Solution
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
                  <p className="text-sm font-semibold text-gray-900">— {study.author}</p>
                </div>

                <a href="/#contact">
                  <Button className="mt-6 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full">
                    Get Similar Results <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve similar results for your Amazon business.
          </p>
          <a href="/#contact">
            <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              Book Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;