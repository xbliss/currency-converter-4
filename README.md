# Currency Converter

[![Build Status](https://travis-ci.org/sadorlovsky/currency-converter.svg?branch=development)](https://travis-ci.org/sadorlovsky/currency-converter)
[![Coverage Status](https://coveralls.io/repos/github/sadorlovsky/currency-converter/badge.svg?branch=development)](https://coveralls.io/github/sadorlovsky/currency-converter?branch=development)

Chrome extension for converting from USD and EUR to RUB by current exchange rate.

![](http://i.imgur.com/F8bLKwT.jpg)

## Install

Link to Chrome Web Store will appear here soon.

## Development

```bash
git clone https://github.com/sadorlovsky/currency-converter.git
npm install
npm start # run webpack in watch mode
```
Webpack used for building scripts. Then:
- go to chrome and open `chrome://extensions/`
- select `Developer mode`
- click on `Load unpacked extension`
- and choose `app` folder

## License

MIT © [Zach Orlovsky](https://orlovsky.rocks)
