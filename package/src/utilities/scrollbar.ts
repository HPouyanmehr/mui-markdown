// Types
import type { Palette } from '@mui/joy';

const getScrollbarStyles = (palette: Palette) => ({
  '::-webkit-scrollbar': {
    width: '8px',
    height: '6px',
  },
  '::-webkit-scrollbar-track': {
    background:
      palette.mode === 'dark'
        ? 'background.body'
        : 'background.body',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  '::-webkit-scrollbar-thumb': {
    background: 'background.body',
    borderRadius: '8px',
  },
});

export default getScrollbarStyles;
