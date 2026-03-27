import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
      title: t('toast.formSubmitted'),
      description: t('toast.formSuccess'),
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
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">{t('contact.card1Title')}</CardTitle>
                <CardDescription className="text-sm">{t('contact.card1Desc')}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-[#22C55E]" />
                </div>
                <CardTitle className="text-xl">{t('contact.card2Title')}</CardTitle>
                <CardDescription className="text-sm">+44 7969 614703</CardDescription>
              </CardHeader>
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
                  <div className="grid sm:grid-cols-2 gap-4">
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.companyLabel')}
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.placeholders.company')}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.specialistLabel')}
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, specialist: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('contact.specialists.any')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">{t('contact.specialists.any')}</SelectItem>
                        <SelectItem value="sarah">{t('contact.specialists.sarah')}</SelectItem>
                        <SelectItem value="marcus">{t('contact.specialists.marcus')}</SelectItem>
                        <SelectItem value="elena">{t('contact.specialists.elena')}</SelectItem>
                        <SelectItem value="james">{t('contact.specialists.james')}</SelectItem>
                        <SelectItem value="priya">{t('contact.specialists.priya')}</SelectItem>
                        <SelectItem value="alex">{t('contact.specialists.alex')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.serviceLabel')}
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('contact.services.guidance')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sprints">{t('contact.services.sprints')}</SelectItem>
                        <SelectItem value="team">{t('contact.services.team')}</SelectItem>
                        <SelectItem value="partnership">{t('contact.services.partnership')}</SelectItem>
                        <SelectItem value="academy">{t('contact.services.academy')}</SelectItem>
                        <SelectItem value="guidance">{t('contact.services.guidance')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.messageLabel')}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t('contact.placeholders.message')}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg font-semibold">
                    {t('contact.submitButton')}
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