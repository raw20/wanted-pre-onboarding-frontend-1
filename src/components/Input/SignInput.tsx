import React from 'react';
import { Link } from 'react-router-dom';

const SignInput = () => {
  return (
    <div className="signin-input-wrap">
      <form action="">
        <div>
          <label>이메일 : </label>
          <input type="email" data-testid="email-input" />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input data-testid="password-input" />
        </div>

        <button data-testid="signin-button">로그인</button>
        <Link to="/signup">회원가입</Link>
      </form>
    </div>
  );
};

export default SignInput;
