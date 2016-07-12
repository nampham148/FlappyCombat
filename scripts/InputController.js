class InputController{
  constructor(keyboard, bird){
    this.keyboard = keyboard;
    this.bird = bird;
    this.lastJumpTime = FlappyCombat.game.time.now;
  }

  update(){
    var direction = new Phaser.Point();
    if(this.keyboard.isDown(Phaser.KeyCode.LEFT)) direction.x = -1;
    else if (this.keyboard.isDown(Phaser.KeyCode.RIGHT)) direction.x = 1;

    if (this.keyboard.isDown(Phaser.KeyCode.SPACEBAR)
        && (FlappyCombat.game.time.now - this.lastJumpTime > 100)){
          this.lastJumpTime = FlappyCombat.game.time.now;
          direction.y = 1;
    }
    else direction.y = 0;

    this.bird.update(direction);
  }
}
