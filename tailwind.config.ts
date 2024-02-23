import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],

  theme: {
    container: {
      center: true,
      padding: 'var(--space-lg)',
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1366px',
        '3xl': '1536px',
      },
    },

    aspectRatio: {
      square: 'var(--ratio-square)',
      landscape: 'var(--ratio-landscape)',
      portrait: 'var(--ratio-portrait)',
      wide: 'var(--ratio-wide)',
      ultrawide: 'var(--ratio-ultrawide)',
      golden: 'var(--ratio-golden)',
    },

    blur: {
      sm: 'var(--blur-sm)',
      base: 'var(--blur-base)',
      md: 'var(--blur-md)',
      lg: 'var(--blur-lg)',
      xl: 'var(--blur-xl)',
      '2xl': 'var(--blur-2xl)',
      '3xl': 'var(--blur-3xl)',
    },

    borderRadius: {
      none: 'var(--radius-none)',
      xs: 'var(--radius-xs)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      '2xl': 'var(--radius-2xl)',
      '3xl': 'var(--radius-3xl)',
      full: 'var(--radius-full)',
      DEFAULT: 'var(--radius-DEFAULT)',
    },

    borderWidth: {
      xs: 'var(--borderwidth-xs)',
      sm: 'var(--borderwidth-sm)',
      md: 'var(--borderwidth-md)',
      DEFAULT: 'var(--borderwidth-DEFAULT)',
    },

    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
    },

    colors: {
      transparent: 'transparent',
      black: 'black',
      white: 'white',

      gray: {
        50: 'var(--gray-50)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      danger: {
        50: 'var(--danger-50)',
        100: 'var(--danger-100)',
        200: 'var(--danger-200)',
        300: 'var(--danger-300)',
        400: 'var(--danger-400)',
        500: 'var(--danger-500)',
        600: 'var(--danger-600)',
        700: 'var(--danger-700)',
        800: 'var(--danger-800)',
        900: 'var(--danger-900)',
      },
      success: {
        50: 'var(--success-50)',
        100: 'var(--success-100)',
        200: 'var(--success-200)',
        300: 'var(--success-300)',
        400: 'var(--success-400)',
        500: 'var(--success-500)',
        600: 'var(--success-600)',
        700: 'var(--success-700)',
        800: 'var(--success-800)',
        900: 'var(--success-900)',
      },
      warning: {
        50: 'var(--warning-50)',
        100: 'var(--warning-100)',
        200: 'var(--warning-200)',
        300: 'var(--warning-300)',
        400: 'var(--warning-400)',
        500: 'var(--warning-500)',
        600: 'var(--warning-600)',
        700: 'var(--warning-700)',
        800: 'var(--warning-800)',
        900: 'var(--warning-900)',
      },
      info: {
        50: 'var(--info-50)',
        100: 'var(--info-100)',
        200: 'var(--info-200)',
        300: 'var(--info-300)',
        400: 'var(--info-400)',
        500: 'var(--info-500)',
        600: 'var(--info-600)',
        700: 'var(--info-700)',
        800: 'var(--info-800)',
        900: 'var(--info-900)',
      },
      accent: {
        50: 'var(--accent-50)',
        100: 'var(--accent-100)',
        200: 'var(--accent-200)',
        300: 'var(--accent-300)',
        400: 'var(--accent-400)',
        500: 'var(--accent-500)',
        600: 'var(--accent-600)',
        700: 'var(--accent-700)',
        800: 'var(--accent-800)',
        900: 'var(--accent-900)',
      },

      fg: {
        default: 'var(--fg-default)',
        emphasized: 'var(--fg-emphasized)',
        muted: 'var(--fg-muted)',
        subtle: 'var(--fg-subtle)',
        disabled: 'var(--fg-disabled)',
      },

      bg: {
        emphasized: 'var(--bg-emphasized)',
        muted: 'var(--bg-muted)',
        subtle: 'var(--bg-subtle)',
        default: 'var(--bg-default)',
        canvas: 'var(--bg-canvas)',
      },
    },

    transitionDuration: {
      fastest: 'var(--time-fastest)',
      faster: 'var(--time-faster)',
      fast: 'var(--time-fast)',
      normal: 'var(--time-normal)',
      slow: 'var(--time-slow)',
      slower: 'var(--time-slower)',
      slowest: 'var(--time-slowest)',
      DEFAULT: 'var(--time-DEFAULT)',
    },

    lineHeight: {
      none: 'var(--line-none)',
      sm: 'var(--line-sm)',
      md: 'var(--line-md)',
      lg: 'var(--line-lg)',
      DEFAULT: 'var(--line-DEFAULT)',
    },

    fontFamily: {
      brand: 'var(--font-brand)',
      heading: 'var(--font-heading)',
      body: 'var(--font-body)',
    },

    fontSize: {
      1: 'var(--fs-1)',
      2: 'var(--fs-2)',
      3: 'var(--fs-3)',
      4: 'var(--fs-4)',
      5: 'var(--fs-5)',
      6: 'var(--fs-6)',
      7: 'var(--fs-7)',
      8: 'var(--fs-8)',
      9: 'var(--fs-9)',
      10: 'var(--fs-10)',
      DEFAULT: 'var(--fs-DEFAULT)',
    },

    fontWeight: {
      regular: 'var(--fw-regular)',
      semibold: 'var(--fw-semibold)',
      bold: 'var(--fw-bold)',
      extrabold: 'var(--fw-extrabold)',
    },

    boxShadow: {
      xs: 'var(--shadow-xs)',
      sm: 'var(--shadow-sm)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'var(--shadow-xl)',
      '2xl': 'var(--shadow-2xl)',
      inner: 'var(--shadow-inner)',
    },

    spacing: {
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      '2xl': 'var(--space-2xl)',
      '3xl': 'var(--space-3xl)',
      '4xl': 'var(--space-4xl)',
      DEFAULT: 'var(--space-DEFAULT)',
    },

    extend: {
      maxWidth: {
        xs: 'var(--screen-xs)',
        sm: 'var(--screen-sm)',
        md: 'var(--screen-md)',
        lg: 'var(--screen-lg)',
        section: 'var(--screen-xl)',
        content: 'var(--screen-2xl)',
        page: 'var(--screen-3xl)',
      },

      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};

export default config;
