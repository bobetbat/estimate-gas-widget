import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Skeleton } from '@mui/material';
import { formatUnits } from 'viem';
import { useEthPrice } from '../hooks/useEthPrice';
import { GasPrices } from '../hooks/useGasPrice';

interface Fees {
  eth: string;
  usd: string;
}

interface GasFeeCalculatorProps {
  gasPrices: GasPrices | undefined;
  gasLimit: number;
}

const calculateFees = (gasPriceInWei: bigint, ethPrice: number, gasLimit: number): Fees => {
  const feeInEth = parseFloat(formatUnits(gasPriceInWei, 18)) * gasLimit;
  const feeInUsd = (feeInEth * ethPrice).toFixed(2);
  return { eth: feeInEth.toFixed(6), usd: feeInUsd };
};

const GasFeeRow: React.FC<{ level: string, gasPrice: bigint, fees: Fees }> = ({ level, gasPrice, fees }) => (
  <TableRow>
    <TableCell>{level}</TableCell>
    <TableCell>{fees.eth} ETH</TableCell>
    <TableCell>${fees.usd} USD</TableCell>
  </TableRow>
);

const LoadingRow: React.FC = () => (
  <TableRow>
    <TableCell><Skeleton width="80%" /></TableCell>
    <TableCell><Skeleton width="60%" /></TableCell>
    <TableCell><Skeleton width="60%" /></TableCell>
  </TableRow>
);

const renderRows = (gasPrices: GasPrices | undefined, ethPrice: number | undefined, fees: Record<string, Fees>) => {
  if (!gasPrices || ethPrice === undefined) {
    return (
      <>
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </>
    );
  }

  return (
    <>
      <GasFeeRow level="Low" gasPrice={gasPrices.low} fees={fees.low} />
      <GasFeeRow level="Medium" gasPrice={gasPrices.medium} fees={fees.medium} />
      <GasFeeRow level="High" gasPrice={gasPrices.high} fees={fees.high} />
    </>
  );
};

export const GasFeeCalculator: React.FC<GasFeeCalculatorProps> = ({ gasLimit, gasPrices }) => {
  const ethPrice = useEthPrice();
  const [fees, setFees] = useState<{ low: Fees, medium: Fees, high: Fees }>({
    low: { eth: '0', usd: '0' },
    medium: { eth: '0', usd: '0' },
    high: { eth: '0', usd: '0' },
  });
  useEffect(() => {
    if (!gasLimit || !gasPrices || ethPrice === undefined) return;

    setFees({
      low: calculateFees(gasPrices.low, ethPrice, gasLimit),
      medium: calculateFees(gasPrices.medium, ethPrice, gasLimit),
      high: calculateFees(gasPrices.high, ethPrice, gasLimit),
    });
  }, [gasLimit, gasPrices, ethPrice]);


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Level</TableCell>
          <TableCell>Fee (ETH)</TableCell>
          <TableCell>Fee (USD)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderRows(gasPrices, ethPrice, fees)}
      </TableBody>
    </Table>
  );
};
