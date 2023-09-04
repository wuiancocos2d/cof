import Taro, {getLocation} from "@tarojs/taro";

export async function getTaroLocationAuth() {
  const setting = await Taro.getSetting()
  if (!setting?.authSetting) return Promise.reject('getSetting error')
  if (!setting.authSetting['scope.userLocation']) {
     await Taro.authorize({scope: 'scope.userLocation'})
  }
}

export async function getTaroLocation():Promise<getLocation.SuccessCallbackResult> {
  await getTaroLocationAuth()
  return await Taro.getLocation({type: 'wgs84'})
}
