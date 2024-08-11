import { Link as MuiLink } from '@mui/material';

// Types
import type { FC } from 'react';
import type { LinkProps as MuiLinkProps } from '@mui/material';

// Custom Types
export interface LinkProps extends MuiLinkProps {}

const Link: FC<LinkProps> = (props) => <MuiLink {...props} />;

export default Link;
