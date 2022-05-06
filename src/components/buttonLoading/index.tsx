import { ReactNode, CSSProperties } from 'react';
import { LoadingButton } from '@mui/lab';

type ButtonLoadingProps = {
  loading?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'small' | 'medium';
  style?: CSSProperties;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode | string;
};

export const ButtonLoading = ({
  loading,
  variant,
  type,
  size,
  style,
  fullWidth = false,
  onClick,
  children,
}: ButtonLoadingProps) => {
  return (
    <LoadingButton
      loading={loading}
      variant={variant}
      type={type}
      size={size}
      style={style}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </LoadingButton>
  );
};
