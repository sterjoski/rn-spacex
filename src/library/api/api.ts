import axios, { AxiosRequestConfig } from 'axios'
import { API_ENDPOINT } from 'config'

import dataTransformer from './dataTransformer'

class Api {
    http = axios.create({
        baseURL: API_ENDPOINT || undefined,
        timeout: 30000,
        transformResponse: [dataTransformer],
    })

    constructor() {
        // this.http.interceptors.request.use((requestConfig) => {
        //     if (__DEV__) console.log(`🛰️  REQUEST:\nURL: ${requestConfig.url}\nParams: ${requestConfig.params}`)
        //     return requestConfig
        // })
        // this.http.interceptors.response.use((response) => {
        //     if (__DEV__)
        //         console.log(
        //             `🛰️  RESPONSE:\nURL: ${response.config.url}\nMETHOD: ${response.config.method}\tSTATUS:${
        //                 response.status
        //             }\nParams: ${response.config.params}\nDATA:${JSON.stringify(response.data, null, 2)}`,
        //         )
        //     return response
        // })
    }

    async get(path: string, config?: Partial<AxiosRequestConfig>) {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        }
        return this.http.get(path, options).then((response) => response)
    }
}

export const API = new Api()
