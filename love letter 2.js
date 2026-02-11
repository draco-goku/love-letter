$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = document.getElementById("bgMusic");

  let played = false; // 👈 important

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");

    if (!played) {
      music.volume = 0.4;
      music.play();
      played = true; // song will not restart again
    }
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    // music keeps playing (optional)
  }

  envelope.click(openEnvelope);
  btn_open.click(openEnvelope);
  btn_reset.click(closeEnvelope);
});
