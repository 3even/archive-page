'use strict';

var argv = require('minimist')(process.argv.slice(2));
const puppeteer = require('puppeteer');
var archive = require('archive.is');
var fs = require('fs');

var dir = './screenshots';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if (argv.headless == "true") {
  var headless = true;
} else {
  var headless = false;
}

var filename = Math.round((new Date()).getTime() / 1000);

(async() => {
  const browser = await puppeteer.launch({headless: headless, timeout: 0});
  const page = await browser.newPage();
  await page.setViewport({width: 1600, height: 900})
  await page.goto(argv.url, {"waitUntil" : "networkidle0"});
  for (let i = 0; i < 900; i++)
    await page.keyboard.press('ArrowDown');
    await page.waitFor(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitFor(4000);
  await page.screenshot({path: dir+'/'+filename+'.png', fullPage: true});
  await archive.save(argv.url).then(function (result) {
    console.log(argv.url+'|'+result.shortUrl+'|'+filename);
  });
  await browser.close();
})();
