// Data transaksi
let transaksiData = {
  totalBarang: 0,
  totalPenjualan: 0
};

// Data produk
const produkData = [
  { nama: 'Paracetamol 500mg', harga: 5000 },
  { nama: 'Amoxicillin 500mg', harga: 25000 },
  { nama: 'Vitamin C 1000mg', harga: 15000 },
  { nama: 'Antasida', harga: 8000 },
  { nama: 'Obat Batuk Herbal', harga: 12000 }
];

// ========================================
// FUNGSI NAVIGASI
// ========================================

function scrollToSection(sectionId) {
  // Tutup halaman kasir dan laporan jika sedang terbuka
  tutupKasir();
  tutupLaporan();
  
  // Scroll ke section yang dipilih
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Mencegah default behavior dari anchor link
  event.preventDefault();
}

// ========================================
// FUNGSI PROMO (Versi Apotek)
// ========================================

function tampilPromo() {
  alert(
    "🎉 PROMO SPESIAL APOTEK 🎉\n\n" +
    "Vitamin C 1000mg Diskon 20%!\n" +
    "Paracetamol Buy 2 Get 1!\n\n" +
    "Hubungi kami:\nWA: 0812-3456-7890"
  );
}

// ========================================
// FUNGSI KASIR
// ========================================

function tampilkanKasir() {
  // Sembunyikan semua halaman terlebih dahulu
  document.querySelector('.main-content').style.display = 'none';
  document.getElementById('laporan-container').style.display = 'none';
  
  // Tampilkan halaman kasir
  document.getElementById('kasir-container').style.display = 'block';
  
  // Scroll ke bagian atas kasir
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function tutupKasir() {
  // Sembunyikan halaman kasir
  document.getElementById('kasir-container').style.display = 'none';
  
  // Tampilkan konten utama
  document.querySelector('.main-content').style.display = 'block';
}

function pilihProduk(nama, harga) {
  document.getElementById('barang').value = nama;
  document.getElementById('harga').value = harga;
  hitungTotal();
}

function hitungTotal() {
  let qty = parseFloat(document.getElementById("qty").value) || 0;
  let harga = parseFloat(document.getElementById("harga").value) || 0;
  let total = qty * harga;
  document.getElementById("hasil").innerText = "Rp " + total.toLocaleString();
}

// Event listener untuk input qty dan harga
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('qty').addEventListener('input', hitungTotal);
  document.getElementById('harga').addEventListener('input', hitungTotal);
});

function prosesTransaksi() {
  let nama = document.getElementById("nama").value;
  let barang = document.getElementById("barang").value;
  let qty = parseFloat(document.getElementById("qty").value) || 0;
  let harga = parseFloat(document.getElementById("harga").value) || 0;

  if (!nama || !barang || qty <= 0 || harga <= 0) {
    alert("⚠️ Data belum lengkap!\nHarap isi semua data dengan benar.");
    return;
  }

  let total = qty * harga;
  
  // Update data transaksi
  transaksiData.totalBarang += qty;
  transaksiData.totalPenjualan += total;
  
  // Update tampilan total
  document.getElementById("hasil").innerText = "Rp " + total.toLocaleString();
  
  alert("✅ Transaksi berhasil diproses! Silakan cetak struk jika diperlukan.");
}

function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("barang").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("hasil").innerText = "Rp 0";
}

// ========================================
// FUNGSI CETAK STRUK
// ========================================

function tampilkanStruk() {
  let nama = document.getElementById("nama").value;
  let barang = document.getElementById("barang").value;
  let qty = document.getElementById("qty").value;
  let harga = document.getElementById("harga").value;

  if (!nama || !barang || !qty || !harga) {
    alert("⚠️ Data belum lengkap!\nHarap isi semua data sebelum mencetak struk.");
    return;
  }

  let total = parseFloat(qty) * parseFloat(harga);

  // Isi data struk
  document.getElementById('struk-nama').innerText = nama;
  document.getElementById('struk-barang').innerText = barang;
  document.getElementById('struk-qty').innerText = qty;
  document.getElementById('struk-harga').innerText = "Rp " + parseFloat(harga).toLocaleString();
  document.getElementById('struk-total').innerText = "Rp " + total.toLocaleString();

  // Tampilkan popup
  document.getElementById('popup-overlay').style.display = 'flex';
}

function tutupPopupStruk() {
  document.getElementById('popup-overlay').style.display = 'none';
}

function cetakStruk() {
  window.print();
}

// ========================================
// FUNGSI LAPORAN
// ========================================

function tampilkanLaporan() {
  // Sembunyikan semua halaman terlebih dahulu
  document.querySelector('.main-content').style.display = 'none';
  document.getElementById('kasir-container').style.display = 'none';
  
  // Update data laporan
  document.getElementById('totalBarang').innerText = transaksiData.totalBarang.toLocaleString();
  document.getElementById('totalPenjualan').innerText = transaksiData.totalPenjualan.toLocaleString();
  
  // Tampilkan halaman laporan
  document.getElementById('laporan-container').style.display = 'block';
  
  // Scroll ke bagian atas laporan
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function tutupLaporan() {
  // Sembunyikan halaman laporan
  document.getElementById('laporan-container').style.display = 'none';
  
  // Tampilkan konten utama
  document.querySelector('.main-content').style.display = 'block';
}

// ========================================
// FUNGSI NAVIGASI
// ========================================

function scrollToSection(sectionId) {
  // Tutup halaman kasir dan laporan jika sedang terbuka
  tutupKasir();
  tutupLaporan();
  
  // Scroll ke section yang dipilih
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Mencegah default behavior dari anchor link
  event.preventDefault();
}

// ========================================
// FUNGSI PROMO (Versi Apotek)
// ========================================

function tampilPromo() {
  alert(
    "🎉 PROMO SPESIAL APOTEK 🎉\n\n" +
    "Vitamin C 1000mg Diskon 20%!\n" +
    "Paracetamol Buy 2 Get 1!\n\n" +
    "Hubungi kami:\nWA: 0812-3456-7890"
  );
}

// ========================================
// INISIALISASI
// ========================================

window.onload = function () {
  // Tidak perlu menampilkan halaman tertentu karena sudah menggunakan scroll
};
