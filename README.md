# archive-page
Archive and screenshot one or multiple URLs using Google Chrome's [Puppeteer](https://github.com/GoogleChrome/puppeteer)

# Prerequisites

NodeJS & NPM 

# Install

```
git clone https://github.com/3even/archive-page.git
cd archive-page
npm install
```

# Basic usage

```
node archive.js --url=https://google.com --headless=true
```

# Batch usage via bash script

```
./batch.sh urls.txt > log.txt
```
