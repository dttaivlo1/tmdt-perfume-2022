/**
 *
 * SignupProvider
 *
 */

import React from 'react';

import { GoogleIcon, FacebookIcon } from '../Icon';
import { BASE_API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <div className='signup-provider'>
      <a href={`${BASE_API_URL}/auth/google`} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Đăng nhập với google</span>
      </a>

      <a href={`${BASE_API_URL}/auth/facebook`} className='facebook-btn'>
        <FacebookIcon />
        <span className='btn-text'>Đăng nhập với facebook</span>
      </a>
    </div>
  );
};

export default SignupProvider;
