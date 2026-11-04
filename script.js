document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-music");
  const button = document.getElementById("music-toggle");
  const label = document.getElementById("music-label");
  if (!audio || !button || !label) return;

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.classList.add("is-playing");
        button.setAttribute("aria-pressed", "true");
        label.textContent = "PAUSE OUR SONG";
      } catch (error) {
        label.textContent = "ADD OUR-SONG.MP3";
        console.warn("Add our-song.mp3 to this folder to enable music.", error);
      }
    } else {
      audio.pause();
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
      label.textContent = "PLAY OUR SONG";
    }
  });

  audio.addEventListener("ended", () => {
    button.classList.remove("is-playing");
    button.setAttribute("aria-pressed", "false");
    label.textContent = "PLAY OUR SONG";
  });
});
