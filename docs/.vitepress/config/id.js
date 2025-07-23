export const id = {
  title: 'Buku Putih Utopia',
  description: 'Jaringan Kekayaan Bebas Konsensus: Ekosistem Aliran Nilai yang Berevolusi Mandiri',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Pemilihan 36 Node Genesis', link: '/id/awakening/' },
      { text: 'Buku Putih', link: '/id/whitepaper/' },
      { text: 'Model Ekonomi', link: '/id/economics/' }
    ],

    sidebar: {
      '/id/whitepaper/': [
        {
          text: 'Kata Pengantar',
          link: '/id/whitepaper/'
        },
        {
          text: 'Bab 1: Pemikiran Filosofis tentang Kebebasan Kekayaan',
          link: '/id/whitepaper/chapter1/'
        },
        {
          text: 'Bab 2: Kelahiran Utopia',
          link: '/id/whitepaper/chapter2/'
        },
        {
          text: 'Bab 3: Sistem Kolam Resonansi',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter3/' },
            { text: '3.1 Dasar Filosofis Kolam Resonansi', link: '/id/whitepaper/chapter3/section1' },
            { text: '3.2 Struktur Resonansi Empat Dimensi', link: '/id/whitepaper/chapter3/section2' },
            { text: '3.3 Prinsip Amplifikasi Resonansi', link: '/id/whitepaper/chapter3/section3' },
            { text: '3.4 Proses Resonansi', link: '/id/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Bab 4: Jaringan Konsensus Regional',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter4/' },
            { text: '4.1 Struktur Bagan Bintang dan Konsensus Dimensional', link: '/id/whitepaper/chapter4/section1' },
            { text: '4.2 Algoritma Konsensus Nilai dan Peta Bintang', link: '/id/whitepaper/chapter4/section2' },
            { text: '4.3 Filosofi Jaringan dan Praktek Teknis', link: '/id/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Bab 5: Sistem Node Kemakmuran',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter5/' },
            { text: '5.1 Sifat dan Seleksi Node Kemakmuran', link: '/id/whitepaper/chapter5/section1' },
            { text: '5.2 Berbagi Galaksi dan Distribusi Nilai', link: '/id/whitepaper/chapter5/section2' },
            { text: '5.3 Mesin Kemakmuran dan Keseimbangan Dinamis', link: '/id/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Bab 6: Mekanisme Restart Phoenix',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter6/' },
            { text: '6.1 Filosofi dan Mekanisme Pemicu Restart Phoenix', link: '/id/whitepaper/chapter6/section1' },
            { text: '6.2 Desain Proses Kelahiran Kembali Phoenix', link: '/id/whitepaper/chapter6/section2' },
            { text: '6.3 Analisis Prinsip Ekonomi', link: '/id/whitepaper/chapter6/section3' },
            { text: '6.4 Mekanisme Penghargaan Kemakmuran Berkelanjutan', link: '/id/whitepaper/chapter6/section4' },
            { text: '6.5 Analisis Teori Permainan dan Makna Utama', link: '/id/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Bab 7: Kontrak Pintar yang Didorong Informasi',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter7/' },
            { text: '7.1 Desain Arsitektur dan Konsep', link: '/id/whitepaper/chapter7/section1' },
            { text: '7.2 Mesin Pra-komputasi dan Mekanisme Keamanan', link: '/id/whitepaper/chapter7/section2' },
            { text: '7.3 Interaksi Pengguna dan Desentralisasi', link: '/id/whitepaper/chapter7/section3' },
            { text: '7.4 Transparansi dan Ringkasan Teknis', link: '/id/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Bab 8: Pemodelan Matematika',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter8/' },
            { text: '8.1 Variabel Inti dan Model Stabilitas', link: '/id/whitepaper/chapter8/section1' },
            { text: '8.2 Efek Jaringan dan Keseimbangan Dinamis', link: '/id/whitepaper/chapter8/section2' },
            { text: '8.3 Algoritma Phoenix dan Tes Stres', link: '/id/whitepaper/chapter8/section3' },
            { text: '8.4 Teori Ekonomi dan Kesimpulan', link: '/id/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Bab 9: Klarifikasi Kesalahpahaman Umum',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/chapter9/' },
            { text: '9.1 Kesalahpahaman 1: Utopia adalah Skema Ponzi', link: '/id/whitepaper/chapter9/section1' },
            { text: '9.2 Kesalahpahaman 2: Pengembalian Tinggi Tidak Realistis', link: '/id/whitepaper/chapter9/section2' },
            { text: '9.3 Kesalahpahaman 3: Sistem Terlalu Kompleks untuk Pengguna Biasa', link: '/id/whitepaper/chapter9/section3' },
            { text: '9.4 Kesalahpahaman 4: Konsensus Regional adalah Skema Piramida', link: '/id/whitepaper/chapter9/section4' },
            { text: '9.5 Kesalahpahaman 5: Phoenix Restart adalah Cacat Desain Sistem', link: '/id/whitepaper/chapter9/section5' },
            { text: '9.6 Kesalahpahaman 6: Smart Contract Memiliki Risiko Teknis', link: '/id/whitepaper/chapter9/section6' },
            { text: '9.7 Kesalahpahaman 7: Risiko Regulasi Terlalu Tinggi', link: '/id/whitepaper/chapter9/section7' },
            { text: '9.8 Kesalahpahaman 8: Model ekonomi tidak berkelanjutan', link: '/id/whitepaper/chapter9/section8' },
            { text: '9.9 Kesalahpahaman 9: Tim mungkin kabur', link: '/id/whitepaper/chapter9/section9' },
            { text: '9.10 Kesalahpahaman 10: Hanya peserta awal yang mendapat manfaat', link: '/id/whitepaper/chapter9/section10' },
            { text: '9.11 Kesimpulan: Kognisi Rasional dan Pilihan Bijak', link: '/id/whitepaper/chapter9/section11' },
            { text: '9.12 Lampiran: Panduan Verifikasi Teknis', link: '/id/whitepaper/chapter9/section12' },
            { text: '9.13 Alat Verifikasi Komunitas', link: '/id/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Bab 10: Kesimpulan - Benih Pemikiran',
          link: '/id/whitepaper/chapter10/'
        },
        {
          text: 'Bab 11: Lampiran',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/id/whitepaper/appendix/' },
            { text: '11.1 Glosarium Konsep Inti', link: '/id/whitepaper/appendix/section1' },
            { text: '11.2 Parameter Sistem dan Materi Referensi', link: '/id/whitepaper/appendix/section2' },
            { text: '11.3 Perbandingan Terminologi dan Ucapan Terima Kasih', link: '/id/whitepaper/appendix/section3' },
            { text: '11.4 Penyangkalan dan Partisipasi', link: '/id/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/id/economics/': [
        {
          text: 'Model Ekonomi',
          items: [
            { text: 'Rincian Model Ekonomi', link: '/id/economics/' }
          ]
        }
      ]
    },

    // Teks antarmuka Indonesia
    outlineTitle: 'Daftar Isi',
    docFooter: {
      prev: 'Halaman sebelumnya',
      next: 'Halaman selanjutnya'
    },
    darkModeSwitchLabel: 'Tampilan',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas'
  }
}