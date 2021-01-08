class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      player1 = createSprite(15, 740, 20, 20);
    player2 = createSprite(15, 60, 20, 20);
    player3 = createSprite(785, 60, 20, 20);
    player4 = createSprite(785, 740, 20, 20);
    }

  
    play(){
      form.hide();
      background("lightgreen");
      //textSize(30);
      //text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        //background("lightgreen");
        drawSprites();
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        //player.distance +=50
        player.update();
      }
    }
  }