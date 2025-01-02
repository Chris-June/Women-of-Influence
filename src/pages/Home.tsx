import React, { type JSX } from 'react';
import { PageLayout, PageHeader, InteractiveCard } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { AnimatedGradient } from '@/components/core/animated-gradient';
import { BorderTrail } from '@/components/core/border-trail';
import { TextLoop } from '@/components/core/text-loop';
import { TextEffect } from '@/components/core/text-effect';
import {
  UsersIcon,
  BookOpenIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface Feature {
  icon: JSX.Element;
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <UsersIcon className="h-6 w-6 text-purple-500" />,
    name: 'Community',
    description: 'Connect with like-minded women who support and inspire each other.',
  },
  {
    icon: <BookOpenIcon className="h-6 w-6 text-purple-500" />,
    name: 'Newsletter',
    description: 'Stay updated with the latest news, stories, and opportunities.',
  },
  {
    icon: <HandRaisedIcon className="h-6 w-6 text-purple-500" />,
    name: 'Events',
    description: 'Join our events to network, learn, and grow together.',
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-purple-500" />,
    name: 'Support',
    description: 'Find resources and support for your personal and professional growth.',
  },
  {
    icon: <BookOpenIcon className="h-6 w-6 text-purple-500" />,
    name: 'Discussions',
    description: 'Engage in meaningful conversations about topics that matter.',
  },
  {
    icon: <HandRaisedIcon className="h-6 w-6 text-purple-500" />,
    name: 'Resources',
    description: 'Access valuable resources to help you succeed.',
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-purple-500" />,
    name: 'Get Involved',
    description: 'Discover ways to contribute and make a difference.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Tech Entrepreneur',
    content: 'This community has been instrumental in my journey. The support and resources are invaluable.',
    image: '/images/testimonials/sarah.jpg',
  },
  {
    name: 'Maria Garcia',
    role: 'Non-profit Leader',
    content: 'Finding this network of powerful women has transformed both my personal and professional life.',
    image: '/images/testimonials/maria.jpg',
  },
  {
    name: 'Dr. Lisa Chen',
    role: 'Research Scientist',
    content: 'The mentorship and guidance I\'ve received here have been game-changing for my career',
    image: '/images/testimonials/lisa.jpg'
  }
];

const impactStats = [
  { number: '10K+', label: 'Active Members' },
  { number: '500+', label: 'Events Hosted' },
  { number: '50+', label: 'Countries Reached' },
  { number: '1M+', label: 'Lives Impacted' },
];

const heroLoopWords = [
  'Lead',
  'Succeed',
  'Thrive',
  'Create',
  'Inspire',
  'Grow'
];

const Home = () => {
  return (
    <PageLayout 
      title="Women of Influence" 
      description="Empowering women through community and resources"
    >
      <div className="relative min-h-screen">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="relative text-center">
                <AnimatedGradient className="absolute inset-0 -z-10 opacity-20" />
                <BorderTrail className="absolute inset-0 -z-10" />
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                  Empowering Women to{' '}
                  <TextLoop interval={2}>
                    {heroLoopWords.map((word) => (
                      <span key={word} className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{word}</span>
                    ))}
                  </TextLoop>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  <TextEffect per="char" preset="fade">
                    Join our inclusive community of women and individuals who identify as women. Together, we support, inspire, and uplift each other on the journey to success.
                  </TextEffect>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                    <a href="/get-involved">Get Started</a>
                  </Button>
                  <Button variant="ghost" className="hover:text-purple-600" asChild>
                    <a href="/about">Learn more <span aria-hidden="true">→</span></a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <PageHeader 
              title="A Community That Supports You" 
              subtitle="Discover all the ways we can help you grow, connect, and succeed in your journey."
            />
            
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-3 w-fit mb-6 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                    <div className="mt-6">
                      <Button variant="ghost" className="hover:text-purple-600 p-0" asChild>
                        <a href={`/${feature.name.toLowerCase()}`}>
                          Learn more <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/30" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Impact</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Together we're creating positive change and empowering women worldwide
              </p>
            </div>
            <motion.div 
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <dt className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-gray-600">{stat.label}</dd>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Members Say
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Hear from women who have found their community with us
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative z-10">
                    <blockquote className="text-gray-600 italic">"{testimonial.content}"</blockquote>
                    <div className="mt-8 flex items-center gap-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-200"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
