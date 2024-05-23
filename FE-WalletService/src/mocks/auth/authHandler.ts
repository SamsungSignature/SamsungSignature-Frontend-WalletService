import {API_BASE} from '@env';
import {rest} from 'msw';
import {LoginRequestData, LoginResponse} from '../../api/auth/useLogin';
import {SignupRequestData, SignupResponse} from '../../api/auth/useSignup';
import {ValidateResponse} from '../../api/auth/useValidate';
import API_PATH from '../../constants/apiPath';

interface member {
  email: string;
  phone_number: string;
  password: string;
}

let members: member[] = [
  {
    email: 'aaa',
    phone_number: 'aaa',
    password: 'aaa',
  },
];

export const authHandler = [
  // 로그인
  rest.post(`${API_BASE}${API_PATH.AUTH.LOGIN}`, async (req, res, ctx) => {
    const created_at = new Date().getTime();
    const {id, password} = await req.json<LoginRequestData>();
    // const UID = req.headers.get('UID');

    if (
      members.find(member => {
        if (
          (member.email === id || member.phone_number === id) &&
          member.password === password
        ) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      const loginResponseData: LoginResponse = {
        message: '성공적으로 로그인이 되었습니다.',
        body: {
          access_token: 'AAAA',
          created_at,
          expires_in: 3600000,
        },
      };

      return res(
        ctx.status(200),
        ctx.cookie('refresh_token', 'RRRR'),
        ctx.json(loginResponseData),
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({message: '로그인 정보가 잘못되었습니다.'}),
      );
    }
  }),
  // 중복 검사
  rest.get(`${API_BASE}${API_PATH.AUTH.VALIDATE}`, (req, res, ctx) => {
    const email = req.url.searchParams.get('email');
    const phone_number = req.url.searchParams.get('phone_number');
    if (email && phone_number) {
      const validateResponse: ValidateResponse = {
        message: '사용할 수 있는 아이디입니다.',
        body: null,
      };
      return res(ctx.status(200), ctx.json(validateResponse));
    } else {
      return res(ctx.status(400));
    }
  }),
  // 회원가입
  rest.post(`${API_BASE}${API_PATH.AUTH.SIGNUP}`, async (req, res, ctx) => {
    const {email, password, phone_number, username} =
      await req.json<SignupRequestData>();
    if (email && password && phone_number && username) {
      members.push({email, phone_number, password});
      const signupResponseData: SignupResponse = {
        message: '회원가입 성공',
        body: {
          email,
          phone_number,
          username,
        },
      };
      return res(ctx.status(200), ctx.json(signupResponseData));
    } else {
      return res(
        ctx.status(400),
        ctx.json({message: '회원 정보가 잘못되었습니다.'}),
      );
    }
  }),
];
