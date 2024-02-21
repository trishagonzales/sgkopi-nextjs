import { classed } from '@tw-classed/react';
import cs from './button.module.scss';

type Props = {
  variant?: 'solid' | 'outline' | 'muted' | 'ghost' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isIcon?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  const {
    variant = 'muted',
    size = 'sm',
    leftIcon,
    rightIcon,
    isLoading,
    children,
    ...rest
  } = props;

  const withIcon = Boolean(leftIcon || rightIcon);

  return (
    <ButtonStyled
      {...rest}
      variant={variant}
      size={size}
      withIcon={withIcon}
      isIcon={props.isIcon}
    >
      <IconContainer>{leftIcon}</IconContainer>
      {children}
      <IconContainer>{rightIcon}</IconContainer>
    </ButtonStyled>
  );
}

const ButtonStyled = classed.button({
  base: cs.button,
  variants: {
    variant: {
      solid: cs.solid,
      outline: cs.outline,
      muted: cs.muted,
      ghost: cs.ghost,
      text: cs.text,
    },
    size: {
      xs: cs.xs,
      sm: cs.sm,
      md: cs.md,
      lg: cs.lg,
    },
    withIcon: {
      true: cs.withIcon,
    },
    isIcon: {
      true: cs.isIcon,
    },
  },
  compoundVariants: [
    { size: 'xs', isIcon: true, class: cs.isIconXs },
    { size: 'sm', isIcon: true, class: cs.isIconSm },
    { size: 'md', isIcon: true, class: cs.isIconMd },
    { size: 'lg', isIcon: true, class: cs.isIconLg },
  ],
  defaultVariants: {
    variant: 'muted',
  },
});

const IconContainer = classed.span();
