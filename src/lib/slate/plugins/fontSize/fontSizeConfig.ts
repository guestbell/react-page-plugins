export interface FontSizePluginConfig {
  allowedFontSizes?: number[];
  fontSizesNames?: { [key: number]: string };
  fontSizesStyle?: { [key: number]: string };
}

export const defaultConfig: FontSizePluginConfig = {
  allowedFontSizes: [1, 3, 4],
  fontSizesNames: { 1: '70%', 2: '85%', 3: '100%', 4: '130%', 5: '150%' },
  fontSizesStyle: {
    1: '0.75rem',
    2: '0.875rem',
    3: '1rem',
    4: '1.25rem',
    5: '1.5rem',
  },
};
