import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from 'axios';

import { STATUS_CODE } from '@/constants/app.constants';
import { toSnakeCase, toCamel } from '@/helpers/convert-object.helpers';

export const instanceApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const requestInterceptor = (
  req: InternalAxiosRequestConfig & {
    custom?: { isFormData?: boolean };
  }
) => {
  // TODO: token, get from store zustand
  const token = 'ABC';
  const headers = {
    ...req.headers,
    Authorization: token ? `Bearer ${token}` : req.headers?.Authorization,
    'Content-Type': req?.custom?.isFormData
      ? 'multipart/form-data'
      : 'application/json',
  } as InternalAxiosRequestConfig['headers'];

  return {
    ...req,
    headers,
    params: toSnakeCase(req.params, true),
    data: toSnakeCase(req.data, true),
  };
};

const responseInterceptor = (res: AxiosResponse) => {
  res.data = toCamel(res.data);
  return res;
};

const errorInterceptor = (error: AxiosError) => {
  if (error && error.response) {
    const status = error.response.status;

    if (status === STATUS_CODE.UNAUTHORIZED) {
      // TODO: Logic
    }
    return Promise.reject(error.response);
  }
  return Promise.reject(error);
};

instanceApi.interceptors.request.use(requestInterceptor);
instanceApi.interceptors.response.use(responseInterceptor, errorInterceptor);
