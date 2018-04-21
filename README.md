This setup was ejected from [create react app](https://github.com/facebookincubator/create-react-app) the following custom features were added:
- yarn
- css modules
- scss
- eslint linting extending airbnb
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

From the root of the directory, install node modules with yarn `npm install -g yarn`

```bash
$ yarn
```

Run the client

```bash
$ yarn start
```

### Server

cd into the react backend folder

```bash
$ cd react-backend
```

Install backend packages with yarn

```bash
$ yarn
```

### API key

In the `react-backend` directory add an `.env` file (add it at the same level as the react backend's `package.json`) with the following contents:

```yaml
API_KEY=<your Dark Sky API_KEY from https://darksky.net/dev>
```
Start proxy server:

```bash
$ node bin/www
```
