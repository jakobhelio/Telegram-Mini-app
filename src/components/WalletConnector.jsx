import React, { useEffect, useState } from "react";
import { useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";
import { useAccount, useDisconnect } from 'wagmi';

const WalletConnector = () => {
  const [tonConnectUI] = useTonConnectUI();
  const tonAddress = useTonAddress();
  const { address: evmAddress, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  // Telegram WebApp Integration
  const tg = window.Telegram.WebApp;
  const [theme, setTheme] = useState({});

  useEffect(() => {
    // Initialisiere Telegram WebApp
    tg.expand();
    tg.ready();

    // Hole das Telegram-Theme
    const themeParams = tg.themeParams;
    setTheme({
      bgColor: themeParams.bg_color || '#1a1a1a',
      textColor: themeParams.text_color || '#ffffff',
      buttonColor: themeParams.button_color || '#4299e1',
      buttonTextColor: themeParams.button_text_color || '#ffffff',
    });

    // Aktiviere den Hauptbutton von Telegram
    tg.MainButton.setText('Close');
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      tg.close();
    });

    // Passe die App-Größe an
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
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
    <div
      className="flex flex-col items-center p-6 space-y-6 w-full h-full"
      style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
    >
      <h1 className="text-2xl font-bold text-center">
        Memecoin Sniper Pro™
      </h1>
      <p className="text-sm text-center opacity-80">
        Verbinde deine Wallet, um mit dem Bot zu interagieren.
      </p>

      {/* TON Wallet Verbindung */}
      <div className="w-full wallet-card">
        <h2 className="text-lg font-semibold mb-2">TON Wallets</h2>
        <p className="text-xs opacity-70 mb-4">
          Unterstützt Tonkeeper, Bitget Wallet, Trust Wallet und mehr.
        </p>
        <button
          onClick={handleTonConnect}
          className="w-full py-3 px-4 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: theme.buttonColor,
            color: theme.buttonTextColor,
            animation: 'pulse 2s infinite',
          }}
        >
          Verbinde TON Wallet
        </button>
      </div>

      {/* EVM Wallet Verbindung */}
      <div className="w-full wallet-card">
        <h2 className="text-lg font-semibold mb-2">EVM Wallets</h2>
        <p className="text-xs opacity-70 mb-4">
          Unterstützt MetaMask, Bitget Wallet, Binance Wallet und mehr.
        </p>
        {isConnected ? (
          <button
            onClick={handleEvmDisconnect}
            className="w-full py-3 px-4 rounded-lg text-sm font-medium bg-red-600 text-white"
            style={{ animation: 'pulse 2s infinite' }}
          >
            EVM Wallet trennen
          </button>
        ) : (
          <appkit-button
            style={{
              '--button-bg': theme.buttonColor,
              '--button-text': theme.buttonTextColor,
              animation: 'pulse 2s infinite',
            }}
          />
        )}
      </div>

      {/* Statusanzeige */}
      {(tonAddress || evmAddress) && (
        <div className="status-box">
          <p className="font-semibold text-white">Verbunden!</p>
          {tonAddress && (
            <p className="text-xs text-white">
              TON Adresse: {tonAddress.slice(0, 6)}...{tonAddress.slice(-4)}
            </p>
          )}
          {evmAddress && (
            <p className="text-xs text-white">
              EVM Adresse: {evmAddress.slice(0, 6)}...{evmAddress.slice(-4)}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletConnector;