// Получаем элементы для музыки и значка
const music = document.getElementById("background-music");
const toggleButton = document.getElementById("toggle-music");
const icon = toggleButton.querySelector("i");

// Устанавливаем начальный уровень громкости
music.volume = 0.05;

// Устанавливаем значок по умолчанию при загрузке страницы
if (music.paused) {
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-mute");
}

// Обработчик для переключения музыки
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