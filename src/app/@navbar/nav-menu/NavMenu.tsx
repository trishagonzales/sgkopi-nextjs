import cs from './navMenu.module.css';
import { useNavbarValue } from '../_providers/NavbarProvider';
import { classed } from '@/lib/classed';

export default function NavMenu() {
  const { isDarkMode } = useNavbarValue();

  console.log({ isDarkMode });

  return (
    <Nav>
      <List>
        <NavItem isDarkMode={isDarkMode} href='#'>
          Home
        </NavItem>
        <NavItem isDarkMode={isDarkMode} href='#'>
          Menu
        </NavItem>
        <NavItem isDarkMode={isDarkMode} href='#'>
          Promos
        </NavItem>
        <NavItem isDarkMode={isDarkMode} href='#'>
          About
        </NavItem>
      </List>
    </Nav>
  );
}

const Nav = classed.nav('hidden md:block');
const List = classed.ul('flex gap-xl');

export const NavItem = classed.a(cs.item, {
  variants: {
    isDarkMode: {
      true: '!py-lg text-bg-subtle hover:text-bg-canvas',
    },
  },
  defaultVariants: {
    isDarkMode: true,
  },
});
