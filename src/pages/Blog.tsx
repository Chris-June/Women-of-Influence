import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Tag, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  CheckCircle,
  Newspaper,
  Mic,
  Monitor,
  Lightbulb
} from "lucide-react";
import { BorderTrail } from '@/components/core/border-trail';
import { PageLayout, PageHeader } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const blogFeatures = [
  {
    icon: Newspaper,
    title: "Leadership Stories",
    description: "Inspiring narratives of women breaking barriers and achieving remarkable success.",
    color: "purple",
    details: [
      "Personal journey narratives",
      "Overcoming professional challenges",
      "Leadership transformation stories",
      "Inspirational career paths"
    ],
    benefits: [
      "Gain motivational insights",
      "Learn from real-world experiences",
      "Build resilience and confidence"
    ],
    type: "Narrative Articles"
  },
  {
    icon: Monitor,
    title: "Tech & Innovation",
    description: "Exploring women's roles and achievements in technology and innovation sectors.",
    color: "blue",
    details: [
      "Tech industry trends",
      "Women in STEM spotlights",
      "Innovation leadership",
      "Emerging technology insights"
    ],
    benefits: [
      "Stay updated on tech trends",
      "Discover role models",
      "Understand industry dynamics"
    ],
    type: "Tech Insights"
  },
  {
    icon: Mic,
    title: "Career Development",
    description: "Expert advice and strategies for professional growth and career advancement.",
    color: "green",
    details: [
      "Career transition strategies",
      "Skill development guides",
      "Networking techniques",
      "Professional branding tips"
    ],
    benefits: [
      "Accelerate career progression",
      "Develop professional skills",
      "Navigate career challenges"
    ],
    type: "Career Guides"
  },
  {
    icon: Lightbulb,
    title: "Diversity & Inclusion",
    description: "Deep dives into creating inclusive workplaces and promoting diversity.",
    color: "pink",
    details: [
      "Workplace inclusion strategies",
      "Diversity leadership",
      "Equity in professional settings",
      "Cultural transformation insights"
    ],
    benefits: [
      "Understand inclusive practices",
      "Promote workplace equality",
      "Drive organizational change"
    ],
    type: "Diversity Insights"
  }
];

const Blog = () => {
  const [selectedBlogFeature, setSelectedBlogFeature] = useState<number | null>(null);

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

  return (
    <PageLayout 
      title="Women of Influence Blog" 
      description="Discover transformative insights and inspiring stories"
    >
      <PageHeader 
        title="Our Knowledge Ecosystem" 
        subtitle="Empowering perspectives that drive change" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-xl 
                  border border-transparent hover:border-purple-300 
                  transition-all duration-300 p-6
                  ${selectedBlogFeature === index ? 'bg-purple-50' : 'bg-white'}
                  shadow-md hover:shadow-xl
                `}
                onClick={() => setSelectedBlogFeature(index === selectedBlogFeature ? null : index)}
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
                    bg-${feature.color}-100 text-${feature.color}-600
                  `}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors">
                    {feature.title}
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
          {selectedBlogFeature !== null && (
            <motion.div 
              key="blog-feature-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-white shadow-lg rounded-xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    {React.createElement(blogFeatures[selectedBlogFeature].icon, { 
                      className: "w-12 h-12 mr-4 text-purple-600" 
                    })}
                    <h2 className="text-2xl font-bold text-purple-900">
                      {blogFeatures[selectedBlogFeature].title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {blogFeatures[selectedBlogFeature].description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">Key Features</h3>
                    <ul className="space-y-2 text-gray-700">
                      {blogFeatures[selectedBlogFeature].details.map((detail, idx) => (
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
                      {blogFeatures[selectedBlogFeature].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-purple-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block bg-purple-50 rounded-lg p-6 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-purple-200 p-6 rounded-full">
                        {React.createElement(blogFeatures[selectedBlogFeature].icon, { 
                          className: "w-16 h-16 text-purple-700" 
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {blogFeatures[selectedBlogFeature].type} Collection
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Designed to inspire, educate, and empower
                    </p>
                    <Button className="w-full">
                      View Articles
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
};

export default Blog;
