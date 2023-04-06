import logo from './banana.svg';
import './App.css';
import { generatePrivateKey, getPublicKey, relayInit } from 'nostr-tools';
import { useState, useEffect } from 'react';

function App() {
  const [sk, setSk] = useState(generatePrivateKey());
  const [pk, setPk] = useState(getPublicKey(sk));
  const [relay, setRelay] = useState(null);

  useEffect(() => {
    const connectRelay = async () => {
      const relay = relayInit('wss://relay.damus');
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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>nosrtcli</h1>
        <img src={logo} className='App-logo' alt='logo' />
        <p>private key: {sk}</p>
        <p>public key: {pk}</p>
        {relay ? <p>Connected to {relay.url}</p> : <p>Could not connect</p>}
      </header>
    </div>
  );
}

export default App;
