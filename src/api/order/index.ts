import {defHttp} from "@/utils/defHttp";

export function productAll(shopId: string){
  return defHttp.get({
    url:'/tt/app/product/all',
    data: {shopId}
  })
}

export function productList({geo,shopId}:{geo:string,shopId:string}){
  return defHttp.get({
    url:'/tt/app/product/list',
    data:{geo,shopId}
  })
}
export function productCategory(shopId:string){
  return defHttp.get({
    url:'/tt/app/product/category',
    data: {shopId}
  })
}
