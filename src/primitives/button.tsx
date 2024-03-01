import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  ActionIconProps as MantineActionIconProps,
  ActionIcon,
} from '@mantine/core';

import { twMerge } from 'tailwind-merge';
import cs from './button.module.scss';

type ButtonVariant = 'solid' | 'outline' | 'muted' | 'ghost' | 'text';

type BaseProps = {
  variant?: ButtonVariant;
} & React.HTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  isIcon: false;
} & BaseProps &
  Omit<MantineButtonProps, 'variant' | 'classNames'>;

type ButtonIconProps = {
  isIcon: true;
} & BaseProps &
  Omit<MantineActionIconProps, 'variant' | 'classNames'>;

const VariantMap = {
  solid: 'filled',
  outline: 'outline',
  muted: 'light',
  ghost: 'subtle',
  text: 'transparent',
};

export default function Button({
  variant = 'muted',
  className,
  ...rest
}: ButtonProps | ButtonIconProps) {
  const props = {
    color: 'accent',
    variant: VariantMap[variant],
    className: twMerge(cs.root, className),
    ...rest,
  };

  return props.isIcon ? (
    <ActionIcon size='lg' {...props} />
  ) : (
    <MantineButton {...props} />
  );
}
