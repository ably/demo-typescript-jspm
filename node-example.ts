import * as Ably from 'ably';

const apiKey = '[INSERT-API-KEY-HERE]';
if (apiKey.indexOf('INSERT-API') >= 0) { throw 'Add API key to node-example.ts'; }

console.log('Connecting');

let realtime: Ably.Realtime = new Ably.Realtime({ key: apiKey });
realtime.connection.once('connected', () => {
  console.log('Connected');
  process.exit();
});

