import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, Grid } from '@mui/material';
import { useGasPrice } from './hooks/useGasPrice';
import { TransactionTypeSelector } from './components/TxTypeSelector';
import { GasPriceDisplay } from './components/GasPriceDisplay';
import { GasFeeCalculator } from './components/GasFeeCalculator';
import { ChainSelector } from './components/ChainSelector';

const Widget = () => {
  const { control, watch } = useForm();
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

export default Widget;
