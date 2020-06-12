//ajax request
const docHead = document.querySelector('head');
const header = document.querySelector('header');
    //     nut.innerHTML='ekjdnckjkjncjkn';
        // const header = document.querySelector('header');
    //     header.innerHTML='ldmklmedkekdkjjkn';
class getInfo{
async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    // console.log(resData);
    return resData;
}
}
//THISTHISHTIHEREHEREHERE






const fetchHeader=(function(){
const http = new getInfo;
let heads;
let docHead;
let headGetter = http.get('bits/header.json')
    .then(data => data)
    .then(data => heads = data)
    .then(data => attachHeader(heads))
});

const addHDocHead =(a)=>{
    console.log(a);
    let headCont = `${a}`
    document.querySelector('head').innerHTML=headCont;
}

const attachHeader =(e)=>{
// let attachThis = JSON.parse(e);
let docHeadData = e[0].documentHead;
console.log(docHeadData);
docHead.innerHTML = `${docHeadData}`;

header.innerHTML= e[0].header;
setTimeout(()=>{
    buildHeaderEvents();

},1000)
}

const buildHeaderEvents=()=>{
const downer = document.querySelector('.downer');
const downIcon = document.querySelector('.downer a')
const menuText = document.querySelectorAll('#downMenuText a');
const menuBckgrnd = document.querySelector('#downMenu');

downer.addEventListener('click', function(){
if(downer.classList.contains('open')){
    dropMenu('Close');
    downer.classList.remove('open');
}else{
    dropMenu('Open');
    downer.classList.add('open');
}

});
const dropMenu=(a)=>{
console.log(a);
    downIcon.style.animation = `icon${a} 1s forwards`
    menuBckgrnd.style.animation =  `menu${a} 1s forwards`;
    menuText.forEach((b)=>{
        b.style.animation= `menuText${a} 1s forwards`;
}); 
}
}

fetchHeader();