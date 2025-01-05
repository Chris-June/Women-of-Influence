import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Social Share Icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#1DA1F2">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-4.5 5.5a2 2 0 0 0-2-2h-2v8h2v-3.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5V16h2v-3.5a3.5 3.5 0 0 0-3.5-3.5zM7 8H5v8h2V8zm.25-2.5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0z"/>
  </svg>
);

// Flexible interface to support various newsletter types
export interface NewsletterTemplateProps {
  // Core required fields
  id: string;
  title: string;
  
  // Optional fields with flexible types
  description?: string;
  image?: string;
  date?: string;
  
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

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsletter: NewsletterTemplateProps;
  customRenderer?: (newsletter: NewsletterTemplateProps) => ReactNode;
}

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

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ 
  isOpen, 
  onClose, 
  newsletter,
  customRenderer
}) => {
  // If a custom renderer is provided, use it
  if (customRenderer) {
    return customRenderer(newsletter);
  }

  if (!isOpen) return null;

  // Determine tag rendering based on tag type
  const renderTags = () => {
    if (!newsletter.tags) return null;
    
    return newsletter.tags.map((tag) => {
      // Support for both string and object tags
      const tagLabel = typeof tag === 'string' ? tag : tag.label;
      const tagColor = typeof tag === 'object' ? tag.color : 'bg-purple-100';
      
      return (
        <span 
          key={tagLabel} 
          className={`px-2 py-1 ${tagColor} text-purple-800 rounded-full text-xs mr-2 mb-2`}
        >
          {tagLabel}
        </span>
      );
    });
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-xl w-full max-w-4xl mx-auto relative max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{ 
            backgroundColor: newsletter.theme?.bgColor || 'white',
            color: newsletter.theme?.textColor || 'inherit'
          }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
          >
            ✕
          </button>

          {/* Custom Header Component or Default */}
          {newsletter.headerComponent || (
            <div className="p-6 pb-0">
              <h1 className="text-3xl font-bold text-purple-800 mb-4">
                {newsletter.title}
              </h1>
              {newsletter.description && (
                <p className="text-gray-600 mb-4">{newsletter.description}</p>
              )}
            </div>
          )}

          {/* Metadata Section */}
          <div className="p-6 pt-0">
            {(newsletter.author || newsletter.tags) && (
              <div className="flex items-center justify-between mb-4">
                {/* Author Section */}
                {newsletter.author && (
                  <div className="flex items-center space-x-3">
                    {newsletter.author.avatar && (
                      <img 
                        src={newsletter.author.avatar} 
                        alt={newsletter.author.name || 'Author'} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      {newsletter.author.name && (
                        <p className="font-semibold text-gray-800">
                          {newsletter.author.name}
                        </p>
                      )}
                      {newsletter.date && (
                        <p className="text-sm text-gray-500">
                          {newsletter.date}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Tags Section */}
                <div className="flex flex-wrap items-center">
                  {renderTags()}
                </div>
              </div>
            )}

            {/* Newsletter Image */}
            {newsletter.image && (
              <div className="mb-6">
                <img 
                  src={newsletter.image} 
                  alt={newsletter.title} 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {/* Newsletter Content */}
          <div className="p-6 pt-0">
            {typeof newsletter.content === 'string' ? (
              <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: newsletter.content }}
              />
            ) : (
              newsletter.content
            )}
          </div>

          {/* Custom Footer Component or Social Sharing */}
          {newsletter.footerComponent || (
            newsletter.url && (
              <div className="p-6 pt-0 flex justify-center space-x-4">
                <button 
                  onClick={() => shareOnSocialMedia('facebook', newsletter.url!, newsletter.title)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <FacebookIcon />
                </button>
                <button 
                  onClick={() => shareOnSocialMedia('twitter', newsletter.url!, newsletter.title)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <TwitterIcon />
                </button>
                <button 
                  onClick={() => shareOnSocialMedia('linkedin', newsletter.url!, newsletter.title)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <LinkedinIcon />
                </button>
              </div>
            )
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};