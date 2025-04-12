import { Link as MuiLink, type LinkProps as MuiLinkProps } from '@mui/material';

// Module Types
export interface LinkProps extends MuiLinkProps {}

export const Link = (props: LinkProps) => <MuiLink {...props} />;
