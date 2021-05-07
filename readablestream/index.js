const fs = require('fs');

const readableStream  = fs.createReadStream('./readablestream/article.txt', {
    highWaterMark: 10
});


readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
         // catch the error when the chunk cannot be read.\
         if(error) {
            console.log(`Tidak ada file ${erro}`);
         }
    }
});

readableStream.on('end', () => {
    console.log('Done');
});

/**OUTPUT
 [Stream di ][Node.js
 ][
Teknik s][tream meru][pakan sala][h satu kon][sep fundam][ental yang][ mendukung][ aplikasi ][Node.js be][kerja. Tek][nik ini da][pat menang][ani kasus ][baca tulis][ berkas, k][omunikasi ][jaringan, ][atau beban][ kerja apa][pun agar d][apat berja][lan dengan][ lebih efi][sien.][null]Done
 */