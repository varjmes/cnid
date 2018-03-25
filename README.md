# cnid

[![Build Status](https://travis-ci.org/varjmes/cnid.svg?branch=master)](https://travis-ci.org/varjmes/cnid) [![dependencies Status](https://david-dm.org/varjmes/cnid/status.svg)](https://david-dm.org/varjmes/cnid) [![devDependencies Status](https://david-dm.org/varjmes/cnid/dev-status.svg)](https://david-dm.org/varjmes/cnid?type=dev)

This is a small [express.js](https://expressjs.com/) application that displays a list of,
and individual pages for, articles rendered from the data provided.

## Running the app

1. Install [nodejs](https://nodejs.org/en/download/)
2. Install the npm dependencies! `npm install`
3. Run the app: `npm start`

## Testing

Uses [Jest](https://facebook.github.io/jest/) to the run the tests and provide code coverage.
[Superagent](https://github.com/visionmedia/supertest) is used for HTTP testing, and
[Cheerio](https://github.com/cheeriojs/cheerio) is used to query the HTML of the route request responses.

Run the tests: `npm test`

## Continuous Integration

On commit to the master branch, [Travis](https://travis-ci.org) will run the app tests. On success, it'll deploy
automatically to [Heroku](https://heroku.com). The app lives at https://cnid-jmes.herokuapp.com/ and the deploy
CI script can be found in [travis.yml](https://github.com/varjmes/cnid/blob/master/.travis.yml).

## Future improvements

### Dynamic data

Naturally, we wouldn't usually load in a static article list saved to the app directory.
It's likely that in a real application we'd be loading in data from a separate API.

### Accessible images

No alt-texts were provided for the images in the data provided. To meet accessibility
requirements we need to provide these. Usually I'd set the images to be decorative (blank alt-text)
but as CNID has a lot of content centered around imagery we should look at providing real
descriptions for these images.

We should also optimise our imagery (compression, more modern formats) so we can provide smaller downloads.

### Progressive web app

Progressive is the future. With service workers, app manifests and more we can provide a fast app-like
experience for the web!

### Article schemas

We can use [structured data](https://developers.google.com/search/docs/guides/intro-structured-data)
to define our articles. This'll boost search results for our articles in Google.
