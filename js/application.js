//animationDelay = 100;
//minSearchTime = 100;
animationDelay = 50;
minSearchTime = 50;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var manager = new GameManager(4, KeyboardInputManager, HTMLActuator);
});
