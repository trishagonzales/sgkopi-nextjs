import { Button, Drawer } from '@mantine/core';
import * as Hooks from '@mantine/hooks';
import * as Ri from 'react-icons/ri';
import NavMenu from './NavMenu';

export default function MobileMenu() {
  const [isOpen, drawer] = Hooks.useDisclosure(false);

  return (
    <>
      <HamburgerButton onClick={drawer.open} />
      <Drawer position='left' opened={isOpen} onClose={drawer.close}>
        <NavMenu />
      </Drawer>
    </>
  );
}

function HamburgerButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant='ghost' className='block md:hidden' {...props}>
      <Ri.RiMenu2Fill />
    </Button>

    // <Button
    //   variant='ghost'
    //   size='xs'
    //   isIcon
    //   className='block md:hidden'
    //   {...props}
    // >
    //   <Ri.RiMenu2Fill />
    // </Button>
  );
}
