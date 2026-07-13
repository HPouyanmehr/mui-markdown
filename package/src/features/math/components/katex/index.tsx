'use client';

import { useEffect, useState } from 'react';

// Core Components
import { Box } from '../../../../core/components/layout/box';

// Module Types
import type { MathBlockProps } from './type';

export const MathBlock = (props: MathBlockProps) => {
  // Props
  const { children = '' } = props;

  // Hooks
  const [html, setHtml] = useState('');

  useEffect(() => {
    if ('enableMath' in props && props.enableMath) {
      let active = true;

      import('katex')
        .then((module) => {
          const katex = module.default;

          if (active) {
            setHtml(
              katex.renderToString(children, {
                displayMode: true,
                throwOnError: false,
                ...('katexOptions' in props ? props.katexOptions : undefined),
              })
            );
          }
        })
        .catch(() => {
          console.error(
            "Make sure you've installed 'katex' to render math blocks."
          );
        });

      return () => {
        active = false;
      };
    }
  }, [props, children]);

  return (
    <Box
      sx={{ overflowX: 'auto', my: 2 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
