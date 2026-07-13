import type { KatexOptions } from 'katex';

export interface MathWithKatex {
  children?: string;
  katexOptions?: KatexOptions;
  enableMath: true;
}

interface MathWithoutKatex {
  children?: string;
}

export type MathBlockProps = MathWithoutKatex | MathWithKatex;
