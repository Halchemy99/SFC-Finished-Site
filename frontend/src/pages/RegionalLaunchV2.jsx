import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Lock, Eye, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';

const RegionalLaunchV2 = () => {
  const { region } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const regionalData = {
    india: {
      name: 'India',
      flag: '🇮🇳',
      targetMarkets: 'UK, EU, USA',
      heroTitle: 'Free Amazon Store Audit for Indian Sellers',
      heroSubtitle: 'Find out where you\'re losing money before expanding to UK/EU/USA',
      specificQuestion: {
        question: 'Are you confident your VAT registration won\'t block your sales in UK/EU?',
        issue: 'VAT compliance gaps',
        pain: 'Most Indian sellers lose their first month of sales to VAT suspension'
      }
    },
    uae: {
      name: 'UAE',
      flag: '🇦🇪',
      targetMarkets: 'UK, EU, USA',
      heroTitle: 'Free Amazon Store Audit for UAE Sellers',
      heroSubtitle: 'Find out where you\'re losing money before expanding to UK/EU/USA',
      specificQuestion: {
        question: 'Do you know if your products need CE marking for EU or FCC for USA?',
        issue: 'Product compliance gaps',
        pain: 'MENA sellers often get blocked within weeks due to missing certifications'
      }
    },
    mexico: {
      name: 'Mexico',
      flag: '🇲🇽',
      targetMarkets: 'USA, UK, EU',
      heroTitle: 'Free Amazon Store Audit for Mexican Sellers',
      heroSubtitle: 'Find out where you\'re losing money in USA/UK/EU markets',
      specificQuestion: {
        question: 'Are you actually using your USMCA zero-tariff benefits?',
        issue: 'Missed trade advantages',
        pain: 'Mexican sellers overpay thousands in tariffs they shouldn\'t be charged'
      }
    }
  };

  const data = regionalData[region] || regionalData.india;

  const questions = [
    {
      id: 'profit_tracking',
      question: 'Are you tracking your TRUE profit after all Amazon fees?',
      options: [
        { value: 'yes', label: 'Yes, I track everything', score: 0 },
        { value: 'mostly', label: 'Mostly, but not sure about all fees', score: 1 },
        { value: 'no', label: 'No, I just look at gross sales', score: 2 }
      ],
      issue: 'Hidden fee bleed'
    },
    {
      id: 'ppc_waste',
      question: 'Do you know which keywords are burning budget with zero sales?',
      options: [
        { value: 'yes', label: 'Yes, I optimize weekly', score: 0 },
        { value: 'sometimes', label: 'I check occasionally', score: 1 },
        { value: 'no', label: 'I set it and forget it', score: 2 }
      ],
      issue: 'PPC waste'
    },
    {
      id: 'compliance',
      question: 'Have you checked if your listings are suppressed or have compliance issues?',
      options: [
        { value: 'daily', label: 'I monitor this daily', score: 0 },
        { value: 'had_issues', label: 'I\'ve had issues before', score: 1 },
        { value: 'no_idea', label: 'I don\'t know how to check', score: 2 }
      ],
      issue: 'Lost sales from technical issues'
    },
    {
      id: 'storage_fees',
      question: 'How much are storage fees eating into your margins?',
      options: [
        { value: 'optimized', label: 'I optimize inventory regularly', score: 0 },
        { value: 'overage', label: 'I\'ve been charged overage fees', score: 1 },
        { value: 'unsure', label: 'I\'m not sure', score: 2 }
      ],
      issue: 'Cash flow drain'
    },
    {
      id: 'regional_specific',
      question: data.specificQuestion.question,
      options: [
        { value: 'compliant', label: 'Yes, fully compliant', score: 0 },
        { value: 'think_so', label: 'I think so', score: 1 },
        { value: 'worried', label: 'I\'m worried about this', score: 2 }
      ],
      issue: data.specificQuestion.issue
    },
    {
      id: 'partner_access',
      question: 'Have you ever given a trusted partner read-only access to your Amazon account?',
      options: [
        { value: 'yes', label: 'Yes, I\'ve done this before', score: 0 },
        { value: 'open', label: 'No, but I\'m open to it', score: 0 },
        { value: 'unsure', label: 'I\'m not sure about this', score: 1 }
      ],
      issue: 'Access barrier'
    }
  ];

  const handleAnswer = (questionId, value, score) => {
    setAnswers({ ...answers, [questionId]: { value, score } });
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, answer) => sum + (answer.score || 0), 0);
  };

  const getIssuesFound = () => {
    return questions.filter((q, idx) => {
      const answer = answers[q.id];
      return answer && answer.score > 0;
    });
  };

  if (showResults) {
    const score = calculateScore();
    const issuesFound = getIssuesFound();
    
    return (
      <>
        <SEO 
          title={`Free Amazon Audit - ${data.name} Sellers | Superfly Commerce`}
          description={`Get a free Amazon store audit for ${data.name} sellers expanding to ${data.targetMarkets}`}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-20 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            
            {/* Results Header */}
            <div className="text-center mb-8">
              <Badge className="bg-red-500 text-white text-lg px-6 py-2 mb-4">
                <AlertTriangle className="w-5 h-5 inline mr-2" />
                {issuesFound.length} Revenue Gaps Found
              </Badge>
              <h1 className="text-4xl font-bold mb-4">
                You're losing money on Amazon
              </h1>
              <p className="text-xl text-gray-700">
                Based on your answers, here's what's bleeding cash:
              </p>
            </div>

            {/* Issues Found */}
            <Card className="mb-8 border-2 border-red-200">
              <CardContent className="pt-6">
                {issuesFound.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-3 mb-4 last:mb-0">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{q.issue}</p>
                      <p className="text-sm text-gray-600">{q.question}</p>
                    </div>
                  </div>
                ))}
                
                {issuesFound.length === 0 && (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="text-lg font-semibold">Your store looks healthy!</p>
                    <p className="text-gray-600">But we can still find optimization opportunities.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Partner Access Pitch */}
            <Card className="mb-8 bg-white border-2 border-green-500">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl">To fix these, we need to look inside your account</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg mb-6 text-gray-700">
                  These issues are invisible from the outside. We need Amazon Partner Access to see:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p>Your real fee breakdown (Amazon hides half of them)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p>Suppressed listings you don't know about</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p>Which PPC keywords are burning money</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p>Compliance issues before Amazon blocks you</p>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900">This is read-only access</p>
                      <p className="text-sm text-blue-700">We can view data, not change anything</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <Eye className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900">You keep full control</p>
                      <p className="text-sm text-blue-700">Revoke access anytime from Seller Central</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900">Takes 5 minutes to set up</p>
                      <p className="text-sm text-blue-700">We'll walk you through it on the call</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Book a 10-minute call. We'll set up partner access together and share what we find immediately.
                </p>

                {/* Contact Form */}
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    
                    const auditData = {
                      region: data.name,
                      company_name: formData.get('company'),
                      contact_name: formData.get('name'),
                      email: formData.get('email'),
                      whatsapp: formData.get('whatsapp'),
                      current_marketplaces: formData.get('marketplaces'),
                      monthly_revenue: formData.get('revenue'),
                      quiz_score: score,
                      issues_found: issuesFound.map(q => q.issue).join(', '),
                      partner_access_experience: answers.partner_access?.value || 'unknown'
                    };
                    
                    try {
                      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/regional-audit/submit`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(auditData)
                      });
                      
                      if (response.ok) {
                        alert('Audit request submitted! Check your email for next steps.');
                        e.target.reset();
                      } else {
                        alert('Something went wrong. Email us: harry@superflycommerce.com');
                      }
                    } catch (error) {
                      alert('Something went wrong. Email us: harry@superflycommerce.com');
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp number (for quick setup call)"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  
                  <input
                    type="text"
                    name="marketplaces"
                    placeholder="Current marketplaces (e.g., Amazon.in, Amazon.ae)"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  
                  <select
                    name="revenue"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Monthly Amazon revenue</option>
                    <option value="0-10k">$0 - $10k</option>
                    <option value="10k-50k">$10k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6 rounded-lg"
                  >
                    Book My Free Audit Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Footer Note */}
            <p className="text-center text-sm text-gray-600">
              No sales pitch. We'll look at your account together, show you what's broken, and you decide if you want help fixing it.
            </p>
          </div>
        </div>
      </>
    );
  }

  // Quiz Flow
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <>
      <SEO 
        title={`Free Amazon Audit - ${data.name} Sellers | Superfly Commerce`}
        description={`Get a free Amazon store audit for ${data.name} sellers expanding to ${data.targetMarkets}`}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Hero */}
          {currentStep === 0 && (
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{data.flag}</div>
              <h1 className="text-4xl font-bold mb-4">{data.heroTitle}</h1>
              <p className="text-xl text-gray-700 mb-6">{data.heroSubtitle}</p>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                Takes 2 minutes • 50+ sellers audited this week
              </Badge>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {currentQuestion.question}
              </h2>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(currentQuestion.id, option.value, option.score)}
                    className="w-full text-left px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all font-medium text-lg"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="mt-4 text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegionalLaunchV2;
