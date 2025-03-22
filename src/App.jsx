import React, { useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

function App() {
  const [tonConnectUI] = useTonConnectUI();
  const [tonAddress, setTonAddress] = useState(null);
  const [evmAddress, setEvmAddress] = useState(null);

  const connectTonWallet = async () => {
    try {
      await tonConnectUI.connectWallet();
      const wallet = tonConnectUI.wallet;
      if (wallet) {
        setTonAddress(wallet.account.address);
        window.Telegram.WebApp.sendData(JSON.stringify({ walletType: 'ton', walletAddress: wallet.account.address }));
        window.Telegram.WebApp.close();
      }
    } catch (error) {
      console.error('Error connecting TON wallet:', error);
    }
  };

  return (
    <div style={{ padding: '20px', background: 'linear-gradient(135deg, #1a1a1a, #2c2c2c)', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Memecoin Sniper Pro™</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>TON Wallet</h2>
        <button onClick={connectTonWallet} style={{ padding: '10px 20px', background: '#00aaff', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
          Verbinde TON Wallet
        </button>
        {tonAddress && <p>Verbundene TON-Adresse: {tonAddress}</p>}
      </div>

      <div>
        <h2>EVM Wallet</h2>
        <w3m-button />
        {evmAddress && <p>Verbundene EVM-Adresse: {evmAddress}</p>}
      </div>
    </div>
  );
}

export default App;