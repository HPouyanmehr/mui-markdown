import fs from 'fs';

import { Container } from '@mui/material';
import { MuiMarkdown } from 'mui-markdown';
import { MermaidConfig } from 'mermaid';

const mermaidConfig: MermaidConfig = {
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Fira Code',
};

export default async function Home() {
  const md = await loadMd();

  return (
    <Container>
      <MuiMarkdown enableMermaid mermaidConfig={mermaidConfig}>
        {md}
      </MuiMarkdown>
    </Container>
  );
}

const loadMd = async () => {
  const filePath = process.cwd() + '/src/posts/1.md';
  const content = fs.readFileSync(filePath, { encoding: 'utf8' });

  return content;
};
