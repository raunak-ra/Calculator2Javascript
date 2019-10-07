var InitCalculator = function Calculator() {



    let buttonArray = [
        { title: 7, value: "7", clickEvent: InputValue }, { title: 8, value: "8", clickEvent: InputValue }, { title: 9, value: "9", clickEvent: InputValue },
        { title: 4, value: "4", clickEvent: InputValue }, { title: 5, value: "5", clickEvent: InputValue }, { title: 6, value: "6", clickEvent: InputValue },
        { title: 1, value: "1", clickEvent: InputValue }, { title: 2, value: "2", clickEvent: InputValue }, { title: 3, value: "3", clickEvent: InputValue },
        { title: "*", value: " * ", clickEvent: InputValue }, { title: "0", value: "0", clickEvent: InputValue }, { title: "/", value: " / ", clickEvent: InputValue }, 
        { title: " + ", value: " + ", clickEvent: InputValue }, { title: "-", value: " - ", clickEvent: InputValue }, { title: "c", value: "c", clickEvent: ClearDisplay },
        { title: "%", value: " % ", clickEvent: InputValue }, { title: "00", value: "00", clickEvent: InputValue }, { title: "=", value: "=", clickEvent: DisplayResult }
    ];

    var inputString = "";

    function InputValue(numButton) {

        console.log(numButton.target.value);
        inputString += numButton.target.value;
        console.log(inputString);
        var display = numButton.target.parentElement.previousElementSibling;
        display.innerHTML = inputString;
        console.log(display);
    }


    function ClearDisplay(clearButton) {
        var display = clearButton.target.parentElement.previousElementSibling;
        display.innerHTML = "";
        inputString = "";
    }


    function DisplayResult(equalButton) {
        var display = equalButton.target.parentElement.previousElementSibling;
        var result = eval(inputString);
        display.innerHTML = result;
        inputString = "";
    }
    function PrepareUI() {
        var boundaryDiv = document.createElement("div");
        var displayDiv = document.createElement("div");
        var buttonDiv = document.createElement("div");

        boundaryDiv.setAttribute("class", "boundary");
        displayDiv.setAttribute("class", "display");
        buttonDiv.setAttribute("class", "button-div");

        for (var i = 0; i < buttonArray.length; i++) {
            var calcButton = document.createElement("button");
            calcButton.appendChild(document.createTextNode(buttonArray[i].title));

            calcButton.onclick = buttonArray[i].clickEvent;
            calcButton.value = buttonArray[i].value;

            buttonDiv.appendChild(calcButton);
        }

        boundaryDiv.appendChild(displayDiv);
        boundaryDiv.appendChild(buttonDiv);
        document.getElementsByTagName('body')[0].append(boundaryDiv);



    }
    return PrepareUI();
}


