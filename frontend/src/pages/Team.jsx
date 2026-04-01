import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import SEO from '../components/SEO';

const Team = () => {
  const teamMembers = [
    {
      name: 'Harry Allen',
      role: 'Founder',
      location: 'Global',
      linkedin: 'https://www.linkedin.com/in/harry-allen-91bb311bb/',
      email: 'harry@superflycommerce.com',
      bio: 'Founder of Superfly Commerce with a vision to democratize Amazon success through transparent, performance-based partnerships. Harry believes in cutting through agency bloat and aligning incentives with sustainable growth.'
    },
    {
      name: 'Fernando Clementin',
      role: 'LATAM Lead & Account Manager',
      location: 'Latin America',
      linkedin: 'https://www.linkedin.com/in/fernando-clementin-periodista-traductor/',
      bio: 'Leading our Latin American expansion and managing key client accounts. With expertise in cross-border commerce and multilingual operations, Fernando bridges brands with global markets.'
    },
    {
      name: 'John Lawrence',
      role: 'Operations Lead',
      location: 'Global',
      linkedin: 'https://www.linkedin.com/in/lawrence-angeles/',
      bio: 'Streamlining operations and ensuring smooth delivery across all client engagements. John brings systems thinking and operational excellence to every project.'
    },
    {
      name: 'Yadnesh Kulkarni',
      role: 'Indian Brand Lead',
      location: 'Pune, India',
      bio: 'Based in Pune, Yadnesh is our integral link between Indian brands and the wider market. He specializes in helping Indian sellers navigate international Amazon marketplaces with cultural insight and local expertise.'
    }
  ];

  const values = [
    {
      title: 'Transparency First',
      desc: 'No hidden fees, no inflated retainers. Every pound accounted for.',
      icon: '🔍'
    },
    {
      title: 'Performance-Based',
      desc: 'We only succeed when you succeed. Aligned incentives, shared wins.',
      icon: '📈'
    },
    {
      title: 'Sustainable Growth',
      desc: 'Long-term thinking over quick hacks. Building brands, not just sales spikes.',
      icon: '🌱'
    },
    {
      title: 'Global Collective',
      desc: 'Specialists across continents, united by expertise and commitment.',
      icon: '🌍'
    }
  ];

  return (
    <>
      <SEO 
        title="Meet Our Team | Superfly Commerce Amazon Marketing Experts"
        description="Meet the Amazon marketing experts behind Superfly Commerce. Our team specializes in PPC management, SEO optimization, and international marketplace expansion."
        keywords="amazon marketing team, ecommerce experts, amazon ppc specialists, marketplace management experts"
        canonical="https://www.superfly-commerce.com/team"
      />
      <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">Our Team</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Meet the <span className="text-[#22C55E]">Collective</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not your typical agency. We're Amazon specialists united by a mission: 
            transparent pricing, sustainable growth, and cutting through the bloat.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto bg-white p-12">
            <img 
              src="/team-photo-final.png" 
              alt="Superfly Commerce Team"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-[#22C55E] mb-2">
                        {member.role}
                      </CardDescription>
                      {member.location && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Mail className="w-5 h-5 text-green-600" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12 bg-white rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center mb-8">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            To democratize Amazon success by providing transparent, performance-based partnerships 
            that cut through heavy agency fees. We believe in sustainable growth, aligned incentives, 
            and building long-term success for brands worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Global Specialists</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">£1M+</div>
              <div className="text-lg opacity-90">Revenue Driven</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-lg opacity-90">Continents</div>
            </div>
          </div>
        </div>

        {/* CTA with Career Application Form */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">Want to Join the Collective?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented Amazon specialists who share our values.
            </p>
          </div>
          
          {/* Simple Career Application Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: `LinkedIn: ${formData.get('linkedin') || 'Not provided'}\n\n${formData.get('message')}`,
                  form_type: 'career_application'
                };
                
                try {
                  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact/submit`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                  });
                  
                  if (response.ok) {
                    alert('Application submitted! We\'ll be in touch soon.');
                    e.target.reset();
                  } else {
                    alert('Something went wrong. Please try again or email harry@superflycommerce.com');
                  }
                } catch (error) {
                  alert('Something went wrong. Please try again or email harry@superflycommerce.com');
                }
              }}
              className="space-y-6"
            >
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile URL (we'll check your profile instead of CV)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join Superfly? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="Tell us about your Amazon experience, what you specialize in (PPC, listings, creative, etc.), and why you'd be a great fit for the collective..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
