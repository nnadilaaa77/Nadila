function cekNilai() {
    //ambil elemen input
    const inputNilai = document.getElementById('nilaiSiswa');
    const nilai = Number(inputNilai.value);

    //nilai dari input dikonversikan ke tipe number
    const hasilElement = document.getElementById('hasilGrade');

    let hasil; //variabel menyimpan hasil grade

    //if else utk menentukan grade
    if (nilai >= 90 && nilai <= 100) {
         hasil = "A (Sangat Baik)";
    } else if (nilai >= 80 && nilai <= 89) {
         hasil = "B (Baik)";
    } else if (nilai >- 70 && nilai <= 79) {
         hasil = "C (Cukup)";
    } else if (nilai >- 60 && nilai <= 69) {
         hasil = "D (Kurang)";
    } else if (nilai >- 0 && nilai <= 59) {
         hasil = "G (Gagal)";
    } else {
         hasil = 'Nilai tidak valid. Masukkan nilai antara 0-100.';
    }

    hasilElement.textContent = hasil;
}