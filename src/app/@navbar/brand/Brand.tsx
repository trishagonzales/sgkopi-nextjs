import Image from 'next/image';
import Link from 'next/link';
import { classed } from '@tw-classed/react';
import { twMerge } from 'tailwind-merge';
import { useNavbarValue } from '../_providers/NavbarProvider';

type Props = {
  classNames?: {
    root?: string;
    image?: string;
    brandName?: string;
  };
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function Brand(props: Props) {
  const { classNames, ...rest } = props;
  const { colorMode, isDarkMode } = useNavbarValue();

  const logoSrc = isDarkMode
    ? '/logo/sgkopi-logo-invert.svg'
    : '/logo/sgkopi-logo.svg';

  const rootProps = {
    className: classNames?.root,
    href: '/',
    ...rest,
  };

  const imageProps = {
    className: classNames?.image,
    alt: 'SG Kopi logo',
    src: logoSrc,
    fill: true,
  };

  const brandNameProps = {
    className: classNames?.brandName,
    colorMode,
  };

  return (
    <Root {...rootProps}>
      <ImageContainer>
        <Image {...imageProps} />
      </ImageContainer>

      <BrandName {...brandNameProps}>SG KOPI</BrandName>
    </Root>
  );
}

const Root = classed(Link, 'flex gap-xs items-center');

const ImageContainer = classed.div(
  'w-[1.3em] md:w-[1.4em] relative block h-full'
);

const BrandName = classed.h2('font-brand text-4', {
  variants: {
    colorMode: {
      light: 'text-fg-emphasized',
      dark: 'text-white',
    },
  },
  defaultVariants: {
    colorMode: 'light',
  },
});
