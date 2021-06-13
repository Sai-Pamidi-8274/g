class box {
    constructor (x,y) {
         var options = {
             restititution : 0,
             friction : 0
         }
         this.body = Matter.Bodies.rectangle(x,y,40,40,options);
         World.add(world,this.body);

    }
display () {
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
}
}
