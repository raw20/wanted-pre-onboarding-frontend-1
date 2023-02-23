import { Link } from 'react-router-dom';
import { FormEvent, ChangeEvent, useState } from 'react';

const SignInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const getEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const getPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signin-input-wrap">
      <form onSubmit={SignInSubmit}>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            data-testid="email-input"
            value={email}
            onChange={getEmail}
          />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            data-testid="password-input"
            value={password}
            onChange={getPassword}
          />
        </div>

        <button data-testid="signin-button">로그인</button>
        <Link to="/signup">회원가입</Link>
      </form>
    </div>
  );
};

export default SignInput;
