/**
 * =========================================================
 * BAKSO JOYO MULYO - MAIN JAVASCRIPT
 * =========================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // -----------------------------------------------------
    // 1. STICKY NAVBAR SHADOW EFEK
    // -----------------------------------------------------
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("shadow-lg");
            } else {
                navbar.classList.remove("shadow-lg");
            }
        });
    }

    // -----------------------------------------------------
    // 2. FORMULIR PEMESANAN KONTAK INTEGRASI WHATSAPP
    // -----------------------------------------------------
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Ambil elemen input
            const namaInput = contactForm.querySelector('input[placeholder*="nama"]');
            const pesanInput = contactForm.querySelector("textarea");

            const nama = namaInput ? namaInput.value.trim() : "";
            const pesan = pesanInput ? pesanInput.value.trim() : "";

            if (!nama || !pesan) {
                alert("Harap isi Nama Lengkap dan Pesanan/Pertanyaan Anda!");
                return;
            }

            // Nomor WA Bakso Joyo Mulyo (Format Internasional tanpa '+')
            const noWA = "6282170781720";

            // Format Pesan WhatsApp
            const teksWA = `Halo Bakso Joyo Mulyo,%0A%0ASaya *${encodeURIComponent(nama)}*%0A*Pesanan/Pertanyaan:*%0A${encodeURIComponent(pesan)}`;

            // Buka WhatsApp di Tab Baru
            window.open(`https://wa.me/${noWA}?text=${teksWA}`, "_blank");
            
            // Reset Formulir
            contactForm.reset();
        });
    }

    // -----------------------------------------------------
    // 3. VALIDASI FORM LOGIN
    // -----------------------------------------------------
    const loginForm = document.querySelector(".login-right form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = loginForm.querySelector('input[type="email"]');
            const passwordInput = loginForm.querySelector('input[type="password"]');

            if (!emailInput.value.trim() || !passwordInput.value.trim()) {
                alert("Silakan masukkan Username/Email dan Kata Sandi Anda!");
                return;
            }

            // Simulasi respon sukses login
            alert("Login berhasil! Selamat datang kembali di Bakso Joyo Mulyo.");
            window.location.href = "beranda.html";
        });
    }

    // -----------------------------------------------------
    // 4. VALIDASI FORM REGISTER & COCOKAN KATA SANDI
    // -----------------------------------------------------
    const registerForm = document.querySelector(".right-side form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            const password = registerForm.querySelector('input[name="password"]').value;
            const confirmPassword = registerForm.querySelector('input[name="confirm_password"]').value;

            if (password !== confirmPassword) {
                e.preventDefault();
                alert("Konfirmasi Kata Sandi tidak cocok! Silakan periksa kembali.");
                return false;
            }

            alert("Pendaftaran berhasil! Silakan login dengan akun baru Anda.");
        });
    }

    // -----------------------------------------------------
    // 5. ANIMASI SMOTH HOVER PADA KARTU MENU & EFEK KLIK PESAN
    // -----------------------------------------------------
    const orderButtons = document.querySelectorAll(".btn-pesan, .btn-menu");
    orderButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            // Jika tombol mengarah ke kontak.html atau link WA, biarkan default aksi link jalan
            const href = this.getAttribute("href");
            if (href && href !== "#" && !href.startsWith("javascript")) {
                return;
            }

            e.preventDefault();
            
            // Cari nama menu jika tombol berada di dalam card menu
            const card = this.closest(".menu-card") || this.closest(".card");
            let namaMenu = "";
            if (card) {
                const titleElement = card.querySelector("h4") || card.querySelector("h5");
                if (titleElement) namaMenu = titleElement.innerText.trim();
            }

            const noWA = "6282170781720";
            let teksWA = "Halo Bakso Joyo Mulyo, saya ingin memesan menu bakso.";
            
            if (namaMenu) {
                teksWA = `Halo Bakso Joyo Mulyo, saya ingin memesan *${encodeURIComponent(namaMenu)}*.`;
            }

            window.open(`https://wa.me/${noWA}?text=${teksWA}`, "_blank");
        });
    });

    // -----------------------------------------------------
    // 6. AUTO SCROLL KE ATAS SAAT GANTI HALAMAN
    // -----------------------------------------------------
    window.scrollTo({ top: 0, behavior: "smooth" });
});
