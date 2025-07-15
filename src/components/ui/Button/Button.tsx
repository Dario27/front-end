import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps = MuiButtonProps & {
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <MuiButton
      {...props}
      disabled={loading || props.disabled}
    //   startIcon={loading ? <CircularProgress size={20} /> : props.startIcon}
    >
      {children}
    </MuiButton>
  );
};