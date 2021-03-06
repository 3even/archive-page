# Archive-Page

Archive and screenshot one or multiple URLs using Google Chrome's [Puppeteer](https://github.com/GoogleChrome/puppeteer). This script will create an archived snapshot using [Archive.is](https://archive.is/) and generate a .png screenshot saved locally in */screenshots*

## Dependencies

NodeJS & NPM 

## Install

```
git clone https://github.com/3even/archive-page.git
cd archive-page
npm install
```

## Usage

Archiving a single URL
```
node archive.js --url=https://google.com --headless=true
```
Pipe(|) seperated output format:
```
Source URL | Archive.is URL | .png file
```

Batch URL archiving using the included bash script.
```
./batch.sh urls.txt > output.txt
```
