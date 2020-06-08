

// let time = 0;
//
// setInterval(function(){
//   time += 2;
// console.log(time + 'secondas hava past');
// if(time > 5){
//   clearInterval(timer);
// }
// }, 2000);



let aside = document.querySelector("aside");
let header = document.querySelector("header");

aside.addEventListener("mouseover", function(){
    aside.style.margin="0.75em"
    header.style.margin= "0em"
})
aside.addEventListener("mouseleave", function(){
    aside.style.margin="0.5em"
    header.style.margin = "0.5em"
})




