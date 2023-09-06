import {defHttp} from "@/utils/defHttp";

export function authSMS(mobile: string){
  return defHttp.post({
    url: '/tt/app/auth/sms',
    data: {mobile},
    useSuffix: false
  })
}

export function authLogin(data){
  return defHttp.post({
    url: '/tt/app/auth/login',
    data
  })
}
