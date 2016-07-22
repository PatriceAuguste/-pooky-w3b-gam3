var player = {
  x : 50,
  y :100,
  velX: 0,
  velY: 0,
  sprites: [document.getElementById("playerf1"),
            document.getElementById("playerf3"),
            document.getElementById("playerf2")
  ],

  ticks: 0,
  spriteNum: 0,
  dir: "right",
  update: function(){
    this.ticks++;
    this.x = this.x + this.velX;
    this.y = this.y + this.velY;
    if (this.velX != 0 || this.velY != 0)
      if(this.ticks % 20 === 0)
      this.spriteNum = this.spriteNum +1;
    if (this.spriteNum > 2) this.spriteNum = 0;
  },
  render: function(){
    //ctx.drawImage(this.x, this.y, 300, 85);
    if (this.dir == "right"){
      flipCtx(ctx,this);
    }
    ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y)
    if (this.dir == "right"){
      restoreCtx(ctx);
    }
  }
};

function flipCtx(ctx, player){
  ctx.save();
  ctx.translate(player.x + 10,0); //50 is half the width of his player
  ctx.scale(-1,1);
  ctx.translate(-player.x - 10,0);
  //ready to draw flipped
}

function restoreCtx(ctx){
  ctx.restore();
}
