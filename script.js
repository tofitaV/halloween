const music = document.getElementById("background-music");
        const toggleButton = document.getElementById("toggle-music");
        const icon = toggleButton.querySelector("i");

        music.volume = 0.05;
        toggleButton.addEventListener("click", () => {
            if (music.paused) {
                music.play();
                icon.classList.remove("fa-volume-mute");
                icon.classList.add("fa-volume-up");
            } else {
                music.pause();
                icon.classList.remove("fa-volume-up");
                icon.classList.add("fa-volume-mute");
            }
        });