import signUpController from '@/api/auth/signUpController';
import useConfirm from '@/lib/hooks/useConfirm';
import { emailRegex } from '@/lib/utils/regex';
import { FormEvent, ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpInput = () => {
  const {
    isEmailConfirm,
    setIsEmailConfirm,
    isPasswordConfirm,
    setIsPasswordConfirm,
  } = useConfirm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const [feedbackMessage, setFeedbackMessage] = useState(' ');

  const siginUpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUpController(email, password, setFeedbackMessage);
  };
  const getEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (!emailRegex.test(event.target.value)) setIsEmailConfirm(false);
    else {
      setIsEmailConfirm(true);
    }
  };

  const getPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) setIsPasswordConfirm(false);
    else if (event.target.value !== passwordValidation)
      setIsPasswordConfirm(false);
    else setIsPasswordConfirm(true);
  };

  const getPasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValidation(event.target.value);
    if (event.target.value.length < 8) setIsPasswordConfirm(false);
    else if (event.target.value !== password) setIsPasswordConfirm(false);
    else setIsPasswordConfirm(true);
  };

  return (
    <div>
      <div className="signin-input-wrap">
        <form action="" onSubmit={siginUpSubmit}>
          <div>
            <label>이메일 : </label>
            <input type="email" value={email} onChange={getEmail} />
          </div>
          <div>
            <label>비밀번호 : </label>
            <input type="password" value={password} onChange={getPassword} />
          </div>
          <div>
            <label>비밀번호 확인 : </label>
            <input
              type="password"
              value={passwordValidation}
              onChange={getPasswordConfirm}
            />
          </div>
          <p>{feedbackMessage}</p>
          <button
            disabled={
              isEmailConfirm &&
              isPasswordConfirm &&
              password === passwordValidation
                ? false
                : true
            }
            data-testid="signup-button"
          >
            회원가입
          </button>
          <Link to="/signin">로그인하러 가기</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpInput;
