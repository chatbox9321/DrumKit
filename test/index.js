document.getElementsByTagName("h1")[0].style.color = "blue";

var numberOfButtons = document.getElementsByClassName("drum").length;

for(i = 0; i< numberOfButtons; i++) {
    const buttonElement = document.getElementsByClassName("drum")[i];
    buttonElement.addEventListener("click" , function(neel) {
      var buttonElementInnerHtml = buttonElement.innerHTML;
      switch (buttonElementInnerHtml) {
        case "w":
          var neel = new Audio("sounds/tom-1.mp3");
          neel.play();
          break;

          case "a":
          var neel1 = new Audio("sounds/tom-2.mp3");
          neel1.play();
          break;

          case "s":
          var neel2 = new Audio("sounds/tom-3.mp3");
          neel2.play();
          break;

          case "d":
          var neel3 = new Audio("sounds/tom-4.mp3");
          neel3.play();
          break;

          case "j":
          var neel4 = new Audio("sounds/snare.mp3");
          neel4.play();
          break;

          case "k":
          var neel5 = new Audio("sounds/crash.mp3");
          neel5.play();
          break;

          case "l":
          var neel1 = new Audio("sounds/kick-bass.mp3");
          neel1.play();
          break;

        default: console.log(buttonElementInnerHtml);

      }

    } ); }
