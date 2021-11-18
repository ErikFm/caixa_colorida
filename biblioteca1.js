function colisao(o1,o2){
    if (o2.x - o1.x < o1.width / 2 + o2.width / 2 &&
      o1.x - o2.x < o1.width / 2 + o2.width / 2 && 
      o1.y - o2.y < o1.height / 2 + o2.height / 2 &&
      o2.y - o1.y < o1.height / 2 + o2.height / 2
      ) {
      //retMovendo.shapeColor = "red";
      //peColor = "red";
      o1.velocityY*=(-1);
      o2.velocityY*=(-1);
    } else {
    return false;
    }
  }