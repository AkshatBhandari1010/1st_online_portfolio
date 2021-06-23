const hamburger = document.getElementById("hamburger");
const hiddenmenu = document.getElementById("hiddenmenu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    hiddenmenu.classList.toggle('show');
});