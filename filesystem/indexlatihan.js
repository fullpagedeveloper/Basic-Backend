const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca data');
        return;
    }
    console.log(data);
};

//fs.readFile('filesystem/notes.txt', 'UTF-8', fileReadCallback);
/**
Tips: Anda bisa gunakan method
path.resolve(__dirname, 'notes.txt');
Dari core modules path dalam menetapkan alamat berkas secara lengkap dan dinamis.
 */

fs.readFile('filesystem/notes.txt', 'UTF-8', fileReadCallback);