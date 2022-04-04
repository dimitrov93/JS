const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = `http://localhost:5500/`;

const mockData = {
    "-LxHVtajG3N1sU714pVj": {
        "author": "Spami",
        "content": "Hello, are you there?"
    },
    "-LxIDxC-GotWtf4eHwV8": {
        "author": "Garry",
        "content": "Yep, whats up :?"
    },
    "-LxIDxPfhsNipDrOQ5g_": {
        "author": "Spami",
        "content": "How are you? Long time no see? :)"
    },
    "-LxIE-dM_msaz1O9MouM": {
        "author": "George",
        "content": "Hello, guys! :))"
    },
    "-LxLgX_nOIiuvbwmxt8w": {
        "author": "Spami",
        "content": "Hello, George nice to see you! :)))"
    },
    "653dd435-94a0-4fcc-a714-d90a6c781e56": {
        "author": "Ceko",
        "content": "123",
        "_id": "653dd435-94a0-4fcc-a714-d90a6c781e56"
    },
    "7153c676-6a1a-4bb1-b283-f2a8762c79b5": {
        "author": "",
        "content": "",
        "_id": "7153c676-6a1a-4bb1-b283-f2a8762c79b5"
    },
    "28b5e1e0-ae7e-4028-8d52-426eb47fbc3d": {
        "author": "AS",
        "content": "SAD",
        "_id": "28b5e1e0-ae7e-4028-8d52-426eb47fbc3d"
    }
};

describe('Tests', async function () {
    this.timeout(6000);

    let browser, page;

    before(async function () {
       browser = await chromium.launch({headless: false, slowMo:1000}); 
    });

    after(async function () {
        await browser.close(); 
     });

     beforeEach(async function () {
        page = await browser.newPage(); 
     });

     afterEach(async function () {
        page.close(); 
     });

     it.only('Should test', async function () {
        page.route('**/jsonstore/messenger', (route, request) => {
            route.fulfill({
                body: JSON.stringify(mockData),
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
        })
         await page.goto(host);
         await page.click('text=refresh');
         await page.waitForResponse('**/jsonstore/messenger');



     });

     it('Should test2', async function () {
        await page.goto(host);
        await page.fill('input[id="author"]', 'A')
        await page.fill('input[id="content"]', 'B')

        const [request] = await Promise.all([
            page.waitForRequest((req) => req.method() == 'POST'),page.click('text=Send')
        ]);
    
        const data = JSON.parse(request.postData());
        expect(data.author).to.equal('A')
        expect(data.content).to.equal('B')
     });

})