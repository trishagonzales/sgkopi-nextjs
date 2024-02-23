import { classed } from '@tw-classed/react';

type Props = {
  variant?: 'solid' | 'outline' | 'muted' | 'ghost' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg';

  isLoading?: boolean;
  isDisabled?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  isIcon?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const {
    variant = 'muted',
    leftIcon,
    rightIcon,
    isLoading,
    children,
    ...rest
  } = props;

  const withIcon = Boolean(leftIcon || rightIcon);

  return (
    <ButtonStyled {...rest} variant={variant} withIcon={withIcon}>
      <IconContainer>{leftIcon}</IconContainer>
      {children}
      <IconContainer>{rightIcon}</IconContainer>
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = classed.button(
  'py-[0.6em] px-[1.2em] flex items-center justify-center',
  'font-semibold text-accent-700 rounded-lg',
  'border-sm border-transparent',
  'group-data-[colorMode=dark]:text-accent-300',
  {
    variants: {
      variant: {
        solid:
          '!text-white bg-accent-500 hover:bg-accent-600 border-accent-500',
        outline: '!border-accent-500 hover:bg-accent-200',
        muted: 'bg-accent-200 hover:bg-accent-300',
        ghost:
          'hover:bg-accent-200 group-data-[colorMode=dark]:hover:bg-accent-900',
        text: 'hover:text-accent-900',
      },

      size: {
        xs: 'text-1',
        sm: 'text-2',
        md: 'text-3',
        lg: 'text-4',
      },

      withIcon: {
        true: 'justify-between gap-sm',
      },
      isIcon: {
        true: '!py-[0.55em] !px-[0.7em] h-0',
      },
    },

    compoundVariants: [
      { size: 'xs', isIcon: true, class: '!text-2' },
      { size: 'sm', isIcon: true, class: '!text-3' },
      { size: 'md', isIcon: true, class: '!text-4' },
      { size: 'lg', isIcon: true, class: '!text-5' },
    ],

    defaultVariants: {
      variant: 'muted',
      size: 'xs',
    },
  }
);

const IconContainer = classed.span();
