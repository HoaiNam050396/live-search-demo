import axios from "axios"

export const ApiClient = axios.create({
      // method: method,
      // url: url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // params: params,
      // data: data,
      // config: config
    })



