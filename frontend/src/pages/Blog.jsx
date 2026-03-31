import React from 'react';
import { Badge } from '../components/ui/badge';
import { ExternalLink, Rss } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">Blog & Resources</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Amazon Growth <span className="text-[#22C55E]">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert tips, case studies, and strategies for sustainable Amazon success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://harry901.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Read on Substack
            </a>
            <a 
              href="https://harry901.substack.com/feed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#22C55E] text-[#22C55E] hover:bg-green-50 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Rss className="w-5 h-5" />
              Subscribe via RSS
            </a>
          </div>
        </div>

        {/* Substack Embed */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Substack embed widget */}
            <iframe 
              src="https://harry901.substack.com/embed" 
              width="100%" 
              height="600"
              style={{ border: '1px solid #EEE', background: 'white' }}
              frameBorder="0" 
              scrolling="no"
              title="Superfly Commerce Blog"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What We Write About</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Amazon Strategy',
                desc: 'Listing optimization, SEO tactics, and growth frameworks',
                icon: '🎯'
              },
              {
                title: 'PPC & Advertising',
                desc: 'Campaign strategies, ROAS optimization, and bidding tactics',
                icon: '📊'
              },
              {
                title: 'Case Studies',
                desc: 'Real results from real brands with full breakdowns',
                icon: '📈'
              },
              {
                title: 'Industry News',
                desc: 'Amazon updates, policy changes, and market trends',
                icon: '📰'
              },
              {
                title: 'Sustainability',
                desc: 'Eco-friendly practices and sustainable commerce',
                icon: '🌱'
              },
              {
                title: 'International Expansion',
                desc: 'Cross-border strategies and global marketplace tips',
                icon: '🌍'
              }
            ].map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Never Miss an Insight</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to get weekly Amazon growth tips, industry updates, and exclusive strategies delivered to your inbox.
          </p>
          <a href="/#newsletter">
            <button className="bg-white text-[#22C55E] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              Subscribe to Newsletter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;