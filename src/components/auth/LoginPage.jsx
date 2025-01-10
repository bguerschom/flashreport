import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Tailwind is loaded
    const isTailwindLoaded = document.documentElement.classList.contains('dark') !== undefined;
    console.log('Tailwind loaded:', isTailwindLoaded);

    // Check if styles are being applied
    const testElement = document.createElement('div');
    testElement.className = 'bg-[#0A2647]';
    document.body.appendChild(testElement);
    const computedStyle = window.getComputedStyle(testElement);
    const isStyleApplied = computedStyle.backgroundColor !== '';
    console.log('Style applied:', isStyleApplied);
    console.log('Background color:', computedStyle.backgroundColor);
    document.body.removeChild(testElement);

    // Check imports
    try {
      if (!motion) {
        console.error('Framer Motion not loaded');
        setError('Animation library not loaded');
      }
    } catch (e) {
      console.error('Error loading dependencies:', e);
      setError('Required dependencies not loaded');
    }

    // Log current environment
    console.log('Current environment:', {
      isDevelopment: process.env.NODE_ENV === 'development',
      publicPath: process.env.PUBLIC_URL,
      baseUrl: window.location.origin
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted with:', formData);
    } catch (err) {
      console.error('Error during submission:', err);
      setError('Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen" style={{ border: '2px solid red' }}>
      {/* Added border to check if component is rendering */}
      
      {/* Debug Information */}
      <div className="fixed top-0 left-0 bg-white p-4 z-50 text-xs">
        <p>Window Size: {window.innerWidth} x {window.innerHeight}</p>
        <p>Classes Applied: {document.body.classList.toString()}</p>
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>

      {/* Left Side - Dark Blue Section */}
      <div className="w-1/2 relative overflow-hidden hidden md:block" style={{ backgroundColor: '#0A2647' }}>
        {/* Using inline styles as fallback */}
        <div className="absolute top-4 left-4 text-white">
          <p>Left side rendered</p>
        </div>
        
        {/* Animated Circles */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[150px] left-[100px] w-[100px] h-[100px] rounded-full"
          style={{ backgroundColor: '#144272', opacity: 0.6 }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[400px] left-[300px] w-[160px] h-[160px] rounded-full"
          style={{ backgroundColor: '#144272', opacity: 0.4 }}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-3xl font-bold text-center">FlashReport</h1>
          <p className="text-white/80 text-center mt-2">Report Corruption. Make Change.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: '#f0f0f0' }}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: '#f0f0f0' }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-medium"
              style={{ backgroundColor: '#0A2647' }}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
