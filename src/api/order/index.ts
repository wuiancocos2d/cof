import {defHttp} from "@/utils/defHttp";
import {Category, AllShopItem} from "@/components/order/coffee-category-list/type";

export function productAll(shopId: string): Promise<AllShopItem[]>{
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

export function productCategory(shopId:string):Promise<Category[]>{
  return defHttp.get({
    url:'/tt/app/product/category',
    data: {shopId}
  })
}
