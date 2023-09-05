export const tabBarPages = [
  {
    pagePath: 'pages/index/index',
    selectedIconPath: 'static/images/homeSelected.png',
    iconPath: 'static/images/home.png',
    text: '首页'
  },
  {
    pagePath: 'pages/order/index',
    selectedIconPath: 'static/images/orderSelected.png',
    iconPath: 'static/images/order.png',
    text: '点单'
  },
  {
    pagePath: 'pages/orderList/index',
    selectedIconPath: 'static/images/orderListSelected.png',
    iconPath: 'static/images/orderList.png',
    text: '订单'
  },
  {
    pagePath: 'pages/mine/index',
    selectedIconPath: 'static/images/mineSelected.png',
    iconPath: 'static/images/mine.png',
    text: '我的'
  }
]
const pages = [
  'pages/login/index'
]
export const wxPages: string[] = (function(){
  return tabBarPages.map(item => item.pagePath).concat(pages)
})()
