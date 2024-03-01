import React from 'react';
import { classedCore } from '@/lib/classed';

type TextVariant =
  | 'caption'
  | 'caption-heading'
  | 'body-sm'
  | 'body'
  | 'subheading'
  | 'heading'
  | 'title-sm'
  | 'title-md'
  | 'title-lg'
  | 'display-sm'
  | 'display-md'
  | 'display-lg';

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  variant?: TextVariant;
  as?: TextElement;
} & React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> &
  React.PropsWithChildren;

export default function Text({ variant = 'body', as = 'p', children }: Props) {
  switch (as) {
    case 'h1':
      return <h1 className={style({ variant })}>{children}</h1>;

    case 'h2':
      return <h2 className={style({ variant })}>{children}</h2>;

    case 'h3':
      return <h3 className={style({ variant })}>{children}</h3>;

    case 'h4':
      return <h4 className={style({ variant })}>{children}</h4>;

    case 'h5':
      return <h5 className={style({ variant })}>{children}</h5>;

    case 'h6':
      return <h6 className={style({ variant })}>{children}</h6>;

    default:
      return <p className={style({ variant })}>{children}</p>;
  }
}

const style = classedCore({
  variants: {
    variant: {
      caption: 'caption',
      'caption-heading': 'caption-heading',

      'body-sm': 'body-sm',
      body: 'body',

      subheading: 'subheading',
      heading: 'heading',

      'title-sm': 'title-sm',
      'title-md': 'title-md',
      'title-lg': 'title-lg',

      'display-sm': 'display-sm',
      'display-md': 'display-md',
      'display-lg': 'display-lg',
    },
  },
});
