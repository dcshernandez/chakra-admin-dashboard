import { AxiosError, AxiosResponse } from 'axios'
import { TFlexibleValue } from 'utility/common/types'

const axios = require('axios').default

const apiUrl = process.env.REACT_APP_URL

type TConfig = {
  headers: Record<string, TFlexibleValue>
}

const handleSuccess = (response: AxiosResponse) => response
const handleError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return Promise.reject(error.response)
  } if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // message.error('Network Error');
    Promise.reject(error.request)
    throw error.request
  } else {
    // Something happened in setting up the request that triggered an Error
    throw error.message
  }
}

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(handleSuccess, handleError)
api.interceptors.request.use(
  (config: TConfig) => {
    const token = localStorage.getItem('token')
    const authConfig = config
    if (token) {
      authConfig.headers.Authorization = `Bearer ${token}`
    }
    return authConfig
  },
  (error: PromiseRejectedResult) => {
    Promise.reject(error)
  },
)

export default api
