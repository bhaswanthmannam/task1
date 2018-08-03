var mainEl = document.getElementsByClassName('main');
var firstCust = document.getElementById('firstcust');

function createCustomerObject (a,b,c ){
var custDiv = document.createElement('div');
var heading = document.createElement('h3');
var row = document.createElement('ul');
var productNameColumn = document.createElement('li');
var itemCostColumn = document.createElement('li');

	productNameColumn.innerHTML = 'toy';
	itemCostColumn.innerHTML = 50;

	row.appendChild(productNameColumn);
	row.appendChild(itemCostColumn);
			
	heading.innerHTML = 'Ravi';
	custDiv.setAttribute('class','cust');
	custDiv.appendChild(heading);
	custDiv.appendChild(row);
	custDiv.style.clear = 'both';
	mainEl.appendChild(custDiv);
}
for (var i = 0; i < newArr.length; i++) {
	createCustomerObject(obj.firstName[i], ordersObj.productName[i], ordersObj.itemCost[i])	
}