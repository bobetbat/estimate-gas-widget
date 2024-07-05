// microbundle.config.js
module.exports = {
  externals: [
    '@emotion/react',
    '@emotion/styled',
    '@mui/icons-material',
    '@mui/material',
    '@mui/styled-engine-sc',
    '@rainbow-me/rainbowkit',
    '@tanstack/react-query',
    'react',
    'react-dom',
    'react-hook-form',
    'styled-components',
    'viem',
    'wagmi'
  ],
  globals: {
    '@emotion/react': '@emotion/react',
    '@emotion/styled': '@emotion/styled',
    '@mui/icons-material': '@mui/icons-material',
    '@mui/material': '@mui/material',
    '@mui/styled-engine-sc': '@mui/styled-engine-sc',
    '@rainbow-me/rainbowkit': '@rainbow-me/rainbowkit',
    '@tanstack/react-query': '@tanstack/react-query',
    'react': 'react',
    'react-dom': 'react-dom',
    'react-hook-form': 'react-hook-form',
    'styled-components': 'styled-components',
    'viem': 'viem',
    'wagmi': 'wagmi'
  }
};
