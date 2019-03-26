const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate, validateAndLogin, validateEmail } = require('./util.js');

describe('Validate index page', () => {
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
});
describe('Validate email', () => {
    test('Validate email should be a function', () => {
        expect(typeof validateEmail).toBe(`function`);
    });
    test('Email simdi@yahoo.com should return true', () => {
        expect(validateEmail('simdi@yahoo.com')).toBeTruthy();
    });
    test('Email john@yahoo should return false', () => {
        expect(validateEmail('john@yahoo')).toBeFalsy();
    });
});
describe('Validate Login Page', () => {
    test('ValidateAndLogin should be a function', () => {
        expect(typeof validateAndLogin).toBe(`function`);
    });
    test('ValidateAndLogin should redirect', () => {
        expect(validateAndLogin('simdi@yahoo.com', 'simdi')).toBeTruthy();
    });
    test('ValidateAndLogin should return false', () => {
        expect(validateAndLogin('simdi@yahoo', 'simdi')).toBeFalsy();
    });
});

describe('End To End test', () => {
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
        // const finalText = await page.$eval('.user-item', el => el.textContent);
        // expect(finalText).toBe('Anna (29 years old)');
        return;
    }, 10000);
    
    // End to End test
    test('Should log redirect to dashboard', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 20,
            args: ['--window-size=1900, 1000']
        });
    
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/login.html');
        await page.click('input#email');
        await page.type('input#email', 'simdi@yahoo.com');
        await page.click('input#password');
        await page.type('input#password', 'simdi');
        await page.click('#btnLogin');
        return;
    }, 10000);
});