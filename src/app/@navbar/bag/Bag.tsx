import Button from '@/primitives/button';
import { Drawer } from '@mantine/core';
import * as Hooks from '@mantine/hooks';
import * as Fa6 from 'react-icons/fa6';

export default function Bag() {
  const [isOpen, drawer] = Hooks.useDisclosure(false);

  return (
    <>
      <Button.Icon variant='muted' onClick={drawer.open}>
        <Fa6.FaBagShopping />
      </Button.Icon>

      <Drawer position='right' opened={isOpen} onClose={drawer.close}></Drawer>
    </>
  );
}
