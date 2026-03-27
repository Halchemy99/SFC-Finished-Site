import React, { useState } from 'react';
import { Mail, Send, Sprout, TrendingUp, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: t('toast.subscribed'),
          description: data.message || t('toast.subscribeSuccess'),
        });
        setEmail('');
      } else {
        throw new Error(data.detail || 'Subscription failed');
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#22C55E] to-[#16A34A]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('newsletter.title')}
        </h2>
        <p className="text-lg text-white/90 mb-8">
          {t('newsletter.description')}
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5" />
            <span>{t('newsletter.feature1')}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>{t('newsletter.feature2')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            <span>{t('newsletter.feature3')}</span>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            {t('newsletter.emailTitle')}
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              required
              disabled={isLoading}
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-white text-[#22C55E] hover:bg-gray-100 px-8"
            >
              {isLoading ? (
                <>
                  <Send className="animate-spin mr-2 w-4 h-4" />
                  Joining...
                </>
              ) : (
                t('newsletter.joinButton')
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;