//TODO 1
const {EventEmitter} = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}`);
}

//TODO
myEmitter.on('birthday', birthdayEventListener)

myEmitter.emit('birthday', {name: 'Maulana'});