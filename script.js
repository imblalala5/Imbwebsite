function tampilkanSpesifikasi(kamera) {
    const spesifikasi = {
        'Nikon D5200': 'Spesifikasi Nikon D5200: 24.1 MP APS-C CMOS Rentang ISO: 100-6400 (dapat diperluas hingga 25600) Titik Autofokus: Sistem AF 39 titik Kecepatan Pemotretan Beruntun: 5 fps Video: 1080p pada 30/25/24 fps LCD: 3 inci, 921.000 titik, layar putar',
        'Canon EOS 700D': 'Spesifikasi Canon EOS 700D: 18 MP, Sensor: 18 MP APS-C CMOS Rentang ISO: 100-12800 (dapat diperluas hingga 25600) Titik Autofokus: Sistem AF 9 titik Kecepatan Pemotretan Beruntun: 5 fps Video: 1080p pada 30/25/24 fps LCD: 3 inci, 1.040.000 titik, layar sentuh putar',
        // Tambahkan lebih banyak spesifikasi sesuai kebutuhan
    };
    document.getElementById('konten-spesifikasi').innerText = spesifikasi[kamera] || 'Spesifikasi tidak ditemukan.';
}
