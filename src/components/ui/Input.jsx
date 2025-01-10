import React from 'react';
import { motion } from 'framer-motion';

const Input = ({
  label,
  icon,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  error = ''
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-accent-dark mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent">
            {icon}
          </div>
        )}
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-3 ${icon ? 'pl-10' : ''} rounded-lg border 
            border-secondary focus:border-primary focus:ring-2 
            focus:ring-primary/20 transition-all duration-200
            ${error ? 'border-red-500' : ''}`}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
