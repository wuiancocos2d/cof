import {defHttp} from "@/utils/defHttp";

export function productAll(shopId: string){
  return defHttp.get({
    url:'/tt/app/product/all',
    data: {shopid: shopId}
  })
}
