import React from 'react';
import { Rocket, Users, TrendingUp, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Rocket,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Quick Win Packages',
      subtitle: 'Fixed-Price Amazon Sprints',
      badge: 'MOST POPULAR',
      features: [
        'Listing Optimization Sprint',
        'A+ Content Package'
      ],
      buttonText: 'View Quick Wins',
      buttonVariant: 'default'
    },
    {
      id: 2,
      icon: Users,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Expert Matching',
      subtitle: 'Hand-Picked Specialists',
      features: [
        'Vetted specialist network',
        'Project scoping included'
      ],
      buttonText: 'Meet Specialists',
      buttonVariant: 'default'
    },
    {
      id: 3,
      icon: TrendingUp,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Growth Share Partnership',
      subtitle: 'Performance-Based Model',
      features: [
        'Revenue-share retainers',
        'Aligned incentives'
      ],
      buttonText: 'Explore Partnership',
      buttonVariant: 'default'
    },
    {
      id: 4,
      icon: GraduationCap,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Amazon Mastery Academy',
      subtitle: 'Training & Advisory',
      features: [
        'Expert-led workshops',
        'Ongoing support'
      ],
      buttonText: 'Start Learning',
      buttonVariant: 'default'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Four Ways to Grow{' '}
            <span className="text-[#22C55E]">Your Amazon Business</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white relative">
                {service.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white px-4 py-1 rounded-full">
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader className="pt-8">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-[#22C55E] font-semibold text-lg">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg font-semibold">
                    {service.buttonText} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;