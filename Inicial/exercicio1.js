//Escreva uma função que usa 2 números e retorna o maior entre eles

function Check(number1, number2){
    if (number1 > number2) {
        console.log("The number " + number1 + " is greater than " + number2);
    } else if(number2 > number1){
        console.log("The number " + number2 + " is greater than " + number1);
    }else{
        console.log("The numbers is equals");
    }
}

function CheckTern(number1, number2){
    number1 > number2 ? console.log("The number " + number1 + " is greater than " + number2) : console.log("The number " + number2 + " is greater than " + number1) ;
}

Check(10,10);

console.log("-----------------------");

CheckTern(20,0);