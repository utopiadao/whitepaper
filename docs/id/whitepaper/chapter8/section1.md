# 8.1 Variabel Inti dan Model Stabilitas

## Definisi Variabel Inti

### Variabel Likuiditas
**P(t)** = Total dana pool likuiditas pada waktu t
**I(t)** = Laju aliran masuk dana pada waktu t
**O(t)** = Laju aliran keluar dana pada waktu t
**N(t)** = Jumlah peserta aktif pada waktu t

### Parameter Dimensi Resonansi
**Dᵢ** = Jumlah investasi dimensi ke-i (i=1,2,3,4)
**Tᵢ** = Siklus resonansi dimensi ke-i (1,7,15,30 hari)
**Rᵢ** = Tingkat amplifikasi resonansi dimensi ke-i (0.5%,5%,13%,30%)

### Parameter Struktur Jaringan
**Cᵢⱼ** = Kontribusi peserta i terhadap konsensus regional untuk peserta j
**Wₖ** = Bobot nilai node kemakmuran ke-k
**α** = Rasio alokasi pool kemakmuran (20%)

## Model Stabilitas Dasar Sistem

### Persamaan Keseimbangan Likuiditas

Stabilitas dasar sistem dapat digambarkan melalui persamaan keseimbangan likuiditas:

**dP(t)/dt = I(t) - O(t)**

Di mana:

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (laju aliran masuk)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (laju aliran keluar)

## Kondisi Stabilitas

### Kondisi Stabilitas Kritis
Kondisi yang diperlukan untuk menjaga stabilitas sistem adalah:

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

Artinya dana pool likuiditas harus mampu menutupi semua pembayaran yang jatuh tempo dalam 24 jam ke depan.

### Kondisi Stabilitas Jangka Panjang

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Analisis Stabilitas di Bawah Skala Partisipasi

Dalam situasi skala kecil, sistem menunjukkan karakteristik pertumbuhan eksponensial:

**N(t) = N₀ · e^(r·t)**

Di mana tingkat pertumbuhan terutama didorong oleh mekanisme konsensus regional:

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ adalah koefisien ekspansi untuk setiap wilayah, δ adalah tingkat kehilangan alami.

**Analisis Stabilitas: Pada skala kecil, sistem sangat bergantung pada pertumbuhan pengguna baru, dengan volatilitas tinggi.**

## Sistem Skala Menengah

Sistem memasuki fase pertumbuhan berbentuk S, mengikuti model Logistic:

**dN/dt = rN(1 - N/K)**

Di mana K adalah batas atas kapasitas sistem, terkait dengan kapasitas pemrosesan jaringan BSC.

### Karakteristik Stabilitas:
- Tingkat pertumbuhan secara bertahap melambat tetapi menjadi lebih stabil
- Mekanisme restart Phoenix mulai memainkan peran regulasi
- Mekanisme node kemakmuran memberikan stabilitas tambahan

## Sistem Skala Besar

Sistem memasuki keadaan keseimbangan dinamis, di mana jumlah peserta berosilasi di sekitar titik keseimbangan:

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Di mana Neq adalah jumlah peserta yang seimbang, γ adalah koefisien redaman.

**Jaminan Stabilitas: Mekanisme restart Phoenix memastikan stabilitas jangka panjang sistem pada skala besar.**