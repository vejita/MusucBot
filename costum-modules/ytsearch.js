const puppeteer = require('puppeteer');

const funk = async (qureySting) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
        `https://www.youtube.com/results?search_query=${qureySting}`
    );
    const result = await page.evaluate(() => {
        const htmlElement = document.getElementsByClassName(
            'yt-simple-endpoint style-scope ytd-video-renderer'
        )[0];
        const arrOfElements = htmlElement;
        console.log('songurl');
        return arrOfElements.href;
    });
    const temp = result;
    // console.log(temp);
    await browser.close();
    return temp;
};

module.exports = funk;
