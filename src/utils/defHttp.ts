import Taro from "@tarojs/taro";
import {HTTPSetting} from "@/config/http";
import {useAppStoreWithOut} from "@/store/modules/app";

const transform = {
  usePrefix: true,
  useSuffix: true,
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
  const appStore = useAppStoreWithOut()
  const preFixUrl = param.usePrefix ? param.domain + param.url : param.url
  const suffix = param.useSuffix ? '?token=' + appStore.getToken + '&appid=' + appStore.getAppId : ''
  param.url = preFixUrl +suffix
  if (typeof param.success === 'undefined') {
    param.success = function (res) {
      return Promise.resolve(res)
    }
  }
  return param
}

export const defHttp = createDefHttp()
