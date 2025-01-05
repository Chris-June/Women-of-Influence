import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import DOMPurify from 'dompurify';

// Social Share Function
const shareOnSocialMedia = (platform: 'facebook' | 'twitter' | 'linkedin', url: string, title: string) => {
  let shareUrl = '';
  
  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
      break;
  }

  window.open(shareUrl, '_blank', 'width=600,height=400');
};

// Flexible interface to support various blog post types
export interface BlogTemplateProps {
  // Core required fields
  id: string;
  title: string;
  
  // Optional fields with flexible types
  description?: string;
  image?: string;
  date?: string;
  readTime?: string;
  
  // Flexible author representation
  author?: {
    name?: string;
    avatar?: string;
    bio?: string;
  };
  
  // Flexible tags system
  tags?: string[] | { label: string; color?: string }[];
  
  // Flexible content rendering
  content?: string | ReactNode;
  
  // Sharing and metadata
  url?: string;
  
  // Optional custom components or overrides
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
  
  // Styling and customization
  theme?: {
    bgColor?: string;
    textColor?: string;
    accentColor?: string;
  };
}

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: BlogTemplateProps;
  customRenderer?: (blog: BlogTemplateProps) => ReactNode;
}

export const BlogModal: React.FC<BlogModalProps> = ({ 
  isOpen, 
  onClose, 
  blog,
  customRenderer
}) => {
  // If a custom renderer is provided, use it
  if (customRenderer) {
    return customRenderer(blog);
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Blog Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">{blog.title}</h2>
              
              {/* Author & Date Info */}
              {blog.author && (
                <div className="flex items-center space-x-4 mb-4">
                  {blog.author.avatar && (
                    <img 
                      src={blog.author.avatar} 
                      alt={blog.author.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    {blog.author.name && <p className="font-semibold text-gray-800">{blog.author.name}</p>}
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      {blog.date && <span>{blog.date}</span>}
                      {blog.readTime && (
                        <>
                          <span>•</span>
                          <span>{blog.readTime} read</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Image */}
              {blog.image && (
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-96 object-cover rounded-xl mb-6"
                />
              )}
            </div>

            {/* Blog Content */}
            <div className="prose max-w-none text-gray-700 mb-8">
              {blog.content && typeof blog.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} />
              ) : (
                blog.content
              )}
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {(blog.tags as string[]).map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Social Share */}
            <div className="border-t pt-6 mt-6 flex justify-between items-center">
              <h4 className="text-lg font-semibold text-gray-800">Share this Article</h4>
              <div className="flex space-x-4">
                <button 
                  onClick={() => blog.url && shareOnSocialMedia('facebook', blog.url, blog.title || '')}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Facebook className="w-8 h-8" />
                </button>
                <button 
                  onClick={() => blog.url && shareOnSocialMedia('twitter', blog.url, blog.title || '')}
                  className="text-sky-500 hover:text-sky-600"
                >
                  <Twitter className="w-8 h-8" />
                </button>
                <button 
                  onClick={() => blog.url && shareOnSocialMedia('linkedin', blog.url, blog.title || '')}
                  className="text-blue-800 hover:text-blue-900"
                >
                  <Linkedin className="w-8 h-8" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogModal;