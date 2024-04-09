import axios from 'axios'

// 在配置axios时使用全局baseUrl:
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,  // node中为  process.env.VITE_BASE_URL
    timeout: 5000
  })

request.interceptors.response.use(function (response) {
    if(response.status === 200) {
      return response.data
    }
})

  export default request