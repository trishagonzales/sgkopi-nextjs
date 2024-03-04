import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  ActionIconProps as MantineActionIconProps,
  ActionIcon,
} from '@mantine/core';

import { twMerge } from 'tailwind-merge';
import cs from './button.module.scss';

type Variant = 'solid' | 'outline' | 'muted' | 'ghost' | 'text';

type BaseProps = {
  variant?: Variant;
} & React.HTMLAttributes<HTMLButtonElement>;

type ButtonProps = BaseProps &
  Omit<MantineButtonProps, 'variant' | 'classNames'>;

type ButtonIconProps = BaseProps &
  Omit<MantineActionIconProps, 'variant' | 'classNames'>;

function Button(props: ButtonProps) {
  const { variant = 'muted', className, ...rest } = props;

  return (
    <MantineButton
      color='accent'
      variant={variant}
      className={twMerge(cs.root, className)}
      {...rest}
    />
  );
}

function Icon(props: ButtonIconProps) {
  const { variant = 'muted', className, ...rest } = props;

  return (
    <ActionIcon
      size='lg'
      color='accent'
      variant={variant}
      className={twMerge(cs.root, className)}
      {...rest}
    />
  );
}

export default Object.assign(Button, { Icon });
