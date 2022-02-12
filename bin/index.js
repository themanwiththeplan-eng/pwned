#!/usr/bin/env node
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');
const axios = require('axios').default;

let arguments = yargs.argv;
let pwn = arguments.pwn;
let pass = arguments.pass;
if (pwn){
    let pwnUrl = `https://haveibeenpwned.com/api/v2/breaches?domain=${pwn}`;
    axios.get(pwnUrl,{

    }).then((response) => {
        console.log(response.data);
    })
    console.log(`You've chosen to look at ${pwnUrl} for breaches`);
}else if(pass.length < 5){
    console.log(`Please enter the first 5 hash chars`);
}else if(pass){
    let passUrl = `https://api.pwnedpasswords.com/range/${pass}`;
    axios.get(passUrl,{

    }).then((response) => {
        console.log(response.data);
    })
}else{
    console.log(`Use an argument`);
}

