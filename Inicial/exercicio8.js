

exibirAste(10);

function exibirAste(amount){
    let ast = '';
    for (let i = 0; i <= amount; i++) {
        console.log('*'+ast);
        ast = '*' + ast;
    }
}


