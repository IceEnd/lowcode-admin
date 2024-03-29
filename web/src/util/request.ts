

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosJsonp from 'axios-jsonp';

interface ReqOptions<T> {
  url?: string;
  method?: 'GET' | 'POST';
  headers?: Record<string, any>;
  withCredentials?: boolean;
  json?: boolean;
  cache?: boolean;
  mode?: string;
  _a?: string;
  _c?: string;
  data?: string | T;
  timeout?: number;
  [key: string]: any;
}

export interface OrderItem {
  columnName: string;
  direction: string;
}

/**
 * 多条数据的请求参数
 */
export interface Query {
  // 排序
  orderBy: OrderItem[];
  // 分页时，当前页数
  pgIndex: number;
  // 分页时，当前总数据数
  pgSize: number;
  // 其他过滤数据
  query?: string;
  [key: string]: any;
}

/**
 * 单条数据
 */
export interface Res<T = any> {
  ret: number;
  msg: string;
  data?: T;
}

/**
 * 多条数据
 */
export interface ListRes<T> {
  ret: number;
  msg: string;
  data?: T[];
  total?: number;
}

// 缓存数据，当设置了cache为true时启用
const cacheDataMap: Record<string, any> = {};
// 缓存请求，用于同一个请求连续发起时
const cacheRequestMap: Record<string, any> = {};

// 将json数据转换为key=value形式
const json2url = function (json: { [key: string]: any }): string {
  const arr: string[] = [];

  Object.entries(json).forEach(([i, item]) => arr.push(`${i}=${item}`));

  return arr.join('&');
};

const base = '/api';
const requestFuc = function <T>(options: ReqOptions<T>) {
  const method = (options.method || 'POST').toLocaleUpperCase();

  const url = `${base}/${options._c}/${options._a}`;
  delete options._a;
  delete options._c;

  let body = null;
  if (options.json === true) {
    try {
      body = JSON.stringify(options.data);
    } catch (e) {
      console.error('options.data cannot transform to a json string');
    }
  } else if (typeof options.data === 'string') {
    body = `data=${options.data}`;
  } else if (options.data) {
    body = `data=${encodeURIComponent(JSON.stringify(options.data))}`;
  } else if (!options.url) {
    body = json2url(options);
  }

  const config = {
    ...options,
    url,
    headers: Object.assign(
      {
        Accept: 'application/json, text/javascript, */*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      options.json === true
        ? {
            'Content-Type': 'application/json',
          }
        : {},
      options.headers || {},
    ),
    withCredentials: options.withCredentials ?? true,
    mode: options.mode || 'no-cors',
    data: method === 'POST' ? body : null,
    responseType: 'json',
  };

  const storageKey = `m-fetch-post-cache://${url}?${body}`;

  if (options.cache && cacheDataMap[storageKey]) {
    return Promise.resolve(cacheDataMap[storageKey]);
  }

  if (cacheRequestMap[storageKey]) {
    return new Promise((resolve) => {
      cacheRequestMap[storageKey].push(resolve);
    });
  }
  cacheRequestMap[storageKey] = [];

  return axios
    .request(config as AxiosRequestConfig)
    .then((response) => {
      if (cacheRequestMap[storageKey]?.length) {
        cacheRequestMap[storageKey].forEach((resolve: (arg0: AxiosResponse<any>) => any) => resolve(response));
      }
      delete cacheRequestMap[storageKey];

      if (options.cache) {
        cacheDataMap[storageKey] = response;
      }

      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  request<T>(options: ReqOptions<T>): Promise<AxiosResponse<Res>> {
    return requestFuc(options);
  },

  post<T>(options: ReqOptions<T>): Promise<Res & any> {
    options.method = 'POST';
    return requestFuc(options).then((response) => response?.data);
  },

  get<T>(options: ReqOptions<T>): Promise<Res> {
    options.method = 'GET';
    return requestFuc(options).then((response) => response?.data);
  },

  jsonp<T>(options: ReqOptions<T>): Promise<Res> {
    return axiosJsonp(options).then((res) => res.data);
  },
};
