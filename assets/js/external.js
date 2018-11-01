

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
  var no = document.getElementById('no');
  var displaySetting = no.style.display;
  var dogno = document.getElementById('dogno');

  if (displaySetting == 'block') {
    no.style.display = 'none';
    dogno.innerHTML = 'No.. Do I smell bad?';
    }

  else {
    no.style.display = 'block';
    }
  }


  /*reveal*/
function reveal() {
  var reveal = document.getElementById('reveal');
  var displaySetting = reveal.style.display;
  var dogreveal = document.getElementById('dogreveal');

  if (displaySetting == 'block') {
    reveal.style.display = 'none';
    dogreveal.innerHTML = 'I need to tell you something!';
    }

else {
    reveal.style.display = 'block';
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
    });
});

$(document).ready(function(){
  $("#dogreveal").click(function () {
    $("#dogno").hide()
    $("#doghide").hide()
    });
});

$(document).ready(function(){
  $("#doghide").click(function () {
    $("#dogreveal").hide()
    $("#dogno").hide()
    });
});