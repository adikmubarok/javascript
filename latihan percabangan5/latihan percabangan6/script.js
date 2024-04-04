console.log("menu kalkulator sederhana")
console.log("1. penjumlahan");
console.log("2. pengurangan");
console.log("3. perkalian");
console.log("4. pembagian");
console.log("5. keluar program");

const menu = prompt("masukan angka pada menu 1-5")
const angka1 = parseInt(prompt("Silahkan masukan angka pertama"))
const angka2 = parseInt(prompt("Silahkan masukan angka ke dua"))

console.log("ANGKA PERTAMA :"+angka1)
console.log("ANGKA KEDUA :"+angka2)

let hitung;
switch (menu)

    case "1" :
        hitung = (angka1 + angka2)
        console.log("Hasil dari "+angka1+" + "+angka2+" = "+hitung)
        break;
    case "2":
        hitung = (angka1 - angka2)
        console.log("Hasil dari "+angka1+" - "+angka2+" = "+hitung)
        break;
    case "3":
        hitung = (angka1 * angka2)
        console.log("Hasil dari "+angka1+" * "+angka2+" = "+hitung)
        break;
    case "4":
        hitung = (angka1 / angka2) 
        console.log("Hasil dari "+angka1+" : "+angka2+" = "+hitung)
         break;

     case "5":
        pesan2 = "KELUAR PROGRAM"
        console.log("KELUAR PROGRAM....TERIMAKASIH !")
        break;