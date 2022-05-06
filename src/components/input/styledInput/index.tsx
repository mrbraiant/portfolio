import { CSSProperties } from 'react';
import {
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
} from 'react';
import { TextField } from '@mui/material';

type StyledInputProps = {
  name?: string;
  label?: string;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'float'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  size?: 'medium' | 'small';
  margin?: 'normal' | 'dense' | 'none';
  required?: boolean;
  defaultValue?: string;
  shrink?: boolean;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  style?: CSSProperties;
  fullWidth?: boolean;
  helperText?: any;
  InputProps?: any;
  children?: ReactNode;
  select?: boolean;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  value?: unknown;
  onBlur?:
    | FocusEventHandler<
        HTMLTextAreaElement | HTMLInputElement
      >
    | undefined;
  onChange?:
    | ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
      >
    | undefined;
};

export const StyledInput = ({
  label,
  margin,
  name,
  size,
  type,
  required = false,
  shrink = undefined,
  placeholder,
  multiline = true,
  rows,
  maxRows,
  style,
  defaultValue,
  fullWidth = false,
  select = false,
  disabled = false,
  value,
  variant = 'outlined',
  onBlur,
  onChange,
  helperText,
  InputProps,
  children,
}: StyledInputProps) => {
  return (
    <TextField
      type={type}
      name={name}
      select={select}
      label={label}
      size={size}
      required={required}
      margin={margin}
      defaultValue={defaultValue}
      InputLabelProps={{ shrink }}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      style={style}
      fullWidth={fullWidth}
      onChange={onChange}
      disabled={disabled}
      value={value}
      variant={variant}
      error={Boolean(helperText)}
      onBlur={onBlur}
      helperText={helperText}
      InputProps={InputProps}
    >
      {children}
    </TextField>
  );
};
