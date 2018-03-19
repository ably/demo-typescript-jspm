# Ably Node.js and Browser Typescript example

This repo contains the simplest possible example of how to use the [Ably JS library](https://github.com/ably/ably-js) with TypeScript and [the JSPM package manager](http://jspm.io/).

## Running Node.js Typescript example

Install the Node.js packaged modules:
```
npm install
```

Compile the node-example TypeScript:
```
tsc node-example.ts
```

Run the node-example Javascript file:
```
node node-example.js
```

## Running the Browser Typescript example

Install the Node.js packaged modules:
```
npm install
```

Install the JSPM packages:
```
./node_modules/.bin/jspm install
```

Install the JSPM loader:
```
./node_modules/.bin/jspm dl-loader
```

Install a static web server:
```
npm install http-server -g
```

Run the web server:
```
./node_modules/.bin/http-server -p 8080
```

Visit the browser example at [http://localhost:8080](http://localhost:8080)
