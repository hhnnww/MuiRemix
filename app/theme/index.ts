import { extendColorSchemes } from './extend-colorschemes';
import { extendComponents } from './extend-components';
import { extendShadows } from './extend-shadows';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { extendTypography } from './extend-typography';

export const theme = extendTheme({
	colorSchemes: extendColorSchemes,
	shadows: extendShadows,
	typography: extendTypography,
	components: extendComponents,
});
