import type { ReactNode } from 'react';
import type { MermaidConfig } from 'mermaid';

export interface DiagramWithMermaid {
  children?: ReactNode;
  mermaidConfig?: MermaidConfig;
  enableMermaid: true;
}

interface DiagramWithoutMermaid {
  children?: ReactNode;
}

export type DiagramProps = DiagramWithoutMermaid | DiagramWithMermaid;
