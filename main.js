var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var background = document.getElementById("background");
c.width = window.innerWidth*.9;
c.height = window.innerHeight*.9;


function animate(){
ctx.drawImage(background, 0, 0);

  window.location.href = "https://www.youtube.com/watch?v=WWum0VRc6MI";
  return;
}
enemy.update();
enemy.render();
player.update();
player.render();
  window.requestAnimationFrame(animate);
}
animate();
