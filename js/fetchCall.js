//this async object is called to allow the fetch objects to grab the JSON data and stick it in the pages
class getInfo{
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}
//creates a new async fetch object which grabs JSON links to the thumbnail images and links to stick in the buttons
//the final promise- getyouretc calls the constructor of the buttons

    