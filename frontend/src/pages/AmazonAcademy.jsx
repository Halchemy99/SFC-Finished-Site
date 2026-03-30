import React from 'react';
import { Check, ArrowRight, BookOpen, Video, Users, Award, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ServiceCTA from '../components/ServiceCTA';

const AmazonAcademy = () => {
  const courses = [
    {
      title: 'Amazon Fundamentals',
      duration: '4 weeks',
      level: 'Beginner',
      topics: ['Account setup', 'Product research', 'Listing basics', 'Fulfillment options']
    },
    {
      title: 'PPC Mastery',
      duration: '6 weeks',
      level: 'Intermediate',
      topics: ['Campaign structure', 'Keyword research', 'Bid strategies', 'Performance optimization']
    },
    {
      title: 'Advanced Growth',
      duration: '8 weeks',
      level: 'Advanced',
      topics: ['International expansion', 'Brand building', 'Analytics', 'Scaling strategies']
    }
  ];

  const deliverables = [
    { icon: BookOpen, title: 'Video Modules', desc: '50+ hours of content' },
    { icon: Users, title: 'Live Workshops', desc: 'Weekly group sessions' },
    { icon: Video, title: '1-on-1 Coaching', desc: 'Monthly strategy calls' },
    { icon: Award, title: 'Certification', desc: 'Verified completion' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 mb-4">Amazon Mastery Academy</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Master Amazon <span className="text-[#22C55E]">In-House</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from experts, implement with confidence, and scale with support. Training + advisory for teams who want to own their Amazon success.
          </p>
          
          {/* Skool Community + Private Training Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a 
              href="https://www.skool.com/@superfly-commerce" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5" />
              Join Skool Community
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Target className="w-5 h-5" />
              Enquire About Private Training
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Card key={idx} className="border-2 border-gray-200 text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-blue-100 text-blue-600">{course.level}</Badge>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-lg">{course.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Topics Covered:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, tidx) => (
                      <li key={tidx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#22C55E]" />
                        <span className="text-sm text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <Card className="border-2 border-[#22C55E] max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Academy Pricing</CardTitle>
              <div className="text-5xl font-bold text-[#22C55E] mb-2">From £1,200</div>
              <CardDescription className="text-lg">Per team member / Per course</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {[
                  'Lifetime access to course materials',
                  'Live workshop sessions',
                  'Monthly 1-on-1 coaching calls',
                  'Private Slack community',
                  'Ongoing advisory support',
                  'Certificate of completion',
                  'Resource library & templates'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#22C55E]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/#contact">
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg">
                  Enroll Your Team <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <Badge className="bg-green-100 text-[#22C55E] mb-6">Case Study</Badge>
          <h2 className="text-4xl font-bold mb-6">Artisan Craft Collective: 200% Efficiency Boost</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Artisan Craft case study"
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
                  Small handmade business with 3-person team. No Amazon expertise, relying on expensive consultants. 
                  Wanted to bring operations in-house but lacked knowledge.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#22C55E]" />
                  Our Solution
                </h3>
                <p className="text-gray-700">
                  Enrolled their entire team in Amazon Mastery Academy. Combined self-paced learning with 
                  weekly group workshops and monthly 1-on-1 coaching focused on their specific products.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">+200%</div>
                  <div className="text-sm text-gray-600">Efficiency</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">85%</div>
                  <div className="text-sm text-gray-600">Sales Growth</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">-40%</div>
                  <div className="text-sm text-gray-600">Returns</div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-[#22C55E]">
                <p className="text-gray-700 italic mb-3">
                  The academy gave our team the skills to manage Amazon in-house while having expert support when needed.
                </p>
                <p className="text-sm font-semibold">— James Patterson, Operations Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent CTA for Pricing and Case Studies */}
        <ServiceCTA className="mb-16" />

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Internal Expertise?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stop relying on expensive agencies. Train your team to become Amazon experts.
          </p>
          <a href="/#contact">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              Enroll Your Team Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AmazonAcademy;