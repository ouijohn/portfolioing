//SETS THE BEVAHOIUR AND APPEARANCE OF THE BUTTON ELEMENTS IN RELATION TO THE SIZE OF THE SCREEN/ WINDOW
const buttonSetUp=(function(){

    let height = 0;
    let grid = document.querySelector('#content');
    let bod = document.querySelector('body');
    let main = document.querySelector('#content'); 
    let as = document.querySelectorAll('.yellowSquare');
    let buttons = document.querySelectorAll('.backGround');
    let buttonImgs = document.querySelectorAll('.backGround img');
    let singleButton = document.querySelector('.backGround');
    const bigYellowSquare = document.querySelector('#bigYellowSquare')


    const measure =  (function(){
        aHeight = as[0].getBoundingClientRect().width;
        gridHeight = grid.getBoundingClientRect().width;
        mainWidth = main.getBoundingClientRect().width;
        // console.log(mainWidth);
        return{
            gridHeight,
            aHeight,
            mainWidth
        }
    });

    const resize =  (function(){
        grid.style.setProperty("--squareWidth", measure.gridHeight);
        main.style.setProperty("--mainWidth", mainWidth);
            for(i = 0; i < as.length; i++){
                as[i].style.setProperty("--squareWidth", aHeight);
            }
    });
    function check(){
        console.log(document.getElementById('content').getBoundingClientRect().width);
        console.log(document.getElementById('content').getBoundingClientRect().height);
    }
    //INITIALIZER!!!
    //this sets an initial width/ height for the menu squares and is called onload along with the UI
        setTimeout(()=>{
            measure();
            resize();
            buttonImgs.forEach((element)=>{
                element.style.animation="indexPageImgLoad 0.5s 0.25s forwards"
                
            })
        }, 500)
    //as before, set each module (meaure and resize) up either to return the function or set a listener inside them!
    window.addEventListener('resize', function(){
            measure();
            resize();
    });
    //create variables from the link buttons
    //grab the width of the link/ button/ flex item    
    let buttonWidth = singleButton.clientWidth;
        
    const filtered = (on) => Array.from(buttons).filter((butt) =>{
            return butt != on;
        }); 
    const buttonAnimations = (a, b, c) =>{
    //animates button on mouseover- change the width of target 
            c.style.animation = a + ' 0.5s cubic-bezier(0,0,0.58, 1) forwards';
    //call filter function using 'this' and asign variable
            filteredButtons = filtered(c);
            console.log(c);
            
    //apply chosen animation to each filtered element
            filteredButtons.forEach(element =>{
                element.style.animation = b  + ' 1s cubic-bezier(0,0,0.58, 1) forwards';
                // element.children[0] 
            }); 
    }
    //animating events allows us to attach events to elements and trigger relevant animations/ http requests

    const buildEvents = (a, b, c) => {
    //cycle through each button/ panel and attach events, animations and http requests to them

        buttons.forEach(element =>{
                //add chosen event listener to element/ button
                element.addEventListener(a, function(){
                //calling the buttonAnimations here attaches relevant animations to the relevant events         
                buttonAnimations(b, c, this);
                if(a === 'mousedown'){
                    element.children[0].style.animation='imageAnimation 2s forwards'
                }
        });
                const loadSquares = (function(){
                setTimeout(()=>{
                    this.measure();
                    this.resize();
                }, 2500);
            });
        });
}  
    buildEvents("mouseenter", "hoverThis", "hoverThem");
    buildEvents("mouseleave", "hoverOffThis", "hoverOffThem");
    // buildEvents('mousedown', 'imageAnimation', 'imageAnimation')
    buildEvents("mousedown", "clickThisAnimation", "clickThemAnimation");
    buildEvents("load", "loadSquares", "loadSquares");
    


    //**********MAYBE HERE BUT JUST DELAY THE ANIMATION?????????
    buttons.forEach((element) =>{
            element.style.animation='indexPageLoadAll 1s 0.25s forwards';
    });

});  






