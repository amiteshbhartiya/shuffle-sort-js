'use strict';
function shuffleNumbers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    renderNumberCards(array)
}

function sortNumbers(array) {
    array.sort()
    renderNumberCards(array)
}

function renderNumberCards(array) {
    document.getElementsByTagName("article")[0].innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        let value = document.createElement("div");
        value.className = "card";

        value.innerHTML = array[i];
        document.getElementsByTagName("article")[0].appendChild(value);
    }
}

function getArray() {
    return [...Array(9).keys()].map(i => i + 1);
}