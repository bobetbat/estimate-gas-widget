import { useState, useEffect } from 'react';

export const useEthPrice = () => {
  const [ethPrice, setEthPrice] = useState(0);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
        const data = await response.json();
        setEthPrice(data.USD);
      } catch (error) {
        console.error('Failed to fetch ETH price:', error);
      }
    };

    fetchEthPrice();

    const interval = setInterval(fetchEthPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return ethPrice;
};
