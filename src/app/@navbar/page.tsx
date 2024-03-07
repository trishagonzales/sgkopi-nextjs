'use client';

import * as React from 'react';
import * as Hooks from '@mantine/hooks';
import * as Fa6 from 'react-icons/fa6';
import { Input, Modal } from '@mantine/core';

import { classed, classedCore } from '@/lib/classed';
import Button from '@/primitives/button';
import NavbarProvider, { useNavbarValue } from './_providers/NavbarProvider';
import Brand from './brand/Brand';
import NavMenu, { NavItem } from './nav-menu/NavMenu';
import MobileMenu from './nav-menu/NavMenuMobile';
import Bag from './bag/Bag';
import AccountMenu from './account/AccountMenu';

export default function Navbar() {
  return (
    <NavbarProvider>
      <Header>
        <BrandGroup>
          <MobileMenu />
          <Brand classNames={{ brandName: 'hidden xs:block' }} />
        </BrandGroup>

        <NavMenu />

        <ButtonGroup>
          <NavItem className='block mr-md md:m-0 md:hidden'>Menu</NavItem>
          <Search />
          <Wishlist />
          <Bag />
          <AccountMenu />
        </ButtonGroup>
      </Header>
    </NavbarProvider>
  );
}

function Header(props: React.PropsWithChildren) {
  const { colorMode } = useNavbarValue();

  return (
    <header
      className={classedCore(
        'container-3xl w-full px-sm md:px-lg',
        'flex items-center content-center justify-between',
        'fixed top-0 group shadow-sm',
        {
          variants: {
            colorMode: {
              light: 'bg-bg-default',
              dark: 'bg-[#00000000] border-b-[1px] border-[#222]',
            },
          },
        }
      )({ colorMode })}
    >
      {props.children}
    </header>
  );
}

const BrandGroup = classed.div('flex gap-sm');
const ButtonGroup = classed.div('flex gap-xs items-center');

function Search() {
  const [isOpen, modal] = Hooks.useDisclosure(false);

  return (
    <>
      <Button.Icon
        className='hidden md:block'
        variant='solid'
        onClick={modal.open}
      >
        <Fa6.FaMagnifyingGlass />
      </Button.Icon>

      <Modal opened={isOpen} onClose={modal.close} title='Search'>
        <Input placeholder='Search' />
      </Modal>
    </>
  );
}

const Wishlist = () => (
  <Button.Icon variant='outline'>
    <Fa6.FaHeart />
  </Button.Icon>
);
