const stempelData = [
/* =============================
   GAGANG PERSEGI PANJANG
============================= */
{
    nama: "Stempel Flash Panjang",
    kode: "G-1340",
    ukuran: "36 × 10 mm",
    harga: "Rp 55.000",
    gambar: "images/stempel/stempel-flash-g1340-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-1355",
    ukuran: "55 × 10 mm",
    harga: "Rp 70.000",
    gambar: "images/stempel/stempel-flash-g1355-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-1767",
    ukuran: "65 × 10 mm",
    harga: "Rp 80.000",
    gambar: "images/stempel/stempel-flash-g1767-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-2255",
    ukuran: "51 × 18 mm",
    harga: "Rp 80.000",
    gambar: "images/stempel/stempel-flash-g2255-ungaran.webp",
    bentuk: "persegi",
    badges: ["laris", "standar"]
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-2267",
    ukuran: "65 × 20 mm",
    harga: "Rp 85.000",
    gambar: "images/stempel/stempel-flash-g2267-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-2767",
    ukuran: "65 × 25 mm",
    harga: "Rp 90.000",
    gambar: "images/stempel/stempel-flash-g2767-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-3267",
    ukuran: "65 × 30 mm",
    harga: "Rp 100.000",
    gambar: "images/stempel/stempel-flash-g2767-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-2778",
    ukuran: "75 × 25 mm",
    harga: "Rp 95.000",
    gambar: "images/stempel/stempel-flash-g2778-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-4355",
    ukuran: "40 × 50 mm",
    harga: "Rp 105.000",
    gambar: "images/stempel/stempel-flash-g4355-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-4378",
    ukuran: "40 × 75 mm",
    harga: "Rp 110.000",
    gambar: "images/stempel/stempel-flash-g4378-ungaran.webp",
    bentuk: "persegi"
  },
  {
    nama: "Stempel Flash Panjang",
    kode: "G-5378",
    ukuran: "50 × 78 mm",
    harga: "Rp 120.000",
    gambar: "images/stempel/stempel-flash-g5378-ungaran.webp",
    bentuk: "persegi"
  },
  /* =============================
   GAGANG OVAL
============================= */
  {
    nama: "Stempel Flash Oval",
    kode: "OV-51",
    ukuran: "48 × 33 mm",
    harga: "Rp 90.000",
    gambar: "images/stempel/stempel-flash-ov51-ungaran.webp",
    bentuk: "oval",
    badges: ["instansi"]
  },
  {
    nama: "Stempel Flash Oval",
    kode: "OV-45",
    ukuran: "40 × 27 mm",
    harga: "Rp 80.000",
    gambar: "images/stempel/stempel-flash-ov45-ungaran.webp",
    bentuk: "oval",
	badges: ["laris", "standar"]
  },
  /* =============================
   GAGANG BULAT
============================= */
  {
    nama: "Stempel Flash Bulat",
    kode: "D-13",
    ukuran: "Ø 13 mm",
    harga: "Rp 50.000",
    gambar: "images/stempel/stempel-flash-d13-ungaran.webp",
    bentuk: "bulat"
  },
  {
    nama: "Stempel Flash Bulat",
    kode: "D-28",
    ukuran: "Ø 28 mm",
    harga: "Rp 70.000",
    gambar: "images/stempel/stempel-flash-d28-ungaran.webp",
    bentuk: "bulat"
  },
  {
    nama: "Stempel Flash Bulat",
    kode: "D-36",
    ukuran: "Ø 35 mm",
    harga: "Rp 80.000",
    gambar: "images/stempel/stempel-flash-d36-ungaran.webp",
    bentuk: "bulat",
	badges: ["laris", "standar"]
  },
  {
    nama: "Stempel Flash Bulat",
    kode: "D-41",
    ukuran: "Ø 40 mm",
    harga: "Rp 90.000",
    gambar: "images/stempel/stempel-flash-d41-ungaran.webp",
    bentuk: "bulat",
	 badges: ["instansi"]
  },
  {
    nama: "Stempel Flash Bulat",
    kode: "D-51",
    ukuran: "Ø 50 mm",
    harga: "Rp 95.000",
    gambar: "images/stempel/stempel-flash-d51-ungaran.webp",
    bentuk: "bulat"
  },
  /* =============================
   GAGANG KOTAK PERSEGI
============================= */
  {
    nama: "Stempel Flash Persegi",
    kode: "G-3535",
    ukuran: "31 × 31 mm",
    harga: "Rp 80.000",
    gambar: "images/stempel/stempel-flash-g3535-ungaran.webp",
    bentuk: "persegi",
	badges: ["laris", "standar"]
  },
  {
    nama: "Stempel Flash Persegi",
    kode: "G-2626",
    ukuran: "22 × 22 mm",
    harga: "Rp 70.000",
    gambar: "images/stempel/stempel-flash-g2626-ungaran.webp",
    bentuk: "persegi"
  },
  /* =============================
   GAGANG KOTAK
============================= */
  {
    nama: "Stempel Flash Gagang Kotak",
    kode: "SC-5517",
    ukuran: "50 × 15 mm",
    harga: "Rp 75.000",
    gambar: "images/stempel/stempel-flash-sc5517-ungaran.webp",
    bentuk: "kotak"
  },
  {
    nama: "Stempel Flash Gagang Kotak",
    kode: "SC-4313",
    ukuran: "40 × 10 mm",
    harga: "Rp 65.000",
    gambar: "images/stempel/stempel-flash-sc4313-ungaran.webp",
    bentuk: "kotak"
  },
  {
    nama: "Stempel Flash Gagang Kotak",
    kode: "SC-3513",
    ukuran: "30 × 10 mm",
    harga: "Rp 65.000",
    gambar: "images/stempel/stempel-flash-sc3513-ungaran.webp",
    bentuk: "kotak",
	badges: ["laris"]
  }
];

const container = document.getElementById("stempelCatalog");

/* =============================
   RENDER KATALOG
============================= */
function renderStempel(filter = "all") {
  container.innerHTML = "";

  stempelData.forEach(item => {

    const matchBentuk = item.bentuk === filter;
    const matchBadge = item.badges && item.badges.includes(filter);

    if (filter !== "all" && !matchBentuk && !matchBadge) return;

    const card = document.createElement("div");
    card.className = "service-card stempel-item";

    const badgeHTML = item.badges
      ? `
        <div class="badge-group">
          ${item.badges.map(badge => {
            if (badge === "laris") {
              return `<span class="product-badge popular">Paling Laris</span>`;
            }
            if (badge === "instansi") {
              return `<span class="product-badge instansi">Standar Instansi</span>`;
            }
            if (badge === "standar") {
              return `<span class="product-badge standar">Ukuran Standar</span>`;
            }
            return "";
          }).join("")}
        </div>
      `
      : "";

    card.innerHTML = `
      <div class="stempel-image-wrap">
        ${badgeHTML}
        <img src="${item.gambar}"
             alt="${item.nama} ${item.ukuran} Ungaran"
             loading="lazy">
      </div>

      <h3>${item.nama}</h3>
      <p><strong>Kode:</strong> ${item.kode}</p>
      <p><strong>Ukuran:</strong> ${item.ukuran}</p>
      <p class="harga">${item.harga}</p>

      <a class="btn btn-primary"
         href="https://wa.me/6289670910156?text=Saya%20ingin%20pesan%20${encodeURIComponent(item.nama)}%20(Kode%20${encodeURIComponent(item.kode)})%20ukuran%20${encodeURIComponent(item.ukuran)}"
         target="_blank">
         Pesan via WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}

/* =============================
   FILTER BUTTON
============================= */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    renderStempel(btn.dataset.filter);
  });
});

/* =============================
   LOAD AWAL
============================= */
renderStempel("all");
