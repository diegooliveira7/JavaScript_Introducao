//Outra forma de fazer comparação

let permissao = 'diretor'; //comum, gerente, diretor

switch (permissao){
    case 'comum':
        console.log('usuário comum');
        break;//Sempre tem que ter o break
    
    case 'gerente':
        console.log('usuário gerente');
        break;

    case 'diretor':
        console.log('usuário diretor');
        break;

    default://É para o caso de não entrar em nenhum daqueles itens acima
        console.log('Usuário não reconhecido');
}



