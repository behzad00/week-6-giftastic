var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle"];


function renderButtons() {

    $("#gifs-appear-here").empty();


    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
 		a.addClass("animals");
		a.attr("data-animal", topics[i]);
		a.text(topics[i]);
		$("#animal-buttons").append(a);
        console.log(a);

     }

    $("button").on("click" , function(){
    	var animal = $(this).attr("data-animal");
    	var queryURL =  "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

          $.ajax({
          url: queryURL,
          method: "GET"
        })
        
        .done(function(response) {
          console.log(queryURL);
    });

});

$("#add-animal").on("click", function(event) {

    event.preventDefault();

    var newAnimal = $("#animal-input").val().trim();
    topics.push(newAnimal);
  
    console.log(topics)

    renderButtons();
});

renderButtons();
};

