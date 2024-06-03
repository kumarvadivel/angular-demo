import {Injectable} from '@angular/core';
import {AES,mode,pad} from 'crypto-js';

@Injectable({
    "providedIn": 'root'
})
export class Encrypt {
    encrypt(key, iv, data) {
        return AES.encrypt(
            data,
            key,
            {
                iv: iv, mode: mode.CBC, padding: pad.ZeroPadding
            })
    }

    decrypt(key, iv, cipherText) {
        return AES.decrypt(cipherText, key, {iv: iv, padding:pad.ZeroPadding});
    }

    decrypt_api(key, iv, cipherText) {
        let decrypted=AES.decrypt(cipherText, key, {iv: iv,mode:mode.CBC, padding:pad.NoPadding});
        let data = CryptoJS.enc.Utf8.stringify(decrypted);
        let lastChar = data.endsWith('}') ? '' : data.slice(-1);
        // temp to remove non-white space
        if(lastChar != ''){
            data = data.replaceAll(lastChar,''); //temp fix //.replace(/\v/g, ""); // temp to remove non-white space
        }
        return JSON.parse(data)
    }
}
