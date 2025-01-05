import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  LinkIcon, 
  DocumentArrowDownIcon, 
  ShareIcon 
} from '@heroicons/react/24/outline';

// Define the structure of a Resource
export interface ResourceTemplateProps {
  id: string;
  title: string;
  description: string;
  type: 'Guide' | 'Webinar' | 'Toolkit' | 'Template' | 'Course';
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  url?: string;
  downloadLink?: string;
  image?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  details?: string[];
  benefits?: string[];
}

// Props for the ResourceModal component
interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceTemplateProps;
}

// Social Sharing Function
const shareResource = (resource: ResourceTemplateProps) => {
  const shareText = `Check out this amazing resource: ${resource.title}`;
  const shareUrl = resource.url || window.location.href;

  // Basic social sharing URLs
  const socialUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  };

  // Open sharing in a new window
  window.open(socialUrls.twitter, '_blank');
};

export const ResourceModal: React.FC<ResourceModalProps> = ({ 
  isOpen, 
  onClose, 
  resource 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-4xl mx-auto my-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="relative flex flex-col w-full bg-white border-0 rounded-xl shadow-xl outline-none focus:outline-none">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <XMarkIcon className="w-8 h-8" />
              </button>

              {/* Resource Image */}
              {resource.image && (
                <div className="w-full h-64 overflow-hidden rounded-t-xl">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="object-cover w-full h-full" 
                  />
                </div>
              )}

              {/* Resource Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-purple-800 mb-2">
                      {resource.title}
                    </h2>
                    {resource.difficulty && (
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          resource.difficulty === 'Beginner' 
                            ? 'bg-green-100 text-green-800'
                            : resource.difficulty === 'Intermediate'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }
                      `}>
                        {resource.difficulty} Level
                      </span>
                    )}
                  </div>

                  {/* Resource Type Badge */}
                  <span className="
                    px-3 py-1 bg-purple-100 text-purple-800 
                    rounded-full text-sm font-medium
                  ">
                    {resource.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6">
                  {resource.description}
                </p>

                {/* Author Info */}
                {resource.author && (
                  <div className="flex items-center mb-6">
                    {resource.author.avatar && (
                      <img 
                        src={resource.author.avatar} 
                        alt={resource.author.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">
                        {resource.author.name}
                      </p>
                      <p className="text-sm text-gray-600">Resource Creator</p>
                    </div>
                  </div>
                )}

                {/* Tags */}
                {resource.tags && resource.tags.length > 0 && (
                  <div className="flex space-x-2 mb-6">
                    {resource.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="
                          px-2 py-1 bg-purple-100 
                          text-purple-800 rounded-full text-xs
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {resource.url && (
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="
                        flex items-center px-4 py-2 
                        bg-purple-500 text-white rounded-md 
                        hover:bg-purple-600 transition-colors
                      "
                    >
                      <LinkIcon className="w-5 h-5 mr-2" />
                      Access Resource
                    </a>
                  )}

                  {resource.downloadLink && (
                    <a 
                      href={resource.downloadLink} 
                      download
                      className="
                        flex items-center px-4 py-2 
                        bg-green-500 text-white rounded-md 
                        hover:bg-green-600 transition-colors
                      "
                    >
                      <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                      Download
                    </a>
                  )}

                  <button
                    onClick={() => shareResource(resource)}
                    className="
                      flex items-center px-4 py-2 
                      bg-blue-500 text-white rounded-md 
                      hover:bg-blue-600 transition-colors
                    "
                  >
                    <ShareIcon className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResourceModal;