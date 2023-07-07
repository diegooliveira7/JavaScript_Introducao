//A promises é uma forma de executar código de forma assincrona (Simultaneamente)
//O JS é sincrono, quer dizer que ele vai executar o código de forma sequencial


//Aqui é uma solução sem promises
function sunNumber() {
    let result = 1 + 1;

    if (result == 2) {
        sucessCallBack();
    } else {
        errorCallBack();
    }
}

function sucessCallBack() {
    console.log("Yes, number 2");
}

function errorCallBack() {
    console.log("Ops! Something wrong");
}


sunNumber();

//Resolvendo com promises

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Sucess');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('Yes, number 2 ' + message);
}).catch((err) => {
    console.log("Ops! Something wrong " + err);
});

// Outra forma usual

const betterDeveloper = '';

function BetterDeveloperCallBack() {
    return new Promise((resolve, reject) => {
        if (betterDeveloper != 'Diego') {
            reject({
                name: 'This is wrong',
                message: betterDeveloper
            });
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs'
            });
        }
    });
}

whoIsBetter()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
