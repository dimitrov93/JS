let prom = new Promise(function (resolve,reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Nice')
        } else {
            reject('Not good')
        }
    }, 3000)
});
prom.then((ok) => {
    console.log(ok);
});

prom.catch((notok) => {
    console.log(notok);
})