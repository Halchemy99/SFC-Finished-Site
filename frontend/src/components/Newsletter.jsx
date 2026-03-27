import React, { useState } from 'react';
import { Mail, Send, Sprout, TrendingUp, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You'll receive our growth tips soon.",
    });
    setEmail('');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#22C55E] to-[#16A34A]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Stay in the Loop!
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Get exclusive Amazon growth tips, sustainability insights, and industry updates delivered to your inbox.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5" />
            <span>Sustainable growth tips</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>Amazon insights</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            <span>No spam, just value</span>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">
            Enter your email for growth tips
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
            />
            <Button type="submit" className="bg-white text-[#22C55E] hover:bg-gray-100 px-8">
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;