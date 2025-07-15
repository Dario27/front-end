import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';

type DropdownProps = SelectProps & {
  options: { value: string | number; label: string }[];
  label?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ options, label, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    if (props.onChange) {
      props.onChange(event, props.children);
    }
  };

  return (
    <FormControl fullWidth={props.fullWidth} size={props.size}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        {...props}
        value={value}
        onChange={() => {
          handleChange;
        }}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};