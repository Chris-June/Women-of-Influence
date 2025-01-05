import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  VideoIcon,
  MicIcon,
  PresentationIcon,
  NetworkIcon
} from "lucide-react";
import { BorderTrail } from '@/components/core/border-trail';
import { PageLayout, PageHeader } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const eventFeatures = [
  {
    icon: PresentationIcon,
    title: "Leadership Summits",
    description: "Immersive conferences bringing together women leaders from diverse industries.",
    color: "purple",
    details: [
      "Keynote speaker sessions",
      "Interactive workshops",
      "Networking opportunities",
      "Industry insights panels"
    ],
    benefits: [
      "Expand professional network",
      "Learn from industry leaders",
      "Gain leadership perspectives"
    ],
    type: "In-Person Conferences"
  },
  {
    icon: VideoIcon,
    title: "Tech Innovation Workshops",
    description: "Cutting-edge virtual sessions exploring emerging technologies and leadership.",
    color: "blue",
    details: [
      "Hands-on tech workshops",
      "Emerging technology insights",
      "Business leadership strategies",
      "Interactive learning experiences"
    ],
    benefits: [
      "Stay ahead of tech trends",
      "Develop digital leadership skills",
      "Understand technology impact"
    ],
    type: "Virtual Workshops"
  },
  {
    icon: NetworkIcon,
    title: "Mentorship Programs",
    description: "Structured networking and mentorship events connecting aspiring and established leaders.",
    color: "green",
    details: [
      "Mentor-mentee matching",
      "Career guidance sessions",
      "Professional development tracks",
      "Supportive community building"
    ],
    benefits: [
      "Find professional mentors",
      "Accelerate career growth",
      "Build meaningful connections"
    ],
    type: "Networking Events"
  },
  {
    icon: MicIcon,
    title: "Career Development Webinars",
    description: "Expert-led online sessions providing insights into career advancement and leadership.",
    color: "pink",
    details: [
      "Career strategy discussions",
      "Leadership skill development",
      "Personal branding workshops",
      "Expert Q&A sessions"
    ],
    benefits: [
      "Enhance professional skills",
      "Gain career advancement insights",
      "Learn from industry experts"
    ],
    type: "Online Webinars"
  }
];

const Events = () => {
  const [selectedEventFeature, setSelectedEventFeature] = useState<number | null>(null);

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
      title="Women of Influence Events" 
      description="Discover transformative learning and networking opportunities"
    >
      <PageHeader 
        title="Our Event Ecosystem" 
        subtitle="Empowering connections that drive professional growth" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eventFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-xl 
                  border border-transparent hover:border-purple-300 
                  transition-all duration-300 p-6
                  ${selectedEventFeature === index ? 'bg-purple-50' : 'bg-white'}
                  shadow-md hover:shadow-xl
                `}
                onClick={() => setSelectedEventFeature(index === selectedEventFeature ? null : index)}
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
          {selectedEventFeature !== null && (
            <motion.div 
              key="event-feature-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-white shadow-lg rounded-xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    {React.createElement(eventFeatures[selectedEventFeature].icon, { 
                      className: "w-12 h-12 mr-4 text-purple-600" 
                    })}
                    <h2 className="text-2xl font-bold text-purple-900">
                      {eventFeatures[selectedEventFeature].title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {eventFeatures[selectedEventFeature].description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-purple-800 mb-3">Key Features</h3>
                    <ul className="space-y-2 text-gray-700">
                      {eventFeatures[selectedEventFeature].details.map((detail, idx) => (
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
                      {eventFeatures[selectedEventFeature].benefits.map((benefit, idx) => (
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
                        {React.createElement(eventFeatures[selectedEventFeature].icon, { 
                          className: "w-16 h-16 text-purple-700" 
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {eventFeatures[selectedEventFeature].type} Experience
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Designed to inspire, connect, and empower
                    </p>
                    <Button className="w-full">
                      Upcoming Events
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

export default Events;
