import React from 'react';
import { X, ArrowRight, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

const ServiceCaseStudyModal = ({ isOpen, onClose, service, caseStudy, onBuyNow }) => {
  if (!isOpen || !service || !caseStudy) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white p-6 rounded-t-2xl">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{service.name}</h2>
                    <p className="text-white/90 text-sm mt-1">{service.description}</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="text-white/80">one-time</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            
            {/* Case Study Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Real Client Example</span>
            </div>

            {/* Client Info */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {caseStudy.clientName}
              </h3>
              <p className="text-gray-600">
                {caseStudy.industry} • {caseStudy.productType}
              </p>
            </div>

            {/* Challenge */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</span>
                The Challenge
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">✓</span>
                What We Did
              </h4>
              <ul className="space-y-2">
                {caseStudy.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">📈</span>
                Results
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-gray-600">{result.metric}</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{result.value}</div>
                    {result.timeframe && (
                      <div className="text-xs text-gray-600 mt-1">{result.timeframe}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Images (if provided) */}
            {caseStudy.images && caseStudy.images.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Before & After</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.images.map((image, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-gray-200">
                      <img 
                        src={image.url} 
                        alt={image.label}
                        className="w-full h-auto"
                      />
                      <div className="bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700">
                        {image.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Client Quote */}
            {caseStudy.testimonial && (
              <div className="bg-gray-50 border-l-4 border-[#22C55E] p-6 rounded-r-xl mb-8">
                <p className="text-gray-700 italic mb-3">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="text-sm text-gray-600 font-semibold">
                  — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                </div>
              </div>
            )}

            {/* Delivery Timeline */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-3">What You'll Get</h4>
              <ul className="space-y-2">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => onBuyNow(service)}
                className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Buy Now - {service.price}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={onClose}
                variant="outline"
                className="flex-1 sm:flex-none rounded-full py-6 px-8 border-2 border-gray-300 hover:bg-gray-50"
              >
                Maybe Later
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Money-back guarantee if not satisfied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCaseStudyModal;
