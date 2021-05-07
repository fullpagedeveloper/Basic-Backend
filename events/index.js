const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();

//dipisah
// fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// const makeBill = ({price}) => {
//     console.log(`Bill sebesar ${price} telah dibuat`);
// }

//==== kalo dibagung parameternya tidak menggunakan {}
const makeCoffee = ( name ) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat`);
}

//=======================================
// digabung
/**
 Atau Anda bisa membuat satu fungsi khusus untuk menangani event. Biasanya fungsi ini memiliki nama ‘handler’ atau ‘listener’ pada akhir penamaanya.
 */
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
//=============================================
//dipisah
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
//myEventEmitter.on('coffee-order', makeCoffee);
//mendaftarkan lebih dari satu fungsin listerner pada sebuah event menggunakan fungsin on
//myEventEmitter.on('coffee-order', makeBill);


// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 15000 });