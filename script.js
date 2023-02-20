function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './do.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

function soundClick2() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './si.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './do.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
});

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 16) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './si.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
});