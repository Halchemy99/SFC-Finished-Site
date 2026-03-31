import React, { useEffect } from 'react';
import { Check, ArrowRight, Users, Target, Award, TrendingUp, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ServiceCTA from '../components/ServiceCTA';

const ExpertMatching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const specialists = [
    { name: 'Sarah', expertise: 'PPC & Campaign Expert', icon: '🎯' },
    { name: 'Marcus', expertise: 'Listing & SEO Expert', icon: '📝' },
    { name: 'Elena', expertise: 'Global Expansion Expert', icon: '🌍' },
    { name: 'James', expertise: 'Photography & Video Expert', icon: '📸' },
    { name: 'Priya', expertise: 'Analytics & Data Expert', icon: '📊' },
    { name: 'Alex', expertise: 'Launch & Strategy Expert', icon: '🚀' }
  ];

  const howItWorks = [
    { step: '01', title: 'Tell Us Your Needs', desc: 'Share your challenges and goals' },
    { step: '02', title: 'We Match You', desc: 'Get paired with the perfect specialist' },
    { step: '03', title: 'Discovery Call', desc: 'Meet your specialist and plan the project' },
    { step: '04', title: 'Get Results', desc: 'Work directly with vetted experts' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-600 mb-4">Expert Matching</Badge>
          
          {/* Coming Soon Banner */}
          <div className="bg-blue-500 text-white py-3 px-6 rounded-full inline-flex items-center gap-2 mb-6 font-semibold">
            <Zap className="w-5 h-5" />
            Coming Soon - Bringing Talent Closer Within Reach
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Work with Hand-Picked <span className="text-[#22C55E]">Amazon Specialists</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skip the agency overhead. Get matched with vetted specialists who are experts in exactly what you need.
          </p>
        </div>

        {/* Our Specialists */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Collective</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialists.map((specialist, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:shadow-xl transition-all hover:border-[#22C55E]">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{specialist.icon}</div>
                  <CardTitle className="text-2xl">{specialist.name}</CardTitle>
                  <CardDescription className="text-base">{specialist.expertise}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20 bg-white rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center mb-12">How Expert Matching Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <Card className="border-2 border-[#22C55E] max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Flexible Pricing</CardTitle>
              <div className="text-5xl font-bold text-[#22C55E] mb-2">From £800</div>
              <CardDescription className="text-lg">Per specialist engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {[
                  'Direct access to specialist',
                  'Project scoping included',
                  'Transparent hourly or project rates',
                  'No agency markup',
                  'Flexible engagement terms',
                  'Performance guarantees'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#22C55E]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#contact">
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg">
                  Get Matched with a Specialist <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <Badge className="bg-green-100 text-[#22C55E] mb-6">Case Study</Badge>
          <h2 className="text-4xl font-bold mb-6">FitGear Pro: 11.4x ROAS with Expert PPC Specialist</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="FitGear case study"
                className="rounded-2xl w-full h-96 object-cover mb-6"
              />
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#22C55E]" />
                  The Challenge
                </h3>
                <p className="text-gray-700">
                  FitGear Pro was spending £3,000/month on Amazon PPC with poor results. Their ACoS was 45% and they weren't seeing profitable growth.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#22C55E]" />
                  Our Solution
                </h3>
                <p className="text-gray-700">
                  We matched them with Sarah, our PPC specialist with 8+ years Amazon advertising experience. 
                  She restructured their campaigns, implemented advanced bidding strategies, and optimized for profitable conversions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">11.4x</div>
                  <div className="text-sm text-gray-600">ROAS</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">+35%</div>
                  <div className="text-sm text-gray-600">Efficiency</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">243%</div>
                  <div className="text-sm text-gray-600">New Customers</div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-[#22C55E]">
                <p className="text-gray-700 italic mb-3">
                  "Working with a dedicated PPC expert transformed our advertising. We finally have profitable campaigns at scale."
                </p>
                <p className="text-sm font-semibold">— Marcus Chen, CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent CTA for Pricing and Case Studies */}
        <ServiceCTA className="mb-16" />

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="/#contact">
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-8 py-6 text-lg font-semibold">
              Find Your Perfect Specialist Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertMatching;