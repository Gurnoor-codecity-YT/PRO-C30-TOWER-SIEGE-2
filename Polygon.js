class Polygon {
    constructor(x, y, radius) {
        var options = {
           
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        fill("blue");
        strokeWeight(4);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}