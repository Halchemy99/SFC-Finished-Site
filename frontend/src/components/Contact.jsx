import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    specialist: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submitted!",
      description: "We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      specialist: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    'Free Amazon account assessment',
    'Performance-based retainer options',
    'Sustainability discount assessment',
    'Charitable impact breakdown'
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-[#22C55E] rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Partner With Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Grow Sustainably?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Book a discovery call to explore performance-based retainers and sustainability discounts. No sales pitch—just honest advice about sustainable Amazon growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">Book Discovery Call</CardTitle>
                <CardDescription className="text-sm">Schedule via Calendly</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">WhatsApp Us</CardTitle>
                <CardDescription className="text-sm">+44 7969 614703</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">Email Us</CardTitle>
                <CardDescription className="text-sm">harry@superflycommerce.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">Location</CardTitle>
                <CardDescription className="text-sm">Global Amazon Specialists</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Discovery Call</CardTitle>
                <CardDescription>
                  Tell us about your Amazon business and we'll design a performance-based partnership for sustainable growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Benefits */}
                <div className="mb-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">What You'll Get on Our Call</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested in Working With
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, specialist: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any specialist (we'll match you)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any specialist (we'll match you)</SelectItem>
                        <SelectItem value="sarah">Sarah (PPC & Campaign Expert)</SelectItem>
                        <SelectItem value="marcus">Marcus (Listing & SEO Expert)</SelectItem>
                        <SelectItem value="elena">Elena (Global Expansion Expert)</SelectItem>
                        <SelectItem value="james">James (Photography & Video Expert)</SelectItem>
                        <SelectItem value="priya">Priya (Analytics & Data Expert)</SelectItem>
                        <SelectItem value="alex">Alex (Launch & Strategy Expert)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sprints">Amazon Sprint Packages (Fixed-Price)</SelectItem>
                        <SelectItem value="team">Amazon Dream Team (Curated Specialists)</SelectItem>
                        <SelectItem value="partnership">Growth Share Partnership (Performance-Based)</SelectItem>
                        <SelectItem value="academy">Amazon Mastery Academy (Training & Advisory)</SelectItem>
                        <SelectItem value="guidance">Not sure - need guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Amazon Goals
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share your goals and challenges..."
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg font-semibold">
                    Book Discovery Call
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Free consultation • Performance-based options • Sustainability discounts available
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
  </svg>
);

export default Contact;