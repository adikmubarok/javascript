const bulan = prompt("masukkan nama bulan :");
let nama_bulan;
switch (bulan){
  case " 1 ":
  nama_bulan = "januari" ;
  break;
  case "2":
  nama_bulan ="februari";
    break;
    case "3":
    nama_bulan ="maret";
      break;
      case "4":
    nama_bulan = "april";
        break;
        case "5":
    nama_bulan = "mei";
         break;
         case "6":
    nama_bulan = "juni";
         break;
         case "7":
         nama_bulan = "juli";
         break;
         case "8":
         nama_bulan = "agustus";
         break;
         case "9":
         nama_bulan = "september";
         break;
         case "10":
         nama_bulan = "oktober";
         break; 
         case "11":
         nama_bulan = "november";
         break;
         case "12":
         nama_bulan = "desember";
         break;
         default:

}  
         console.log("bulan ke " + bulan+ " adalah " + nama_bulan)