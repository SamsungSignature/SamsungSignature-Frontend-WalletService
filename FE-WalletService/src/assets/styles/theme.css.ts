import {colors} from './colors.css';

export type SpaceTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Space = Record<SpaceTokens, string>;

const space = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '32px',
  5: '64px',
  6: '128px',
};

// add negative margins
Object.assign(
  space,
  Object.entries(space).reduce(
    (a, [key, val]) => ({
      ...a,
      [-1 * Number(key)]: `-${val}`,
    }),
    {},
  ),
);

const fontSizes = {
  0: '12px',
  1: '14px',
  2: '16px',
  3: '18px',
  4: '24px',
  5: '32px',
  6: '48px',
  7: '64px',
};

const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

const fonts = {
  text: '"DM Sans", sans-serif',
  heading: '"DM Sans", sans-serif',
  mono: 'DM Mono, Menlo, monospace',
};

const sizes = {
  container: '1280px',
  narrow: '1024px',
  wide: '1440px',
  tight: '848px',
  avatar: '48px',
  navGroupBoxMin: '300px',
  navGroupBoxMax: '400px',
  navIcon: '32px',
  navIconSmall: '30px',
};

export type Radii = 'button' | 'large' | 'circle';

const radii: Record<Radii, string> = {
  button: '10px',
  large: '24px',
  circle: '99999px',
};

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  sizes,
  radii,
};
