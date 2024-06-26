module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},

    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '30em',
        'mantine-breakpoint-sm': '40em',
        'mantine-breakpoint-md': '48em',
        'mantine-breakpoint-lg': '64em',
        'mantine-breakpoint-xl': '80em',
        'mantine-breakpoint-2xl': '85.375em',
        'mantine-breakpoint-3xl': '96em',
      },
    },
  },
};
