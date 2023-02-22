import { postSignIn } from '@/api/auth';
import useInputs from '@/lib/hooks/useInputs';
import useValidation from '@/lib/hooks/useValidation';
import { useNavigate } from 'react-router-dom';
import token from '@/lib/token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';

const SignInpage = () => {
  const navigate = useNavigate();
  const [signInData, onChangeSignInData] = useInputs({
    email: '',
    password: '',
  });

  const [emailStatus, passwordStatus] = useValidation(signInData);

  const onSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignIn(signInData)
      .then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.access_token);
        navigate('/todo');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      });
  };

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={onSignIn}>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signInData.email}
          onChange={onChangeSignInData}
          data-testid="email-input"
        />

        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          autoComplete="off"
          name="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          data-testid="password-input"
        />
        {passwordStatus && <div>{passwordStatus.log}</div>}

        <button
          type="submit"
          data-testid="signin-button"
          disabled={emailStatus.isError || passwordStatus.isError}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignInpage;
