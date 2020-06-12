
//THIS MEASURES THE HEIGHT/ WIDTH THAT AN EVEN SHAPED SQUARE GRID SHOULD BE AS IT IS RESIZED, SETS A CSS VAR TO THIS AND APPLIES IT TO THE BUTTON BACKGROUND
//ENSURING THAT THE ASPECT RATIO OF THE BUTTONS AND OF THE GRID AND IMAGES REMAIN THE SAME REGARDLES OF THE SCREEN SIZE/ SHAPE
let height = 0;
let grid = document.getElementById('content');
let bod = document.querySelector('body');
let as = document.querySelectorAll('.yellowSquare');
let main = document.querySelector('main');
// let header = document.querySelector('header');

measure();
resize();

function measure(){
    aHeight = as[0].getBoundingClientRect().width;
    gridHeight = grid.getBoundingClientRect().width;
    mainWidth = main.getBoundingClientRect().width;
}
function resize(){
    grid.style.setProperty("--squareWidth", gridHeight);
    main.style.setProperty("--mainWidth", mainWidth);
        for(i = 0; i < as.length; i++){
            as[i].style.setProperty("--squareWidth", aHeight);
        }
}

function check(){
    console.log(document.getElementById('content').getBoundingClientRect().width);
    console.log(document.getElementById('content').getBoundingClientRect().height);
}

window.addEventListener('resize', function(){
        measure();
        resize();
        console.log(height)
});


//create variables from the link buttons

    let button = document.querySelectorAll('.backGround');
    let singleButton = document.querySelector('.backGround');

//grab the width of the link/ button/ flex item    
    let buttonWidth = singleButton.clientWidth;
    
    const filtered = (on) => Array.from(button).filter((butt) =>{
            return butt != on;
        }); 

const buttonAnimations = (a, b, c) =>{
//animates button on mouseover- change the width of target 

        c.style.animation = a + ' 0.5s cubic-bezier(0,0,0.58, 1) forwards';

//call filter function using 'this' and asign variable

        filteredButtons = filtered(c);
        
//apply chosen animation to each filtered element
        filteredButtons.forEach(element =>{
            element.style.animation = b  + ' 0.5s cubic-bezier(0,0,0.58, 1) forwards';
        }); 
 }

//animating events allows us to attach events to elements and trigger relevant animations/ http requests

const buildEvents = (a, b, c) => {
//cycle through each button/ panel and attach events, animations and http requests to them

    button.forEach(element =>{

    //add chosen event listener to element/ button

    element.addEventListener(a, function(){
        
    //calling the buttonAnimations here attaches relevant animations to the relevant events         
    
    buttonAnimations(b, c, this);
        console.log(a, b, this);
    
    });
});
}  

//calling build events allows us to attach the relevant animations and http requests to the relevant buttons

//mouse enter expands active element and shrinks the others
buildEvents("mouseenter", "hoverThis", "hoverThem");
//mouse leave shrinks active element and expands others
buildEvents("mouseleave", "hoverOffThis", "hoverOffThem");
buildEvents("mousedown", "clickThisAnimation", "clickThemAnimation");




