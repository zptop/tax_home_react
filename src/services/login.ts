import { request } from 'umi';

export interface LoginParamsType {
  username: string;
  password: string;
  mobile?: string;
  captcha?: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request<API.LoginStateType>('/api/Login/dologin', {
    method: 'POST',
    data: params,
    requestType:'form'
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/Login/logout');
}
