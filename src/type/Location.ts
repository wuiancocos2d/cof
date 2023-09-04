export interface Location{
  accuracy: number;
  altitude:	number;
  horizontalAccuracy: number;
  latitude: number;//纬度，范围为 -90~90，负数表示南纬
  longitude: number; //经度，范围为 -180~180，负数表示西经
  speed: number;
  verticalAccuracy: number;
  errMsg: string;
}
