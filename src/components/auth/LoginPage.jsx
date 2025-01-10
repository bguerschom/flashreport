import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add login logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Animation variants for the circles
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.2, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          variants={circleVariants}
          animate="animate"
          className="absolute w-96 h-96 rounded-full bg-primary/5"
        />
        <motion.div
          variants={circleVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute w-72 h-72 rounded-full bg-primary/10"
          style={{ top: '12%', left: '12%' }}
        />
        <motion.div
          variants={circleVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute w-48 h-48 rounded-full bg-primary/15"
          style={{ top: '24%', left: '24%' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md px-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="bg-primary rounded-full p-4 shadow-lg"
          >
            <Coffee size={32} className="text-white" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center text-primary mb-2"
        >
          Welcome Back
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-accent text-center mb-8"
        >
          Sign in to FlashReport
        </motion.p>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-secondary 
                focus:border-primary focus:ring-2 focus:ring-primary/20 
                transition-all duration-200 bg-white/50 backdrop-blur-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary mb-2">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-secondary 
                focus:border-primary focus:ring-2 focus:ring-primary/20 
                transition-all duration-200 bg-white/50 backdrop-blur-sm"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg text-white font-medium 
              ${isLoading ? 'bg-primary/70' : 'bg-primary hover:bg-primary-dark'}
              transition-all duration-200 relative overflow-hidden shadow-lg`}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
              />
            ) : (
              'Sign In'
            )}
          </motion.button>

          <p className="text-center text-sm text-accent mt-6">
            Don't have an account?{' '}
            <Link 
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
