import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PARTNER_EMAIL = 'harry@superflycommerce.com';
const PARTNER_NAME = 'Harry Allen';
const PARTNER_COMPANY = 'Superfly Commerce';

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
    headerTitle: 'Want your audit faster? Add us as an Authorized Partner — takes 2 minutes',
    headerSub: 'Amazon uses a one-time invitation link. Generate it in Seller Central and send it to us — we accept and start your audit the same day.',
    step1: 'Copy our contact details',
    copy: 'Copy',
    copied: 'Copied!',
    nameLabel: 'Name to enter:',
    companyLabel: 'Company:',
    step2: 'Open Settings → User Permissions in your Seller Central',
    step2Sub: 'These deep links take you straight to the right page. Once there, look for the "Authorized Partners" tab.',
    step3: 'Click "Add Authorized Partner", copy the one-time invitation link',
    step3Sub: 'Amazon generates a unique link — do not share it publicly. Paste it in the box below (fastest) or email it securely to harry@superflycommerce.com.',
    linkPlaceholder: 'Paste your Amazon invitation link here (starts with https://sellercentral.amazon...)',
    submitLink: 'Send Invitation Link',
    submittedMsg: "Perfect — we've received your invitation link and will accept within a few hours. Your audit starts today.",
    inviteBtn: "I've sent the link a different way (email/WhatsApp) ✓",
    doneMsg: "Perfect — we'll accept your invitation and start the audit within a few hours."
  },
  hi: {
    headerTitle: 'ऑडिट जल्दी चाहिए? हमें Authorized Partner के रूप में जोड़ें — सिर्फ 2 मिनट',
    headerSub: 'Amazon एक बार का इनविटेशन लिंक इस्तेमाल करता है। Seller Central में इसे जनरेट करें और हमें भेजें — हम उसी दिन स्वीकार कर के ऑडिट शुरू कर देंगे।',
    step1: 'हमारी संपर्क जानकारी कॉपी करें',
    copy: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    nameLabel: 'दर्ज करने के लिए नाम:',
    companyLabel: 'कंपनी:',
    step2: 'अपने Seller Central में Settings → User Permissions खोलें',
    step2Sub: 'ये डायरेक्ट लिंक आपको सही पेज पर ले जाते हैं। वहां पहुंचकर "Authorized Partners" टैब खोजें।',
    step3: '"Add Authorized Partner" पर क्लिक करें और एक बार का इनविटेशन लिंक कॉपी करें',
    step3Sub: 'Amazon एक यूनिक लिंक बनाता है — इसे सार्वजनिक न करें। नीचे बॉक्स में पेस्ट करें (सबसे तेज़) या harry@superflycommerce.com पर सुरक्षित रूप से भेजें।',
    linkPlaceholder: 'अपना Amazon इनविटेशन लिंक यहां पेस्ट करें (https://sellercentral.amazon... से शुरू)',
    submitLink: 'इनविटेशन लिंक भेजें',
    submittedMsg: 'बहुत अच्छा — हमें आपका इनविटेशन लिंक मिल गया है और कुछ घंटों में स्वीकार करेंगे। ऑडिट आज ही शुरू हो जाएगा।',
    inviteBtn: 'मैंने लिंक अलग तरीके से भेजा है (ईमेल/WhatsApp) ✓',
    doneMsg: 'बहुत अच्छा — हम आपका इनविटेशन स्वीकार करेंगे और कुछ घंटों में ऑडिट शुरू कर देंगे।'
  },
  ar: {
    headerTitle: 'تريد تدقيقك أسرع؟ أضفنا كشريك مُعتَمَد — يستغرق دقيقتين',
    headerSub: 'يستخدم Amazon رابط دعوة لمرة واحدة. أنشئه في Seller Central وأرسله إلينا — سنقبله ونبدأ التدقيق في نفس اليوم.',
    step1: 'انسخ بيانات التواصل الخاصة بنا',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    nameLabel: 'الاسم المطلوب إدخاله:',
    companyLabel: 'الشركة:',
    step2: 'افتح Settings → User Permissions في حساب Seller Central الخاص بك',
    step2Sub: 'هذه الروابط تنقلك مباشرة إلى الصفحة الصحيحة. عند وصولك، ابحث عن تبويب "Authorized Partners".',
    step3: 'اضغط "Add Authorized Partner" وانسخ رابط الدعوة الفريد',
    step3Sub: 'ينشئ Amazon رابطًا فريدًا — لا تشاركه علنًا. الصقه في المربع أدناه (الأسرع) أو أرسله بأمان إلى harry@superflycommerce.com.',
    linkPlaceholder: 'الصق رابط دعوة Amazon هنا (يبدأ بـ https://sellercentral.amazon...)',
    submitLink: 'إرسال رابط الدعوة',
    submittedMsg: 'ممتاز — استلمنا رابط دعوتك وسنقبله خلال ساعات قليلة. سيبدأ تدقيقك اليوم.',
    inviteBtn: 'أرسلت الرابط بطريقة أخرى (بريد/WhatsApp) ✓',
    doneMsg: 'ممتاز — سنقبل دعوتك ونبدأ التدقيق خلال ساعات قليلة.'
  },
  es: {
    headerTitle: '¿Quieres tu auditoría más rápido? Agréganos como Socio Autorizado — toma 2 minutos',
    headerSub: 'Amazon usa un enlace de invitación de un solo uso. Genéralo en Seller Central y envíanoslo — lo aceptamos y empezamos tu auditoría el mismo día.',
    step1: 'Copia nuestros datos de contacto',
    copy: 'Copiar',
    copied: '¡Copiado!',
    nameLabel: 'Nombre a ingresar:',
    companyLabel: 'Empresa:',
    step2: 'Abre Settings → User Permissions en tu Seller Central',
    step2Sub: 'Estos enlaces directos te llevan a la página correcta. Ya dentro, busca la pestaña "Authorized Partners".',
    step3: 'Haz clic en "Add Authorized Partner" y copia el enlace de invitación único',
    step3Sub: 'Amazon genera un enlace único — no lo compartas públicamente. Pégalo en la casilla de abajo (más rápido) o envíalo de forma segura a harry@superflycommerce.com.',
    linkPlaceholder: 'Pega aquí tu enlace de invitación de Amazon (empieza con https://sellercentral.amazon...)',
    submitLink: 'Enviar Enlace de Invitación',
    submittedMsg: 'Perfecto — recibimos tu enlace de invitación y lo aceptaremos en unas horas. Tu auditoría empieza hoy.',
    inviteBtn: 'Envié el enlace por otra vía (email/WhatsApp) ✓',
    doneMsg: 'Perfecto — aceptaremos tu invitación y empezaremos la auditoría en unas horas.'
  }
};

const PartnerAccessGuide = ({ region, lang = 'en', lead }) => {
  const [copied, setCopied] = useState(false);
  const [done, setDone] = useState(false);
  const [inviteLink, setInviteLink] = useState('');
  const [linkSubmitted, setLinkSubmitted] = useState(false);
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

  const postInvite = (extra = {}) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/regional-audit/invite-sent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audit_id: lead?.auditId || null,
        email: lead?.email || null,
        contact_name: lead?.name || null,
        company_name: lead?.company || null,
        region: region || null,
        ...extra
      })
    }).catch(() => {});
  };

  const handleSubmitLink = () => {
    const trimmed = inviteLink.trim();
    if (!trimmed) return;
    postInvite({ invite_link: trimmed });
    setLinkSubmitted(true);
  };

  const handleInviteSent = () => {
    setDone(true);
    postInvite();
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
            <p className="text-xs text-gray-500 mt-2">
              {t.nameLabel} <strong>{PARTNER_NAME}</strong> · {t.companyLabel} <strong>{PARTNER_COMPANY}</strong>
            </p>
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
            <p className="text-sm text-gray-600 mb-3">{t.step3Sub}</p>

            {/* Paste-link field */}
            {linkSubmitted ? (
              <div className="flex items-center gap-2 text-[#16A34A] font-semibold bg-green-50 border border-green-200 rounded-lg p-3" data-testid="invite-link-submitted">
                <Check className="w-5 h-5" />
                {t.submittedMsg}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  value={inviteLink}
                  onChange={(e) => setInviteLink(e.target.value)}
                  placeholder={t.linkPlaceholder}
                  dir="ltr"
                  data-testid="invite-link-input"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-sm font-mono focus:border-[#22C55E] focus:outline-none"
                />
                <Button
                  onClick={handleSubmitLink}
                  disabled={!inviteLink.trim()}
                  data-testid="submit-invite-link-btn"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-lg px-5 whitespace-nowrap disabled:opacity-50"
                >
                  {t.submitLink}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Alt confirmation (sent link elsewhere) */}
        {!linkSubmitted && (
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
        )}
      </CardContent>
    </Card>
  );
};

export default PartnerAccessGuide;
