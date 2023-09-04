import Taro from "@tarojs/taro";
import {HTTPSetting} from "@/config/http";
import {useAppStoreWithOut} from "@/store/modules/app";

const transform = {
  usePrefix: true,
  domain: HTTPSetting.DOMAIN
}

const interceptor = function (chain) {
  console.log('chain', chain)
}

function createDefHttp() {
  Taro.addInterceptor(Taro.interceptors.logInterceptor)

  function defHttpRequest(opt) {
    return new Promise((resolve, reject) => {
      Taro.request({
          ...opt,
          success: (res) => {
            resolve(res?.data)
          },
          fail: (err)=>{
            reject(err)
          }
        }
      )
    })
  }

  const post = (opt) => defHttpRequest({...parseDept(opt), method: 'POST'})
  const get = (opt) => defHttpRequest({...parseDept(opt), method: 'GET'})
  return {
    post,
    get
  }
}

function parseDept(opt) {
  const param = Object.assign({}, transform, opt)
  const preFixUrl = param.usePrefix ? param.domain + param.url : param.url
  const appStore = useAppStoreWithOut()
  param.url = preFixUrl + '?token=' + appStore.getToken + '&appid=' + appStore.getAppId
  if (typeof param.success === 'undefined') {
    param.success = function (res) {
      return Promise.resolve(res)
    }
  }
  return param
}

export const defHttp = createDefHttp()
