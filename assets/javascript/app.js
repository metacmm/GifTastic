/** functions will be loaded while page loaded */
$(document).ready(function(){
    renderButtons();
    $("#search-topic").on("click", function (event) {
        event.preventDefault();
        var newTopic = $("#topic-input").val();
        topics.push(newTopic);
        renderButtons();
        $("#topic-input").val("");
    })
    $(document).on("click", ".topic", searchTopic);
    $(document).on("click", ".animate", animateImage);
});

    
