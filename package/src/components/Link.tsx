import { Link as JoyuiLink, styled } from '@mui/joy';

// Types
import type { LinkProps as JoyuiLinkProps } from '@mui/joy';

// Custom Types
export interface LinkProps extends JoyuiLinkProps {}

const Link = styled(JoyuiLink)<LinkProps>(() => ({}));

export default Link;
