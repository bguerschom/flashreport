import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      {/* Left Side */}
      <div style={{ 
        width: '50%', 
        backgroundColor: '#0A2647',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Circle 1 */}
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '150px',
            left: '100px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#144272',
            opacity: 0.6
          }}
        />

        {/* Animated Circle 2 */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '400px',
            left: '300px',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: '#144272',
            opacity: 0.4
          }}
        />

        {/* Text Content */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            FlashReport
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
            Report Corruption. Make Change.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{
        width: '50%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#0A2647'
          }}>
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem',
                color: '#4B5563'
              }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  outline: 'none'
                }}
                required
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem',
                color: '#4B5563'
              }}>
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  outline: 'none'
                }}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                backgroundColor: '#0A2647',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                    border: '2px solid white',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    margin: '0 auto'
                  }}
                />
              ) : 'Sign In'}
            </motion.button>

            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#4B5563' }}>
              Don't have an account?{' '}
              <Link to="/signup" style={{ color: '#0A2647', fontWeight: '500', textDecoration: 'none' }}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
