const PasteeAPI = require("./index.js");

console.log(`[+] Started running test!`);

let Pastee = new PasteeAPI('your-api-key');

Pastee.paste({"contents" : "What ever you want", "name": "A new Paste", "expire": 100}).then(r => {

    console.log(`[+] Succesfully created paste!`);

    console.log(r);

  }).catch((e) =>{

    console.log(`[!] Failed to create paste!`);

    console.log(e);

  })
//Test running - 23/07/2023