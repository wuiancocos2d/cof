import {aedEncrypt, rsaEncrypt} from "@/utils/encrypt";
import {AES_KEY, PUBLIC_KEY} from "@/config/keys";

const CryptoJS = require('crypto-js')
export function parseLoginParam(username,password){
  const timestamp = new Date().getTime();
  const iv = CryptoJS.MD5(timestamp).toString().substring(0, 16)
  const pwd = rsaEncrypt(CryptoJS.MD5(password).toString().toUpperCase(),PUBLIC_KEY);
  const paramStr = JSON.stringify({
    "timestamp": timestamp,
    "username": username,
    "password": pwd
  })
  return {
    data: aedEncrypt(paramStr,AES_KEY,iv),
    iv,
    timestamp
  }
}


