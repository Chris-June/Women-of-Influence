import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Lightbulb, 
  HeartHandshake, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Award,
  Zap
} from 'lucide-react';
import { AnimatedGradient } from '@/components/core/animated-gradient';
import { BorderTrail } from '@/components/core/border-trail';
import { PageLayout, PageHeader } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import CommunityModal, { CommunityTemplateProps } from './CommunityModal';

const communityFeatures: CommunityTemplateProps[] = [
  {
    id: 'networking-groups',
    name: "Networking Groups",
    description: "Connect with like-minded women across diverse industries and backgrounds.",
    focus: "Professional Networking",
    image: "/images/networking.jpg", 
    memberCount: 500,
    tags: ["Networking", "Professional Development"],
    url: "/community/networking",
    icon: Users,
    benefits: [
      "Expand professional connections",
      "Access to industry insights",
      "Mentorship opportunities",
      "Cross-industry collaboration"
    ]
  },
  {
    id: 'innovation-workshops',
    name: "Innovation Workshops",
    description: "Engage in cutting-edge learning and skill development sessions.",
    focus: "Skill Development",
    image: "/images/innovation.jpg", 
    memberCount: 350,
    tags: ["Tech", "Leadership"],
    url: "/community/innovation",
    icon: Lightbulb,
    benefits: [
      "Learn emerging technologies",
      "Develop leadership skills",
      "Hands-on innovation training",
      "Stay ahead of industry trends"
    ]
  },
  {
    id: 'support-networks',
    name: "Support Networks",
    description: "Find emotional support, guidance, and empowerment resources.",
    focus: "Personal Growth",
    image: "/images/support.jpg", 
    memberCount: 250,
    tags: ["Mental Health", "Career Transition"],
    url: "/community/support",
    icon: HeartHandshake,
    benefits: [
      "Emotional resilience building",
      "Career transition support",
      "Mental health resources",
      "Personal development coaching"
    ]
  },
  {
    id: 'learning-paths',
    name: "Learning Paths",
    description: "Curated educational resources and continuous learning programs.",
    focus: "Education",
    image: "/images/learning.jpg", 
    memberCount: 400,
    tags: ["Online Courses", "Certifications"],
    url: "/community/learning",
    icon: GraduationCap,
    benefits: [
      "Access to curated courses",
      "Professional certification paths",
      "Skill-based learning tracks",
      "Continuous education support"
    ]
  }
];

const Community = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityTemplateProps | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleJoinCommunity = (community: CommunityTemplateProps) => {
    setSelectedCommunity(community);
  };

  const handleCloseModal = () => {
    setSelectedCommunity(null);
  };

  return (
    <PageLayout 
      title="Women of Influence Community" 
      description="Discover transformative connections, resources, and support"
    >
      <PageHeader 
        title="Our Empowerment Ecosystem" 
        subtitle="A comprehensive platform designed to elevate and support women" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {communityFeatures.map((feature, index) => {
            return (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-xl 
                  border border-transparent hover:border-purple-300 
                  transition-all duration-300 p-6
                  ${selectedFeature === index ? 'bg-purple-50' : 'bg-white'}
                  shadow-md hover:shadow-xl
                `}
                onClick={() => setSelectedFeature(index === selectedFeature ? null : index)}
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0">
                  <BorderTrail 
                    className="bg-gradient-to-r from-purple-300/50 via-purple-500/50 to-purple-300/50 group-hover:opacity-70 transition-opacity duration-300"
                    size={180}
                    shape={index % 2 === 0 ? 'rect' : 'circle'}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + (index % 3),
                      ease: 'easeInOut',
                    }}
                    delay={index * 0.3}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 mb-4 rounded-full flex items-center justify-center 
                    bg-${feature.focus === "Professional Networking" ? "purple" : feature.focus === "Skill Development" ? "blue" : feature.focus === "Personal Growth" ? "pink" : "green"}-100 text-${feature.focus === "Professional Networking" ? "purple" : feature.focus === "Skill Development" ? "blue" : feature.focus === "Personal Growth" ? "pink" : "green"}-600
                  `}>
                    {feature.icon && React.createElement(feature.icon, { className: "w-8 h-8" })}
                  </div>

                  <h3 className="text-xl font-semibold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors">
                    {feature.name}
                  </h3>

                  <p className="text-gray-700 line-clamp-3 mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="flex items-center group w-full justify-between border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
                    >
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedFeature !== null && (
            <motion.div 
              key="feature-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-white shadow-lg rounded-xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    {communityFeatures[selectedFeature].icon && React.createElement(communityFeatures[selectedFeature].icon, { 
                      className: "w-12 h-12 mr-4 text-purple-600" 
                    })}
                    <h2 className="text-2xl font-bold text-purple-900">
                      {communityFeatures[selectedFeature].name}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {communityFeatures[selectedFeature].description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">Key Features</h3>
                    <ul className="space-y-2 text-gray-700">
                      {communityFeatures[selectedFeature].benefits?.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-purple-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-purple-800 mb-3">Benefits</h3>
                    <ul className="space-y-2 text-gray-700">
                      {selectedFeature !== null && communityFeatures[selectedFeature] && communityFeatures[selectedFeature].benefits && communityFeatures[selectedFeature].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-purple-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="max-md:hidden md:flex bg-purple-50 rounded-lg p-6 flex-col justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-purple-200 p-6 rounded-full">
                        {communityFeatures[selectedFeature].icon && React.createElement(communityFeatures[selectedFeature].icon, { 
                          className: "w-16 h-16 text-purple-700" 
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {communityFeatures[selectedFeature].name} Ecosystem
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Designed to empower, connect, and inspire women
                    </p>
                    <Button 
                      onClick={() => handleJoinCommunity(communityFeatures[selectedFeature])}
                      className="w-full"
                    >
                      Join This Community
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selectedCommunity && (
        <CommunityModal 
          isOpen={!!selectedCommunity} 
          onClose={handleCloseModal} 
          community={selectedCommunity} 
        />
      )}
    </PageLayout>
  );
};

export default Community;
