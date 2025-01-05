import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 

  Tag, 
  ArrowRight, 
 
  Newspaper,
  Mic,
  Monitor,
  Lightbulb,
  Search, 
  SlidersHorizontal,
  Archive, 
} from "lucide-react"; 
import { BorderTrail } from '@/components/core/border-trail';
import { PageLayout, PageHeader } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { BlogModal, BlogTemplateProps } from './BlogModal';

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
    type: "Narrative Articles",
    category: "Leadership",
    content: `
      <div>
        <p>In the world of leadership, women are not just breaking barriers; they are redefining the very essence of success. Our "Leadership Stories" section delves deep into the transformative journeys of remarkable women who have carved their paths through determination, resilience, and unwavering passion.</p>
        
        <h3>Transformative Narratives</h3>
        <p>Each story is a testament to the power of perseverance. From corporate executives who shattered glass ceilings to entrepreneurs who turned challenges into opportunities, these narratives offer more than inspiration—they provide a roadmap for personal and professional growth.</p>
        
        <h3>Key Insights</h3>
        <ul>
          <li>Overcoming systemic barriers</li>
          <li>Navigating complex professional landscapes</li>
          <li>Building authentic leadership styles</li>
          <li>Creating inclusive work environments</li>
        </ul>
      </div>
    `,
    author: {
      name: "Emma Rodriguez",
      avatar: "/avatars/emma-rodriguez.jpg",
      bio: "Award-winning leadership coach and author"
    },
    date: "January 15, 2024",
    readTime: "7 min",
    tags: ["Leadership", "Inspiration", "Career Growth"],
    image: "/images/leadership-stories.jpg"
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
    type: "Tech Insights",
    category: "Tech",
    content: `
      <div>
        <p>The tech industry is rapidly evolving, and women are at the forefront of this change. Our "Tech & Innovation" section highlights the achievements of women in STEM fields, providing insights into the latest trends and innovations.</p>
        
        <h3>Industry Trends</h3>
        <p>From AI and machine learning to cybersecurity and data science, we explore the latest developments in the tech world. Our articles feature interviews with women leaders, innovators, and entrepreneurs who are shaping the future of technology.</p>
        
        <h3>Key Insights</h3>
        <ul>
          <li>Emerging tech trends</li>
          <li>Women in STEM success stories</li>
          <li>Innovation leadership strategies</li>
          <li>Industry dynamics and challenges</li>
        </ul>
      </div>
    `,
    author: {
      name: "Sophia Patel",
      avatar: "/avatars/sophia-patel.jpg",
      bio: "Tech journalist and innovation expert"
    },
    date: "February 20, 2024",
    readTime: "8 min",
    tags: ["Tech", "Innovation", "Women in STEM"],
    image: "/images/tech-innovation.jpg"
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
    type: "Career Guides",
    category: "Career",
    content: `
      <div>
        <p>Our "Career Development" section offers expert advice and strategies for professional growth and career advancement. From career transition strategies to skill development guides, we provide actionable tips and insights to help you achieve your career goals.</p>
        
        <h3>Career Transition Strategies</h3>
        <p>Whether you're looking to switch industries or advance in your current role, our articles provide guidance on how to navigate career transitions successfully. We also offer tips on how to develop a personal brand and build a professional network.</p>
        
        <h3>Key Insights</h3>
        <ul>
          <li>Career transition strategies</li>
          <li>Skill development guides</li>
          <li>Networking techniques</li>
          <li>Professional branding tips</li>
        </ul>
      </div>
    `,
    author: {
      name: "Rachel Lee",
      avatar: "/avatars/rachel-lee.jpg",
      bio: "Career coach and professional development expert"
    },
    date: "March 10, 2024",
    readTime: "9 min",
    tags: ["Career Development", "Professional Growth", "Career Advancement"],
    image: "/images/career-development.jpg"
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
    type: "Diversity Insights",
    category: "Diversity",
    content: `
      <div>
        <p>Our "Diversity & Inclusion" section explores the importance of creating inclusive workplaces and promoting diversity. We provide insights and strategies for driving organizational change and promoting workplace equality.</p>
        
        <h3>Inclusive Practices</h3>
        <p>From unconscious bias training to diversity and inclusion initiatives, our articles offer practical advice on how to create a more inclusive workplace culture. We also explore the importance of equity in professional settings and provide insights on how to drive cultural transformation.</p>
        
        <h3>Key Insights</h3>
        <ul>
          <li>Inclusive workplace strategies</li>
          <li>Diversity leadership</li>
          <li>Equity in professional settings</li>
          <li>Cultural transformation insights</li>
        </ul>
      </div>
    `,
    author: {
      name: "Michael Chen",
      avatar: "/avatars/michael-chen.jpg",
      bio: "Diversity and inclusion expert"
    },
    date: "April 15, 2024",
    readTime: "10 min",
    tags: ["Diversity", "Inclusion", "Workplace Culture"],
    image: "/images/diversity-inclusion.jpg"
  }
];

const Blog = () => {
  const [selectedBlogFeature, setSelectedBlogFeature] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogTemplateProps | null>(null);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [showHistoricalBlogs, setShowHistoricalBlogs] = useState(false);

  // Derive categories and tags
  const categories = ['All', ...new Set(blogFeatures.map(feature => feature.category))];
  const allTags = new Set(blogFeatures.flatMap(feature => feature.tags || []));

  // Current date for filtering
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Filtered and Sorted Blogs
  const filteredBlogs = useMemo(() => {
    return blogFeatures.filter(feature => {
      const blogDate = new Date(feature.date);
      const isCurrentMonth = 
        blogDate.getFullYear() === currentYear && 
        blogDate.getMonth() === currentMonth;

      const isSearchActive = searchTerm.trim() !== '';

      const matchesSearch = 
        !searchTerm || 
        feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        feature.author?.name?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' || 
        feature.category === selectedCategory;

      const matchesTag = 
        !selectedTag || 
        feature.tags?.includes(selectedTag);

      // Show current month blogs by default
      // Show historical blogs only if search is active or explicitly requested
      return (isCurrentMonth || isSearchActive || showHistoricalBlogs) && 
             matchesSearch && 
             matchesCategory && 
             matchesTag;
    });
  }, [
    searchTerm, 
    selectedCategory, 
    selectedTag, 
    showHistoricalBlogs, 
    currentYear, 
    currentMonth
  ]);

  const handleViewBlog = (feature: typeof blogFeatures[0]) => {
    setSelectedBlog({
      id: feature.title.toLowerCase().replace(/\s+/g, '-'),
      title: feature.title,
      description: feature.description,
      content: feature.content,
      image: feature.image,
      author: feature.author,
      date: feature.date,
      readTime: feature.readTime,
      tags: feature.tags,
      url: `https://womenofinfluence.com/blog/${feature.title.toLowerCase().replace(/\s+/g, '-')}`
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
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

      {/* Advanced Search and Filter Section */}
      <div className="mb-8 bg-purple-50 rounded-xl p-6 shadow-sm">
        <div className="flex space-x-4 items-center">
          {/* Search Input */}
          <div className="relative flex-grow">
            <input 
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-300"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-300"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          </div>

          {/* Tag Filter */}
          <div className="relative">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="appearance-none w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-300"
            >
              <option value="">All Tags</option>
              {Array.from(allTags).map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          </div>

          {/* Historical Blogs Toggle */}
          <button
            onClick={() => setShowHistoricalBlogs(!showHistoricalBlogs)}
            className={`
              flex items-center px-4 py-2 rounded-md transition-colors
              ${showHistoricalBlogs 
                ? 'bg-purple-500 text-white hover:bg-purple-600' 
                : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}
            `}
          >
            <Archive className="w-5 h-5 mr-2" />
            {showHistoricalBlogs ? 'Hide' : 'Show'} Historical
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredBlogs.length > 0 ? (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {filteredBlogs.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5 }
                    }
                  }}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewBlog(feature);
                        }}
                        className="flex items-center group w-full justify-between border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
                      >
                        <span className="mr-2">View Blog</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-purple-50 rounded-xl">
            <p className="text-xl text-purple-600">
              No blogs found matching your search criteria.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedTag('');
                setShowHistoricalBlogs(false);
              }}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Blog Modal */}
        {selectedBlog && (
          <BlogModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            blog={selectedBlog}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Blog;
