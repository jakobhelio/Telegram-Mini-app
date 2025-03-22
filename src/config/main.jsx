import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppKitProvider } from './config/appkit.jsx' // Ändere .js zu .jsx
import { TonConnectUIProvider } from '@tonconnect/ui-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://jakobhelio.github.io/Telegram-Mini-app/tonconnect-manifest.json">
      <AppKitProvider>
        <App />
      </AppKitProvider>
    </TonConnectUIProvider>
  </React.StrictMode>,
)