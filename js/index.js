//SET THE FETCH REQUEST, BUTTON ELEMENTS AND HOW THEY LINK TO THE PROJECT PAGE
const fetchButtons=(function(){
    const http = new getInfo;
    let projects;
    let docHead;
    let projectGetter = http.get('bits/projects.json')
        .then(data => data)
        .then(data => projects = data)
        .then(data => getYourButtonsOut.BUILD(projects))
        .then(data => buttonSetUp(data))
        .then(data => getYourButtonsOut.COLLECT(projects))
    })();
//modular, self calling function that returns a method to build the ui and it's event handlers
const getYourButtonsOut = (function(){

    const buttonSetUp=()=>{

            let yebutts = document.querySelectorAll('.yellowSquare');
            console.log(yebutts);
            yebutts.forEach(function(a, index){
                a.addEventListener('click', ()=>{
                   localStorage.setItem('projectNmbr', index)
                })
            })
        }

        const buildBoxes=(a)=>{
                const main = document.querySelector('#content');
                let buttonInfo = a;
                
                for (i = 0; i < 18; i++){
                    main.innerHTML +=  
                    `<a class="yellowSquare" href="javascript:setTimeout(()=>{window.location = 'projectPage.html' },500);">
                    <div class="backGround ">
                                <img src= ${buttonInfo[i][0].image1} alt="">
                          </div>
                    </a>`
//apply the styles with a timeout-allowing shapes to form first
                }
            }
//the self calling IFFE returns a function building the boxes
            return{
                BUILD: function(a){
                    buildBoxes(a);
                },
                COLLECT: function(){
                    buttonSetUp();
                }
            }
})();



//using the event.target object has I think some advs. But here forEach is much punchier 

// const buttonSetUp=()=>{
//     let main = document.querySelector("main");
//     let yellObutts = document.querySelectorAll('.yellowSquare');
//     //create an array from the nodeLIst, get it's index and use it to set the localThing
//     main.addEventListener("click", ()=>{
//         let buttOh = event.target.parentElement.parentElement;
//         // let buttonArray = [...yebutts];
//         let buttonArray = Array.from(yellObutts);
//         let liveButtOn = buttonArray.indexOf(buttOh);
//         console.log(liveButtOn);
//         localStorage.setItem('projectNmbr', liveButtOn)
//       });
// };

//target tester

// document.querySelector('body').addEventListener('click',()=>{
//     let target = event.target; console.log(target);
// });