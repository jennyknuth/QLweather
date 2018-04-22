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

Open a new tab in your terminal.

Navigate to the react backend folder

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

Explore the current weather in your favorite city!
