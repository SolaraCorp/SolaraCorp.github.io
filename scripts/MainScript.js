document.addEventListener("DOMContentLoaded", function () {
    const highlightText = document.querySelector(".highlight-text");

    function checkScroll() {
        const position = highlightText.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight * 0.8) { 
            highlightText.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
