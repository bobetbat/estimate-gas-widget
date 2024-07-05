import React from 'react';
import { Typography, Box, Skeleton } from '@mui/material';
import { GasPrices } from "../hooks/useGasPrice";
import { formatUnits } from 'viem';

interface GasPriceDisplayProps {
  gasPrices: GasPrices | undefined;
}

const formatGasPrice = (price: bigint) => `${formatUnits(price, 9)} Gwei`;

export const GasPriceDisplay: React.FC<GasPriceDisplayProps> = ({ gasPrices }) => {
  if (!gasPrices) {
    return (
      <Box>
        <Typography variant="h6">Current Gas Prices</Typography>
        <Skeleton width="60%" height={30} />
        <Skeleton width="60%" height={30} />
        <Skeleton width="60%" height={30} />
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
