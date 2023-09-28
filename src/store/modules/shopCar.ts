import {defineStore} from "pinia";
import {Product, ProductAttrItem} from "@/components/order/coffee-category-list/type";
interface ShopCarItem {
  product: Product,
  attrItems: ProductAttrItem[]
}
interface ShopCar {
  carList : ShopCarItem[],
}
export const carStore = defineStore('carStore',{
  state:(): ShopCar=> ({
    carList: []
  }),
  getters: {
    getCarList(state): ShopCar[] {
      return state.carList
    }
  },
  actions: {
    addCarList(product:Product,attrItems: ProductAttrItem[]): void {
      this.carList.push({
        product,
        attrItems
      })
    },
    getItemNum(product: Product,attrItems: ProductAttrItem[]): number {
      if(!product || attrItems?.length === 0) return 0;
      const filterRes = this.carList.filter(item=> {
        const isProduct = item.product?.productId === product.productId
        if(!isProduct || item.attrItems?.length !== attrItems?.length) return;
        return item.attrItems.every(attr1=> attrItems.find(attr2 => attr2.attrItemId === attr1.attrItemId))
      })
      return filterRes.length
    }
  }
})
