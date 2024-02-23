import Image from 'next/image';
import Link from 'next/link';
import { classed } from '@tw-classed/react';

type Props = {
  isDarkMode?: boolean;
  brandNameClass?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function Brand(props: Props) {
  const { isDarkMode = false, brandNameClass, ...rest } = props;

  const logoSrc = isDarkMode
    ? '/logo/sgkopi-logo-invert.svg'
    : '/logo/sgkopi-logo.svg';

  return (
    <Container href='/' {...rest}>
      <ImageContainer>
        <Image alt='SG Kopi logo' src={logoSrc} fill />
      </ImageContainer>

      <BrandName className={brandNameClass}>SG KOPI</BrandName>
    </Container>
  );
}

const Container = classed(Link, 'flex gap-md items-center');
const ImageContainer = classed.div(
  'w-[1.3rem] md:w-[1.6rem] relative block h-full'
);

const BrandName = classed.h2(
  'text-4 font-brand text-fg-emphasized',
  'group-data-[colorMode=dark]:text-bg-canvas',
  {
    variants: {
      invert: {
        true: 'text-white',
      },
    },
  }
);
