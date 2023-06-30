const rickShow = document.getElementById("rick");
const showRickBtn = document.getElementById("showRickBtn")
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// showRickBtn.addEventListener('click', function() {
//     // Usuń klasę 'hidden', aby odkryć element
//     // rickShow.classList.remove('showR');
//     rickShow.style.display = 'block';
//     showRickBtn.remove();
// });
player.pause();

const showingRick = () => {
    rickShow.style.display = 'block';
    showRickBtn.remove();
    player.requestFullscreen();
    player.play()
}

showRickBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showingRick();
})