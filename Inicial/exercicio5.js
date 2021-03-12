

const film = {
    titulo : 'Bela Vingança',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Clark'
}

exibirpropriedade(film);

function exibirpropriedade(obj){
    for(atributo in obj){
        if(typeof obj[atributo] === 'string'){//Aqui é a instancia que está no objeto
            console.log("String: "+atributo);//Dessa forma o atributo é o nome do atributo e não o objeto
        }
    }
}





