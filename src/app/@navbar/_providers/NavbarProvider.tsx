import * as React from 'react';

type ColorMode = 'dark' | 'light';
type NavbarState = {
  colorMode: ColorMode;
  isDarkMode: boolean;
};

const NavbarContext = React.createContext({} as NavbarState);

export function useNavbarValue() {
  return React.useContext(NavbarContext);
}

export default function NavbarProvider(props: React.PropsWithChildren) {
  const [colorMode, setColorMode] = React.useState<ColorMode>('dark');

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
    <NavbarContext.Provider
      value={{
        colorMode,
        isDarkMode,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
}
