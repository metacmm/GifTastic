/** function to render each API call return object to image */
function renderImages(image, index){
    var imgDiv = $("<div>");
    var p = $("<div>");
    p.text(image.rating);
    var img = $("<img>");
    img.addClass("animate");
    img.attr("id", index);
    if (!image.isAnimate){
        img.attr("src", image.images.fixed_height_still.url);
    }
    else{
        img.attr("src", image.images.fixed_height.url);
    }
    imgDiv.append(p);
    imgDiv.append(img);
    $("#image-display").append(imgDiv);
}

/** event handler of click image */
function animateImage(){
    const index = parseInt($(this).attr("id"));
    const image = imageObjects[index];
    image.isAnimate = !image.isAnimate;
    if (!image.isAnimate){
        $(this).attr("src", image.images.fixed_height_still.url);
    }
    else{
        $(this).attr("src", image.images.fixed_height.url);
    }
}