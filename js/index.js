const fetchButtons=(function(){
    const http = new getInfo;
    let projects;
    let docHead;
    let projectGetter = http.get('bits/projects.json')
        .then(data => data)
        .then(data => projects = data)
        .then(data => buildBoxes(data));

    });



    const fetchButtons=(function(){
        const http = new getInfo;
        let projects;
        let docHead;
        let projectGetter = http.get('bits/projects.json')
            .then(data => data)
            .then(data => projects = data)
            .then(data => buildBoxes(data));
    
        });
    
    
    
    let yebutts = document.querySelectorAll('.yellowSquare')
    let current;
    yebutts.forEach(function(a, index){
        a.addEventListener('click', function(){
        console.log(index);
        current = index;
        localStorage.setItem('projectNmbr', index)
        console.log(localStorage.getItem('projectNmbr'))
        });
    })
    
        //building and inserting yellow buttons
    
    
        const buildBoxes=(a)=>{
    
            const main = document.querySelector('main');
            let buttonInfo = a;
            console.log(buttonInfo[0][0].title);
            console.log(buttonInfo.length);
    
            
            for (i = 0; i < 18; i++){
                console.log(i)
                main.innerHTML +=  
                `<a class="yellowSquare" href="javascript:setTimeout(()=>{window.location = 'projectPage.html' },500);">
                      <div class="backGround ">
                            <img src= ${buttonInfo[i][0].image1} alt="">
                      </div>
                </a>`
    
            }
            setTimeout(()=>{
                buttonSetUp();
            }, 100)
    
        }
    
        window.addEventListener('load', fetchButtons);
    