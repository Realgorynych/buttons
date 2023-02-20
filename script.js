function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './pukane-28.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

function soundClick2() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './pukane-25.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './pukane-28.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем

    document.getElementById('soundClick()').style.borderWidth = '10px';
    document.getElementById('soundClick()').style.borderStyle = 'solid';
    document.getElementById('soundClick()').style.borderColor = 'white';
  }
});

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 16) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './pukane-25.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
});