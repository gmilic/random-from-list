var start = document.getElementById('buttonGo');
var result = document.getElementById('result');

start.onclick = function() {
    var inputArr = document.getElementById('list').value.split('\n');
    if (inputArr[inputArr.length - 1] == '') {
        inputArr.pop();
    }
    var repeats = document.getElementById('numbers').value;
    if (repeats == 0) {repeats = 1};
    var resultDisplay = document.getElementById('result');
    resultDisplay.innerHTML = '';

    for (var index = 0; index < repeats; index++) {
        var randNum = Math.floor(Math.random() * Math.floor(inputArr.length));
        var picked = inputArr[randNum];
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(picked));
        resultDisplay.appendChild(listItem);
        inputArr.splice(randNum,1);
        console.log(inputArr);
    }

}


