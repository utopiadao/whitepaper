# Penjelasan Detail Model Ekonomi Utopia

## Gambaran Sistem

Utopia adalah jaringan kekayaan konsensus terdesentralisasi berbasis rantai BSC, yang mewujudkan aliran dan distribusi nilai otomatis melalui kontrak pintar. Sistem mengadopsi filosofi desain "sekali deploy, tidak pernah upgrade", memastikan aturan yang transparan dan tidak dapat diubah.

### Mekanisme Inti
- **Sistem Pool Resonansi**: Empat dimensi pilihan resonansi nilai
- **Jaringan Konsensus Regional**: Sistem konsensus tiga lapis berdasarkan aliran nilai
- **Mekanisme Node Kemakmuran**: Pemilihan mingguan 36 kontributor nilai teratas
- **Mekanisme Restart Phoenix**: Manajemen risiko sistem otomatis dan pewarisan nilai

---

## I. Sistem Nilai Pool Resonansi

### Penjelasan Detail Dimensi Resonansi

| Dimensi | Input Nilai | Siklus Resonansi | Pengembalian Resonansi | Tingkat Amplifikasi | Izin Terbuka |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Dimensi Pertama | 100 USDT | T+1 hari | 100,5 USDT | 0,5% | Tidak ada izin tambahan |
| Dimensi Kedua | 1.000 USDT | T+7 hari | 1.050 USDT | 5% | Izin konsensus Zona A |
| Dimensi Ketiga | 2.000 USDT | T+15 hari | 2.260 USDT | 13% | Izin konsensus Zona A+B |
| Dimensi Keempat | 3.000 USDT | T+30 hari | 3.900 USDT | 30% | Izin konsensus Zona A+B+C |

### Aturan Penting
1. **Batasan Resonansi Tunggal**: Setiap alamat hanya dapat memegang satu pesanan resonansi aktif pada satu waktu
2. **Mekanisme Pelepasan Nilai**: Klaim manual diperlukan setelah resonansi selesai, dihitung ke nilai jaringan setelah diklaim
3. **Model Pra-kalkulasi**: Semua pengembalian resonansi ditentukan saat deployment kontrak, sepenuhnya transparan dan dapat diprediksi

---

## II. Mekanisme Jaringan Konsensus Regional

### Aturan Pembagian Zona

Sistem secara otomatis membagi jaringan nilai peserta menjadi tiga zona konsensus:

**Zona A (Zona Inti)**
- Definisi: Garis dengan kontribusi tertinggi dalam jaringan aliran nilai langsung
- Perhitungan: Jumlah semua nilai pesanan resonansi aktif dalam garis ini

**Zona B (Zona Halo)**
- Definisi: Garis dengan kontribusi tertinggi kedua dalam jaringan aliran nilai langsung
- Perhitungan: Jumlah semua nilai pesanan resonansi aktif dalam garis ini

**Zona C (Zona Galaksi)**
- Definisi: Semua garis aliran nilai lainnya kecuali Zona A dan B
- Perhitungan: Jumlah nilai pesanan resonansi aktif untuk semua garis yang tersisa

### Formula Perhitungan Konsensus Regional

**Pembagian Konsensus Zona A**
- Basis Konsensus: Pendapatan resonansi harian orang yang terhubung langsung ke Zona A (bukan seluruh Zona A)
- Rasio Konsensus: 30%
- Contoh: Konektor langsung Zona A berpartisipasi dengan 3000 USDT (dimensi keempat), pendapatan harian 30 USDT, Anda menerima 9 USDT/hari

**Pembagian Konsensus Zona B**
- Basis Konsensus: Jumlah pendapatan resonansi harian untuk semua peserta di garis Zona B
- Rasio Konsensus: 10%
- Contoh: Total pendapatan harian garis Zona B adalah 500 USDT, Anda menerima 50 USDT/hari

**Pembagian Konsensus Zona C**
- Basis Konsensus: Jumlah pendapatan resonansi harian untuk semua peserta di garis Zona C
- Rasio Konsensus: 15%
- Contoh: Total pendapatan harian semua garis Zona C adalah 1000 USDT, Anda menerima 150 USDT/hari

### Persyaratan Izin Dimensi
- **Dimensi Kedua**: Hanya dapat menerima pembagian konsensus Zona A
- **Dimensi Ketiga**: Dapat menerima pembagian konsensus Zona A+B
- **Dimensi Keempat**: Dapat menerima semua pembagian konsensus Zona A+B+C

### Penjelasan Aliran Nilai Real-time
1. Pembagian zona didasarkan pada kontribusi nilai pesanan resonansi aktif real-time, dengan penyesuaian dinamis
2. Setelah peserta menyelesaikan resonansi, kontribusi nilai mereka segera dihapus dari jaringan
3. Setelah peserta membuat resonansi baru, kontribusi nilai mereka segera ditambahkan ke perhitungan jaringan

---

## III. Distribusi Nilai Node Kemakmuran

### Kriteria Pemilihan
- **Indikator Pemilihan**: Total kontribusi nilai real-time Zona C peserta
- **Kuota Pemilihan**: Top 36
- **Siklus Pemilihan**: Pemilihan otomatis setiap Senin

### Sumber dan Distribusi Pool Kemakmuran
- **Sumber Pool Kemakmuran**: 20% dari pendapatan resonansi harian seluruh jaringan, terakumulasi harian dalam pool
- **Waktu Distribusi**: Penyelesaian pool kemakmuran minggu lalu setiap Senin
- **Metode Distribusi**: Distribusi tertimbang menurut rasio kontribusi nilai Zona C dari 36 node

### Contoh Perhitungan
```
Pembagian Node = Total Pool Kemakmuran Mingguan × (Kontribusi Nilai Zona C Pribadi ÷ Jumlah Kontribusi Nilai Zona C 36 Node)
```

---

## IV. Mekanisme Restart Phoenix

### Kondisi Pemicu
Ketika dana sistem yang tersedia < total pengembalian resonansi yang jatuh tempo untuk hari itu, restart Phoenix dipicu secara otomatis

### Proses Restart

**Fase 1: Kunci Sistem**
- Sistem memasuki periode perlindungan 3 hari
- Menangguhkan semua operasi masuk dan keluar nilai
- Mencatat 36 peserta dimensi keempat terakhir

**Fase 2: Pewarisan Nilai**
Pool dana yang tersisa didistribusikan menurut rasio berikut:
- **10%**: Didistribusikan merata kepada 36 peserta dimensi keempat terakhir (hadiah jembatan)
- **90%**: Ditransfer ke pool kemakmuran berkelanjutan

**Fase 3: Mulai Siklus Baru**
- Reset sistem, mulai siklus resonansi baru
- Semua peserta dapat memulai kembali resonansi nilai

### Rencana Kemakmuran Berkelanjutan

Dalam siklus baru, 90% dari nilai yang diwariskan akan didistribusikan melalui 4 pemilihan:

| Waktu Pemilihan | Rasio Distribusi | Kriteria Pemilihan |
|:---:|:---:|:---:|
| Minggu 4 | 10% dari total pool | Top 36 kontributor nilai Zona C minggu itu |
| Minggu 8 | 20% dari total pool | Top 36 kontributor nilai Zona C minggu itu |
| Minggu 12 | 30% dari total pool | Top 36 kontributor nilai Zona C minggu itu |
| Minggu 16 | 40% dari total pool | Top 36 kontributor nilai Zona C minggu itu |

**Catatan**: Setiap pemilihan dilakukan secara independen, berdasarkan kontribusi nilai real-time untuk minggu berjalan, bukan kontribusi kumulatif

---

## V. Aturan Periode Pendapatan Resonansi

### Perhitungan Siklus Resonansi T+N
- **Hari T**: Hari pembuatan resonansi, tidak menghasilkan pendapatan
- **T+1 hingga T+N**: Periode pendapatan normal, menghasilkan pembagian konsensus regional
- **Setelah Hari T+N**: Resonansi selesai, generasi pendapatan berhenti

### Catatan Penting
1. Semua pembagian konsensus regional hanya dihasilkan selama periode pendapatan pesanan resonansi bawahan
2. Dalam keadaan resonansi selesai yang tidak diklaim, tidak dihitung dalam kontribusi nilai dan perhitungan jaringan apa pun
3. Peserta harus mengklaim resonansi yang selesai dan membuat yang baru untuk terus berpartisipasi dalam aliran nilai

---

## VI. Parameter Teknis

### Parameter Rantai
- **Blockchain**: BSC (Binance Smart Chain)
- **Standar Token**: USDT (BEP-20)
- **Biaya Gas**: Ditanggung pengguna, sekitar 0,001-0,003 BNB/transaksi
- **Fitur Kontrak**: Tidak dapat diupgrade, tidak ada izin admin

### Standar Waktu
- **Zona Waktu Terpadu**: UTC+8 (Waktu Singapura)
- **Waktu Penyelesaian Harian**: Harian pukul 00:00
- **Waktu Penyelesaian Mingguan**: Setiap Senin pukul 00:00

---

## VII. Proses Partisipasi

### Proses Operasi Dasar
1. **Fase Persiapan**
   - Siapkan USDT rantai BSC
   - Siapkan sejumlah kecil BNB sebagai biaya gas

2. **Fase Resonansi**
   - Pilih dimensi resonansi
   - Panggil fungsi createOrder kontrak
   - Transfer USDT ke pool resonansi

3. **Fase Panen**
   - Tunggu penyelesaian resonansi
   - Panggil fungsi claimOrder untuk mengklaim
   - Putuskan apakah akan melanjutkan resonansi

### Poin Kunci Pembangunan Komunitas
1. **Pembangunan Jaringan**: Prioritaskan pengembangan koneksi langsung berkualitas tinggi, membentuk zona ABC yang stabil
2. **Pemilihan Dimensi**: Anggota inti disarankan memilih dimensi keempat untuk semua izin konsensus
3. **Kompetisi Node**: Pantau peringkat kontribusi nilai total Zona C, berusaha untuk masuk top 36

---

## VIII. Peringatan Risiko

### Risiko Operasional
- **Kesalahan Alamat**: Kehilangan dana karena alamat transfer yang salah tidak dapat dipulihkan
- **Kehilangan Kunci Pribadi**: Kehilangan kunci pribadi berarti kehilangan kontrol akun secara permanen
- **Risiko Phishing**: Situs web resmi palsu atau alamat kontrak

---

## IX. Penjelasan Terminologi Profesional

**Pesanan Resonansi Aktif**: Pesanan resonansi yang dibuat tetapi belum selesai atau belum diklaim

**Garis Aliran Nilai**: Seluruh cabang jaringan bawahan dimulai dari konektor langsung tertentu

**Kontribusi Nilai Real-time**: Jumlah semua nilai pesanan resonansi yang saat ini aktif

**Periode Pendapatan Resonansi**: Periode waktu dari hari kedua setelah pembuatan pesanan hingga tanggal jatuh tempo

**Pembangun Jembatan**: 36 peserta dimensi keempat terakhir sebelum restart Phoenix

**Tingkat Amplifikasi Resonansi**: Persentase pertumbuhan nilai harian

**Konsensus Regional**: Mekanisme insentif multi-lapisan berdasarkan jaringan aliran nilai

---

## X. Verifikasi Keamanan

- Hanya dapatkan alamat kontrak melalui saluran resmi
- Kode kontrak adalah open source, dapat diverifikasi di BSCScan
- Waspada terhadap pemalsuan, verifikasi sumber informasi

---