import Taro from "@tarojs/taro";
import PreviousMap from "postcss/lib/previous-map";

export async function getTaroLocationAuth() {
  const setting = await Taro.getSetting()
  if (!setting?.authSetting) return Promise.reject('getSetting error')
  debugger
  if (!setting.authSetting['scope.userLocation']) {
     Taro.authorize({scope: 'scope.userLocation'}).then((res)=>{
       debugger
     }).catch(err=>{
       debugger
     })
  }
}

export async function getTaroLocation() {
  await getTaroLocationAuth()
  debugger
  return await Taro.getLocation({type: 'wgs84'})
}
