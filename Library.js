function isTouching(ob1,ob2){
    if(ob1.x-ob2.x<ob2.width/2+ob1.width/2
      && ob2.x-ob1.x<ob2.width/2+ob1.width/2
      &&ob1.y-ob2.y<ob2.height/2+ob1.height/2
      &&ob2.y-ob1.y<ob2.height/2+ob1.height/2){
     return true 
    }
    else {
     return false  
  }
  }
  function bounce(){
    if(R1.x-R2.x<R2.width/2+R1.width/2
      && R2.x-R1.x<R2.width/2+R1.width/2){
        R1.velocityX=R1.velocityX*-1
        R2.velocityX=R2.velocityX*-1
      }
      if(R1.y-R2.y<R2.height/2+R1.height/2
        && R2.y-R1.y<R2.height/2+R1.height/2){
          R1.velocityY=R1.velocityY*-1
          R2.velocityY=R2.velocityY*-1
        }
  }