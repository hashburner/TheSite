document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('.audio-player');

    audioPlayers.forEach(player => {
        const audio = player.querySelector('audio');
        const playPauseBtn = player.querySelector('.play-pause');
        const seekBar = player.querySelector('.seek-bar');
        const currentTime = player.querySelector('.current-time');
        const duration = player.querySelector('.duration');

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseBtn.textContent = 'Play';
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            seekBar.max = audio.duration;
            duration.textContent = formatTime(audio.duration);
        });

        audio.addEventListener('timeupdate', () => {
            seekBar.value = audio.currentTime;
            currentTime.textContent = formatTime(audio.currentTime);
        });

        seekBar.addEventListener('input', () => {
            audio.currentTime = seekBar.value;
        });

        audio.addEventListener('ended', () => {
            playPauseBtn.textContent = 'Play';
            seekBar.value = 0;
            currentTime.textContent = '0:00';
        });
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
});

// ScrollReveal animations
window.addEventListener('load', () => {
    ScrollReveal().reveal('.animate-left', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.animate-right', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.animate-top', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });
});
