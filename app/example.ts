import * as Ably from 'ably';

const apiKey = '[INSERT-API-KEY-HERE]';

export function connect(): void {
  if (apiKey.indexOf('INSERT-API') >= 0) { window.alert('Add API key to node-example.ts'); }

  console.log('Connecting');

  let realtime: Ably.Realtime = new Ably.Realtime({ key: apiKey });
  realtime.connection.once('connected', () => {
    console.log('Connected');
    window.alert('Connected');
  });
}
