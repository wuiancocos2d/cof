export interface Category {
  code: string;
  comId: number;
  cover: string | null;
  id: number;v
  isHidden: number;
  level: number;
  name: string;
  productCategoryId: string | null;
  sort: number
  timestamp: number
}
export interface ProductAttrItem{
  attrItemId: number;
  cover: string;
  fee: number;
  name: string;
}
export interface ProductAttr{
  attrId: number;
  attrItem: ProductAttrItem[],
  cover: string;
  isMustSelect: number;
  isMuti: number;
  isRec: number;
  name: string;
}
export interface Product {
  attr: ProductAttr[],
  cover: string;
  fee: number;
  intro: string;
  isHot: number;
  isNew: number;
  name: string;
  productId: string;
  sort: number;
  tags: string;
}
export interface AllShopItem {
  name: string;
  productCategoryId: string;
  products: Product[];
  sort: number
}
