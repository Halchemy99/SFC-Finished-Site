import React from 'react';
import { ArrowRight, DollarSign, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const ServiceCTA = ({ 
  showPricing = true, 
  showCaseStudies = true,
  className = '' 
}) => {
  return (
    <div className={`bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-8 md:p-12 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Explore our transparent pricing or see real results from brands we've helped grow.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {showPricing && (
          <Link to="/pricing">
            <Button 
              size="lg"
              className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
            >
              <DollarSign className="mr-2 w-5 h-5" />
              View Pricing & Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        )}
        
        {showCaseStudies && (
          <Link to="/case-studies">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-[#22C55E] rounded-full px-8 py-6 text-lg font-semibold transition-all w-full sm:w-auto"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              See Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        )}
      </div>
      
      <p className="text-center text-white/80 text-sm mt-6">
        💚 Transparent pricing • Performance-based • No hidden fees
      </p>
    </div>
  );
};

export default ServiceCTA;
