import logo from './banana.svg';
import './App.css';
import {
  generatePrivateKey,
  getEventHash,
  getPublicKey,
  relayInit,
  signEvent
} from 'nostr-tools';
import { useState, useEffect } from 'react';

function App() {
  const [sk, setSk] = useState(generatePrivateKey());
  const [pk, setPk] = useState(getPublicKey(sk));
  const [relay, setRelay] = useState(null);
  const [pubStatus, setPubStatus] = useState('');

  useEffect(() => {
    const connectRelay = async () => {
      const relay = relayInit('wss://relay.damus.io');
      await relay.connect();

      relay.on('connect', () => {
        setRelay(relay);
      });
      relay.on('error', () => {
        console.log('Failed to connect');
      });
    };
    connectRelay();
  });

  var event = {
    kind: 1,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: 'Testing nostr from a react client'
  };

  event.id = getEventHash(event);
  event.sig = signEvent(event, sk);

  const publishEvent = event => {
    const pub = relay.publish(event);

    pub.on('ok', () => {
      setPubStatus('the event is published');
    });
    pub.on('failed', reason => {
      setPubStatus(`failed to publish message ${reason}`);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='site-title'>nosrtcli</h1>
        <p>private key: {sk}</p>
        <p>public key: {pk}</p>
        {relay ? <p>Connected to {relay.url}</p> : <p>Could not connect</p>}
      </header>
      <div>
        <button onClick={() => publishEvent(event)}>Publish event</button>
        <p>Publish status: {pubStatus}</p>
      </div>
    </div>
  );
}

export default App;
