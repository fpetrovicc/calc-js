function clearField() {

    document.getElementById("userInput").value = "";

}

document.querySelector(".buttons").addEventListener("click", function(event) {
    
    if (event.target.tagName === "INPUT") {

        console.log(`btn value = ${event.target.value}`)

        if ($(event.target).hasClass('digit')) {

            document.getElementById("userInput").value += event.target.value;

        }

    }

    event.stopPropagation();

});