const Shape = require('./shape')

describe('Shape', () => {
    it('should return blue', () => {
        const shape = new Shape();
        shape.setColor("blue");
        expect(shape.color).toEqual("blue");

    });
});
