import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, mainnet, optimism, sepolia } from 'wagmi/chains'
// todo: dev / stage / prod modes config 
const isTestnet = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: isTestnet ? [sepolia] : [
    mainnet,
    optimism,
    arbitrum,
  ],
  ssr: true,
});

