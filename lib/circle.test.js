const Circle = require('./circle')

describe('Circle', () => {
    it('should return "<circle cx="150" cy="100" r="80" fill="blue"/>"', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');

    });
});
