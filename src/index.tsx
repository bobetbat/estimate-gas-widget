import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Config, WagmiProvider } from 'wagmi';
import { config } from './config/wagmi';
import { getTheme } from './config/theme';
import useLocalStorage from './hooks/useLocalStorage';
import Widget from './widget';

const client = new QueryClient();

const App: React.FC<{ theme?: Theme, config?: Config, client?: QueryClient }> = ({ theme: themeOverride, config: configOverride, client: clientOverride }) => {
  const [themeMode] = useLocalStorage<'light' | 'dark'>('themeMode', 'light');
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={themeOverride ?? theme}>
      <CssBaseline />
      <WagmiProvider config={configOverride ?? config}>
        <QueryClientProvider client={clientOverride ?? client}>
          <RainbowKitProvider>
            {/* <Button onClick={toggleTheme} variant="contained" color="primary">
              Toggle to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button> */}
            <Widget />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default App;
