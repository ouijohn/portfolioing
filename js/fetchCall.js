class getInfo{
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}

// const fetchButtons=(function(){
//     const http = new getInfo;
//     let projects;
//     let docHead;
//     let projectGetter = http.get('bits/projects.json')
//         .then(data => data)
//         .then(data => projects = data)
//         .then(data => buildBoxes(data));

//     });