import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Lock, Eye, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import PartnerAccessGuide from '../components/PartnerAccessGuide';
import { quizContent } from '../data/regionalQuizContent';

// Local translations for all UI chrome around the quiz (results, form, buttons).
// Quiz questions/labels themselves come from quizContent for each region+lang.
const UI = {
  en: {
    takes2min: 'Takes 2 minutes • 50+ sellers audited this week',
    questionOf: (n, total) => `Question ${n} of ${total}`,
    back: '← Back',
    gapsFoundBadge: (n) => `${n} Revenue Gaps Found`,
    losingMoneyTitle: "You're losing money on Amazon",
    losingMoneySub: "Based on your answers, here's what's bleeding cash:",
    healthyTitle: 'Your store looks healthy!',
    healthySub: 'But we can still find optimization opportunities.',
    successTitle: "You're in! We'll be in touch within 24 hours",
    successSub: "Check your email for confirmation. Want to skip the wait? Do the one step below and we'll start your audit today.",
    pitchTitle: 'To fix these, we need to look inside your account',
    pitchIntro: 'These issues are invisible from the outside. We need Amazon Partner Access to see:',
    pitchBullets: [
      'Your real fee breakdown (Amazon hides half of them)',
      "Suppressed listings you don't know about",
      'Which PPC keywords are burning money',
      'Compliance issues before Amazon blocks you'
    ],
    secReadonlyTitle: 'This is read-only access',
    secReadonlySub: 'We can view data, not change anything',
    secControlTitle: 'You keep full control',
    secControlSub: 'Revoke access anytime from Seller Central',
    secTimeTitle: 'Takes 5 minutes to set up',
    secTimeSub: "We'll walk you through it on the call",
    bookIntro: "Book a 10-minute call. We'll set up partner access together and share what we find immediately.",
    ph: {
      company: 'Company name',
      name: 'Your name',
      email: 'Email',
      whatsapp: 'WhatsApp number (for quick setup call)',
      marketplaces: 'Current marketplaces (e.g., Amazon.in, Amazon.ae)',
      revenue: 'Monthly Amazon revenue'
    },
    revenueOptions: [
      { v: '', label: 'Monthly Amazon revenue' },
      { v: '0-10k', label: '$0 - $10k' },
      { v: '10k-50k', label: '$10k - $50k' },
      { v: '50k-100k', label: '$50k - $100k' },
      { v: '100k+', label: '$100k+' }
    ],
    submitCta: 'Book My Free Audit Call',
    footerNote: "No sales pitch. We'll look at your account together, show you what's broken, and you decide if you want help fixing it.",
    submitError: 'Something went wrong. Email us: harry@superflycommerce.com'
  },
  hi: {
    takes2min: '2 मिनट लगते हैं • इस सप्ताह 50+ विक्रेताओं का ऑडिट हुआ',
    questionOf: (n, total) => `सवाल ${n} / ${total}`,
    back: '← पीछे',
    gapsFoundBadge: (n) => `${n} रेवेन्यू गैप्स मिले`,
    losingMoneyTitle: 'आप Amazon पर पैसे गंवा रहे हैं',
    losingMoneySub: 'आपके जवाबों के आधार पर, यहाँ है जो पैसा बहा रहा है:',
    healthyTitle: 'आपकी स्टोर स्वस्थ दिखती है!',
    healthySub: 'फिर भी हम ऑप्टिमाइज़ेशन के मौके निकाल सकते हैं।',
    successTitle: 'हो गया! हम 24 घंटों में संपर्क करेंगे',
    successSub: 'कन्फर्मेशन के लिए अपना ईमेल देखें। इंतज़ार नहीं करना? नीचे एक स्टेप पूरा करें और हम आज ही आपका ऑडिट शुरू कर देंगे।',
    pitchTitle: 'इन्हें ठीक करने के लिए हमें आपके अकाउंट के अंदर देखना होगा',
    pitchIntro: 'ये समस्याएं बाहर से नहीं दिखतीं। देखने के लिए हमें Amazon Partner Access चाहिए:',
    pitchBullets: [
      'आपका असली फीस ब्रेकडाउन (Amazon आधा छुपाता है)',
      'दबी हुई लिस्टिंग्स जिनके बारे में आपको नहीं पता',
      'कौन से PPC कीवर्ड पैसे जला रहे हैं',
      'Amazon द्वारा ब्लॉक होने से पहले कंप्लायंस समस्याएँ'
    ],
    secReadonlyTitle: 'यह केवल-पढ़ने की एक्सेस है',
    secReadonlySub: 'हम डेटा देख सकते हैं, कुछ बदल नहीं सकते',
    secControlTitle: 'पूरा कंट्रोल आपके पास रहता है',
    secControlSub: 'Seller Central से कभी भी एक्सेस हटा सकते हैं',
    secTimeTitle: 'सेटअप में 5 मिनट लगते हैं',
    secTimeSub: 'हम कॉल पर आपको गाइड कर देंगे',
    bookIntro: '10 मिनट की कॉल बुक करें। हम मिलकर Partner Access सेटअप करेंगे और तुरंत बताएँगे कि क्या मिला।',
    ph: {
      company: 'कंपनी का नाम',
      name: 'आपका नाम',
      email: 'ईमेल',
      whatsapp: 'WhatsApp नंबर (जल्दी सेटअप कॉल के लिए)',
      marketplaces: 'मौजूदा मार्केटप्लेस (जैसे Amazon.in, Amazon.ae)',
      revenue: 'मासिक Amazon रेवेन्यू'
    },
    revenueOptions: [
      { v: '', label: 'मासिक Amazon रेवेन्यू' },
      { v: '0-10k', label: '$0 - $10k' },
      { v: '10k-50k', label: '$10k - $50k' },
      { v: '50k-100k', label: '$50k - $100k' },
      { v: '100k+', label: '$100k+' }
    ],
    submitCta: 'मेरा मुफ्त ऑडिट कॉल बुक करें',
    footerNote: 'कोई सेल्स पिच नहीं। हम आपके अकाउंट को मिलकर देखेंगे, बताएँगे क्या टूटा है, और आप तय करेंगे कि मदद चाहिए या नहीं।',
    submitError: 'कुछ गड़बड़ हो गई। हमें ईमेल करें: harry@superflycommerce.com'
  },
  ar: {
    takes2min: 'يستغرق دقيقتين • تم تدقيق أكثر من 50 بائعًا هذا الأسبوع',
    questionOf: (n, total) => `السؤال ${n} من ${total}`,
    back: 'رجوع →',
    gapsFoundBadge: (n) => `${n} فجوات في الإيرادات مكتشفة`,
    losingMoneyTitle: 'أنت تخسر أموالاً على Amazon',
    losingMoneySub: 'بناءً على إجاباتك، هذا ما يستنزف الأرباح:',
    healthyTitle: 'متجرك يبدو بحالة جيدة!',
    healthySub: 'لكن ما زال بإمكاننا إيجاد فرص تحسين.',
    successTitle: 'تم! سنتواصل معك خلال 24 ساعة',
    successSub: 'تحقق من بريدك الإلكتروني للتأكيد. لا تريد الانتظار؟ أكمل الخطوة أدناه وسنبدأ تدقيقك اليوم.',
    pitchTitle: 'لإصلاح ذلك، نحتاج إلى الاطلاع داخل حسابك',
    pitchIntro: 'هذه المشاكل غير مرئية من الخارج. نحتاج إلى صلاحية شريك Amazon لنرى:',
    pitchBullets: [
      'تفاصيل الرسوم الحقيقية (Amazon تخفي نصفها)',
      'قوائم مقموعة لا تعلم عنها',
      'كلمات PPC التي تحرق ميزانيتك',
      'مشاكل الامتثال قبل أن يحظرك Amazon'
    ],
    secReadonlyTitle: 'صلاحية عرض فقط',
    secReadonlySub: 'يمكننا رؤية البيانات، لا تغيير أي شيء',
    secControlTitle: 'أنت تحتفظ بالتحكم الكامل',
    secControlSub: 'يمكنك إلغاء الوصول من Seller Central في أي وقت',
    secTimeTitle: 'الإعداد يستغرق 5 دقائق',
    secTimeSub: 'سنرشدك عبر المكالمة',
    bookIntro: 'احجز مكالمة 10 دقائق. سنعد صلاحية الشريك معًا ونشاركك ما نكتشفه فورًا.',
    ph: {
      company: 'اسم الشركة',
      name: 'اسمك',
      email: 'البريد الإلكتروني',
      whatsapp: 'رقم WhatsApp (لمكالمة الإعداد السريعة)',
      marketplaces: 'المتاجر الحالية (مثل Amazon.ae, Amazon.com)',
      revenue: 'الإيرادات الشهرية على Amazon'
    },
    revenueOptions: [
      { v: '', label: 'الإيرادات الشهرية على Amazon' },
      { v: '0-10k', label: '$0 - $10k' },
      { v: '10k-50k', label: '$10k - $50k' },
      { v: '50k-100k', label: '$50k - $100k' },
      { v: '100k+', label: '$100k+' }
    ],
    submitCta: 'احجز مكالمة التدقيق المجانية',
    footerNote: 'لا عرض بيع. سنراجع حسابك معًا، ونريك ما هو معطل، وأنت تقرر إن كنت تريد المساعدة في إصلاحه.',
    submitError: 'حدث خطأ. راسلنا: harry@superflycommerce.com'
  },
  es: {
    takes2min: 'Toma 2 minutos • Más de 50 vendedores auditados esta semana',
    questionOf: (n, total) => `Pregunta ${n} de ${total}`,
    back: '← Atrás',
    gapsFoundBadge: (n) => `${n} Fugas de Ingresos Encontradas`,
    losingMoneyTitle: 'Estás perdiendo dinero en Amazon',
    losingMoneySub: 'Según tus respuestas, esto es lo que está sangrando dinero:',
    healthyTitle: '¡Tu tienda se ve saludable!',
    healthySub: 'Aun así podemos encontrar oportunidades de optimización.',
    successTitle: '¡Listo! Te contactaremos en 24 horas',
    successSub: 'Revisa tu correo para la confirmación. ¿No quieres esperar? Completa el paso abajo y empezamos tu auditoría hoy.',
    pitchTitle: 'Para arreglarlo, necesitamos ver dentro de tu cuenta',
    pitchIntro: 'Estos problemas no se ven desde afuera. Necesitamos acceso de socio de Amazon para ver:',
    pitchBullets: [
      'Tu desglose real de tarifas (Amazon esconde la mitad)',
      'Listados suprimidos que no conoces',
      'Qué palabras PPC están quemando dinero',
      'Problemas de cumplimiento antes de que Amazon te bloquee'
    ],
    secReadonlyTitle: 'Es acceso de solo lectura',
    secReadonlySub: 'Podemos ver datos, no cambiar nada',
    secControlTitle: 'Tú mantienes el control total',
    secControlSub: 'Revoca el acceso cuando quieras desde Seller Central',
    secTimeTitle: 'La configuración toma 5 minutos',
    secTimeSub: 'Te guiaremos en la llamada',
    bookIntro: 'Agenda una llamada de 10 minutos. Configuramos el acceso de socio juntos y compartimos lo que encontramos al instante.',
    ph: {
      company: 'Nombre de la empresa',
      name: 'Tu nombre',
      email: 'Correo electrónico',
      whatsapp: 'Número de WhatsApp (para llamada rápida de setup)',
      marketplaces: 'Marketplaces actuales (ej. Amazon.com.mx, Amazon.com)',
      revenue: 'Ingresos mensuales en Amazon'
    },
    revenueOptions: [
      { v: '', label: 'Ingresos mensuales en Amazon' },
      { v: '0-10k', label: '$0 - $10k' },
      { v: '10k-50k', label: '$10k - $50k' },
      { v: '50k-100k', label: '$50k - $100k' },
      { v: '100k+', label: '$100k+' }
    ],
    submitCta: 'Agendar Mi Llamada de Auditoría Gratuita',
    footerNote: 'Sin pitch de ventas. Revisamos tu cuenta juntos, te mostramos lo que está roto y tú decides si quieres ayuda para arreglarlo.',
    submitError: 'Algo salió mal. Escríbenos: harry@superflycommerce.com'
  }
};

const RegionalLaunchV2 = () => {
  const { region } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);
  const [pageLang, setPageLang] = useState('en');

  const regionalData = {
    india: {
      name: 'India',
      flag: '🇮🇳',
      languages: { primary: 'en', secondary: 'hi', primaryFlag: '🇬🇧', secondaryFlag: '🇮🇳' },
      targetMarkets: 'UK, EU, USA',
      seoTitle: 'Free Amazon Audit - Indian Sellers',
      seoDescription: 'Free audit for Indian sellers expanding to UK/EU/USA'
    },
    uae: {
      name: 'UAE',
      flag: '🇦🇪',
      languages: { primary: 'en', secondary: 'ar', primaryFlag: '🇬🇧', secondaryFlag: '🇦🇪' },
      targetMarkets: 'UK, EU, USA',
      seoTitle: 'Free Amazon Audit - UAE Sellers',
      seoDescription: 'Free audit for UAE sellers expanding to UK/EU/USA'
    },
    mexico: {
      name: 'Mexico',
      flag: '🇲🇽',
      languages: { primary: 'en', secondary: 'es', primaryFlag: '🇬🇧', secondaryFlag: '🇲🇽' },
      targetMarkets: 'USA, UK, EU',
      seoTitle: 'Free Amazon Audit - Mexican Sellers',
      seoDescription: 'Free audit for Mexican sellers expanding to USA/UK/EU'
    }
  };

  const data = regionalData[region] || regionalData.india;
  const content = quizContent[region]?.[pageLang] || quizContent.india.en;
  const questions = content.questions;
  const u = UI[pageLang] || UI.en;
  const isRtl = pageLang === 'ar';

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
        
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-20 pb-16 px-4" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="max-w-3xl mx-auto">
            
            {/* Language Toggle */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setPageLang(pageLang === 'en' ? data.languages.secondary : 'en')}
                data-testid="language-toggle-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-50 transition-all shadow-md text-sm font-semibold border border-gray-200"
              >
                <span className="text-lg">{pageLang === 'en' ? data.languages.primaryFlag : data.languages.secondaryFlag}</span>
                <span>{pageLang === 'en' ? 'EN' : data.languages.secondary.toUpperCase()}</span>
              </button>
            </div>
            
            {/* Results Header */}
            <div className="text-center mb-8">
              <Badge className="bg-red-500 text-white text-lg px-6 py-2 mb-4">
                <AlertTriangle className="w-5 h-5 inline mr-2" />
                {u.gapsFoundBadge(issuesFound.length)}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">
                {u.losingMoneyTitle}
              </h1>
              <p className="text-xl text-gray-700">
                {u.losingMoneySub}
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
                    <p className="text-lg font-semibold">{u.healthyTitle}</p>
                    <p className="text-gray-600">{u.healthySub}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Partner Access Pitch */}
            {formSubmitted ? (
              <div data-testid="quiz-form-success" className="mb-8">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-[#22C55E]">
                  <CardContent className="pt-10 pb-10 text-center">
                    <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
                      {u.successTitle}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto">
                      {u.successSub}
                    </p>
                  </CardContent>
                </Card>
                <PartnerAccessGuide region={region} lang={pageLang} lead={submittedLead} />
              </div>
            ) : (
            <Card className="mb-8 bg-white border-2 border-green-500">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl">{u.pitchTitle}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg mb-6 text-gray-700">
                  {u.pitchIntro}
                </p>
                
                <div className="space-y-4 mb-6">
                  {u.pitchBullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Security Info */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900">{u.secReadonlyTitle}</p>
                      <p className="text-sm text-blue-700">{u.secReadonlySub}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <Eye className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900">{u.secControlTitle}</p>
                      <p className="text-sm text-blue-700">{u.secControlSub}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900">{u.secTimeTitle}</p>
                      <p className="text-sm text-blue-700">{u.secTimeSub}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {u.bookIntro}
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
                        const resJson = await response.json().catch(() => ({}));
                        setSubmittedLead({
                          auditId: resJson.id || null,
                          email: auditData.email,
                          name: auditData.contact_name,
                          company: auditData.company_name
                        });
                        setFormSubmitted(true);
                      } else {
                        alert(u.submitError);
                      }
                    } catch (error) {
                      alert(u.submitError);
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="company"
                      placeholder={u.ph.company}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder={u.ph.name}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder={u.ph.email}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder={u.ph.whatsapp}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  
                  <input
                    type="text"
                    name="marketplaces"
                    placeholder={u.ph.marketplaces}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  
                  <select
                    name="revenue"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {u.revenueOptions.map((opt) => (
                      <option key={opt.v} value={opt.v}>{opt.label}</option>
                    ))}
                  </select>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    data-testid="submit-audit-form-btn"
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6 rounded-lg"
                  >
                    {u.submitCta} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            )}

            {/* Footer Note */}
            <p className="text-center text-sm text-gray-600">
              {u.footerNote}
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
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-16 px-4" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-2xl mx-auto">
          
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setPageLang(pageLang === 'en' ? data.languages.secondary : 'en')}
              data-testid="language-toggle-btn"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-50 transition-all shadow-md text-sm font-semibold border border-gray-200"
            >
              <span className="text-lg">{pageLang === 'en' ? data.languages.primaryFlag : data.languages.secondaryFlag}</span>
              <span>{pageLang === 'en' ? 'EN' : data.languages.secondary.toUpperCase()}</span>
            </button>
          </div>
          
          {/* Hero */}
          {currentStep === 0 && (
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{data.flag}</div>
              <h1 className="text-4xl font-bold mb-4">{content.heroTitle}</h1>
              <p className="text-xl text-gray-700 mb-6">{content.heroSubtitle}</p>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                {u.takes2min}
              </Badge>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{u.questionOf(currentStep + 1, questions.length)}</span>
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
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {currentQuestion.question}
              </h2>
              {currentQuestion.subtext && (
                <p className="text-sm text-gray-600 mb-6 italic">{currentQuestion.subtext}</p>
              )}
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(currentQuestion.id, option.value, option.score)}
                    data-testid={`quiz-option-${idx}`}
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
              data-testid="quiz-back-btn"
              className="mt-4 text-gray-600 hover:text-gray-900"
            >
              {u.back}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegionalLaunchV2;
