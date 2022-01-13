class Basket extends BaseClass {
    constructor(x, y){
        var options={
            'density':1,
            'friction':1,
            'restitution':1,
        }
        super(x, y, 70, 70, options);
        this.image = loadImage('../sprites/picnic-basket.png');
    }
}