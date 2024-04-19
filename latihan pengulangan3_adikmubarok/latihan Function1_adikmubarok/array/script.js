const arr = [3, 5, 7, 9, 11];

// lenght = menampilkan jumlah isi dari array 
console.log (arr. length) // 5

// join menggabungkan isi array menjadi string
const word = ['K', 'A','T', 'A', 'K']
const word2 = ["SELAMAT", "DATANG", "DI", "BLK"]
console.log(word.join(" "));
console.log(word2. join(" "));

// push = menambahkan elemen array di bagian terakhir 
arr.push (13, 15, 17)
word.push("B", "E", "R", "A", "C", "U", "N");
word2.push("KARAWANG");

console.log(arr);
console.log(word.join("") + "\n" + word2.join (" "));

// pop = menggapus elemen terakhir array
arr.pop ()
console.log(arr)
// unshift = menambahkan elemen di awal array
//[1, 3, 5, 7, 9, 11, 13, 15]

// shift = menghapus elemen pertama di array
word.shift()
console.log(0)

// slice (idxAwal, idAkhir)
const siswa = ["MAULANA" , "NAUFAL" , "FAISAL", "TOPIK", "RIAN"];
// slice = akan menghasilkan array baru
const siswa2 = siswa.slice (2,5);
console.log(siswa2);

// splice = menisipkan elemen di index tertentu
// splice = (idxAwal , mau di hapus berapa , elemen ,elemen2, ....)

siswa.splice(2,0, "yudha", "jabbar", "dani");
console.log(siswa)

//foreach = sama kaya perulangan "for"
const nilai = [70, 75, 82, 65, 58];

nilai.forEach(function  (e,i ) {
    console.log("index ke"- + i +" = " + e)
});

// sort = mengurutkan array
console.log(nilai.sort ())

// map
const dikalidua = nilai.map(function (e){
    return e * 2;
});

console.log(dikalidua)

// filter & find
const bilanganbulat = [2, 3, 4, 7, 6, 9, 11, 8]

const bilbul = bilanganbulat.filter(function (e){
    return e > 5;
});

console.log(bilbul);
console.log(bilbul2);