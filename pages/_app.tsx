import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import { config } from '../config/wagmi';
import { getTheme } from '../config/theme';
import useLocalStorage from '../hooks/useLocalStorage'; // Adjust the path as needed

const client = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const [themeMode, setThemeMode] = useLocalStorage<'light' | 'dark'>('themeMode', 'light');
  const theme = getTheme(themeMode);


  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider>
            {/* <Button onClick={toggleTheme} variant="contained" color="primary">
              Toggle to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button> */}
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};

export default App;
