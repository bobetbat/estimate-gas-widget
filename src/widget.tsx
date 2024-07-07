import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, Container, Grid } from '@mui/material';
import { TransactionTypeSelector } from './components/TxTypeSelector';
import { GasPriceDisplay } from './components/GasPriceDisplay';
import { GasFeeCalculator } from './components/GasFeeCalculator';
import { useGasPrice } from './hooks/useGasPrice';

const Widget = () => {
  const { control, watch } = useForm();
  const gasLimit = watch('gasLimit');
  const gasPrices = useGasPrice()

  return (
    <Container>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <GasPriceDisplay gasPrices={gasPrices} />
            </Grid>
            <Grid item xs={12}>
              <TransactionTypeSelector control={control} />
            </Grid>
            <Grid item xs={12}>
              <GasFeeCalculator
                gasLimit={gasLimit}
                gasPrices={gasPrices}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Widget;
