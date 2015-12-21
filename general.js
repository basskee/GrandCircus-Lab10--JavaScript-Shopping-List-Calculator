// Extend the shopping list program.
// 1. Create several grocery item objects with properties
// of name and price.
// 2. Store the grocery item objects in an array.
// 3. Loop through the array and print out the name
// and price on a new line.
// 4. Total up the amount with a label ‘total’.
// Be prepared to demo your work.


// 3. Loop through the array and print out the name
// and price on a new line.

var groceryList = [{
	name: "apple",
	price: 4
}, {
	name: "grape",
	price: 5
}, {
	name: "peach",
	price: 6
}];


// groceryList.forEach(function(listAll) {
// 	console.log (listAll.name + ' ' + listAll.price);
// });


// 4. Total up the amount with a label ‘total’.
// Be prepared to demo your work.

var total = 0;


groceryList.forEach(function(item) {
	console.log(item.name + ' ' + item.price);
	total += item.price;

});

console.log(total);


var namesList = document.createElement('div');
namesList.innerHTML = (groceryList[0].name)+" " +(groceryList[1].name)+" " +(groceryList[2].name);
document.body.appendChild(namesList);

namesList.setAttribute( "id", "namelist");

var priceList= document.createElement('div');
priceList.innerHTML = (groceryList[0].price)+" " +(groceryList[1].price)+" " +(groceryList[2].price);
document.body.appendChild(priceList);

priceList.setAttribute( "id", "pricelist");

submitItemAndPrice.addEventListener ('click', function(event) {
	event.preventDefault();
	var fromNameBox = document.getElementById("itemNameInput").value;
	var fromPriceBox = document.getElementById("itemPriceInput").value;
	total += parseInt(fromPriceBox);
	pricetotal.innerText = (total);

	var newParagraph = document.createElement('p');
	newParagraph.innerHTML = (fromNameBox);
	namesList.appendChild(newParagraph);

	var priceParagraph = document.createElement('p');
	priceParagraph.innerHTML = (fromPriceBox);
	priceList.appendChild(priceParagraph);

});


// document.getElementById("mainForm").reset();