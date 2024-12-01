import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export function Login() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const mobileRegex = /^[0-9]{10}$/; // Example regex for a 10-digit phone number
    
    if (!mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(mobile)) {
      newErrors.mobile = 'Enter a valid mobile number';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form (e.g., make API call)
      console.log('Form submitted');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className='flex flex-col bg-brand-color w-full h-screen justify-center items-center'>
        <form 
          className='flex flex-col p-[32px] rounded-[10px] bg-[#f5f6ea] shadow-lg gap-[40px] w-[504px] justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img src="images/logo.png" alt="nagarik-app" className='w-[112px] h-[112px]' />
          
          <p className='text-brand-color text-[24px]'>CITIZEN PORTAL</p>

          <div className='flex flex-col gap-[16px] w-full'>
            <input 
              className='text-text-tertiary border border-border-primary rounded-[8px] px-[24px] py-[16px] text-[16px] leading-[100%] w-full'
              placeholder='Mobile number'
              type='text'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && <p className='text-red-500 text-[14px]'>{errors.mobile}</p>}

            <div className='flex flex-col gap-[8px]'>
              <input 
                className='text-text-tertiary border border-border-primary rounded-[8px] px-[24px] py-[16px] text-[16px] leading-[100%] w-full'
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className='text-red-500 text-[14px]'>{errors.password}</p>}
              <p className='text-brand-color text-[14px] text-right'>Forgot password?</p>
            </div>
          </div>

          <Link to ="/details">

          <button 
            type='submit' 
            className=' bg-blue-400 py-[20px] px-[24px] text-[16px] bg-brand-color font-bold text-white rounded-lg leading-[100%] w-full text-center'
          >
            Login
          </button>

          </Link>

         
        </form>
      </div>
    </>
  );
}
