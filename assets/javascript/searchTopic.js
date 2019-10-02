/** event hander of clicking topic buttons */
function searchTopic(){
    const item = $(this).attr("data");
    const api_key = "qn7Rg4DKSS7dYUsOqlMwOx4lzmSkhLvB";
    const limit = 10;
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + item + "&limit=" + limit;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#image-display").empty();
        imageObjects = response.data;
        for(var i = 0; i < imageObjects.length; i++){
            imageObjects[i].isAnimate = false;
            renderImages(imageObjects[i], i);
        }
    })
    
}