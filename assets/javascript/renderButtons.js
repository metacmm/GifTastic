/** function to add topics array elements to buttons */
function renderButtons(){
    $("#button-display").empty();
    for (var i = 0; i < topics.length; i++){
        var button = $("<button>");
        button.addClass("topic");
        button.attr("data", topics[i]);
        button.text(topics[i]);
        $("#button-display").append(button);
    }
}