class Chair extends BaseClass {
    constructor(x, y){
        var options={
            'density':1,
            'friction':0,
            'restitution':0,
        }
        super(x, y, 140, 140, options);
        this.image = loadImage('../sprites/beach-chair.png');
    }
}