import axios from "axios"

export default axios.create({
  headers: {
    'token': ''
  },
  baseURL: 'http://localhost:3010/'
})