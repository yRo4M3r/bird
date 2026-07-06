const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");
const site = document.getElementById("site");

video.addEventListener("ended", () => {

    intro.style.opacity = "0";

    site.style.opacity = "1";
    site.style.transform = "translateY(0)";

    document.body.style.overflow = "auto";

    setTimeout(() => {
        intro.style.display = "none";
    }, 800);

});