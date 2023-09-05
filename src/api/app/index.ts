import {defHttp} from "@/utils/defHttp";
import Taro from "@tarojs/taro";

export function code2session(code) {
  return defHttp.get({
    url: '/tt/app/auth/code2session',
    data: {
      code
    }})
}
