import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { MenuItem, Select, FormControl, InputLabel, useMediaQuery } from '@mui/material';
import { FormValues } from './Widget';

const transactionTypes = [
  { type: 'ETH Transfer', gasLimit: 21000 },
  { type: 'ERC-20 Token Transfer', gasLimit: 65000 },
  { type: 'Smart Contract Interaction', gasLimit: 100000 },
];

export const TransactionTypeSelector: React.FC<{
  control: Control<FormValues, any>
}> = ({ control }) => {
  const small = useMediaQuery('(max-width:600px)');
  return (
    <FormControl fullWidth size={small ? 'small' : 'medium'}>
      <InputLabel id="transaction-type-label">Transaction Type</InputLabel>
      <Controller
        name="gasLimit"
        control={control}
        render={({ field }) => (
          <Select {...field} label="Transaction Type">
            {transactionTypes.map((transaction, index) => (
              <MenuItem key={index} value={transaction.gasLimit}>
                {transaction.type}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  )
};
