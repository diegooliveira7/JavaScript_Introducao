// Velocidade máxima de até 70
// A cada 5Km acima do limite você ganha 1 ponto
// Math.Floor(parametro) arredondar os valores
//  Caso os pontos sejam maior que 12 carteira suspença

let a = verificarVelocidade(74);

console.log(a);

function verificarVelocidade(velo){
    if(velo <= 70)
        return 'Velocidade certa';

    velo = Math.floor(velo);

    velo = velo - 70;

    if(velo>5){
        let quant = Math.floor(velo/5);
        if(quant > 12){
            return 'Carteira Suspença';
        }
        return 'Pontos perdidos: '+ quant;
    }
    
    return velo;
}