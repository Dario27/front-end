import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel } from '@mui/material';

type Props = CheckboxProps & {
  label?: string;
};

export const Checkbox: React.FC<Props> = ({ label, ...props }) => {
  return label ? (
    <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
  ) : (
    <MuiCheckbox {...props} />
  );
};