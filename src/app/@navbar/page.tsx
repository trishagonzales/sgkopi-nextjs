'use client';

import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { classed } from '@tw-classed/react';
import Sheet from '@/shadcn/sheet';
import Input from '@/shadcn/input';
import * as Fa6 from 'react-icons/fa6';
import * as Ri from 'react-icons/ri';

import Button from '@/primitives/button/Button';
import Brand from './Brand';
import NavMenu, { NavItem } from './NavMenu';

export default function Navbar() {
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>('dark');

  React.useEffect(() => {
    window.onscroll = () => {
      const userScrolled = Boolean(
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      );

      if (userScrolled) {
        setColorMode('light');
      } else {
        setColorMode('dark');
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  const isDarkMode = colorMode === 'dark';

  return (
    <Header colorMode={colorMode}>
      <div className='flex gap-sm'>
        <MobileNav />
        <Brand brandNameClass='hidden xs:block' isDarkMode={isDarkMode} />
      </div>

      <NavMenu />

      <div className='flex gap-0 items-center'>
        <NavItem className='block mr-md md:m-0 md:hidden'>Menu</NavItem>
        <Search />
        <Wishlist />
        <Bag />
        <Account />
      </div>
    </Header>
  );
}

const Header = classed.header(
  'container-3xl w-full px-sm md:px-lg',
  'flex items-center content-center justify-between',
  'fixed top-0 group shadow-md',
  {
    variants: {
      colorMode: {
        light: 'bg-bg-default',
        dark: 'bg-[#00000000] border-b-[1px] border-[#222]',
      },
    },
    dataAttributes: ['colorMode'],
  }
);

function MobileNav() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <HamburgerButton />
      </Sheet.Trigger>
      <Sheet.Content side='left'>
        <NavMenu />
      </Sheet.Content>
    </Sheet>
  );
}

function HamburgerButton() {
  return (
    <Button variant='ghost' size='xs' isIcon className='block md:hidden'>
      <Ri.RiMenu2Fill />
    </Button>
  );
}

function Search() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant='ghost' size='xs' isIcon className='hidden md:block'>
          <Fa6.FaMagnifyingGlass />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          <Input placeholder='Search' />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Wishlist = () => (
  <Button variant='ghost' size='xs' isIcon>
    <Fa6.FaHeart />
  </Button>
);

function Bag() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant='ghost' size='xs' isIcon>
          <Fa6.FaBagShopping />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side='left'>
        <NavMenu />
      </Sheet.Content>
    </Sheet>
  );
}

function Account() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant='ghost' size='xs' isIcon>
          <Fa6.FaUser />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
