class Umbrella extends BaseClass {
    constructor(x, y){
        var options={
            'density':1,
            'friction':1,
            'restitution':0,
        }
        super(x, y, 140, 200, options);
        this.image = loadImage('../sprites/umbrella.png');
    }
}