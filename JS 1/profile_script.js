//deklarasi variabel
let myName = "Nadila Syofrotin Nisa";
const myAge = 17;

document.getElementsById("info-diri").innerHTML = "Hallo, saya " + myName;

document.getElementById("info-diri").innerHTML =
"Saya berusia " + myAge + " tahun dan sangat suka belajar pemrograman.";

function showAlert() {
    alert("Anda telah mengklik tombol!");
}