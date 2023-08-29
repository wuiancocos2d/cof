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
  }
})
