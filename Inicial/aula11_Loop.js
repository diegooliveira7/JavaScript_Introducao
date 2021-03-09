//Laco de Repetição

// for

for(let i = 0; i < 5; i++){
    console.log(i);
}

//While
//Verifica e depois executa
//Tem que declarar a variável fora do while

console.log("----------------A");

let a = 5;

while(a >= 1){
    if(a % 2 !== 0){//Módulo
        console.log(a);
    }
    a--;
}

// Do...While
// Executa e depois verifica
console.log("----------------B");

let b = 5;

do{
    console.log(b)
    b++;
}while(b < 10)

// For...In
//É melhor para objetos
//Trabalha com indices
console.log("----------------C");

const cores = ['Amarelo','Branco','Azul','Preto'];

for(let cor in cores){//Aqui no caso ele está pegando o indice
    console.log(cores[cor]);
}

// for...of
console.log("----------------d");

for (let cor of cores) {//Aqui ele vai no objeto e não no indice
    console.log(cor);
}