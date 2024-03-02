'use client';

import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    grayscale: [
      '#fbfaf7', // grayscale 0
      '#f8f0da', // grayscale 1
      '#f0dbb2', // grayscale 2
      '#dbb57e', // grayscale 3
      '#c2894f', // grayscale 4
      '#a5682e', // grayscale 5
      '#874d1e', // grayscale 6
      '#673a19', // grayscale 7
      '#462713', // grayscale 8
      '#2c180d', // grayscale 9
    ],
    accent: [
      '#fcfbf8', // accent 0
      '#faf0e0', // accent 1
      '#f4d7be', // accent 2
      '#e5ae8e', // accent 3
      '#d7805e', // accent 4
      '#c15d3c', // accent 5
      '#a44327', // accent 6
      '#7d321f', // accent 7
      '#572216', // accent 8
      '#35150e', // accent 9
    ],
    danger: [
      '#fdfcfa', // danger 0
      '#fbf0ed', // danger 1
      '#f8cfda', // danger 2
      '#eea1b5', // danger 3
      '#eb718d', // danger 4
      '#de4e6b', // danger 5
      '#c7344c', // danger 6
      '#a02738', // danger 7
      '#741b25', // danger 8
      '#471114', // danger 9
    ],
    warning: [
      '#fbfaf4', // warning 0
      '#f9f0bd', // warning 1
      '#f1dd81', // warning 2
      '#dcb84f', // warning 3
      '#bd8e2a', // warning 4
      '#9e6f15', // warning 5
      '#80550d', // warning 6
      '#62400c', // warning 7
      '#432c0b', // warning 8
      '#2c1b08', // warning 9
    ],
    success: [
      '#f2f6f3', // success 0
      '#dff0e6', // success 1
      '#b5e6c5', // success 2
      '#7acb94', // success 3
      '#35ab62', // success 4
      '#25903c', // success 5
      '#1f7a2b', // success 6
      '#1d5d24', // success 7
      '#15401d', // success 8
      '#0f2717', // success 9
    ],
    info: [
      '#eff6f5', // info 0
      '#d0f0f4', // info 1
      '#9be6e6', // info 2
      '#61cbc8', // info 3
      '#27aca2', // info 4
      '#1c907c', // info 5
      '#197963', // info 6
      '#175d4d', // info 7
      '#123f39', // info 8
      '#0c272a', // info 9
    ],
  },
});

export default function Mantine(props: React.PropsWithChildren) {
  return <MantineProvider theme={theme}>{props.children}</MantineProvider>;
}
