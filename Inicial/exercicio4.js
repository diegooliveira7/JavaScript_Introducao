//Par ou impa


let a = Paridade(190);

console.log(a);

function Paridade(value){
    if(value > 0){
        if(value % 2 === 0){
            return 'Par';
        }
        return 'Inpá';
    }
    return 'Par';
}

