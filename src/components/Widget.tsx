import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, Grid } from '@mui/material';
import { useGasPrice } from '../hooks/useGasPrice';
import { TransactionTypeSelector } from './TxTypeSelector';
import { GasPriceDisplay } from './GasPriceDisplay';
import { GasFeeCalculator } from './GasFeeCalculator';
import { ChainSelector } from './ChainSelector';

export type ChainId = 1 | 11155111 | 10 | 42161 | undefined

export interface FormValues {
  chainId: ChainId;
  gasLimit: number;
}

export const Widget: React.FC = () => {
  const { control, watch } = useForm<FormValues>({
    defaultValues: {
      chainId: 1,
      gasLimit: undefined,
    },
  });

  const gasLimit = watch('gasLimit');
  const chainId = watch('chainId');
  const [gasPrices, loading, error] = useGasPrice(chainId);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ChainSelector control={control} />
          </Grid>
          <Grid item xs={12}>
            <GasPriceDisplay gasPrices={gasPrices} loading={loading} error={error} />
          </Grid>
          <Grid item xs={12}>
            <TransactionTypeSelector control={control} />
          </Grid>
          <Grid item xs={12}>
            <GasFeeCalculator
              gasLimit={gasLimit}
              gasPrices={gasPrices}
              loading={loading}
              error={error}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

