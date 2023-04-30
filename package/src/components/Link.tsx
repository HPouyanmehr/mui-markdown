import { Link as MuiLink, styled } from '@mui/material';

// Types
import type { LinkProps as MuiLinkProps } from '@mui/material';

// Custom Types
export interface LinkProps extends MuiLinkProps {}

const Link = styled(MuiLink)<LinkProps>(() => ({}));

export default Link;
