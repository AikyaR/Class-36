var database,canvas;
var gameState=0;

function setup(){
  console.log(database);
  canvas= createCanvas(500,500);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

  function draw() {
}
