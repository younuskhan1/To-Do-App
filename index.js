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
    if (counting === 0) {
        return;
    } else {
        counting--;
        const minusButton = document.getElementById("increase-decrease");
        minusButton.innerText = counting;
    }

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

let number = 0;
document.getElementById("input-button").addEventListener("click", function () {
    const inputField = document.getElementById("input-value");
    const inputValue = inputField.value;
    if (inputValue === "") {
        alert("You have to fill the input field");
    } else {
        number++;
        const tableContainer = document.getElementById("table-container");
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
           <td class="table-row table-number1">${number}</td>
           <td class="table-row table-number2">${inputValue}</td>
           <td class="table-row"><button class="table-button">Delete</button>
           <button class="table-edit">Edit</button></td>
        `
        tableContainer.appendChild(tableRow);
        inputField.value = "";
        const dltButon = document.getElementsByClassName("table-button");
        for (const buttons of dltButon) {
            buttons.addEventListener("click", function (event) {
                event.target.parentNode.parentNode.style.display = "none";
            })
        }
    }

})