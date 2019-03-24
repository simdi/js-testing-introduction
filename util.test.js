const { generateText } = require('./util.js');

test('Check if generateText is a function', () => {
    expect(typeof generateText).toBe(`function`);
});
test('Should output Max (29 years old)', () => {
    const test = generateText('Max', 29);
    expect(test).toBe(`Max (29 years old)`);
});