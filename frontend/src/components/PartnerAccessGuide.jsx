import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PARTNER_EMAIL = 'harry@superflycommerce.com';
const PARTNER_NAME = 'Harry Allen';

const SELLER_CENTRAL_LINKS = {
  india: [
    { label: 'Amazon India', url: 'https://sellercentral.amazon.in/gp/account-manager/home.html', flag: '🇮🇳' },
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' }
  ],
  uae: [
    { label: 'Amazon UAE', url: 'https://sellercentral.amazon.ae/gp/account-manager/home.html', flag: '🇦🇪' },
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' }
  ],
  mexico: [
    { label: 'Amazon Mexico', url: 'https://sellercentral.amazon.com.mx/gp/account-manager/home.html', flag: '🇲🇽' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' },
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' }
  ],
  default: [
    { label: 'Amazon UK', url: 'https://sellercentral.amazon.co.uk/gp/account-manager/home.html', flag: '🇬🇧' },
    { label: 'Amazon USA', url: 'https://sellercentral.amazon.com/gp/account-manager/home.html', flag: '🇺🇸' },
    { label: 'Amazon EU', url: 'https://sellercentral.amazon.de/gp/account-manager/home.html', flag: '🇪🇺' }
  ]
};

const T = {
  en: {
    headerTitle: 'Want your audit faster? Add us now — takes 2 minutes',
    headerSub: "Invite us as a user in Seller Central and we'll start your audit today instead of waiting for the call.",
    step1: 'Copy our email address',
    copy: 'Copy',
    copied: 'Copied!',
    nameLabel: 'Name to enter:',
    step2: 'Open User Permissions in your Seller Central',
    step2Sub: 'These links take you straight to the right page:',
    step3: 'Click "Add a new user", paste our email, send the invite',
    step3Sub: 'We only need View permissions to audit. You stay in full control and can revoke access anytime from the same page.',
    doneMsg: "Perfect — we'll accept your invite and start the audit within a few hours.",
    inviteBtn: "I've sent the invite ✓"
  },
  hi: {
    headerTitle: 'अपना ऑडिट जल्दी चाहिए? हमें अभी जोड़ें — सिर्फ 2 मिनट',
    headerSub: 'Seller Central में हमें यूज़र के रूप में आमंत्रित करें और हम कॉल का इंतज़ार किए बिना आज ही आपका ऑडिट शुरू कर देंगे।',
    step1: 'हमारा ईमेल पता कॉपी करें',
    copy: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    nameLabel: 'नाम दर्ज करें:',
    step2: 'अपने Seller Central में User Permissions खोलें',
    step2Sub: 'ये लिंक आपको सीधे सही पेज पर ले जाते हैं:',
    step3: '"Add a new user" पर क्लिक करें, हमारा ईमेल पेस्ट करें और इनवाइट भेजें',
    step3Sub: 'ऑडिट के लिए हमें केवल View अनुमति चाहिए। पूरा नियंत्रण आपके पास रहता है और आप कभी भी उसी पेज से एक्सेस हटा सकते हैं।',
    doneMsg: 'बहुत बढ़िया — हम आपका इनवाइट स्वीकार करेंगे और कुछ ही घंटों में ऑडिट शुरू कर देंगे।',
    inviteBtn: 'मैंने इनवाइट भेज दिया ✓'
  },
  ar: {
    headerTitle: 'تريد تدقيقك أسرع؟ أضفنا الآن — يستغرق دقيقتين',
    headerSub: 'ادعُنا كمستخدم في Seller Central وسنبدأ تدقيقك اليوم بدلاً من انتظار المكالمة.',
    step1: 'انسخ بريدنا الإلكتروني',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    nameLabel: 'الاسم المطلوب إدخاله:',
    step2: 'افتح User Permissions في حساب Seller Central الخاص بك',
    step2Sub: 'هذه الروابط تنقلك مباشرة إلى الصفحة الصحيحة:',
    step3: 'اضغط "Add a new user"، والصق بريدنا، وأرسل الدعوة',
    step3Sub: 'نحتاج فقط إلى صلاحية العرض (View) للتدقيق. تبقى أنت المتحكم الكامل ويمكنك إلغاء الوصول في أي وقت من نفس الصفحة.',
    doneMsg: 'ممتاز — سنقبل دعوتك ونبدأ التدقيق خلال ساعات قليلة.',
    inviteBtn: 'لقد أرسلت الدعوة ✓'
  },
  es: {
    headerTitle: '¿Quieres tu auditoría más rápido? Agréganos ahora — toma 2 minutos',
    headerSub: 'Invítanos como usuario en Seller Central y empezaremos tu auditoría hoy mismo en lugar de esperar la llamada.',
    step1: 'Copia nuestro correo electrónico',
    copy: 'Copiar',
    copied: '¡Copiado!',
    nameLabel: 'Nombre a ingresar:',
    step2: 'Abre User Permissions en tu Seller Central',
    step2Sub: 'Estos enlaces te llevan directo a la página correcta:',
    step3: 'Haz clic en "Add a new user", pega nuestro correo y envía la invitación',
    step3Sub: 'Solo necesitamos permisos de Ver (View) para auditar. Tú mantienes el control total y puedes revocar el acceso en cualquier momento desde la misma página.',
    doneMsg: 'Perfecto — aceptaremos tu invitación y empezaremos la auditoría en unas horas.',
    inviteBtn: 'He enviado la invitación ✓'
  }
};

const PartnerAccessGuide = ({ region, lang = 'en', lead }) => {
  const [copied, setCopied] = useState(false);
  const [done, setDone] = useState(false);
  const links = SELLER_CENTRAL_LINKS[region?.toLowerCase()] || SELLER_CENTRAL_LINKS.default;
  const t = T[lang] || T.en;
  const isRtl = lang === 'ar';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PARTNER_EMAIL);
    } catch {
      const el = document.createElement('textarea');
      el.value = PARTNER_EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInviteSent = () => {
    setDone(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/regional-audit/invite-sent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audit_id: lead?.auditId || null,
        email: lead?.email || null,
        contact_name: lead?.name || null,
        company_name: lead?.company || null,
        region: region || null
      })
    }).catch(() => {});
  };

  return (
    <Card data-testid="partner-access-guide" dir={isRtl ? 'rtl' : 'ltr'} className="mt-8 border-2 border-[#22C55E] shadow-xl text-left overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white">
        <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
          <ShieldCheck className="w-6 h-6" />
          {t.headerTitle}
        </CardTitle>
        <p className="text-white/90 text-sm sm:text-base">{t.headerSub}</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">

        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center flex-shrink-0">1</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-2">{t.step1}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <code className="bg-gray-100 px-4 py-3 rounded-lg text-sm font-mono text-gray-800 flex-1 break-all" dir="ltr" data-testid="partner-email-display">
                {PARTNER_EMAIL}
              </code>
              <Button
                onClick={copyEmail}
                data-testid="copy-partner-email-btn"
                className={`${copied ? 'bg-gray-900' : 'bg-[#22C55E] hover:bg-[#16A34A]'} text-white rounded-lg px-5`}
              >
                {copied ? <><Check className="w-4 h-4 mr-2" />{t.copied}</> : <><Copy className="w-4 h-4 mr-2" />{t.copy}</>}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">{t.nameLabel} <strong>{PARTNER_NAME}</strong></p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center flex-shrink-0">2</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-2">{t.step2}</p>
            <p className="text-sm text-gray-600 mb-3">{t.step2Sub}</p>
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`seller-central-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:border-[#22C55E] hover:bg-green-50 transition-colors text-sm font-semibold text-gray-800"
                >
                  <span>{link.flag}</span>
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-[#22C55E] text-white font-bold flex items-center justify-center flex-shrink-0">3</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-2">{t.step3}</p>
            <p className="text-sm text-gray-600">{t.step3Sub}</p>
          </div>
        </div>

        {/* Confirmation */}
        <div className="pt-2 border-t border-gray-100">
          {done ? (
            <div className="flex items-center gap-2 text-[#16A34A] font-semibold" data-testid="invite-sent-confirmation">
              <Check className="w-5 h-5" />
              {t.doneMsg}
            </div>
          ) : (
            <Button
              onClick={handleInviteSent}
              variant="outline"
              data-testid="invite-sent-btn"
              className="w-full border-2 border-[#22C55E] text-[#16A34A] hover:bg-green-50 rounded-full py-5 font-bold"
            >
              {t.inviteBtn}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerAccessGuide;
