puppeteer = require('puppeteer')

beforeAll(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:/Users/danie/AppData/Local/Google/Chrome SxS/Application/chrome.exe',
        headless: true,
    });
    page = await browser.newPage();
    await page.goto('C:/Users/danie/Google Drive/Projects WebSites/Tinyjs/test/html/test.html');
});

test('$ should be initialized', async () => {
    expect(await page.evaluate(() => {
        return typeof window["$"]
    })).toBe('object')
})

test('the number of buttons should be 2', async () => {
    expect(await page.evaluate(() => {
        return $.all('.button').selector.length
    })).toBe(2)
})

test('the first button should have red class', async () => {
    await page.evaluate(() => {
        $.one('.button').addClass('red')
    })
    expect(await page.evaluate(() => {
        return $.one('.button').selector.classList.value
    })).toBe('button red')
})

test('the first button shouldnt have red class', async () => {
    await page.evaluate(() => {
        $.one('.button').removeClass('red')
    })
    expect(await page.evaluate(() => {
        return $.one('.button').selector.classList.value
    })).toBe('button')
})

test('the first button should have click event listener', async () => {
    await page.evaluate(() => {
        $.one('.button').on('click', () => $.one('.button').text('Roar'))
    })
    await page.click('.button')
    expect(await page.evaluate(() => $.one('.button').text())).toBe('Roar')
})

test('h1 text should be Hello World', async () => {
    expect(await page.evaluate(() => {
        return $.one('h1').text()
    })).toBe('Hello World')
})

test('input val should be Name', async () => {
    expect(await page.evaluate(async () => {
        return $.one('input').val()
    })).toBe('Name')
})

test('input val should be null', async () => {
    await page.evaluate(async () => {
        $.one('input').val('')
    })
    expect(await page.evaluate(async () => {
        return $.one('input').val()
    })).toBe('')
})

test('h1 font-size should be 24px', async () => {
    expect(await page.evaluate(() => {
        return $.one('h1').css('font-size')
    })).toBe('24px')
})

test('h1 color should be red', async () => {
    await page.evaluate(async () => {
        $.one('h1').css('color', 'red')
    })
    expect(await page.evaluate(() => {
        return $.one('h1').css('color')
    })).toBe('rgb(255, 0, 0)')
})