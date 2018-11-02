

/*meow*/
function playclip1() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
	if (document.all)
	 {
	  document.all.sound.src = "../../audio-meow.mp3";
	 }
	}

	else {
	{
	var audio = document.getElementById("meow"); audio.play();
	audio.play();
	}
	}
}


/*bark*/
function playclip2() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
	if (document.all)
	 {
	  document.all.sound.src = "../../audio-bark.mp3";
	 }
	}

	else {
	{
	var audio = document.getElementById("bark"); audio.play();
	audio.play();
	}
	}
}


/*howl*/
function playclip3() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
	if (document.all)
	 {
	  document.all.sound.src = "../../audio-howl.mp3";
	 }
	}

	else {
	{
	var audio = document.getElementById("howl"); audio.play();
	audio.play();
	}
	}
}


/*pup*/
function playclip4() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
	if (document.all)
	 {
	  document.all.sound.src = "../../audio-pup.mp3";
	 }
	}

	else {
	{
	var audio = document.getElementById("pup"); audio.play();
	audio.play();
	}
	}
}


/*barkonce*/
function playclip5() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
	if (document.all)
	 {
	  document.all.sound.src = "../../audio-barkonce.mp3";
	 }
	}

	else {
	{
	var audio = document.getElementById("barkonce"); audio.play();
	audio.play();
	}
	}
}



/*no*/
function no() {
  $('#dogno').attr('disabled','disabled');
  var nodialogue = document.getElementById('nodialogue');
  var displaySetting = nodialogue.style.display;
  var dogno = document.getElementById('dogno');

  if (displaySetting == 'block') {
    nodialogue.style.display = 'none';
    dogno.innerHTML = 'No.. Do I smell bad?';
    }

  else {
    nodialogue.style.display = 'block';
    }
  }

  function yes() {
  $('#dogyes').attr('disabled','disabled');
  var noyesdialogue = document.getElementById('noyesdialogue');
  var displaySetting = noyesdialogue.style.display;
  var dogyes = document.getElementById('dogyes');

  if (displaySetting == 'block') {
    noyesdialogue.style.display = 'none';
    dogyes.innerHTML = 'Yes';
    }

  else {
    noyesdialogue.style.display = 'block';
    }
  }

  function no2() {
    $('#dogno2').attr('disabled','disabled');
  var nonodialogue = document.getElementById('nonodialogue');
  var displaySetting = nonodialogue.style.display;
  var dogno2 = document.getElementById('dogno2');

  if (displaySetting == 'block') {
    nonodialogue.style.display = 'none';
    dogno2.innerHTML = 'No';
    }

  else {
    nonodialogue.style.display = 'block';
    }
  }

  /*reveal*/
function reveal() {
  $('#dogreveal').attr('disabled','disabled');
  var revealdialogue = document.getElementById('revealdialogue');
  var displaySetting = revealdialogue.style.display;
  var dogreveal = document.getElementById('dogreveal');

  if (displaySetting == 'block') {
    revealdialogue.style.display = 'none';
    dogreveal.innerHTML = 'I need to tell you something!';
    }

else {
    revealdialogue.style.display = 'block';
    }
  }

  function tell() {
    $('#dogtell').attr('disabled','disabled');
  var revealtelldialogue = document.getElementById('revealtelldialogue');
  var displaySetting = revealtelldialogue.style.display;
  var dogtell = document.getElementById('dogtell');

  if (displaySetting == 'block') {
    revealtelldialogue.style.display = 'none';
    dogtell.innerHTML = 'I need to tell you something!';
    }

else {
    revealtelldialogue.style.display = 'block';
    }
  }



  /*hide*/
function hide() {
  var hide = document.getElementById('hide');
  var displaySetting = hide.style.display;
  var doghide = document.getElementById('doghide');

  if (displaySetting == 'block') {
      hide.style.display = 'none';
      doghide.innerHTML = 'err.. No?';
      }

  else {
      hide.style.display = 'block';
      }
  }



/*hide buttons on click*/
$(document).ready(function(){
  $("#dogno").click(function () {
    $("#dogreveal").hide()
    $("#doghide").hide()
    $("#dogyes").show()
    $("#dogno2").show()
    });
});

$(document).ready(function(){
  $("#dogyes").click(function () {
    $("#dogno2").hide()
    });
});

$(document).ready(function(){
  $("#dogno2").click(function () {
    $("#dogyes").hide()
    });
});

$(document).ready(function(){
  $("#dogreveal").click(function () {
    $("#dogno").hide()
    $("#doghide").hide()
    $("#dogtell").show()
    });
});

$(document).ready(function(){
  $("#dogtell").click(function () {
    $("#dogrun").show()
    $("#dogstay").show()
    });
});

$(document).ready(function(){
  $("#doghide").click(function () {
    $("#dogreveal").hide()
    $("#dogno").hide()
    });
});


/*Youtube*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('bgsound', {
    height: '1',
    width: '1',
    videoId: 'Otn9ywlnXFc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
      }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(50);
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
  event.target.setVolume(50);
}



