import React, { useEffect } from "react";
import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";
import { useAccount, useDisconnect } from 'wagmi';

const WalletConnector = () => {
  const [tonConnectUI] = useTonConnectUI();
  const tonAddress = useTonAddress();
  const { address: evmAddress, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  // Telegram WebApp Integration
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  // Sende die Wallet-Adresse an den Bot, wenn eine Verbindung hergestellt wird
  useEffect(() => {
    if (tonAddress) {
      tg.sendData(JSON.stringify({ walletType: 'ton', walletAddress: tonAddress }));
      tg.close();
    }
  }, [tonAddress]);

  useEffect(() => {
    if (isConnected && evmAddress) {
      tg.sendData(JSON.stringify({ walletType: 'evm', walletAddress: evmAddress }));
      tg.close();
    }
  }, [isConnected, evmAddress]);

  // Handler für TON Wallet Verbindung
  const handleTonConnect = async () => {
    try {
      await tonConnectUI.connectWallet();
    } catch (error) {
      console.error("Fehler beim Verbinden der TON Wallet:", error);
    }
  };

  // Handler für EVM Wallet Trennung
  const handleEvmDisconnect = () => {
    if (isConnected) {
      disconnect();
    }
  };

  return (
    <div className="card">
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Memecoin Sniper Pro™
      </h1>
      <p className="text-gray-400 text-center mb-8">
        Verbinde deine Wallet, um mit dem Sniper Bot zu interagieren.
      </p>

      {/* TON Wallet Verbindung */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">TON Wallet</h2>
        <p className="text-sm text-gray-400 mb-4">
          Unterstützt Tonkeeper, Bitget Wallet, Trust Wallet und mehr.
        </p>
        <button
          onClick={handleTonConnect}
          className="btn btn-blue"
        >
          Verbinde TON Wallet
        </button>
      </div>

      {/* EVM Wallet Verbindung */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">EVM Wallet</h2>
        <p className="text-sm text-gray-400 mb-4">
          Unterstützt MetaMask, Bitget Wallet, Binance Wallet und mehr.
        </p>
        {isConnected ? (
          <button
            onClick={handleEvmDisconnect}
            className="btn btn-red"
          >
            EVM Wallet trennen
          </button>
        ) : (
          <appkit-button className="w-full" />
        )}
      </div>

      {/* Statusanzeige */}
      {(tonAddress || evmAddress) && (
        <div className="status-box">
          <p className="font-semibold text-green-200">Verbunden! ✅</p>
          {tonAddress && (
            <p className="text-sm">
              TON Adresse: {tonAddress.slice(0, 6)}...{tonAddress.slice(-4)}
            </p>
          )}
          {evmAddress && (
            <p className="text-sm">
              EVM Adresse: {evmAddress.slice(0, 6)}...{evmAddress.slice(-4)}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletConnector;