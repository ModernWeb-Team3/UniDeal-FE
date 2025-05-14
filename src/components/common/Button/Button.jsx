import styled, { css } from 'styled-components';
import { variantStyles, sizeStyles, roundedStyles } from '@/components/common/Button/Button.styled';
import { forwardRef } from 'react';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  cursor: pointer;

  ${({ variant }) => variant && variantStyles[variant]};
  ${({ size }) => size && sizeStyles[size]};
  ${({ rounded }) => rounded && roundedStyles[rounded]};
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ textColor }) =>
    textColor &&
    css`
      color: ${textColor};
    `}

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    rounded = 'md',
    fullWidth = false,
    textColor,
    borderColor,
    children,
    ...rest
  },
  ref,
) {
  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      rounded={rounded}
      fullWidth={fullWidth}
      textColor={textColor}
      borderColor={borderColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

export default Button;
