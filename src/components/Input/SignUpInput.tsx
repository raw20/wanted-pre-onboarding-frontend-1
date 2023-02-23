import useConfirm from '@/lib/hooks/useConfirm';
import React, { FormEvent, ChangeEvent, useState } from 'react';
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

  const siginUpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };

  const getEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
            <input />
          </div>
          <div>
            <label>비밀번호 확인 : </label>
            <input />
          </div>

          <button data-testid="signup-button">회원가입</button>
          <Link to="/signin">로그인하러 가기</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpInput;
