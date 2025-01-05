import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedGradient } from '@/components/core/animated-gradient';
import { BorderTrail } from '@/components/core/border-trail';
import { TextLoop } from '@/components/core/text-loop';
import { TextEffect } from '@/components/core/text-effect';
import { PageLayout, PageHeader } from '@/components/PageLayout';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      bio: "A visionary leader passionate about amplifying women's voices and creating platforms for meaningful change.",
      image: "/images/team/elena.jpg"
    },
    {
      name: "Sophia Chen",
      role: "Chief Impact Officer",
      bio: "Dedicated to developing strategic partnerships that drive social innovation and women's empowerment.",
      image: "/images/team/sophia.jpg"
    },
    {
      name: "Amara Okonkwo",
      role: "Community Director",
      bio: "An expert in community building and storytelling, bridging connections across diverse backgrounds.",
      image: "/images/team/amara.jpg"
    }
  ];

  const missionPoints = [
    {
      name: 'Inspire',
      description: 'Share transformative stories that motivate and encourage women to pursue their dreams.',
    },
    {
      name: 'Empower',
      description: 'Provide resources, networks, and platforms that support women\'s personal and professional growth.',
    },
    {
      name: 'Transform',
      description: 'Create meaningful change by highlighting diverse perspectives and challenging systemic barriers.',
    }
  ];

  const heroLoopWords = [
    'Empower',
    'Inspire',
    'Transform',
    'Connect',
    'Elevate',
    'Support'
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Our Beginning',
      description: 'Founded with a vision to create a global platform for women empowerment.',
    },
    {
      year: '2021',
      title: 'Community Growth',
      description: 'Reached our first 1,000 members and launched mentorship programs.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Extended our reach to 50+ countries and launched virtual events.',
    },
    {
      year: '2023',
      title: 'Impact Acceleration',
      description: 'Established partnerships with Fortune 500 companies and launched grant programs.',
    },
  ];

  const values = [
    {
      title: 'Inclusivity',
      description: 'Creating spaces where every voice is heard and valued.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Embracing new ideas and approaches to drive change.',
      icon: '💡',
    },
    {
      title: 'Impact',
      description: "Making meaningful differences in women's lives globally.",
      icon: '🌍',
    },
    {
      title: 'Integrity',
      description: 'Operating with transparency and authenticity in all we do.',
      icon: '⭐',
    },
  ];

  return (
    <PageLayout 
      title="About Women of Influence" 
      description="Our mission, vision, and the team behind empowering women"
    >
      <PageHeader 
        title="Empowering Women, Transforming Communities" 
        subtitle="Our mission is to create meaningful change through connection, inspiration, and support" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>Women of Influence - About Us</title>
          <meta name="description" content="Learn about our mission, team, and commitment to empowering women" />
        </Helmet>

        <AnimatedGradient speed={15} />
        
        <div className="relative min-h-screen">
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="relative text-center">
                  <AnimatedGradient className="absolute inset-0 -z-10 opacity-20" />
                  <BorderTrail className="absolute inset-0 -z-10" />
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                    We{' '}
                    <TextLoop interval={2}>
                      {heroLoopWords.map((word) => (
                        <span key={word} className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{word}</span>
                      ))}
                    </TextLoop>
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    <TextEffect per="char" preset="fade">
                      We are a global platform dedicated to celebrating, empowering, and amplifying the stories of extraordinary women who are reshaping our world.
                    </TextEffect>
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                      <a href="/get-involved">Join Our Community</a>
                    </Button>
                    <Button variant="ghost" className="hover:text-purple-600" asChild>
                      <a href="/contact">Contact Us <span aria-hidden="true">→</span></a>
                    </Button>
                  </div>
                </div>

                {/* Mission Points */}
                <div className="mt-24">
                  <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-16">
                    Our Mission
                  </h2>
                  <div className="grid gap-8 md:grid-cols-3">
                    {missionPoints.map((point, index) => (
                      <motion.div
                        key={point.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-purple-600 mb-3">{point.name}</h3>
                        <p className="text-gray-600">{point.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-24">
                  <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-16">
                    Our Journey
                  </h2>
                  <div className="relative">
                    <div className="absolute left-1/2 h-full w-0.5 bg-purple-200 transform -translate-x-1/2"></div>
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`relative flex items-center ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        } mb-8`}
                      >
                        <div
                          className={`w-1/2 ${
                            index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
                          }`}
                        >
                          <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <span className="text-purple-600 font-bold">{item.year}</span>
                            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                          </div>
                        </div>
                        <div className="absolute left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Values */}
                <div className="mt-24">
                  <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-16">
                    Our Values
                  </h2>
                  <div className="grid grid-cols-2 gap-8">
                    {values.map((value, index) => (
                      <motion.div
                        key={value.title}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="mt-24">
                  <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-16">
                    Meet Our Team
                  </h2>
                  <div className="grid gap-8 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={member.name}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-purple-600 mt-1">{member.role}</p>
                          <p className="text-gray-600 mt-4">{member.bio}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
