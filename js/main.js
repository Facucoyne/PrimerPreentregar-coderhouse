
/*Cotizador de Seguros 
   (1) Seguros para motos */

    const numeroA = "ingrese el año de su moto"
    const numeroB =  "ingrese monto minimo"
    

function sumar() {
    
    let numeroA = parseInt(prompt("ingrese el año de su moto"))
    let numeroB = parseInt(prompt("ingrese el monto minimo \n La tarifa puede variar desde $200 a $500"))
    let resultado = numeroA + numeroB

    if(numeroA = "ingrese el año de su moto"){
        alert("Aguarde un segundo , estamos verificando la informacion")
    } else{
        alert("Vuelva intentarlo")
    }
    
    alert("En estos momentos usted debera pagar "+ resultado)
    
  
}


function multiplicar(){
    let numeroA = parseInt(prompt("ingrese el año de su Auto"))
    let numeroB = parseInt(prompt("ingrese el monto minimo \n La tarifa puede variar desde $200 a $500"))
    let resultado = numeroA + numeroB


    
    if(numeroA = "ingrese el año de su auto"){
        alert("Aguarde un segundo , estamos verificando la informacion")
    } else{
        alert("Vuelva intentarlo")
    }

    alert("En estos momentos usted debera pagar " + resultado)
}



let opcion = parseInt(prompt("Elija una seguros \n 1-motos \n 2-autos  \n 3-salir"))

while (opcion !== 3) {
    switch(opcion) {
        case 1:
            sumar()
            break
        
        case 2:
            multiplicar()
            break

        default:
            alert("Opcion incorrecta")
            break
    }

    opcion = parseInt(prompt("Elija una opcion: \n 1-motos \n 2-autos \n 3-salir"))
}

alert("Finalizando programa, gracias!!!")

