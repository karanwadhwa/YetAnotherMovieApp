# YetAnotherMovieApp
ReactNative App to discover movies and TV shows using the TMDb API

## Expo

[Download Expo Client App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

With an Android phone, scan the QR code available [here](https://expo.io/@karanwadhwa/YAMA) with your [Expo mobile app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) to load this project immediately.

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
API_KEY = "<your_tmdb_api_key>"
```
### How to start
```sh
$ expo start
```
### API

This project makes use of [TheMovieDatabase (TMDb API)](https://www.themoviedb.org/documentation/api) but is neither endorsed nor certified by TMDb.

## LICENSE

This project is licensed under the [MIT License](https://github.com/karanwadhwa/YetAnotherMovieApp/LICENSE)
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
