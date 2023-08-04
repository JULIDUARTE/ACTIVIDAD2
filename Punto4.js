let valueByHour=2000
let quantityOfHour=prompt("Ingrese la cantidad de horas")
let quantityOfMinutes=prompt("Ingrese la cantidad de minutos")

let totalPrice=0

if(quantityOfMinutes>0){
    quantityOfHour=parseInt(quantityOfHour)+1}

    totalPrice=quantityOfHour*valueByHour

    alert("El Precio que debe de pagar es:"+totalPrice)