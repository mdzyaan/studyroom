
import axios from 'axios';

export default function request({ method, url }) {
    return axios.request({
      method,
      url,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Content-Encoding': 'gzip',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
      },
    });
  } 