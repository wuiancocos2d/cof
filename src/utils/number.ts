import {isNumber} from "@/utils/is";

export function numberToPrice(num:number):number{
  if(!isNumber(num)) return;
  return num/100
}
