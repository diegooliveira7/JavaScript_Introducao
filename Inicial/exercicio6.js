
//Criar a função soma que retorna a
//Soma de todos os multiplos de 3 a 5

//Multiplos de 3
//3,6,9...
//Multiplos de 5
//5,10...

//Somando os multiplos
//Armazenar os multiplos de 3
//Armazenar os multiplos de 5
//somar os dois

let a = soma(10);
console.log(a);

function soma(value){
    let a3 = 0;
    let a5 = 0;
    for(let i = 0; i <= value; i++){
        if(i % 3 === 0){
            console.log(i);
            a3 = i + a3;
        }
        if(i % 5 === 0){
            console.log(i);
            a5 = i + a5;
        }
    }
    return a3 + a5;
}





