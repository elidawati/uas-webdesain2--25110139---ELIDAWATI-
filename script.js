document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Navbar Active Otomatis
    // ===========================
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".navbar .nav-link").forEach(function(link){
        const href = link.getAttribute("href");
        if(href === currentPage){
            link.classList.add("active");
        }else{
            link.classList.remove("active");
        }

    });

    // ===========================
    // Smooth Scroll
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

        anchor.addEventListener("click",function(e){
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                e.preventDefault();
                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });
            }
        });
    });

    // ===========================
    // Efek Muncul Saat Scroll
    // ===========================
    const cards = document.querySelectorAll(".menu-card, .service-card, .fitur-card");
    function tampilkanCard(){
        cards.forEach(function(card){
            const posisi = card.getBoundingClientRect().top;
            const tinggiLayar = window.innerHeight - 100;
            if(posisi < tinggiLayar){
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    cards.forEach(function(card){
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s";
    });
    window.addEventListener("scroll", tampilkanCard);
    tampilkanCard();
});
