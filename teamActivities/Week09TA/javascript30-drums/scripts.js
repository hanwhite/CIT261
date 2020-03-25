window.addEventListener('keydown', playAudio);

  function playAudio(e) {
      const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      sound.play();
      sound.currentTime = 0;
      key.classList.add('playing');
  }

