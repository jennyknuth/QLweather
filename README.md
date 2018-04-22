This setup was ejected from [create react app](https://github.com/facebookincubator/create-react-app) and the following custom features were added:
- yarn
- css modules
- scss
- eslint extending airbnb rules
- stylelint extending stylint standard
- jest and enzyme tests
- Lato
- express server for api

Learn more about the setup here:  [https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## How to run

Clone or fork the repo

```bash
$ git clone <paste-link-to-repo> <name-of-new-directory>
```

and cd into new directory.

You will need to run both a local client and a local server since Dark Sky does not allow passing api keys on the client side and requires a proxy server.

You will also need a Dark Sky API key, which you can get here: https://darksky.net/dev

### Client

From the root of the directory, install node modules with yarn (if you need yarn, `npm install -g yarn`).

```bash
$ yarn
```

### Server

Navigate to the `react-backend` folder

```bash
$ cd react-backend
```

Install backend packages with yarn

```bash
$ yarn
```

#### API key

Before you start the server, you'll need to set your `API_KEY`. From the command line, type
```bash
export API_KEY=<your-Dark-Sky-API_KEY-from https://darksky.net/dev>
```
From the `react-backend` directory, start the proxy server:

```bash
$ yarn start
```
or

```bash
$ node bin/www
```

Your back-end server is running.

### Start the Client

Return to the root of your directory, one level out from the backend folder.

Start the client

```bash
$ yarn start
```
Your browser will open, the client is running.

Explore the current weather in your favorite city! (Hopefully your API key works…)

## Relevant files

Usually I try to keep these coding tasks as simple as possible, with maybe three files: index.html, app.js, and styles.css. But in this case I wanted to use react with css modules and needed a backend server…hence webpack and express and lots of pre-populated files and dependencies!

A quick rundown by folder, of what I did:

In the root, I added a few things to the package.json in addition to what comes with create react app (dotenv, classnames, etc.), set the connection to the proxy server there, and added a few eslint rule overrides.

In the `config` folder I did the setup in webpack to use scss and css modules and a linter, but that's about it for that folder.

In the `public` folder I added some images and fonts (including a weather icons font) and a favicon.

In the `react-backend` folder there is an express server. Most of the customized files are in the `Routes` directory. The `weather` route is where the calls to the Dark Sky API happen and the results are then served to a local `api/weather` endpoint. The `location` route uses an npm module, `city-to-coords`, that worked pretty well to return latitude and longitude from a fuzzy-ish search of city names. (It actually borrows this functionality from weather-js, another npm module that serves up the current weather for locations…but the assignment was to use Dark Sky, hence the redundancy there.)

I did not touch the `scripts` folder.

The bulk of the code I wrote can be found in the `src/App` folder. `App.jsx` is the container component that stores view state and gets the data and sends it down to the purely presentational components: widget, header, and body. The `Shared` folder holds a sort of reusable 'translation' utility along with shared style files that the input form, widget, header, and body all use to change their theme based on current weather conditions.

I envisioned this as a small weather widget that could be adaptable to a variety of information sources or APIs. Just pass in five  props for icon, summary, temperature, precipitation probability, and precipitation type, make a couple of translation objects to bridge from the API to the provided classes, and it should work.
