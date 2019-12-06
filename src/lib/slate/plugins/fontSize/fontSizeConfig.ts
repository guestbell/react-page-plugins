export interface FontSizePluginConfig {
  allowedFontSizes?: number[];
  fontSizesNames?: { [key: number]: string };
  fontSizesStyle?: { [key: number]: string };
}

export const defaultConfig: FontSizePluginConfig = {
  allowedFontSizes: [1, 2, 4, 5],
  fontSizesNames: { 1: 'Smaller', 2: 'Small', 4: 'Large', 5: 'Larger' },
  fontSizesStyle: {
    1: '0.8rem',
    2: '0.9rem',
    4: '1.25rem',
    5: '1.5rem',
  },
};
