const headerText = document.querySelector(".main-header__text__profession");

headerText.textContent="<Frontend developer />"

const email = document.querySelector(".contact__text__email");

email.addEventListener("mouseover", showCopyEmail);

let bla;
let bla2;

function showCopyEmail () {
    window.screen.width < 600 ? email.style.fontSize = '1.1rem': email.style.fontSize = '1.4rem';
    email.textContent = "Copy email";
    email.addEventListener("click", copyToClipboard);
    email.addEventListener("mouseout", hideCopyEmail);
}

function hideCopyEmail () {

    clearInterval(bla);
    clearInterval(bla2);
    email.textContent = "hello@antonijakasum.com";
    email.style.background = "#FFECEC";
    email.style.color = "#F55252";
}

function copyToClipboard () {
    const text = document.querySelector(".contact__text__copy")
    text.select();
    document.execCommand('copy');
    email.textContent = "Email copied";
    email.style.background = "#D8F4E7";
    email.style.color = "#45C588";
    email.style.fontSize = '1.4rem';

    // email.style.transform = "scale(1.1, 1.1)"
    // setTimeout(()=>{email.style.transform = "scale(1, 1)"}, 500);
    // email.style.transform = "scale(1.1, 1.1)"
    
    
    email.removeEventListener("click", copyToClipboard);
       bla =  setInterval(function() {
        email.style.fontSize = (email.style.fontSize === '1.4rem' ? '1.2rem' : '1.4rem');
    }, 100);
       bla2 = setInterval(function() {clearInterval(bla)
        window.screen.width < 600 ? email.style.fontSize = '1.1rem': email.style.fontSize = '1.4rem';
    }, 500);
    
}

