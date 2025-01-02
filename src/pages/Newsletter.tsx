import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLayout, PageHeader, InteractiveCard } from '@/components/PageLayout';

interface Newsletter {
  date: string;
  title: string;
  content: string;
}

const newsletters: Newsletter[] = [
  {
    date: "October 30, 2024",
    title: "Empowerment Through AI - First Edition",
    content: `Hello Women of Influence! ✨🎉 Welcome to the first edition of our community-driven newsletter—Empowerment Through AI...`,
  },
  {
    date: "November 6, 2024",
    title: "AI: A Game-Changer for Women in Leadership",
    content: `Hello Women of Influence! ✨🎉 Welcome back to our Empowerment Through AI series! In this edition...`,
  },
  {
    date: "December 2, 2024",
    title: "Mental Health, Resilience, and Personal Growth Through AI",
    content: `Hello Women of Influence! ✨🎉\n\nWelcome to the fifth edition of Empowerment Through AI!...`,
  }
];

const Newsletter = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<number>(0);

  return (
    <PageLayout 
      title="Women of Influence Newsletter" 
      description="Stay updated with our latest insights and community news"
    >
      <PageHeader 
        title="Women of Influence Newsletter" 
        subtitle="Empowering insights delivered straight to your inbox"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {newsletters.map((newsletter, index) => (
          <InteractiveCard
            key={index}
            onClick={() => setSelectedNewsletter(index)}
            selected={selectedNewsletter === index}
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors">
              {newsletter.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{newsletter.date}</p>
            <p className="text-gray-700 flex-grow line-clamp-3">
              {newsletter.content.substring(0, 150)}...
            </p>
            <div className="mt-4 flex justify-between items-center">
              <button 
                className="
                  px-4 py-2 bg-purple-500 text-white rounded-md 
                  hover:bg-purple-600 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-purple-300
                "
              >
                Read More
              </button>
            </div>
          </InteractiveCard>
        ))}
      </div>

      {selectedNewsletter !== null && (
        <motion.div 
          className="mt-12 bg-white shadow-lg rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            {newsletters[selectedNewsletter].title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {newsletters[selectedNewsletter].content}
          </p>
        </motion.div>
      )}
    </PageLayout>
  );
};

export default Newsletter;
