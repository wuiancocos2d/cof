export interface Category {
  code: string;
  comId: number;
  cover: string | null;
  id: number;
  isHidden: number;
  level: number;
  name: string;
  productCategoryId: string | null;
  sort: number
  timestamp: number
}
export interface Product {
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
