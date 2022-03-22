const puppeteer = require('puppeteer');
// const xlsx = require("xlsx");
const fs = require('fs');
async function getPageData(url, page) {
    await page.goto(url);

    const h2 = await page.$eval(".detail-title", h2 => h2.innerText);
    const p = await page.$eval(".detail-new-price", p => p.innerText);
    const storage = await page.$eval("#varRamAva", storage => storage.innerText);
    const color = await page.$eval("#varColorsPopup", color => color.innerText);
    const condition = await page.$eval(".refurbished-div h4", condition => condition.innerText);

    return {
        Smartphones: h2,
        Price: p,
        Storage: storage,
        Color: color,
        Condition: condition
    }

};

async function getLinks() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://store.cashify.in/collections/buy-refurbished-smartphones');

    const links = await page.$$eval('#Huratips-Loop .product-container a', allAs => allAs.map(a => a.href));

    await browser.close();
    return links;
}

async function main() {

    const allLinks = await getLinks();
    // console.log(allLinks);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const scrapedData = [];

    for (let link of allLinks) {
        const data = await getPageData(link, page);
        scrapedData.push(data);
    }
    // const wb = xlsx.utils.book_new();
    // const ws = xlsx.utils.json_to_sheet(scrapedData);
    // xlsx.utils.book_append_sheet(wb, ws);
    // xlsx.writeFile(wb, "smartphones.xlsx");
    console.log(scrapedData);
    fs.writeFile('./phones.json', JSON.stringify(scrapedData), err => err ? console.log(err): null);
    await browser.close();
    console.log("Successfully Done!!!");
}

async function getData() {
    const allLinks = await getLinks();
    // console.log(allLinks);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const scrapedData = [];

    for (let link of allLinks) {
        const data = await getPageData(link, page);
        scrapedData.push(data);
    }

    return scrapedData;
}
main();


