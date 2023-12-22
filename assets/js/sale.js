let productName = "Radio"; //— название товара.
let productPrice = 45.60; //— стоимость.
let productQuantity = 4; //— количество купленного товара.
let resultCost = productPrice * productQuantity; //— итоговая стоимость (высчитать динамически, с учетом цены и количества товара).

console.log(
  "Вы купили "+productName + " " + productQuantity +" шт. по "+productPrice+" ₽. Всего было потрачено: "+resultCost+" ₽");