// Dievisivel por 3 -> Fizz
// Divisivel por 5 -> Buzz
// Divisivel por 3 e por 5 -> FizzBuzz
// Não é divisivel por 3 ou 5 -> Entrada
// Não é um número -> 'Não é um número'

const c = fizzBuzz(30);

console.log(c);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        return 'Não'
    }
    let a3 = entrada % 3;
    let a5 = entrada % 5;
    if(a3 === 0 || a5 === 0){
        if(a3 === 0){
            if(a5 === 0)
                return 'FizzBuzz'
            return 'Fizz';
        }
        return 'Buzz';
    }
    return entrada;
}

