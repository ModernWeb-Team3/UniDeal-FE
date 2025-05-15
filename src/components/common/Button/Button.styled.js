import { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary};
    color: ${({ theme }) => theme.COLORS.white};
    border: none;
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.white};
    color: ${({ theme }) => theme.COLORS.primary};
    border: 1px solid ${({ theme }) => theme.COLORS.primary};
  `,
};

const sizeStyles = {
  xs: css`
    width: 64px;
    height: 38px;
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  `,
  sm: css`
    width: 92px;
    height: 38px;
    padding: 8px 12px;
  `,
  md: css`
    width: 145px;
    height: 45px;
    padding: 15px 12px;
  `,
  lg: css`
    width: 312px;
    height: 48px;
    padding: 15px 14px;
  `,
};

const roundedStyles = {
  sm: css`
    border-radius: 4px;
  `,
  md: css`
    border-radius: 8px;
  `,
  full: css`
    border-radius: 25px;
  `,
};

export { variantStyles, sizeStyles, roundedStyles };
