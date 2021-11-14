function cats(arr) {
    let cat = [];
    class Cat{
        constructor(name,age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            } 
        }
    }
    
    for (let currentSTring of arr) {
        let currentDate = currentSTring.split(" ");
        let [name,age] = [currentDate[0],currentDate[1]];
        cat.push(new Cat(name,age))
    }
    cat.forEach( c => c.meow())
}

cats(['Mellow 2', 'Tom 5'])