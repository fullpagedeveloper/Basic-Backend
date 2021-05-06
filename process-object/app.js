// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

/**
 Kodingan diatas jika dijalankan jelas tidak akan bekerja karena
kode tersebut hanyalah sebuah contoh untuk menjelaskan konsep yang
dijelaskan pada modul untuk pemanggilan nilai yang tersimpan di NODE_ENV
untuk menentukan config yang digunakan.

Contoh diatas itu adalah penyederhaan kode untuk kasus dimana jika
NODE_ENV tidak bernilai 'production', maka jalankan di localhost.
Tetapi jika iya, maka jalankan dengan domain dicoding.com. Sekali lagi,
jika dicoba di-run maka pasti error karena dia bukan program beneran.
 */

const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);


//=====================
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);