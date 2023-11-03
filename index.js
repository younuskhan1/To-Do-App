function yes() {
    const answer = document.getElementById("answer");
    answer.innerText = "Ooo yeah ...";
}
function offCourse() {
    const answer = document.getElementById("answer");
    answer.innerText = "Off Course ...";
}

let counting = 0;
function plusButton() {
    counting++;
    const plusButton = document.getElementById("increase-decrease");
    plusButton.innerText = counting;
}
function minusButton() {
    counting--;
    const minusButton = document.getElementById("increase-decrease");
    minusButton.innerText = counting;
}

document.getElementById("grand-parents").addEventListener("click", function () {
    console.log("grand-parents");
}, true);
document.getElementById("parents").addEventListener("click", function () {
    console.log("parents");
}, false);
document.getElementById("child").addEventListener("click", function () {
    console.log("child");
}, false);