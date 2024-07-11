import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { MenuItem, Select, FormControl, InputLabel, useMediaQuery } from '@mui/material';
import { useSwitchChain } from 'wagmi';
import { FormValues } from './Widget';

export const ChainSelector: React.FC<{
  control: Control<FormValues, any>
}> = ({ control }) => {
  const { chains, switchChain } = useSwitchChain();
  const small = useMediaQuery('(max-width:600px)');

  return (
    <FormControl fullWidth size={small ? 'small' : 'medium'}>
      <InputLabel id="chain-select-label">Network</InputLabel>
      <Controller
        name="chainId"
        control={control}
        defaultValue={1}
        render={({ field }) => (
          <Select
            {...field}
            label="Network"
            onChange={(event) => {
              const chainId = Number(event.target.value ?? 1);
              switchChain({ chainId });
              field.onChange(chainId);
            }}
            defaultValue={1}
          >
            {chains.map((chain) => (
              <MenuItem key={chain.id} value={chain.id}>
                {chain.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  )
};
