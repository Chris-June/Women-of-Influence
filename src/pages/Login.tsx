import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedGradient } from '@/components/core/animated-gradient';
import { PageLayout, PageHeader } from '@/components/PageLayout';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      // TODO: Implement actual login logic here
      console.log('Login attempted with:', formData);
      // For now, just redirect to home
      navigate('/');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const formVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageLayout 
      title="Login" 
      description="Access your Women of Influence account"
    >
      <div className="max-w-md mx-auto relative z-10">
        <PageHeader 
          title="Welcome Back" 
          subtitle="Sign in to continue your journey" 
        />
        <motion.form 
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 bg-white shadow-md rounded-lg p-8"
        >
          {error && (
            <motion.div 
              className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="
                w-full px-3 py-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-purple-500 
                transition-all duration-300
              "
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="
                w-full px-3 py-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-purple-500 
                transition-all duration-300
              "
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="
                w-full flex justify-center py-2 px-4 
                border border-transparent rounded-md 
                shadow-sm text-sm font-medium text-white 
                bg-purple-600 hover:bg-purple-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                transition-all duration-300
              "
            >
              Sign in
            </button>
          </div>
        </motion.form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              className="
                w-full inline-flex justify-center py-2 px-4 
                border border-gray-300 rounded-md shadow-sm 
                bg-white text-sm font-medium text-gray-500 
                hover:bg-gray-50 transition-all duration-300
              "
            >
              Google
            </button>
            <button
              className="
                w-full inline-flex justify-center py-2 px-4 
                border border-gray-300 rounded-md shadow-sm 
                bg-white text-sm font-medium text-gray-500 
                hover:bg-gray-50 transition-all duration-300
              "
            >
              GitHub
            </button>
            <button
              className="
                w-full inline-flex justify-center py-2 px-4 
                border border-gray-300 rounded-md shadow-sm 
                bg-white text-sm font-medium text-gray-500 
                hover:bg-gray-50 transition-all duration-300
              "
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
            Sign up
          </a>
        </p>
      </motion.div>
    </PageLayout>
  );
}
