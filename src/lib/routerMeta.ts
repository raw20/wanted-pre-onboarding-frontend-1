export interface IRouterMeta {
  name: string;
  path: string;
  isShow: boolean;
  isAuth: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: '홈',
    path: '/',
    isShow: true,
    isAuth: false,
  },
  SignInPage: {
    name: '로그인',
    path: '/signin',
    isShow: true,
    isAuth: false,
  },
  SignUpPage: {
    name: '회원가입',
    path: '/signup',
    isShow: true,
    isAuth: false,
  },
  TodoPage: {
    name: '회원가입',
    path: '/todo',
    isShow: true,
    isAuth: true,
  },
};

export default routerMeta;
