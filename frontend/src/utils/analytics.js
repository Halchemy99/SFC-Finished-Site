/**
 * Google Analytics 4 Event Tracking
 * 
 * Usage:
 * import { trackEvent } from './utils/analytics';
 * trackEvent('form_submit', { form_type: 'contact' });
 */

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views (automatically handled by GA4, but can be called manually for SPAs)
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-EQQN655E1P', {
      page_path: path
    });
  }
};

// Meta Pixel event tracking
export const trackMetaEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

// Predefined event tracking functions
export const trackContactFormSubmit = (formType = 'contact') => {
  // GA4 tracking
  trackEvent('contact_form_submit', {
    form_type: formType,
    event_category: 'engagement',
    event_label: 'Contact Form'
  });
  
  // Meta Pixel tracking (Lead event)
  trackMetaEvent('Lead', {
    content_name: 'Contact Form',
    content_category: formType
  });
};

export const trackNewsletterSignup = () => {
  // GA4 tracking
  trackEvent('newsletter_signup', {
    event_category: 'engagement',
    event_label: 'Newsletter Subscription'
  });
  
  // Meta Pixel tracking (CompleteRegistration event)
  trackMetaEvent('CompleteRegistration', {
    content_name: 'Newsletter',
    status: 'subscribed'
  });
};

export const trackServiceClick = (serviceName) => {
  trackEvent('service_click', {
    service_name: serviceName,
    event_category: 'engagement',
    event_label: 'Service Interest'
  });
};

export const trackPricingView = (tier) => {
  trackEvent('pricing_view', {
    pricing_tier: tier,
    event_category: 'engagement',
    event_label: 'Pricing Page'
  });
  
  // Meta Pixel tracking (ViewContent event)
  trackMetaEvent('ViewContent', {
    content_name: 'Pricing',
    content_type: tier
  });
};

export const trackCaseStudyView = (caseStudyName) => {
  trackEvent('case_study_view', {
    case_study: caseStudyName,
    event_category: 'engagement',
    event_label: 'Case Study'
  });
};
