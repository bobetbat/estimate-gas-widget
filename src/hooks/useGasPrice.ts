import { useState, useEffect } from 'react';
import { config } from '../config/wagmi';
import { estimateFeesPerGas } from 'wagmi/actions';
import { ChainId } from '../components/Widget';

export interface GasPrices {
  low: bigint;
  medium: bigint;
  high: bigint;
}

export const useGasPrice = (
  chainId: ChainId
): [GasPrices | undefined, boolean, string | null] => {
  const [gasPrices, setGasPrices] = useState<GasPrices>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGasPrices = async () => {
      setLoading(true);
      setError(null);
      try {
        const feesPerGas = await estimateFeesPerGas(config, { chainId: chainId as 1 | 11155111 | 10 | 42161 | undefined });
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
        console.log('chainId', chainId)
        console.log('feesPerGas', feesPerGas)
      } catch (error) {
        console.error('Error fetching gas prices:', error);
        setError('Failed to fetch gas prices');
      } finally {
        setLoading(false);
      }
    };

    if (chainId) {
      fetchGasPrices(); // Fetch immediately on chain change

      const interval = setInterval(fetchGasPrices, 60000); // Fetch every 60 seconds

      // Clear interval on component unmount or chain change
      return () => clearInterval(interval);
    }
  }, [chainId]);

  return [gasPrices, loading, error];
};
