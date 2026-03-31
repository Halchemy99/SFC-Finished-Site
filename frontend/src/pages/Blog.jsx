import React, { useState, useEffect } from 'react';
import { Badge } from '../components/ui/badge';
import { ExternalLink, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

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
        
        const parsedPosts = Array.from(items).slice(0, 6).map(item => {
          // Get full content from content:encoded if available
          const contentEncoded = item.querySelector('encoded')?.textContent || 
                                 item.querySelector('description')?.textContent || '';
          
          return {
            title: item.querySelector('title')?.textContent || '',
            link: item.querySelector('link')?.textContent || '',
            pubDate: item.querySelector('pubDate')?.textContent || '',
            content: contentEncoded,
            creator: item.querySelector('creator')?.textContent || 'Harry',
          };
        });
        
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
      month: 'long', 
      year: 'numeric' 
    });
  };

  const sanitizeHtml = (html) => {
    // Create a temporary div to clean up the HTML
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    
    // Remove script tags
    const scripts = tmp.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      scripts[i].remove();
    }
    
    return tmp.innerHTML;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">Blog & Insights</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Amazon Growth <span className="text-[#22C55E]">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert tips, case studies, and strategies for sustainable Amazon success.
          </p>
        </div>

        {/* Blog Posts - Full Content */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22C55E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading latest posts...</p>
          </div>
        ) : (
          <div className="space-y-12 mb-12">
            {posts.map((post, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.pubDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.creator}</span>
                      </div>
                    </div>
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#22C55E] hover:text-[#16A34A] font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read on Substack
                    </a>
                  </div>
                  <CardTitle className="text-3xl text-gray-900 hover:text-[#22C55E] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  {/* Full blog post content */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#22C55E] prose-strong:text-gray-900 prose-img:rounded-xl prose-img:shadow-lg"
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
                  />
                  
                  {/* Read More on Substack CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Continue Reading on Substack
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View All Posts */}
        <div className="text-center mb-12">
          <a 
            href="https://harry901.substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg"
          >
            View All Posts on Substack
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Newsletter CTA - Beehiiv */}
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
