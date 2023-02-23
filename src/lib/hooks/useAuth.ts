import signUpController from '@/api/auth/signUpController';
import { useState } from 'react';

const useAuth = () => {
  const api = 'https://pre-onboarding-selection-task.shop';

  return { signUpController };
};

export default useAuth;
