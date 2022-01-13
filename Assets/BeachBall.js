class Ball extends BaseClass {
    constructor(x, y){
        var options={
            'density':1,
            'friction':1,
            'restitution':1.3,
        }
        super(x, y, 70, 70, options);
        this.image = loadImage('../sprites/beach-ball.png');
    }
}