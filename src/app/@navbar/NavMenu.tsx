import { classed } from '@tw-classed/react';
import cs from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <Nav>
      <List>
        <NavItem href='#'>Home</NavItem>
        <NavItem href='#'>Menu</NavItem>
        <NavItem href='#'>Promos</NavItem>
        <NavItem href='#'>About</NavItem>
      </List>
    </Nav>
  );
}

const Nav = classed.nav('hidden md:block');
const List = classed.ul('flex gap-xl');

export const NavItem = classed.a(
  cs.item,
  'group-data-[colorMode=dark]:py-lg',
  'group-data-[colorMode=dark]:text-bg-subtle',
  'group-data-[colorMode=dark]:hover:text-bg-canvas',
);
