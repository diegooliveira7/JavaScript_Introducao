

printNumberPri(12);

function printNumberPri(amount){
    
    for (let i = 0; i <= amount; i++) {
        if(i > 2){
            if(i % 2 !== 0){
                let number = 0;
                for (let j = 2; j < i; j++) {
                    if(i % j === 0)
                        number = 1;
                        break;
                }
                if(number == 0){
                    console.log(i);
                }
            }
        }else{
            console.log(i);
        }
        
    }

}

