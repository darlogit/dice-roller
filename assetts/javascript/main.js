console.log("hey man");


let rollButton = document.querySelector("#roll-button");
let numberOfRolls = document.querySelector("#roller-input");
let totalSpan = document.querySelector("#total");
let showAllRollsButton = document.querySelector("#show-all-rolls");
let allRolls = document.querySelector("#all-rolls");


let dieRolls = [];
rollButton.addEventListener("click", function () {
    let diceInput = Number(numberOfRolls.value);
    let index = 0;
    while (index < diceInput) {
        dieRolls.push(Math.ceil(Math.random() * (8 - 1 + 1)));

        index ++;
    }
    totalSpan.innerHTML += dieRolls.reduce((a, b) => a + b, 0);
});

showAllRollsButton.addEventListener("click", function () {
    let index = 0;

    while (index < dieRolls.length) {

        allRolls.innerHTML += "<li>" + dieRolls[index] + "</li>";
        index ++;
    }

});