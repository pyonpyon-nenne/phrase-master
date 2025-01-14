document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navOverlay = document.querySelector(".nav-overlay");
    const closeButton = document.querySelector(".close-button");
    const menuLinks = document.querySelectorAll(".nav-menu a"); // メニューリンクをすべて取得

    const toggleMenu = () => {
        navMenu.classList.toggle("open");
        navOverlay.classList.toggle("open");
    };

    // ハンバーガークリックでメニューを開く
    hamburger.addEventListener("click", toggleMenu);

    // オーバーレイまたは閉じるボタンでメニューを閉じる
    navOverlay.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    // メニューリンクをタップしたらメニューを閉じる
    menuLinks.forEach((link) => {
        link.addEventListener("click", toggleMenu);
    });
});
