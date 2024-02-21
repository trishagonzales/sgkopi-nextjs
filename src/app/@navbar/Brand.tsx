import Image from 'next/image';
import Link from 'next/link';
import { classed } from '@tw-classed/react';

type Props = {
  size?: 'sm' | 'md';
  isInvert?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function Brand(props: Props) {
  const { size = 'sm', isInvert = false, ...rest } = props;

  const logoSrc = isInvert
    ? '/logo/sgkopi-logo-invert.svg'
    : '/logo/sgkopi-logo.svg';

  return (
    <Container href='/' {...rest}>
      <ImageContainer size={size}>
        <Image alt='SG Kopi logo' src={logoSrc} />
      </ImageContainer>

      <BrandName size={size}>SG KOPI</BrandName>
    </Container>
  );
}

const Container = classed(Link, 'flex gap-sm');
const ImageContainer = classed.span('relative', {
  variants: {
    size: {
      sm: '1.5rem',
      md: '2rem',
    },
  },
});

const BrandName = classed.h2('font-brand text-fg-default', {
  variants: {
    size: {
      sm: 'text-2',
      md: 'text-3',
    },
    invert: {
      true: 'text-white',
    },
  },
});
