import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          form_type: 'discovery_call'
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: t('toast.formSubmitted'),
          description: data.message || t('toast.formSuccess'),
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.detail || 'Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or email harry@superflycommerce.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    t('contact.benefit1'),
    t('contact.benefit2'),
    t('contact.benefit3'),
    t('contact.benefit4')
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-[#22C55E] rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{t('contact.badge')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <a href="https://calendly.com/superflycommerce" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <CardTitle className="text-xl">{t('contact.card1Title')}</CardTitle>
                  <CardDescription className="text-sm">{t('contact.card1Desc')}</CardDescription>
                </CardHeader>
              </a>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <a href="https://wa.me/447969614703" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <CardTitle className="text-xl">{t('contact.card2Title')}</CardTitle>
                  <CardDescription className="text-sm">+44 7969 614703</CardDescription>
                </CardHeader>
              </a>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">{t('contact.card3Title')}</CardTitle>
                <CardDescription className="text-sm">harry@superflycommerce.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">{t('contact.card4Title')}</CardTitle>
                <CardDescription className="text-sm">{t('contact.card4Desc')}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.formTitle')}</CardTitle>
                <CardDescription>
                  {t('contact.formDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Benefits */}
                <div className="mb-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">{t('contact.benefitsTitle')}</h3>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.nameLabel')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.placeholders.name')}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.emailLabel')} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.placeholders.email')}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.messageLabel')}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder={t('contact.placeholders.message')}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : t('contact.submitButton')}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    {t('contact.formFooter')}
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