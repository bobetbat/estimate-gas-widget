import React from 'react';
import { Typography, Box, Skeleton, Alert } from '@mui/material';
import { GasPrices } from '../hooks/useGasPrice';
import { formatUnits } from 'viem';

interface GasPriceDisplayProps {
  gasPrices: GasPrices | undefined;
  loading: boolean;
  error: string | null;
}

const formatGasPrice = (price: bigint) => `${parseFloat(formatUnits(price, 9)).toFixed(4)} Gwei`;

export const GasPriceDisplay: React.FC<GasPriceDisplayProps> = ({ gasPrices, loading, error }) => {
  if (loading) {
    return (
      <Box>
        <Typography variant="h6">Current Gas Prices</Typography>
        <Skeleton width="70%" height={30} />
        <Skeleton width="40%" height={30} />
        <Skeleton width="60%" height={30} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6">Current Gas Prices</Typography>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!gasPrices) {
    return (
      <Box>
        <Typography variant="h6">Current Gas Prices</Typography>
        <Alert severity="error">Could NOT get gas prices</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6">Current Gas Prices</Typography>
      <Typography>Low: {formatGasPrice(gasPrices.low)}</Typography>
      <Typography>Average: {formatGasPrice(gasPrices.medium)}</Typography>
      <Typography>High: {formatGasPrice(gasPrices.high)}</Typography>
    </Box>
  );
};
