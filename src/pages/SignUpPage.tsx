import { postSignUp } from '@/api/auth';
import useInputs from '@/lib/hooks/useInputs';
import useValidation from '@/lib/hooks/useValidation';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpdata, onChangeSignUpData] = useInputs({
    email: '',
    password: '',
  });

  const [emailStatus, passwordStatus] = useValidation(signUpdata);

  const onSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignUp(signUpdata)
      .then((res) => {
        alert(res.statusText);
        navigate('/signin');
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={onSignUp}>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signUpdata.email}
          onChange={onChangeSignUpData}
          data-testid="email-input"
        />
        {emailStatus && <div className="text-muted">{emailStatus.log}</div>}
        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          name="password"
          autoComplete="off"
          value={signUpdata.password}
          onChange={onChangeSignUpData}
          data-testid="password-input"
        />
        {passwordStatus && <div>{passwordStatus.log}</div>}

        <button
          type="submit"
          data-testid="signup-button"
          disabled={emailStatus.isError || passwordStatus.isError}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
