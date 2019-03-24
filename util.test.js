const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util.js');

test('Check if generateText is a function', () => {
    expect(typeof generateText).toBe(`function`);
});
test('Should output Max (29 years old)', () => {
    const test = generateText('Max', 29);
    expect(test).toBe(`Max (29 years old)`);
});

test('Should generate a valid text output', () => {
    const test = checkAndGenerate('Max', 29);
    expect(test).toBe(`Max (29 years old)`);
});

test('Should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920, 1080']
    });

    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/');
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '29');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (29 years old)');
}, 10000);