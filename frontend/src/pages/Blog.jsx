import React, { useState, useEffect } from 'react';
import { Badge } from '../components/ui/badge';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Substack RSS feed
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://harry901.substack.com/feed');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        
        const parsedPosts = Array.from(items).slice(0, 10).map(item => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          creator: item.querySelector('creator')?.textContent || 'Harry',
        }));
        
        setPosts(parsedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Substack posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

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
          
          <div className="flex justify-center">
            <a 
              href="https://harry901.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Read All on Substack
            </a>
          </div>
        </div>

        {/* Blog Posts */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22C55E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading latest posts...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.pubDate)}</span>
                  </div>
                  <CardTitle className="group-hover:text-[#22C55E] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {stripHtml(post.description).substring(0, 150)}...
                  </CardDescription>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="ghost" 
                      className="text-[#22C55E] hover:text-[#16A34A] p-0"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

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

        {/* Newsletter CTA - Links to Beehiiv */}
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
