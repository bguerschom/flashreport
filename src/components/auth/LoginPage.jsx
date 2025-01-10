import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-secondary-light flex items-center justify-center p-4">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-primary opacity-30"
          />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute inset-0 rounded-full bg-accent opacity-20"
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-white shadow-xl rounded-2xl p-8 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-primary rounded-full p-4"
            >
              <Coffee size={32} className="text-white" />
            </motion.div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-primary mb-2">Welcome Back</h2>
          <p className="text-accent text-center mb-8">Sign in to your account</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-accent-dark mb-2">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-accent-dark mb-2">
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium 
                ${isLoading ? 'bg-primary/70' : 'bg-primary hover:bg-primary-dark'}
                transition-all duration-200 relative overflow-hidden`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                </span>
              ) : (
                'Sign In'
              )}
            </motion.button>

            <p className="text-center text-sm text-accent">
              Don't have an account?{' '}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/signup"
                className="text-primary font-medium hover:underline"
              >
                Sign up
              </motion.a>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
