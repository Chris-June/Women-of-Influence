import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShareIcon } from '@heroicons/react/24/outline';

// Define the structure of a Community Group
export interface CommunityTemplateProps {
  id: string;
  name: string;
  description: string;
  focus: string;
  image?: string;
  memberCount?: number;
  tags?: string[];
  url?: string;
  icon?: React.ComponentType<{ className?: string }>;
  benefits?: string[];
}

// Props for the CommunityModal component
interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  community: CommunityTemplateProps;
}

// Social Sharing Function
const shareCommunity = (community: CommunityTemplateProps) => {
  const shareText = `Join ${community.name}: ${community.description}`;
  const shareUrl = community.url || window.location.href;

  const socialUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  };

  window.open(socialUrls.twitter, '_blank');
};

const CommunityModal: React.FC<CommunityModalProps> = ({ 
  isOpen, 
  onClose, 
  community 
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual submission logic
    console.log('Submitting community join request:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            {community.image && (
              <img 
                src={community.image} 
                alt={community.name} 
                className="mx-auto w-24 h-24 rounded-full object-cover mb-4"
              />
            )}
            <h2 className="text-2xl font-bold text-gray-800">{community.name}</h2>
            <p className="text-gray-600 mt-2">{community.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="interests"
              placeholder="Why are you interested in this community?"
              value={formData.interests}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Join Community
              </button>
              <button
                type="button"
                onClick={() => shareCommunity(community)}
                className="text-gray-600 hover:text-gray-800"
              >
                <ShareIcon className="h-6 w-6" />
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommunityModal;