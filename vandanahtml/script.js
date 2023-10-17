let result = document.getElementById("result");

function appendToResult(value) {
    result.innerText += value;
}

function clearResult() {
    result.innerText = "";
}

function calculateResult() {
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = "Error";
    }
}