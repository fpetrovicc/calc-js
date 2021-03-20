function clearField() {

    document.getElementById("userInput").value = "";

}

document.querySelector(".buttons").addEventListener("click", function(event) {
    
    let operatorSelected;
    let num1, num2;

    function calculation(num1, num2, operatorSelected) {

    }

    if (event.target.tagName === "INPUT") {

        console.log(`btn value = ${event.target.value}`)

        if ($(event.target).hasClass('digit')) {

            document.getElementById("userInput").value += event.target.value;

        }

        if ($(event.target).hasClass('operator')) {

            operatorSelected = event.target.value;
            
            if (!num1) {
            
                num1 = parseInt(document.getElementById("userInput").value);

            }

            clearField();

            if (event.target.value === "=") {

                num2 = parseInt(document.getElementById("userInput").value);

            }


        }

    }

    event.stopPropagation();

});