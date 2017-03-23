var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle"];

// renderButtons();
function renderButtons() {

    $("#animal-buttons").empty();


    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
        a.addClass("animals");
        a.attr("data-animal", topics[i]);
        a.text(topics[i]);
        $("#animal-buttons").append(a);
        //console.log(a);

    }
}

$(".animals").on("click", function() {
    var animal = $(this).attr("data-animal");
    console.log(animal);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .done(function(response) {
        console.log(response);

        var result = response.data;

        for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalImage.addClass("gif");
            // animalImage.attr("data-still" , );
            // animalImage.attr("data-animate" , );
            // animalImage.attr("data-state" , still);

            animalImage.attr("")
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#gifs-appear-here").prepend(animalDiv);

            (".gif").on("click", function() {

                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr(data - animate));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                
            });


        }
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
