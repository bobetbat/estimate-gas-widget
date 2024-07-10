import { useState, useEffect } from 'react';
import { config } from '../config/wagmi';
import { estimateFeesPerGas } from 'wagmi/actions';

export interface GasPrices {
  low: bigint;
  medium: bigint;
  high: bigint;
}

export const useGasPrice = () => {
  const [gasPrices, setGasPrices] = useState<GasPrices>();

  useEffect(() => {
    const fetchGasPrices = async () => {
      try {
        const feesPerGas = await estimateFeesPerGas(config);
        const maxFeePerGas = BigInt(feesPerGas.maxFeePerGas);
        const priorityFeePerGas = BigInt(feesPerGas.maxPriorityFeePerGas);
        if (maxFeePerGas && priorityFeePerGas) {
          // Calculate low, medium, and high gas fees
          setGasPrices({
            low: maxFeePerGas,
            medium: maxFeePerGas + priorityFeePerGas,
            high: maxFeePerGas + priorityFeePerGas * BigInt(2),
          });
        }
      } catch (error) {
        console.error('Error fetching gas prices:', error);
      }
    };

    fetchGasPrices(); // Fetch immediately on mount

    const interval = setInterval(fetchGasPrices, 60000); // Fetch every 60 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return gasPrices;
};
