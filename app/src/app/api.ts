import { store } from './store';
import axios from "axios"

let token = '';
let tokenStorage = localStorage.getItem('token')

if(tokenStorage){
  token = tokenStorage;
}

export default axios.create({
  headers: {
    'token': token
  },
  baseURL: 'http://localhost:3010/'
})