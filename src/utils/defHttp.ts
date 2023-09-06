import Taro from "@tarojs/taro";
import {HTTPSetting} from "@/config/http";
import {useAppStoreWithOut} from "@/store/modules/app";

const transform = {
  usePrefix: true,
  useSuffix: true,
  domain: HTTPSetting.DOMAIN
}

function defRequest(param){
  return new Promise((resolve, reject)=>{
    Taro.request(param).then(res=>{
      const statusSuccess = res?.statusCode === 200 && res?.data?.status === 200
      if(statusSuccess) resolve(res.data.data)
      reject(res?.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

function createDefHttp() {
  Taro.addInterceptor(Taro.interceptors.logInterceptor)
  const post = (opt) =>  defRequest({...parseDept(opt), method: 'POST'})
  const get = (opt) =>  defRequest({...parseDept(opt), method: 'GET'})
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
  return param
}

export const defHttp = createDefHttp()
