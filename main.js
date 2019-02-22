"use strict"

// var coffeename=document.getElementsByClassName("coffees-name");
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//      // html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;


function renderCoffee(coffee){
    var html='<div class=" coffee col-6">';
    // var html=html+coffee.id;
    // var html=html+'<div id="coffees">'
    var html=html+'<h2>'+coffee.name+'</h2>';
    var html=html+'<p>'+coffee.roast+'</p>';
    html=html+'</div>';
    // html=html+'</div>';
    return html;
}



function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {

        if (coffee.roast === selectedRoast ) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === 'all') {
            // filteredCoffees.push (coffees);
            filteredCoffees=coffees;
        }
        else if(input.value===selectedRoast){

        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var input=document.getElementById("coffee-name-search");
coffees.reverse();



// function filterItems(query) {
//     return coffees.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     })
// }
//
// console.log(filterItems('ap'));


// function arrayToString(coffees) {
//     var str = '';
//     coffees.forEach(function(e,i, coffees) {
//         str += i;
//         if (coffees.name= (coffees.length - 1)) {
//             str += ',';
//         };
//     });
//     return str;
// }


// function filterByValue(array, value) {
//     return array.filter((data) =>  JSON.stringify(data).indexOf(value) !== -1);
// }
//
// console.log(filterByValue(coffees, 'city'));




var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// i just added a feature below so that we dont need to click on submit buttom to change the name and type of coffee
roastSelection.addEventListener('change', updateCoffees)

// var roastSelection = document.querySelector('#roast-selection-bottom');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
input.addEventListener('keyup', coffeeSearch);

function coffeeSearch(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (input.value.toLowerCase() === coffee.name.toLowerCase().substring(0, input.value.length)) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}