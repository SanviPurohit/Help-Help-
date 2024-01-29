score = 0;
cross = true;

audio = new Audio('bgmusic.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.irnman');
        dino.classList.add('animateIrnman');
        setTimeout(() => {
            irnman.classList.remove('animateIrnman')
        }, 700);
    }
    if (e.keyCode == 39) {
        irnman = document.querySelector('.irnman');
        irnX = parseInt(window.getComputedStyle(irnman, null).getPropertyValue('left'));
        irnman.style.left = irnX + 112 + "px";
    }
    if (e.keyCode == 37) {
        irnman = document.querySelector('.irnman');
        irnX = parseInt(window.getComputedStyle(irnman, null).getPropertyValue('left'));
        irnman.style.left = (irnX - 112) + "px";
    }
}

setInterval(() => {
    irnman = document.querySelector('.irnman');
    gameOver = document.querySelector('.gameOver');
    thanos = document.querySelector('.thanos');

    dx = parseInt(window.getComputedStyle(irnman, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(irnman, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(thanos, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(thanos, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        thanos.classList.remove('animateThanos')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            thanos.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}