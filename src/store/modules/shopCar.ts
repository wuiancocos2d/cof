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
    getItemNum(product: Product,attrItem: ProductAttrItem): number {
      const filterRes = this.carList.filter(item=> {
        const isProduct = item.product?.productId === product.productId
        const isSelector = item.attrItems?.filter(attrItem=>{

        })
      })
    }
  }
})
