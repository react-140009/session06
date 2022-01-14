import { store } from './store';
import axios from "axios"

export default axios.create({
  headers: {
    'token': store.getState().auth.token
  },
  baseURL: 'http://localhost:3010/'
})