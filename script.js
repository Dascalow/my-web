const messages = [
    "Ești sigură?",
    "Sigur sigură??",
    "Ești 100% sigură?",
    "Te rog gândește-te...",
    "Gândește-te mai bine!",
    "Dacă spui nu, voi fi foarte trist...",
    "Voi fi foarte trist...",
    "Voi fi foarte foarte foarte trist...",
    "Ok bine, mă opresc...",
    "Glumeam, spune da te rog! ❤️"
];

let messageIndex = 0;

function handleNuClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
    } else {
        noButton.style.display = 'none';
        yesButton.textContent = "Ești obligată să spui DA!";
        yesButton.style.fontSize = '1.5em';
    }
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleDaClick() {
    emailjs.send("service_szu41gy", "template_drg2krd", {
        to_name: "Raul",
        message: "A spus DA!"
    }).then(function(response) {
        console.log("Email trimis cu succes!", response.status, response.text);
        window.location.href = "yes.html";
    }, function(error) {
        console.log("Eroare la trimiterea emailului...", error);
        window.location.href = "yes.html";
    });
}
