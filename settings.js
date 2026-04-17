const slider = document.querySelector('.lenghtSong');
slider.addEventListener('input', () => {
  const val = slider.value;
  const max = slider.max;
  const percent = (val / max) * 100;
  slider.style.background = `linear-gradient(to right, red 0%, red ${percent}%, white ${percent}%, white 100%)`;
});
