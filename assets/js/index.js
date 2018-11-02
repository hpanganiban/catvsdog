/*Youtube*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('index', {
    height: '1',
    width: '1',
    videoId: 'LrdryCIIWs0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
      }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(70);
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
  event.target.setVolume(70);
}

