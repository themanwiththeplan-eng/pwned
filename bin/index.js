#!/usr/bin/env node
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');
const axios = require('axios').default;

let arguments = yargs.argv;
let pwn = arguments.pwn;
if (pwn){
    let pwnUrl = `https://haveibeenpwned.com/api/v2/breaches?domain=${pwn}`;
    axios.get(pwnUrl,{

    }).then((response) => {
        let 
    })
    console.log(pwnUrl);
}else{
    return false;
}

