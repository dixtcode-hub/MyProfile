
const tombolUbahTeks = document.querySelector("#ubahTeks");
const tombolGantiTema = document.querySelector("#gantiTema");
const deskripsi = document.querySelector(".description");

// Tombol untuk mengubah teks deskripsi
tombolUbahTeks.addEventListener("click", function () {
    if (deskripsi.textContent.includes("Saya adalah mahasiswa")) {
        deskripsi.textContent =
            "Saya terus belajar HTML, CSS, dan JavaScript untuk " +
            "membangun website yang kreatif, responsif, dan bermanfaat.";
    } else {
        deskripsi.textContent =
            "Saya adalah mahasiswa yang tertarik pada dunia " +
            "teknologi, pemrograman web, dan pengembangan " +
            "aplikasi digital. Saya senang belajar hal baru " +
            "dan mengembangkan keterampilan.";
    }
});

// Tombol untuk mengganti tema terang dan gelap
tombolGantiTema.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
