import { Injectable } from '@angular/core';
import {AES,mode,pad}from 'crypto-js';
@Injectable({
    "providedIn":'root'
})
export class Encrypt{

    encrypt(key, iv, data) {
        return CryptoJS.AES.encrypt(
            data,
            key,
            {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
          })
    }

    decrypt(key, iv, cipherText) {
        return CryptoJS.AES.decrypt(cipherText,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
    }

    decrypt_api(key, iv, cipherText) {
        let decrypted=AES.decrypt(cipherText, key, {iv: iv,mode:mode.CBC, padding:pad.NoPadding});
        let data = CryptoJS.enc.Utf8.stringify(decrypted);
        let lastChar = data.substr(data.length - 1) == '}' ? '' : data.substr(data.length - 1);
        // temp to remove non-white space
        if(lastChar != ''){
            data = data.replaceAll(lastChar,''); //temp fix //.replace(/\v/g, ""); // temp to remove non-white space
        }
        return JSON.parse(data)
    }
      
}