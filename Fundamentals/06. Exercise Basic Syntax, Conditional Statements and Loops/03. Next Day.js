function nextDay(a,b,c) {
    let d = new Date(a,b-1,c+1);
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    console.log(`${year}-${month}-${day}`);
}

nextDay(2016, 9, 30)