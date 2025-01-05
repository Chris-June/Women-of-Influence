import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon, 
  CalendarIcon, 
  TagIcon,
  ArchiveBoxIcon 
} from '@heroicons/react/24/outline';
import { PageLayout, PageHeader, InteractiveCard } from '@/components/PageLayout';
import { NewsletterModal, NewsletterTemplateProps } from '@/pages/Newsletter/NewsletterModal';

interface Newsletter {
  id: string;
  date: string;
  title: string;
  content: string;
  image?: string;
  author?: {
    name: string;
    avatar: string;
  };
  tags?: string[];
  url?: string;
  category?: string;
}

const newsletters: Newsletter[] = [
  // Current month newsletters
  {
    id: 'newsletter-current-1',
    date: "January 5, 2025",
    title: "2025 Tech Horizons - January Edition",
    category: "Technology",
    content: `Latest insights into emerging tech trends for women in 2025...`,
    image: "https://example.com/jan-2025-tech.jpg",
    tags: ["AI", "Innovation", "2025 Trends"]
  },
  {
    id: 'newsletter-current-2',
    date: "January 12, 2025",
    title: "Leadership Strategies for the New Year",
    category: "Leadership",
    content: `Navigating professional growth in the dynamic landscape of 2025...`,
    image: "https://example.com/jan-2025-leadership.jpg",
    tags: ["Leadership", "Career Development"]
  },
  // Previous months newsletters
  {
    id: 'newsletter-dec-1',
    date: "December 15, 2024",
    title: "Year in Review: Women's Achievements in Tech",
    category: "Retrospective",
    content: `A comprehensive look back at the groundbreaking achievements of women in technology...`,
    image: "https://example.com/dec-2024-review.jpg",
    tags: ["Year Review", "Technology"]
  },
  {
    id: 'newsletter-nov-1',
    date: "November 20, 2024",
    title: "AI and Emotional Intelligence",
    category: "Personal Development",
    content: `Exploring the intersection of artificial intelligence and emotional intelligence...`,
    image: "https://example.com/nov-2024-ai.jpg",
    tags: ["AI", "Personal Growth"]
  },
  // Additional newsletters to reach 20
  {
    id: 'newsletter-oct-1',
    date: "October 15, 2024",
    title: "Breaking Barriers in STEM",
    category: "Education",
    content: `Highlighting groundbreaking women making significant contributions in Science, Technology, Engineering, and Mathematics...`,
    image: "https://example.com/oct-2024-stem.jpg",
    tags: ["STEM", "Education", "Inspiration"]
  },
  {
    id: 'newsletter-sep-1',
    date: "September 22, 2024",
    title: "Entrepreneurship in the Digital Age",
    category: "Business",
    content: `Strategies and success stories of women entrepreneurs leveraging digital technologies...`,
    image: "https://example.com/sep-2024-entrepreneurship.jpg",
    tags: ["Entrepreneurship", "Digital Business"]
  },
  {
    id: 'newsletter-aug-1',
    date: "August 10, 2024",
    title: "Mental Health and Professional Growth",
    category: "Wellness",
    content: `Balancing mental well-being with career aspirations in a fast-paced world...`,
    image: "https://example.com/aug-2024-wellness.jpg",
    tags: ["Mental Health", "Self-Care"]
  },
  {
    id: 'newsletter-jul-1',
    date: "July 18, 2024",
    title: "Global Women in Leadership",
    category: "Leadership",
    content: `Insights from women leaders across different industries and cultures...`,
    image: "https://example.com/jul-2024-global-leadership.jpg",
    tags: ["Global Leadership", "Diversity"]
  },
  {
    id: 'newsletter-jun-1',
    date: "June 5, 2024",
    title: "Sustainable Innovation",
    category: "Technology",
    content: `Women driving sustainable technological innovations for a better future...`,
    image: "https://example.com/jun-2024-sustainability.jpg",
    tags: ["Sustainability", "Innovation"]
  },
  {
    id: 'newsletter-may-1',
    date: "May 20, 2024",
    title: "Navigating Career Transitions",
    category: "Career Development",
    content: `Strategies for successfully pivoting and reinventing your professional journey...`,
    image: "https://example.com/may-2024-career-transition.jpg",
    tags: ["Career Change", "Professional Development"]
  },
  {
    id: 'newsletter-apr-1',
    date: "April 12, 2024",
    title: "Financial Empowerment",
    category: "Finance",
    content: `Insights into financial planning, investment strategies, and economic independence...`,
    image: "https://example.com/apr-2024-finance.jpg",
    tags: ["Finance", "Investment"]
  },
  {
    id: 'newsletter-mar-1',
    date: "March 8, 2024",
    title: "Women's Day Special: Trailblazers",
    category: "Inspiration",
    content: `Celebrating extraordinary women who have made significant impacts across various fields...`,
    image: "https://example.com/mar-2024-womens-day.jpg",
    tags: ["Inspiration", "Women's Achievements"]
  },
  {
    id: 'newsletter-feb-1',
    date: "February 14, 2024",
    title: "Love Your Career",
    category: "Personal Development",
    content: `Strategies for finding passion and purpose in your professional life...`,
    image: "https://example.com/feb-2024-career-love.jpg",
    tags: ["Career Passion", "Self-Motivation"]
  },
  {
    id: 'newsletter-jan-prev-1',
    date: "January 25, 2024",
    title: "Tech Trends Forecast",
    category: "Technology",
    content: `Predictions and insights into technological advancements for the year ahead...`,
    image: "https://example.com/jan-2024-tech-trends.jpg",
    tags: ["Tech Trends", "Future of Work"]
  },
  {
    id: 'newsletter-dec-prev-1',
    date: "December 1, 2023",
    title: "Year-End Reflection",
    category: "Personal Growth",
    content: `A comprehensive guide to reflecting on personal and professional growth...`,
    image: "https://example.com/dec-2023-reflection.jpg",
    tags: ["Personal Growth", "Reflection"]
  },
  {
    id: 'newsletter-nov-prev-1',
    date: "November 15, 2023",
    title: "Networking Strategies",
    category: "Career Development",
    content: `Effective networking techniques for building meaningful professional connections...`,
    image: "https://example.com/nov-2023-networking.jpg",
    tags: ["Networking", "Professional Connections"]
  },
  {
    id: 'newsletter-oct-prev-1',
    date: "October 5, 2023",
    title: "Emotional Intelligence at Work",
    category: "Personal Development",
    content: `Leveraging emotional intelligence to enhance workplace relationships and performance...`,
    image: "https://example.com/oct-2023-emotional-intelligence.jpg",
    tags: ["Emotional Intelligence", "Workplace Skills"]
  },
  {
    id: 'newsletter-sep-prev-1',
    date: "September 10, 2023",
    title: "Remote Work Revolution",
    category: "Career Development",
    content: `Adapting to and thriving in the evolving landscape of remote and hybrid work...`,
    image: "https://example.com/sep-2023-remote-work.jpg",
    tags: ["Remote Work", "Workplace Adaptation"]
  },
  {
    id: 'newsletter-aug-prev-1',
    date: "August 22, 2023",
    title: "Diversity in Leadership",
    category: "Leadership",
    content: `The importance of diversity and inclusion in leadership roles...`,
    image: "https://example.com/aug-2023-diversity-leadership.jpg",
    tags: ["Diversity", "Inclusion"]
  },
  {
    id: 'newsletter-jul-prev-1',
    date: "July 1, 2023",
    title: "Startup Ecosystem",
    category: "Business",
    content: `Insights into the startup world and opportunities for women entrepreneurs...`,
    image: "https://example.com/jul-2023-startup-ecosystem.jpg",
    tags: ["Startups", "Entrepreneurship"]
  }
];

const Newsletter = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [showHistoricalNewsletters, setShowHistoricalNewsletters] = useState(false);

  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Derive unique categories and tags
  const categories = ['All', ...new Set(newsletters.map(n => n.category).filter(Boolean))];
  const allTags = new Set(newsletters.flatMap(n => n.tags || []));

  // Memoized filtering logic
  const filteredNewsletters = useMemo(() => {
    return newsletters.filter(newsletter => {
      // Parse newsletter date
      const newsletterDate = new Date(newsletter.date);
      const newsletterYear = newsletterDate.getFullYear();
      const newsletterMonth = newsletterDate.getMonth();

      // Check if newsletter is from current month or search is active
      const isCurrentMonth = newsletterYear === currentYear && newsletterMonth === currentMonth;
      const isSearchActive = searchTerm || selectedCategory !== 'All' || selectedTag;

      const matchesSearch = newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        newsletter.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || newsletter.category === selectedCategory;
      
      const matchesTag = !selectedTag || (newsletter.tags || []).includes(selectedTag);

      // Show current month newsletters by default
      // Show historical newsletters only if search is active or explicitly requested
      return (isCurrentMonth || isSearchActive || showHistoricalNewsletters) && 
             matchesSearch && 
             matchesCategory && 
             matchesTag;
    });
  }, [
    searchTerm, 
    selectedCategory, 
    selectedTag, 
    showHistoricalNewsletters, 
    currentYear, 
    currentMonth
  ]);

  const handleReadMore = (index: number) => {
    setSelectedNewsletter(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout 
      title="Women of Influence Newsletter" 
      description="Stay updated with our latest insights and community news"
    >
      <PageHeader 
        title="Women of Influence Newsletter" 
        subtitle="Empowering insights delivered straight to your inbox"
      />

      {/* Advanced Search and Filter Section */}
      <div className="mb-8 bg-purple-50 rounded-xl p-6 shadow-sm">
        <div className="flex space-x-4 items-center">
          {/* Search Input */}
          <div className="relative flex-grow">
            <input 
              type="text"
              placeholder="Search newsletters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-300"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
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
            <AdjustmentsHorizontalIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
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
            <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          </div>

          {/* Historical Newsletters Toggle */}
          <button
            onClick={() => setShowHistoricalNewsletters(!showHistoricalNewsletters)}
            className={`
              flex items-center px-4 py-2 rounded-md transition-colors
              ${showHistoricalNewsletters 
                ? 'bg-purple-500 text-white hover:bg-purple-600' 
                : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}
            `}
          >
            <ArchiveBoxIcon className="w-5 h-5 mr-2" />
            {showHistoricalNewsletters ? 'Hide' : 'Show'} Historical
          </button>
        </div>
      </div>

      {/* Newsletter Grid */}
      <AnimatePresence>
        {filteredNewsletters.length > 0 ? (
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredNewsletters.map((newsletter, index) => (
              <motion.div
                key={newsletter.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <InteractiveCard
                  onClick={() => handleReadMore(newsletters.indexOf(newsletter))}
                  selected={selectedNewsletter === newsletters.indexOf(newsletter)}
                >
                  <div className="p-4">
                    <div className="relative mb-2">
                      {newsletter.category && (
                        <span className="absolute top-0 right-0 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          {newsletter.category}
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-purple-800 group-hover:text-purple-900 transition-colors pr-20">
                        {newsletter.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-purple-400" />
                      {newsletter.date}
                    </p>
                    {newsletter.image && (
                      <img 
                        src={newsletter.image} 
                        alt={newsletter.title} 
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                    )}
                    <p className="text-gray-700 flex-grow line-clamp-3">
                      {newsletter.content.substring(0, 150)}...
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-2">
                        {(newsletter.tags || []).slice(0, 2).map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button 
                        onClick={() => handleReadMore(newsletters.indexOf(newsletter))}
                        className="
                          px-4 py-2 bg-purple-500 text-white rounded-md 
                          hover:bg-purple-600 transition-colors
                          focus:outline-none focus:ring-2 focus:ring-purple-300
                        "
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-purple-50 rounded-xl">
            <p className="text-xl text-purple-600">
              No newsletters found matching your search criteria.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedTag('');
                setShowHistoricalNewsletters(false);
              }}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </AnimatePresence>

      {selectedNewsletter !== null && (
        <NewsletterModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          newsletter={{
            id: newsletters[selectedNewsletter].id,
            title: newsletters[selectedNewsletter].title,
            description: newsletters[selectedNewsletter].date,
            content: newsletters[selectedNewsletter].content,
            image: newsletters[selectedNewsletter].image,
            author: newsletters[selectedNewsletter].author 
              ? {
                  name: newsletters[selectedNewsletter].author?.name,
                  avatar: newsletters[selectedNewsletter].author?.avatar
                } 
              : undefined,
            tags: newsletters[selectedNewsletter].tags,
            url: newsletters[selectedNewsletter].url
          }}
        />
      )}
    </PageLayout>
  );
};

export default Newsletter;
