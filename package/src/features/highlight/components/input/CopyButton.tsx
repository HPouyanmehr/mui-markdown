'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { IconButton, Tooltip, type IconButtonProps } from '@mui/material';

// Module Types
interface CopyButtonProps extends Omit<IconButtonProps, 'onClick'> {
  code: string;
  copiedLabel?: string;
  copyLabel?: string;
  copyIcon?: ReactNode;
  copiedIcon?: ReactNode;
}

// Default MUI-based icons (Check and ContentCopy from MUI icons)
const DefaultCopyIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
  </svg>
);

const DefaultCopiedIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
  </svg>
);

export const CopyButton = ({
  code,
  copiedLabel = 'Copied!',
  copyLabel = 'Copy code',
  copyIcon,
  copiedIcon,
  sx,
  ...iconButtonProps
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Tooltip title={copied ? copiedLabel : copyLabel}>
      <IconButton
        onClick={handleCopy}
        size='small'
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          opacity: 0.7,
          backgroundColor: 'action.hover',
          '&:hover': {
            opacity: 1,
            backgroundColor: 'action.selected',
          },
          ...sx,
        }}
        {...iconButtonProps}
      >
        {copied
          ? copiedIcon || <DefaultCopiedIcon />
          : copyIcon || <DefaultCopyIcon />}
      </IconButton>
    </Tooltip>
  );
};
