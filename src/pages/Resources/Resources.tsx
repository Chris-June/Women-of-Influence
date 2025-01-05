import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  BookOpen, 
  FileText, 
  Link as LinkIcon, 
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";
import { BorderTrail } from '@/components/core/border-trail';
import { PageLayout, PageHeader } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ResourceModal, ResourceTemplateProps } from '@/pages/Resources/ResourceModal';

const resourceData: ResourceTemplateProps[] = [
  {
    id: 'leadership-guide-1',
    title: "Leadership Guides",
    description: "Comprehensive resources for women aspiring to leadership positions.",
    type: 'Guide',
    difficulty: 'Intermediate',
    url: "https://example.com/leadership-guide",
    downloadLink: "https://example.com/leadership-guide.pdf",
    image: "https://example.com/leadership-guide-image.jpg",
    tags: ["Career", "Leadership", "Professional Development"],
    author: {
      name: "Dr. Emily Rodriguez",
      avatar: "https://example.com/emily-avatar.jpg"
    },
    details: [
      "Career advancement strategies",
      "Personal branding techniques",
      "Leadership skill development",
      "Navigating corporate landscapes"
    ],
    benefits: [
      "Accelerate career progression",
      "Build confident leadership skills",
      "Develop strategic thinking"
    ]
  },
  {
    id: 'mentorship-toolkit-1',
    title: "Mentorship Resources",
    description: "Tools and templates for establishing effective mentoring relationships.",
    type: 'Toolkit',
    difficulty: 'Beginner',
    url: "https://example.com/mentorship-toolkit",
    downloadLink: "https://example.com/mentorship-toolkit.zip",
    image: "https://example.com/mentorship-toolkit-image.jpg",
    tags: ["Mentorship", "Networking", "Professional Growth"],
    author: {
      name: "Sarah Johnson",
      avatar: "https://example.com/sarah-avatar.jpg"
    },
    details: [
      "Mentorship connection templates",
      "Goal-setting frameworks",
      "Communication guidelines",
      "Relationship mapping tools"
    ],
    benefits: [
      "Find the right mentor",
      "Structure meaningful connections",
      "Accelerate professional growth"
    ]
  },
  {
    id: 'career-development-1',
    title: "Career Development",
    description: "Essential resources for skill development and professional growth.",
    type: 'Course',
    difficulty: 'Advanced',
    url: "https://example.com/career-development-course",
    downloadLink: "https://example.com/career-development-materials.pdf",
    image: "https://example.com/career-development-image.jpg",
    tags: ["Skill Development", "Career Planning", "Professional Skills"],
    author: {
      name: "Maria Chen",
      avatar: "https://example.com/maria-avatar.jpg"
    },
    details: [
      "Interactive online courses",
      "Skill assessment tools",
      "Career roadmap planning",
      "Professional development tracks"
    ],
    benefits: [
      "Identify personal strengths",
      "Create strategic career plans",
      "Continuous learning support"
    ]
  },
  {
    id: 'networking-strategies-1',
    title: "Networking Strategies",
    description: "Advanced techniques for building and maintaining professional relationships.",
    type: 'Webinar',
    difficulty: 'Intermediate',
    url: "https://example.com/networking-strategies",
    downloadLink: "https://example.com/networking-strategies-guide.pdf",
    image: "https://example.com/networking-strategies-image.jpg",
    tags: ["Networking", "Professional Connections", "Communication"],
    author: {
      name: "Jessica Wong",
      avatar: "https://example.com/jessica-avatar.jpg"
    },
    details: [
      "Networking platform strategies",
      "Connection building techniques",
      "Professional social media tips",
      "Relationship maintenance guides"
    ],
    benefits: [
      "Expand professional network",
      "Create meaningful connections",
      "Leverage social platforms"
    ]
  }
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState<number | null>(null);
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);

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

  const handleResourceClick = (index: number) => {
    setSelectedResource(index);
  };

  const handleAccessResource = (index: number) => {
    setSelectedResource(index);
    setIsResourceModalOpen(true);
  };

  const handleCloseResourceModal = () => {
    setIsResourceModalOpen(false);
  };

  return (
    <PageLayout 
      title="Professional Development Resources" 
      description="Discover transformative learning and growth opportunities"
    >
      <PageHeader 
        title="Our Learning Ecosystem" 
        subtitle="Curated resources to empower your professional journey" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {resourceData.map((resource, index) => {
            const IconComponent = resource.type === 'Guide' ? FileText :
                                  resource.type === 'Toolkit' ? BookOpen :
                                  resource.type === 'Course' ? Download :
                                  LinkIcon;
            
            return (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-xl 
                  border border-transparent hover:border-purple-300 
                  transition-all duration-300 p-6
                  ${selectedResource === index ? 'bg-purple-50' : 'bg-white'}
                  shadow-md hover:shadow-xl
                `}
                onClick={() => handleResourceClick(index)}
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
                    bg-purple-100 text-purple-600
                  `}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-gray-700 line-clamp-3 mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="flex items-center group w-full justify-between border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
                      onClick={() => handleAccessResource(index)}
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
          {selectedResource !== null && (
            <motion.div 
              key="resource-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-white shadow-lg rounded-xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    {React.createElement(
                      resourceData[selectedResource].type === 'Guide' ? FileText :
                      resourceData[selectedResource].type === 'Toolkit' ? BookOpen :
                      resourceData[selectedResource].type === 'Course' ? Download :
                      LinkIcon, 
                      { 
                        className: "w-12 h-12 mr-4 text-purple-600" 
                      }
                    )}
                    <h2 className="text-2xl font-bold text-purple-900">
                      {resourceData[selectedResource].title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {resourceData[selectedResource].description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">Key Features</h3>
                    <ul className="space-y-2 text-gray-700">
                      {selectedResource !== null && resourceData[selectedResource]?.details?.map((detail, idx) => (
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
                      {selectedResource !== null && resourceData[selectedResource]?.benefits?.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-purple-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex bg-purple-50 rounded-lg p-6 justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-purple-200 p-6 rounded-full">
                        {React.createElement(
                          resourceData[selectedResource].type === 'Guide' ? FileText :
                          resourceData[selectedResource].type === 'Toolkit' ? BookOpen :
                          resourceData[selectedResource].type === 'Course' ? Download :
                          LinkIcon, 
                          { 
                            className: "w-16 h-16 text-purple-700" 
                          }
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {resourceData[selectedResource].type} Resources
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Designed to empower, educate, and inspire
                    </p>
                    <Button 
                      className="w-full"
                      onClick={() => handleAccessResource(selectedResource)}
                    >
                      Access Resources
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selectedResource !== null && (
        <ResourceModal
          isOpen={isResourceModalOpen}
          onClose={handleCloseResourceModal}
          resource={resourceData[selectedResource]}
        />
      )}
    </PageLayout>
  );
};

export default Resources;
