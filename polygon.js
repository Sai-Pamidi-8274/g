class polygon {
    constructor (x,y) {
         var options = {
             restititution : 0,
             friction : 0
         }
         this.loadImage('polygon.png');
         this.body = Matter.Bodies.circle(x,y,40);
         World.add(world,this.body);

    }
display() {
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40);
}
}
