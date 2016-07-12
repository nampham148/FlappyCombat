class Bird{
  constructor(x, y){
    this.sprite = FlappyCombat.game.add.sprite(x, y, 'image');
    FlappyCombat.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5,0.5);
    this.sprite.power = 0;
    this.sprite.allowGravity = true;
    this.sprite.gravity = (0, 100);
  }

  update(direction){
    if(direction.x < 0){
      this.sprite.body.velocity.x = -250;
      this.sprite.loadTexture() //TODO add left image
    }
    else if (direction.x > 0){
      this.sprite.body.velocity.x = 250;
      this.sprite.loadTexture() //TODO add right image
    }

    this.sprite.body.velocity.y = direction.y * 100;
  }
}
