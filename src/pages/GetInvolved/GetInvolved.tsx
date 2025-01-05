import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Lightbulb, 
  Users, 
  HandHeart, 
  Share2, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  NetworkIcon,
  MicIcon
} from "lucide-react";
import { BorderTrail } from '@/components/core/border-trail';
import { PageLayout, PageHeader } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const getInvolvedOpportunities = [
  {
    icon: Users,
    title: "Mentorship Pathways",
    description: "Transform careers through meaningful mentorship connections",
    color: "purple",
    details: [
      "One-on-one mentorship matching",
      "Structured guidance programs",
      "Career development workshops",
      "Peer support networks"
    ],
    benefits: [
      "Accelerate professional growth",
      "Expand professional network",
      "Gain leadership insights",
      "Build confidence"
    ],
    type: "Mentorship Program",
    cta: "Become a Mentor/Mentee"
  },
  {
    icon: HandHeart,
    title: "Community Impact",
    description: "Create meaningful change through strategic volunteering",
    color: "green",
    details: [
      "Local and virtual volunteering",
      "Skills-based contribution",
      "Event support roles",
      "Community outreach initiatives"
    ],
    benefits: [
      "Make a tangible difference",
      "Develop leadership skills",
      "Expand professional network",
      "Personal fulfillment"
    ],
    type: "Volunteer Opportunities",
    cta: "Explore Volunteer Roles"
  },
  {
    icon: Share2,
    title: "Storytelling Platform",
    description: "Amplify women's voices and inspire collective growth",
    color: "blue",
    details: [
      "Personal leadership narratives",
      "Professional journey sharing",
      "Multimedia story formats",
      "Community engagement"
    ],
    benefits: [
      "Inspire other women",
      "Build personal brand",
      "Create meaningful connections",
      "Contribute to collective wisdom"
    ],
    type: "Story Sharing Initiative",
    cta: "Share Your Story"
  },
  {
    icon: Lightbulb,
    title: "Strategic Leadership",
    description: "Shape organizational vision through advisory roles",
    color: "teal",
    details: [
      "Advisory board participation",
      "Strategic planning sessions",
      "Policy development",
      "Innovation workshops"
    ],
    benefits: [
      "Influence organizational direction",
      "High-level strategic exposure",
      "Network with leaders",
      "Professional development"
    ],
    type: "Leadership Advisory",
    cta: "Join Advisory Board"
  },
  {
    icon: Calendar,
    title: "Event Ecosystem",
    description: "Create and curate transformative professional experiences",
    color: "orange",
    details: [
      "Workshop design",
      "Speaker curation",
      "Networking event planning",
      "Virtual and in-person formats"
    ],
    benefits: [
      "Showcase leadership skills",
      "Build event management expertise",
      "Expand professional network",
      "Create learning opportunities"
    ],
    type: "Event Collaboration",
    cta: "Propose an Event"
  },
  {
    icon: Heart,
    title: "Sustainable Support",
    description: "Fuel women's leadership through financial and resource contributions",
    color: "red",
    details: [
      "Financial donations",
      "Sponsorship programs",
      "Resource allocation",
      "Scholarship funding"
    ],
    benefits: [
      "Direct impact on women's empowerment",
      "Tax-deductible contributions",
      "Transparent fund utilization",
      "Scalable support models"
    ],
    type: "Financial Contribution",
    cta: "Support Our Mission"
  }
];

const GetInvolved = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<number | null>(null);

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
      title="Get Involved" 
      description="Discover transformative ways to contribute and grow with Women of Influence"
    >
      <PageHeader 
        title="Your Impact Journey" 
        subtitle="Empowering Change, One Opportunity at a Time"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {getInvolvedOpportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                variants={itemVariants}
                className={`
                  relative overflow-hidden rounded-xl
                  ${selectedOpportunity === index ? `bg-${opportunity.color}-50` : 'bg-white'}
                  hover:shadow-lg
                  transition-all duration-300
                  p-6
                  cursor-pointer
                  group
                  border border-transparent hover:border-${opportunity.color}-300
                `}
                onClick={() => setSelectedOpportunity(index === selectedOpportunity ? null : index)}
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0">
                  <BorderTrail 
                    className={`bg-gradient-to-r from-${opportunity.color}-300/50 via-${opportunity.color}-500/50 to-${opportunity.color}-300/50 group-hover:opacity-70 transition-opacity duration-300`}
                    size={180}
                    shape="rect"
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: 'easeInOut',
                    }}
                    delay={index * 0.3}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className={`
                    w-16 h-16 mb-4 rounded-full 
                    flex items-center justify-center 
                    bg-${opportunity.color}-100
                    text-${opportunity.color}-600
                  `}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className={`
                    text-xl font-semibold 
                    text-${opportunity.color}-800 
                    mb-2
                    group-hover:text-${opportunity.color}-900
                    transition-colors
                  `}>
                    {opportunity.title}
                  </h3>

                  <p className="text-gray-700 mb-4">
                    {opportunity.description}
                  </p>

                  <Button 
                    variant="outline"
                    className={`
                      w-full
                      bg-white
                      border-${opportunity.color}-300
                      text-${opportunity.color}-600
                      hover:bg-${opportunity.color}-50
                      hover:border-${opportunity.color}-400
                      transition-colors
                      duration-300
                      flex items-center justify-between
                    `}
                  >
                    <span>{opportunity.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedOpportunity !== null && (
            <motion.div 
              key="opportunity-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-white shadow-lg rounded-xl p-8 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    {React.createElement(getInvolvedOpportunities[selectedOpportunity].icon, { 
                      className: `w-12 h-12 mr-4 text-${getInvolvedOpportunities[selectedOpportunity].color}-600` 
                    })}
                    <h2 className={`text-2xl font-bold text-${getInvolvedOpportunities[selectedOpportunity].color}-900`}>
                      {getInvolvedOpportunities[selectedOpportunity].title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {getInvolvedOpportunities[selectedOpportunity].description}
                  </p>

                  <div className="mb-6">
                    <h3 className={`font-semibold text-${getInvolvedOpportunities[selectedOpportunity].color}-800 mb-3`}>
                      Key Details
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      {getInvolvedOpportunities[selectedOpportunity].details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className={`w-5 h-5 mr-2 text-${getInvolvedOpportunities[selectedOpportunity].color}-500`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className={`font-semibold text-${getInvolvedOpportunities[selectedOpportunity].color}-800 mb-3`}>
                      Your Benefits
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      {getInvolvedOpportunities[selectedOpportunity].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap className={`w-5 h-5 mr-2 text-${getInvolvedOpportunities[selectedOpportunity].color}-500`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`hidden md:block bg-${getInvolvedOpportunities[selectedOpportunity].color}-50 rounded-lg p-6 flex flex-col justify-center`}>
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`bg-${getInvolvedOpportunities[selectedOpportunity].color}-200 p-6 rounded-full`}>
                        {React.createElement(getInvolvedOpportunities[selectedOpportunity].icon, { 
                          className: `w-16 h-16 text-${getInvolvedOpportunities[selectedOpportunity].color}-700` 
                        })}
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold text-${getInvolvedOpportunities[selectedOpportunity].color}-900 mb-2`}>
                      {getInvolvedOpportunities[selectedOpportunity].type}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Transform potential into impact
                    </p>
                    <Button className="w-full">
                      {getInvolvedOpportunities[selectedOpportunity].cta}
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

export default GetInvolved;
