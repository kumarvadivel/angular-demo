const fs = require('fs');
// In newer Node.js versions where process is already global this isn't necessary.
const process = require("process");
const CryptoJS = require('crypto-js'); 
const pwd = __dirname.substring(0, __dirname.length-7);

// Get command line arguments
let args = process.argv.slice(2);
const productName = args[0];
const configPath= `${pwd}projects/${productName}/src/configuration/product-configurations/`
const writePath = `${pwd}projects/${productName}/src/assets/configuration/encrypt-configuration/` 
 function encrypt(key, iv, data) {
    return CryptoJS.AES.encrypt(
        data,
        key,
        {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
      })
    }
fs.readdir(configPath,function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
    files.forEach(file=>{
        let writeObj={}
        const data=fs.readFileSync(configPath+file,'utf-8')
        const key  = CryptoJS.enc.Latin1.parse('r3hi1dBLmAfKgugG');
        const iv   = CryptoJS.enc.Latin1.parse('r3hi1dBLmAfKgugG'); 
       writeObj["encryptedData"]=encrypt(key,iv,data).toString()
       fs.writeFile(writePath+file,JSON.stringify(writeObj),(error) => {
        if (error) throw error;
      })
    })
})
