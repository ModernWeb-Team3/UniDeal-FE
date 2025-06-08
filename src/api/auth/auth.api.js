import api from '@/api/api';

const PATH = '/auth';

// 1. 이메일로 인증번호 발송
export const sendVerificationEmail = async (email) => {
  const response = await api.post(`${PATH}/email`, { email });
  return response.data;
};

// 2. 인증번호 검증
export const validateVerificationCode = async (email, code) => {
  const response = await api.post(`${PATH}/validate`, {
    email,
    code,
  });
  return response.data;
};

// 3. 회원가입
export const signup = async ({ email, password, name }) => {
  const response = await api.post(`${PATH}/signup`, {
    email,
    password,
    name,
  });
  return response.data;
};

// 4. 로그인
export const login = async ({ email, password }) => {
  const response = await api.post(`${PATH}/login`, {
    email,
    password,
  });
  return response.data;
};
