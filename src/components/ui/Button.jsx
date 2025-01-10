import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  isLoading = false,
  onClick,
  className = '',
  disabled = false
}) => {
  const baseStyles = 'w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 relative overflow-hidden';
  
  const variants = {
    primary: `bg-primary hover:bg-primary-dark text-white ${isLoading ? 'bg-primary/70' : ''}`,
    secondary: `bg-secondary hover:bg-secondary-dark text-primary ${isLoading ? 'bg-secondary/70' : ''}`,
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
          />
        </span>
      ) : children}
    </motion.button>
  );
};

export default Button;
