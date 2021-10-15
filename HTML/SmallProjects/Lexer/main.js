var textarea = document.getElementById("mainArea");
var runButton = document.querySelector(".runButton");
var outputArea = document.querySelector(".output");

var variable = "var";
var instantiate = "=";
var output = "output:";

runButton.addEventListener("click", () => {
	var string = textarea.value;
	var partsArray = string.split(" ");
    var rnVariable;
    var rnValue;

    for (let i = 0; i < partsArray.length; i++) {
        if (partsArray[i] == variable) {
            rnVariable = partsArray[1]
            rnValue = partsArray[2 + 1]
            console.log(rnVariable, rnValue)
        }        
    }



	if (string.indexOf(output)) {
		var index = partsArray.indexOf(output);
		if (index) {
			var nextString = partsArray[index + 1];
		}
	}

	console.log(partsArray);
});

// var variable = "var"
// var constant = "constant"
// var equal = "="
// var add = "+"
// var substract = "-"
// var multiply = "*"
// var divide = "/"
// var divider = ";"
// var log = "print"

// textarea.value = "var myNum = 6"
// var array = []
// var output
// runButton.addEventListener("click", () => {
//     array = []
//     output = ""
//     var textAreaString = textarea.value
//     var words = textAreaString.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         switch (words[i]) {
//             case variable:
//                 printWithInfo("var", words[i])
//                 break;

//             case constant:
//                 printWithInfo("const", words[i])
//                 break;

//             case equal:
//                 printWithInfo("equal", words[i])
//                 break;

//             case add:
//                 printWithInfo("add", words[i])
//                 break;

//             case multiply:
//                 printWithInfo("multiply", words[i])
//                 break;

//             case divide:
//                 printWithInfo("divide", words[i])
//                 break;

//             case divider:
//                 printWithInfo("divider", words[i])
//                 break;

//             case log:
//                 printWithInfo("print", words[i])
//             //console.log(textAreaString.slice(textAreaString.split("print").pop()))
//             //output = textAreaString.slice(textAreaString.split("print").pop())

//             default:
//                 printWithInfo("character/word", words[i])
//         }
//     }
// })

function printWithInfo(name, value) {
	console.log(name, ": " + value);
	outputArea.innerHTML = array;
	array.push(value);
	//console.log(array)
}
