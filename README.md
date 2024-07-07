# Description
The Estimate Gas Widget is a React-based component designed to help you calculate Ethereum gas fees effortlessly. It fetches real-time gas prices and displays them, allowing users to make informed decisions about their transactions. The widget is customizable with themes and configurations, making it adaptable to various applications.

# Installation and Usage
First things first, let's get this baby up and running. Clone the repo and install those juicy dependencies:

```
npm i estimate-gas-widget
// or
yarn add estimate-gas-widget
```

To use the widget in your Next.js project, add the following to your component:
```
import EstimateGasWidget from 'estimate-gas-widget';

const App = () => {
  return (
    <EstimateGasWidget />
  );
};
```

# Configuration
The widget is highly configurable. Here's how you can tweak the settings:

### 1.Theme
Widget supports light and dark modes, it gets themeMode key from local storage. Or alternatively its possible to pass mui theme to override to custom theme (keep in mind in that case you have to handle theme modes switch).
```
<EstimateGasWidget theme={customMuiTheme} />
```

### 2. Wagmi config
Widget has default config, it can be changed by passing wagmi config (chains configured here)
```
import EstimateGasWidget from 'estimate-gas-widget';
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, mainnet, optimism } from 'wagmi/chains'

const config = getDefaultConfig({
  appName: 'Your Amazing App',
  projectId: 'YOUR_PROJECT_ID',
  chains:[
    mainnet,
    optimism,
    arbitrum,
  ],
  ssr: true,
});

const App = () => {
  return (
    <EstimateGasWidget config={config} />
  );
};
```

### 3. Query client
Query client can be overwritten as well
```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const client = new QueryClient();

const App = () => {
  return (
    <EstimateGasWidget client={client} />
  );
};
```

# Docs
 - [wagmi Documentation](https://wagmi.sh)
 - [mui Documentation (theme)](https://mui.com)
