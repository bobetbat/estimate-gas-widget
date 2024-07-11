import { useState, useEffect } from 'react';

export const useEthPrice = (): [number | undefined, boolean, string | null] => {
  const [ethPrice, setEthPrice] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEthPrice = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
        const data = await response.json();
        setEthPrice(data.USD);
      } catch (error) {
        console.error('Failed to fetch ETH price:', error);
        setError('Failed to fetch ETH price');
      } finally {
        setLoading(false);
      }
    };

    fetchEthPrice();

    const interval = setInterval(fetchEthPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return [ethPrice, loading, error];
};
