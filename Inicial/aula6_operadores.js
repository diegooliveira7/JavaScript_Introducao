//Operadores Aritiméticos(Matemáticos)

let salario = 100;

// +, -, *, /, ** (esponencial)

console.log(salario * salario);

// --, ++ (incremento)

//Operadores Atribuição

let valorTeclado = 100;
let valorTecladot = 10;

valorTeclado -= valorTecladot;

valorTecladot += valorTeclado;

console.log(valorTeclado);
console.log(valorTecladot);

//Operadores de Igualdade
//Igualdade estrita

console.log(1 === 1);//Aqui está comparando o valor e o tipo
console.log('1' === 1);//Aqui vai dar erro

//Igualdade solta - Não é muito recomendade

console.log(1 == 1);
console.log('1' == 1);//Aqui ele vai converter o valor para ver se são iguais

//Operadores de Comparação
//Operadores Lógicos 

// e (&&), ou(||), não(!)

console.log(true && false);
console.log(false && false);
console.log(true && true);

console.log(true || false);
console.log(false || false);
console.log(true || true);

//Operadores Bitwise

// Falsy
//undefined
//null
//0
//false
//''
// NaN - not a number

//Truthy

