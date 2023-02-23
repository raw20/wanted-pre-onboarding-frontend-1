import { baseURL } from '@/constants/baseURL';
import { TOKEN_KEY } from '@/constants/tokenKey';
import { Token } from '@/lib/common/token';
import axios, { AxiosError } from 'axios';
import { Dispatch, SetStateAction } from 'react';

const signInController = (
  email: FormDataEntryValue,
  password: FormDataEntryValue,
  setFeedbackMessage: Dispatch<SetStateAction<string>>,
) => {
  axios
    .post(
      `${baseURL}/auth/signin`,
      {
        email: email,
        password: password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    .then((response) => {
      const token = response.data.access_token;
      const jwtToken = new Token();
      jwtToken.setToken(TOKEN_KEY, token);
      window.location.replace('/todo');
      return response.data.message;
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.log(error.response);
        setFeedbackMessage(error.response?.data.message);
      }
    });
};
export default signInController;
