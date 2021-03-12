//Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,80,70];

let a = mediaArray(array); 

console.log(a);

function mediaArray(notas){
    let a = 0;
    for (let i = 0; i < notas.length; i++) {
        a = notas[i] + a;
    }

    const media = Math.floor(a/notas.length);

    if(media <= 59) return 'F';
    if(media <= 69) return 'D';
    if(media <= 79) return 'C';
    if(media <= 89) return 'B';
    return 'A';
    
}