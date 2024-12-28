var keyprss  = ""

document.body.addEventListener('keypress', function(event) {

  document.querySelector("div").innerHTML = event.code == "KeyQ"
  switch(event.code) {
    case "KeyQ":
      var audio = new Audio('clapping.wav');
      audio.play();
      
      break;
    case "KeyW":
      var audio = new Audio('comedic.mp3');
      audio.play();
      break;
    case "KeyE":
      var audio = new Audio('explosion.mp3');
      audio.play();
      break;
      case "KeyR":
        var audio = new Audio('goat.mp3');
        audio.play();
        break;
  }

});

