# Substack Blog Integration Guide

## Setup

### 1. Create Substack Account
1. Go to https://substack.com
2. Create publication: "Superfly Commerce" or "Amazon Growth Insights"
3. Customize your Substack URL: `superflycommerce.substack.com`

### 2. Customize Your Substack

**Settings to Update:**
- Logo: Upload Superfly Commerce logo
- Brand color: #22C55E (green)
- About page: Add team info, mission
- Welcome email: Customize for new subscribers

### 3. Embed on Your Website

The Blog page (`/app/frontend/src/pages/Blog.jsx`) already includes:

1. **iframe embed** - Shows recent posts
2. **External link** - Directs to full Substack site
3. **RSS feed link** - For feed readers

### 4. Substack Embed Code

Current embed:
```html
<iframe 
  src="https://superflycommerce.substack.com/embed" 
  width="100%" 
  height="600"
  style={{ border: '1px solid #EEE', background: 'white' }}
  frameBorder="0" 
  scrolling="no"
></iframe>
```

**Alternative embeds:**

**Subscribe Form Only:**
```html
<iframe 
  src="https://superflycommerce.substack.com/embed" 
  width="480" 
  height="320"
  style="border:1px solid #EEE; background:white;" 
  frameborder="0" 
  scrolling="no"
></iframe>
```

**Latest Post Widget:**
From Substack Settings → Website → Embeds

### 5. Navigation

Add Blog link to navbar in `/app/frontend/src/components/Navbar.jsx`:

```jsx
<Link to="/blog" className="text-gray-700 hover:text-[#22C55E] transition-colors text-sm">
  Blog
</Link>
```

### 6. Substack Features

**Free Features:**
- Unlimited posts
- Email newsletters
- Comments
- Basic analytics
- RSS feed
- Custom domain ($50/year)
- Podcast hosting

**Paid Subscriptions:**
- Take 10% of paid subscriber revenue
- You set pricing
- Stripe integration included

### 7. Content Strategy

**Recommended Posting Schedule:**
- Weekly newsletter (Tuesdays)
- 2x monthly deep-dive posts
- Case study once a month
- Quick tips (1-2 per week on socials, repurposed from blog)

**Content Pillars:**
1. Amazon Strategy & Tactics
2. Case Studies & Results
3. Industry News & Updates
4. Sustainability in Commerce
5. International Expansion Tips

### 8. SEO Benefits

**Substack Domain Authority:** High (90+)
- Your posts rank well in Google
- Substack handles SEO automatically
- Cross-posting to Medium recommended

**Link Back to Main Site:**
- Include CTAs in posts
- Link to services/pricing
- Mention "Book Discovery Call"

### 9. Substack API (Advanced)

Substack doesn't have an official API, but you can:

**RSS Feed:**
```javascript
// Fetch latest posts from RSS
fetch('https://superflycommerce.substack.com/feed')
  .then(res => res.text())
  .then(xml => {
    // Parse XML to show posts on your site
  });
```

**npm package for parsing:**
```bash
yarn add rss-parser
```

```javascript
import Parser from 'rss-parser';

const parser = new Parser();
const feed = await parser.parseURL('https://superflycommerce.substack.com/feed');

feed.items.forEach(item => {
  console.log(item.title, item.link);
});
```

### 10. Cross-Promotion

**On Main Site:**
- Blog page with embed ✅
- Footer link to Substack
- Newsletter signup → Substack
- Social media icons

**On Substack:**
- Link to superflycommerce.com in bio
- CTA in every post
- Welcome email with links

### 11. Analytics

Substack provides:
- Subscriber growth
- Open rates
- Click rates
- Most popular posts
- Subscriber sources

**Additional Tracking:**
- Use UTM parameters in links
- Track in Google Analytics
- Monitor conversions from blog → services

### 12. Monetization Options

**Free Newsletter (Recommended to Start):**
- Build audience first
- Promote services
- Lead generation

**Paid Subscriptions (Later):**
- Premium content
- Advanced strategies
- 1-on-1 coaching
- Community access

**Substack Takes:**
- 10% of paid subscription revenue
- Stripe fees (~3%)
- You keep ~87%

### 13. First Posts to Write

1. **Welcome Post** - Introduce Superfly Commerce
2. **Why We Started This** - Mission & values
3. **Case Study** - FitGear Pro (from website)
4. **Amazon Listing Optimization 101** - Tactical guide
5. **Performance-Based Model Explained** - Educate on revenue share

### 14. Resources

- Substack Help: https://support.substack.com
- Best Practices: https://on.substack.com/p/grow
- Writer Community: r/substack on Reddit

---

## Quick Start Checklist

- [ ] Create Substack account
- [ ] Set URL: superflycommerce.substack.com
- [ ] Upload logo and brand colors
- [ ] Write welcome post
- [ ] Customize welcome email
- [ ] Add social links
- [ ] Write first 3 posts
- [ ] Test embed on website
- [ ] Promote on social media
- [ ] Add to email signature

---

**Current Status:** Blog page ready with embed, just needs Substack publication created!
