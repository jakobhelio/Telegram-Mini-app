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
    <div className="flex flex-col items-center p-6 space-y-6 bg-white rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-gray-800">Memecoin Sniper Pro™ Wallet Connector</h1>
      <p className="text-gray-600 text-center">
        Verbinde deine Wallet, um mit dem Memecoin Sniper Pro™ Bot zu interagieren.
      </p>

      {/* TON Wallet Verbindung */}
      <div className="w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">TON-kompatible Wallets</h2>
        <p className="text-sm text-gray-500 mb-4">
          Unterstützt Tonkeeper, Bitget Wallet, Trust Wallet und mehr.
        </p>
        <button
          onClick={handleTonConnect}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Verbinde TON Wallet
        </button>
      </div>

      {/* EVM Wallet Verbindung */}
      <div className="w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">EVM-kompatible Wallets</h2>
        <p className="text-sm text-gray-500 mb-4">
          Unterstützt MetaMask, Bitget Wallet, Binance Wallet und mehr.
        </p>
        {isConnected ? (
          <button
            onClick={handleEvmDisconnect}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
          >
            EVM Wallet trennen
          </button>
        ) : (
          <appkit-button />
        )}
      </div>

      {/* Statusanzeige */}
      {(tonAddress || evmAddress) && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md w-full">
          <p className="font-semibold">Verbunden!</p>
          {tonAddress && <p>TON Adresse: {tonAddress.slice(0, 6)}...{tonAddress.slice(-4)}</p>}
          {evmAddress && <p>EVM Adresse: {evmAddress.slice(0, 6)}...{evmAddress.slice(-4)}</p>}
        </div>
      )}
    </div>
  );
};

export default WalletConnector;