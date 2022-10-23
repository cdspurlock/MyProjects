for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
    var buttonInnerHTML = this.innerHTML;
   
    switch (buttonInnerHTML) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "b":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "c":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "e":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "f":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "g":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "h":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "i":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            default:
            console.log(buttonInnerHTML);
    }
  });
}