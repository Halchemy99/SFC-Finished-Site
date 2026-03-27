import React from 'react';
import { ArrowRight, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'quick-wins',
      category: 'Quick Win Package',
      client: 'EcoHome Essentials',
      industry: 'Home & Kitchen',
      challenge: 'Poor listing visibility and low conversion rates',
      solution: 'Complete listing optimization with A+ content redesign',
      results: [
        { metric: 'Sales Increase', value: '156%', period: '60 days' },
        { metric: 'Conversion Rate', value: '+8.2%', period: '30 days' },
        { metric: 'Organic Ranking', value: 'Top 5', period: 'keywords' }
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: "Superfly's quick win package delivered results faster than we imagined. Our sales doubled within two months!",
      author: 'Sarah Mitchell, Founder'
    },
    {
      id: 'expert-matching',
      category: 'Expert Matching',
      client: 'FitGear Pro',
      industry: 'Sports & Fitness',
      challenge: 'Needed PPC expertise to scale advertising profitably',
      solution: 'Matched with PPC specialist for campaign optimization',
      results: [
        { metric: 'ROAS', value: '11.4x', period: 'avg' },
        { metric: 'Ad Spend Efficiency', value: '+35%', period: '90 days' },
        { metric: 'New Customer Growth', value: '243%', period: 'quarter' }
      ],
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Working with a dedicated PPC expert transformed our advertising. We finally have profitable campaigns at scale.',
      author: 'Marcus Chen, CEO'
    },
    {
      id: 'growth-partnership',
      category: 'Growth Share Partnership',
      client: 'Pure Wellness Co',
      industry: 'Health & Personal Care',
      challenge: 'Needed full-service management with aligned incentives',
      solution: 'Revenue-share partnership with dedicated account manager',
      results: [
        { metric: 'Revenue Growth', value: '£1.3M', period: 'annual' },
        { metric: 'Product Launches', value: '12', period: 'successful' },
        { metric: 'Market Share', value: '+45%', period: 'category' }
      ],
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'The performance-based model meant Superfly was as invested in our success as we were. Game changer.',
      author: 'Elena Rodriguez, Co-Founder'
    },
    {
      id: 'amazon-academy',
      category: 'Amazon Mastery Academy',
      client: 'Artisan Craft Collective',
      industry: 'Handmade & Crafts',
      challenge: 'Small team needed to learn Amazon best practices',
      solution: 'Comprehensive training program with ongoing advisory',
      results: [
        { metric: 'Team Efficiency', value: '+200%', period: 'output' },
        { metric: 'Sales Growth', value: '85%', period: '6 months' },
        { metric: 'Return Rate', value: '-40%', period: 'improvement' }
      ],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'The academy gave our team the skills to manage Amazon in-house while having expert support when needed.',
      author: 'James Patterson, Operations Director'
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
                <div className="mt-8 grid grid-cols-3 gap-4">
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

                <Link to={`/services/${study.id}`}>
                  <Button className="mt-6 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full">
                    View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
          <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
            Book Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;