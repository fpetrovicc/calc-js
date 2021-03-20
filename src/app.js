function clearField() {

    document.getElementById("userInput").value = "";

}

function backspace() {

    let field = document.getElementById("userInput").value

    document.getElementById("userInput").value = field.slice(0, -1);

}

document.querySelector(".buttons").addEventListener("click", function(event) {
    
    if (event.target.tagName === "INPUT") {

        if ($(event.target).hasClass('digit')) {

            document.getElementById("userInput").value += event.target.value;

        }

        if ($(event.target).hasClass('operator')) {

            document.getElementById("userInput").value += event.target.value;

            var expression = document.getElementById("userInput").value;

            if (event.target.value == "=") {

                const parser = math.parser();
                
                expression = expression.replace("=", "");

                let result = parser.evaluate(expression);

                document.getElementById("userInput").value = parseFloat(result.toFixed(2));

            }

        }

    }

    event.stopPropagation();

});