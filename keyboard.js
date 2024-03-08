// Author: On Wave Tiong, Tze Yik Ong
// ISU Netid : towave@iastate.edu, tzeyik@iastate.edu
// Date : March 8th, 2024

fetch("./data.json")
.then(response => response.json())
.then(myKeyboard => loadKeyboard(myKeyboard));
function loadKeyboard(myKeyboard) {
    // Find the element “col” in HTML
    var CardKeyboard = document.getElementById("col");
    var checkboxes = [];
    var cards = [];
    // Read every movie from the array
    for (var i = 0; i<myKeyboard.keyboard.length; i++){
    let brand = myKeyboard.keyboard[i].brand;
    let price = myKeyboard.keyboard[i].price;
    let path = myKeyboard.keyboard[i].path;
    let checkbox = "checkbox" + i.toString();
    let card = "card" + i.toString();
    // create a new HTML div division
    let AddCardKeyboard = document.createElement("div");
    // add class = “col” to new division for Bootstrap
    AddCardKeyboard.classList.add("col");
    // create Bootstrap card
    AddCardKeyboard.innerHTML = `
    <div id=${card} class="card shadow-sm">
    <img src=${path} class="card-img-top" alt="..."></img>
    <div class="card-body">
    <p class="card-text"> <strong>${brand}</strong>, ${price}</p>
    <div class="d-flex justify-content-between align-items-center">
    </div>
    </div>
    </div>
    `;
    // append new division
    CardKeyboard.appendChild(AddCardKeyboard);
    let cbox = document.getElementById(checkbox);
    checkboxes.push(cbox);
    let ccard = document.getElementById(card);
    cards.push(ccard);
    console.log(checkbox);
    console.log(card);
    } // end of for
    console.log(checkboxes);
    console.log(cards);
    // Add event listeners to checkboxes to toggle card visibility
    checkboxes.forEach((checkboxParam, index) => {
    console.log(index);
    checkboxParam.addEventListener('change', () => {
    if (checkboxParam.checked) {
    cards[index].style.display = 'block'; // Show the card
    } else {
    cards[index].style.display = 'none'; // Hide the card
    }
    });
    });
} // end of function
