import { store } from './store';
import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({  
  baseURL: 'http://localhost:3010/'
})

api.interceptors.request.use(function (config) {
  const token = store.getState().auth.token;
  if(token && config.headers){
    config.headers['token'] = token
  }
  return config;
})

export default api;