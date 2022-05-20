const eventBus = require('./eventBus');

let firstHelloUnsubscribe =  eventBus.subscribe('say-hello', (name, secondName) => console.log('Hello 1 '  + name + ' ' + secondName))
let secondHelloUnsubscribe = eventBus.subscribe('say-hello', (name) => console.log('Hello 2 ' + name))
eventBus.subscribe('say-bye', (name) => console.log('Bye 2 '))




//pub
eventBus.publish('say-hello', 'pesho', 'peshev')

firstHelloUnsubscribe();
secondHelloUnsubscribe();

eventBus.publish('say-hello', 'gosho')
eventBus.publish('say-bye', 'gosho')


eventBus.publish('say-hello', 'Stamat', 'Mariq')