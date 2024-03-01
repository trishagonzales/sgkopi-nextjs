import { classedCore } from '@/lib/classed';
import cs from './text.module.scss';

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
} & React.PropsWithChildren;

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
      caption: cs.caption,
      'caption-heading': cs['caption-heading'],
      'body-sm': cs.bodySm,
      body: cs.body,

      subheading: cs.subheading,
      heading: cs.heading,

      'title-sm': cs['title-sm'],
      'title-md': cs['title-md'],
      'title-lg': cs['title-lg'],

      'display-sm': cs['display-sm'],
      'display-md': cs['display-md'],
      'display-lg': cs['display-lg'],
    },
  },
});
