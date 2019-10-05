![Image](/demo/YAMAbanner.png)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/karanwadhwa/YetAnotherMovieApp/blob/master/LICENSE) [![Google Play Store](https://img.shields.io/badge/Google%20Play%20Store-available-brightgreen)](https://play.google.com/store/apps/details?id=com.karanwadhwa.YAMA) ![Apple App Store](https://img.shields.io/badge/Apple%20App%20Store-unavailable-red) [![APK download](https://img.shields.io/badge/direct%20download-apk-blue)](/demo/YAMA-8b0597a5f54d4b98b40daedfe35a46f0-signed.apk) ![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

ReactNative App to discover movies and TV shows using the TMDb API

<a href='https://play.google.com/store/apps/details?id=com.karanwadhwa.YAMA&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="200px" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>

### Expo

[Download Expo Client App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

[![Expo QR code](/demo/YetAnotherMovieAppQRcode.PNG)](https://expo.io/@karanwadhwa/YAMA)

With an Android phone, scan this QR code with your [Expo mobile app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) to load this project immediately.

Or Request a link [here](https://expo.io/@karanwadhwa/YAMA).

#Screenshots

<img src="/demo/screenshots/splash screen.png" vspace="5"   align= "left" height="500" width="275">
<img src="/demo/screenshots/movies home 1.png" vspace="5"   align= "left" height="500" width="275" >
<img src="/demo/screenshots/movies home 2.png" vspace="5"  height="500" width="275" >
<img src="/demo/screenshots/movie screen 1.png" vspace="5"  align= "left" height="500" width="275">
<img src="/demo/screenshots/movie screen 2.png" vspace="5"  align= "left"  height="500" width="275" >
<img src="/demo/screenshots/movie screen 3.png" vspace="5"  height="500" width="275" >
<img src="/demo/screenshots/tv home 1.png" vspace="5" align= "left" height="500" width="275" >
<img src="/demo/screenshots/tv home 2.png"  vspace="5" align= "left" height="500" width="275" >
<img src="/demo/screenshots/tv screen 1.png" vspace="5" height="500" width="275" >
<img src="/demo/screenshots/tv screen 2.png" vspace="5" align= "left" height="500" width="275" >
<img src="/demo/screenshots/watchlist movies.png" vspace="5" align= "left" height="500" width="275" >
<img src="/demo/screenshots/watchlist tv.png" vspace="5" height="500" width="275" >
<img src="/demo/screenshots/home search.png" vspace="5" align= "left" height="500" width="275" >
<img src="/demo/screenshots/recent searches.png" vspace="5" align= "left" height="500" width="275" >
<img src="/demo/screenshots/search result.png" vspace="5" height="500" width="275" >

## Installation

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

Clone this repo

```sh
$ git clone git@github.com:karanwadhwa/YetAnotherMovieApp.git
$ cd YetAnotherMovieApp
$ yarn or npm install
$ yarn global add expo-cli or npm install -g expo-cli
```

[Get your TMDb API key](https://www.themoviedb.org/faq/api)

Create `.env` file in your root directory and add the following

```js
API_KEY = "<your_tmdb_api_key>";
```

### How to start

```sh
$ expo start
```

### API

This project makes use of [TheMovieDatabase (TMDb API)](https://www.themoviedb.org/documentation/api) but is neither endorsed nor certified by TMDb.

## LICENSE

This project is licensed under the [MIT License](https://github.com/karanwadhwa/YetAnotherMovieApp/blob/master/LICENSE)

```
YetAnotherMovieApp
Copyright (c) 2019 Karan Wadhwa (https://github.com/karanwadhwa)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
