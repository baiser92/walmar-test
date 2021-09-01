import axios from 'axios'
import axiosRetry from 'axios-retry'

const retryConfig = {
  retries: 2,
  shouldResetTimeout: true,
  retryCondition: () => true,
}

const baseURL = "http://localhost:5000/"


export default class ClientAPI {

    apiClientInstance() {
        const apiInstance = axios.create({
          baseURL: baseURL,
          timeout: 5000
        })
        axiosRetry(apiInstance, retryConfig)
        return apiInstance
      }



      GetProduct(value) {
        return new Promise(async (resolve, reject) => {
          const client = await this.apiClientInstance()
          client.request({
            url:`getAll/${value}`,
            method: 'get',
          }).then((response) => {
            resolve(response.data)
          }).catch((error) => {
            reject(error)
          })
        })
      }


}