const { adder, arrayChecker } = require('./adder');

describe('it should add two integers', () => {
    test('adds numbers', () => {
        expect(adder(2, 3)).toBe(5);
    });
    test('should return same array', () => {
        const myshit = [3, 2, 1];
        expect(arrayChecker(myshit)).toEqual(myshit);
    });
});