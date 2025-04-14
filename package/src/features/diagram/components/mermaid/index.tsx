'use client';

import { useEffect, useState } from 'react';
import type { Mermaid } from 'mermaid';

// Core Components
import { Box } from '../../../../core/components/layout/box';

// Module Types
import type { DiagramProps } from './type';

export const Diagram = (props: DiagramProps) => {
  // Props
  const { children } = props;

  // Hooks
  const [mermaidInstance, setMermaidInstance] = useState<Mermaid | null>(null);

  useEffect(() => {
    if ('enableMermaid' in props) {
      if (props.enableMermaid && mermaidInstance === null) {
        import('mermaid').then((module) => {
          module.default.initialize({ ...props.mermaidConfig });
          setMermaidInstance(module.default);
        });
      }
    }
  }, [props]);

  useEffect(() => {
    if (mermaidInstance) {
      mermaidInstance.contentLoaded();
    }
  }, [mermaidInstance, children]);

  return <Box className='mermaid'>{children}</Box>;
};
