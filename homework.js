'use strict'



function BinarioADecimal(num) {
  // tu codigo aca

  let decimal = 0;
  for(let i = 0; i < num.length; i++){
    decimal += num[i] * 2 **(num.length - 1 - i);
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca

  let array = [];



  while(num > 0){
    
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return array.join("");
  //return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}