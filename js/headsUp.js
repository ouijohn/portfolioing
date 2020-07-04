



//fetch info for head and header, target the bits and stick the data in
const  head = document.querySelector('head');
const header = document.querySelector('header');

const getBits=()=>{

    
    const useBits =(a, b)=>{
        fetch(a)
        .then(response=>{
            return response.text()
        })
        .then(data =>{
            b.innerHTML=data;
        })
    }
    
    useBits("dropDown.html", header);
    useBits("head.html", head);

    setTimeout(()=>{
        buildHeaderEvents();
    }, 1000) 
}
window.addEventListener('load', getBits)
    // getBits();

//add functionality to dropdown menu

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


