const  CryptoJS = require('crypto-js')
const Encrypt = require('../lib/jsencrypt.js')

export function rsaEncrypt(cryptData,publicKey) {
  let cryptFirst = new Encrypt.JSEncrypt();
  cryptFirst.setPublicKey(publicKey);
  return cryptFirst.encrypt(cryptData) // 对内容
}

export function rsaDecrypt(cryptData,privateKey) {
  let cryptFirst = new Encrypt.JSEncrypt();
  cryptFirst.setPrivateKey(privateKey);
  return cryptFirst.decrypt(cryptData);
}

export function aedEncrypt(text, keykey, iviv) {
  const key = CryptoJS.enc.Utf8.parse(keykey);
  const iv = CryptoJS.enc.Utf8.parse(iviv);
  let srcs = CryptoJS.enc.Utf8.parse(text);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

export function aesDecrypt(text, keykey, iviv) {
  var words = CryptoJS.enc.Base64.parse(text);
  const key = CryptoJS.enc.Utf8.parse(keykey);
  const iv = CryptoJS.enc.Utf8.parse(iviv);
  let srcs = CryptoJS.enc.Base64.stringify(words);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
}
