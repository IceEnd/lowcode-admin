import fetch, { Res } from '@src/util/request';

export interface UserState {
  loginName: string;
}

export default {
  getUser(): Promise<Res<UserState>> {
    return fetch.get({
      _c: 'user',
      _a: 'getUser',
    });
  },
};
