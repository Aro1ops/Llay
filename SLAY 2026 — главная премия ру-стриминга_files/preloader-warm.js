(function () {
  // Видео лежат рядом со скриптом: <база статики>/scripts/preloader-warm.js →
  // <база статики>/videos/*. База (origin + префикс версии CDN) берётся из
  // адреса самого скрипта, поэтому файл не зависит от env сборки.
  var base = "";
  try {
    var src = document.currentScript && document.currentScript.src;
    var cut = src ? src.lastIndexOf("/scripts/") : -1;
    if (cut > 0) base = src.slice(0, cut);
  } catch (e) {}

  var video = document.createElement("video");
  video.preload = "auto";
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.autoplay = true;
  video.innerHTML =
    '<source src="' + base + '/videos/slay-loader-mobile.mp4" type="video/mp4" media="(max-width: 48rem)" />' +
    '<source src="' + base + '/videos/slay-loader.mp4" type="video/mp4" />';
  window.__slayLoaderWarm = video;
})();
