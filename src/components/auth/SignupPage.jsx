import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, User, Mail, Phone, Lock } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: ''
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
    // Add signup logic here
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
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl"
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

          <h2 className="text-3xl font-bold text-center text-primary mb-2">Create Account</h2>
          <p className="text-accent text-center mb-8">Join FlashReport today</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                icon={<User />}
                label="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <Input
                icon={<User />}
                label="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              icon={<Mail />}
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              icon={<Phone />}
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <Input
              icon={<User />}
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                icon={<Lock />}
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Input
                icon={<Lock />}
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" isLoading={isLoading}>
              Create Account
            </Button>

            <p className="text-center text-sm text-accent">
              Already have an account?{' '}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </motion.a>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
