//Hamburger menu
const hamburger = document.getElementById("hamburger");
const hiddenmenu = document.getElementById("hiddenmenu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    hiddenmenu.classList.toggle('show');
});

//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');

//Copy text
const gmail = document.getElementById('gmail');
const num = document.getElementById('num');

gmail.addEventListener('click', function() {
    copygmail();
});
function copygmail(){
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.value = gmail.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('Copy');
    document.body.removeChild(textarea);
};

num.addEventListener('click', function() {
    copynum();
});
function copynum(){
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.value = num.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('Copy');
    document.body.removeChild(textarea);
};
