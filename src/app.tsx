// import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Config, WagmiProvider } from 'wagmi';
import { config } from './config/wagmi';
import { getTheme, ThemeMode } from './config/theme';
import { Widget } from './components/Widget';

const client = new QueryClient();

interface IApp {
  theme?: Theme;
  config?: Config;
  client?: QueryClient;
  themeMode?: ThemeMode;
}

const App: React.FC<IApp> = ({
  theme: themeOverride,
  config: configOverride,
  client: clientOverride,
  themeMode,
}) => {
  const theme = getTheme(themeMode ?? ThemeMode.Light);

  return (
    <ThemeProvider theme={themeOverride ?? theme}>
      <CssBaseline />
      <WagmiProvider config={configOverride ?? config}>
        <QueryClientProvider client={clientOverride ?? client}>
          <RainbowKitProvider>
            <Widget />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default App;
