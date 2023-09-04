import {tabBarPages, wxPages} from "@/config/pageConfig";

export default defineAppConfig({
  pages: wxPages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: tabBarPages
  },
  permission: {
    "scope.userLocation": {
      desc: '需要获取您的地理位置，请您授权'
    }
  },
  requiredPrivateInfos: ['getLocation']
})
