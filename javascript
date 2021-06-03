https://github.com/mbeaudru/modern-js-cheatsheet
https://github.com/ThibaultJanBeyer/cheatsheets/blob/master/JavaScript-Cheatsheet.md
https://gist.github.com/LeCoupa/4e210b81cfb84cd4cfbdc7ff71e6bf2d
https://github.com/alhassy/JavaScriptCheatSheet
https://github.com/wilfredinni/javascript-cheatsheet
https://github.com/krishnr/JavaScript-cheat-sheet

dom 
https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86
es6
https://github.com/DrkSephy/es6-cheatsheet
https://gist.github.com/vasco3/22b09ef0ca5e0f8c5996
https://gist.github.com/wktdev/830d607f0a524d5a9e6bec5c85d46717
https://github.com/devsocial-project/es6-7-8-9-10-Cheatsheet
https://github.com/mbeaudru/modern-js-cheatsheet

function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks');
    }, 300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${ a } ${ b } ${ c }`);
}

msg(); // 🤡 


const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

myPromise.then((message) => { 
    console.log(message);
}).catch((message) => { 
    console.log(message);
});
