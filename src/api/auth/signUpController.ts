import { baseURL } from '@/constants/baseURL';
import axios, { AxiosError } from 'axios';
import { Dispatch, SetStateAction } from 'react';

const signUpController = (
  email: string,
  password: string,
  setFeedbackMessage: Dispatch<SetStateAction<string>>,
) => {
  axios
    .post(
      `${baseURL}/auth/signup`,
      {
        email: email,
        password: password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .then((response) => {
      alert('회원가입이 완료되었습니다.');
      window.location.replace('/signin');
      return response.data;
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        setFeedbackMessage(error.response?.data.message);
      }
    });
};

export default signUpController;
