'use strict';

let trump = require('./Trump.json');
let billNye = require('./BillNye.json');
let dawkins = require('./Dawkins.json');
let elonMusk = require('./ElonMusk.json');
let kanye = require('./Kanye.json');
let linMan = require('./LinMan.json');
let obama = require('./Obama.json');
let snoop = require('./Snoop.json');
let stephenKing = require('./StephenKing.json');
let weirdAl = require('./WeirdAl.json');


let trumpArray = [];
for(let i = 0; i < trump.length; i++){
  let split = trump[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    trumpArray.push(split[k])
  }
}
console.log("TRUMP ARRAY", trumpArray);

let billNyeArray = [];
for(let i = 0; i < billNye.length; i++){
  let split = billNye[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    billNyeArray.push(split[k])
  }
}
console.log("Bill Nye ARRAY", billNyeArray);

let dawkinsArray = [];
for(let i = 0; i < dawkins.length; i++){
  let split = dawkins[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    dawkinsArray.push(split[k])
  }
}
console.log("dawkins ARRAY", dawkinsArray);

let elonMuskArray = [];
for(let i = 0; i < elonMusk.length; i++){
  let split = elonMusk[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    elonMuskArray.push(split[k])
  }
}
console.log("elonMusk ARRAY", elonMuskArray);

let kanyeArray = [];
for(let i = 0; i < kanye.length; i++){
  let split = kanye[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    kanyeArray.push(split[k])
  }
}
console.log("kanye ARRAY", kanyeArray);

let linManArray = [];
for(let i = 0; i < linMan.length; i++){
  let split = linMan[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    linManArray.push(split[k])
  }
}
console.log("linMan ARRAY", linManArray);

let obamaArray = [];
for(let i = 0; i < obama.length; i++){
  let split = obama[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    obamaArray.push(split[k])
  }
}
console.log("obama ARRAY", obamaArray);

let snoopArray = [];
for(let i = 0; i < snoop.length; i++){
  let split = snoop[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    snoopArray.push(split[k])
  }
}
console.log("snoop ARRAY", snoopArray);

let stephenKingArray = [];
for(let i = 0; i < stephenKing.length; i++){
  let split = stephenKing[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    stephenKingArray.push(split[k])
  }
}
console.log("stephenKing ARRAY", stephenKingArray);

let weirdAlArray = [];
for(let i = 0; i < weirdAl.length; i++){
  let split = weirdAl[i].text.split(" ");
  for(let k = 0; k < split.length; k++){
    weirdAlArray.push(split[k])
  }
}
console.log("weirdAl ARRAY", weirdAlArray);

// console.log('1', trumpArray.length);
// console.log('2', billNyeArray.length)
// console.log('3', dawkinsArray.length)
// console.log('4', elonMuskArray.length)
// console.log('5', kanyeArray.length)
// console.log('6', linManArray.length)
// console.log('7', obamaArray.length)
// console.log('8', snoopArray.length)
// console.log('9', stephenKingArray.length)
// console.log('10', weirdAlArray.length)


let wordink = "http://api.wordnik.com:80/v4/word.json/the/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
