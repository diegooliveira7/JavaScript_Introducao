//function
let corSite = 'Azul';

function resetarCor(){
    corSite = "";
}

console.log(corSite);
resetarCor();
console.log(corSite);

function resetarCorP(cor){
    corSite = cor;
}

console.log(corSite);
resetarCorP('Vermelho');
console.log(corSite);

function resetarCorC(cor, tonalidade){
    corSite = cor +" "+ tonalidade;
}

console.log(corSite);
resetarCorC("Vermelho","Escuro");
console.log(corSite);

