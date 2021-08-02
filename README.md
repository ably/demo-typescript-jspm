# Ably Node.js and Browser Typescript example

_[Ably](https://ably.com) is the platform that powers synchronized digital experiences in realtime. Whether attending an event in a virtual venue, receiving realtime financial information, or monitoring live car performance data – consumers simply expect realtime digital experiences as standard. Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime for more than 250 million devices across 80 countries each month. Organizations like Bloomberg, HubSpot, Verizon, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale. For more information, see the [Ably documentation](https://ably.com/documentation)._

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
