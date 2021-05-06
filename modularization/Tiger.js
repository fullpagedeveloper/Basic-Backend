class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
      }   

    growl() {
        console.log('grrrrr!');
    }
}

//TODO1
module.exports = Tiger;