import {defHttp} from "@/utils/defHttp";
import Taro from "@tarojs/taro";

export async function code2session(code) {
/*  defHttp.get({
    url: '/tt/app/auth/code2session',
    data: {
      code
    }
  })*/
  return Taro.request({
    url: 'http://office.zhen-yee.com:8888/tt/app/auth/code2session',
    data: {code,token:'',appid: 'wx02d75d81e3feb322'},
    success: function(res) {
      debugger
    }
  })
}
