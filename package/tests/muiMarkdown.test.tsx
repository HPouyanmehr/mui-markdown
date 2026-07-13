import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Highlight, themes } from 'prism-react-renderer';

import {
  MuiMarkdown,
  defaultOverrides,
  getOverrides,
  defaultMdxComponents,
  extractHeadings,
} from '../src';
import { MathBlock } from '../src/client';

const render = (jsx: React.ReactElement) => renderToStaticMarkup(jsx);

describe('MuiMarkdown basics', () => {
  it('renders headings with MUI Typography and anchor ids', () => {
    const html = render(<MuiMarkdown>{'# Hello World'}</MuiMarkdown>);
    expect(html).toContain('MuiTypography');
    expect(html).toContain('id="hello-world"');
    expect(html).toContain('Hello World');
  });

  it('renders links with MUI Link', () => {
    const html = render(<MuiMarkdown>{'[text](https://a.b)'}</MuiMarkdown>);
    expect(html).toContain('MuiLink');
    expect(html).toContain('href="https://a.b"');
  });

  it('renders tables with the MUI table wrapper', () => {
    const md = '| a | b |\n| - | - |\n| 1 | 2 |';
    const html = render(<MuiMarkdown>{md}</MuiMarkdown>);
    expect(html).toContain('MuiTable');
    expect(html).toContain('<td');
  });

  it('renders blockquotes and hr with MUI components', () => {
    const html = render(<MuiMarkdown>{'> quote\n\n---'}</MuiMarkdown>);
    expect(html).toContain('quote');
    expect(html).toContain('MuiDivider');
  });

  it('supports the overrides prop', () => {
    const html = render(
      <MuiMarkdown
        overrides={{
          ...defaultOverrides,
          h1: { component: 'p', props: { style: { color: 'red' } } },
        }}
      >
        {'# Hello'}
      </MuiMarkdown>
    );
    expect(html).toContain('<p');
    expect(html).toContain('color:red');
  });

  it('supports the options prop', () => {
    const html = render(
      <MuiMarkdown options={{ disableAutoLink: true }}>
        {'see https://example.com now'}
      </MuiMarkdown>
    );
    expect(html).not.toContain('<a');
  });
});

describe('markdown-to-jsx v9 behavior (regression)', () => {
  it('escapes dangerous raw HTML tags by default (tagfilter)', () => {
    const html = render(
      <MuiMarkdown>{'<script>alert(1)</script>'}</MuiMarkdown>
    );
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  it('still passes benign raw HTML through', () => {
    const html = render(
      <MuiMarkdown>{'<span style="color:red">x</span>'}</MuiMarkdown>
    );
    expect(html).toContain('style="color:red"');
  });

  it('renders footnotes', () => {
    const html = render(<MuiMarkdown>{'hi[^1]\n\n[^1]: note'}</MuiMarkdown>);
    expect(html).toContain('<sup>');
    expect(html).toContain('note');
  });

  it('renders GFM task lists with MUI Checkbox', () => {
    const html = render(<MuiMarkdown>{'- [x] done\n- [ ] todo'}</MuiMarkdown>);
    expect(html).toContain('MuiCheckbox');
    expect(html).toContain('checked');
    expect(html).toContain('done');
    expect(html).toContain('todo');
  });
});

describe('code blocks', () => {
  const codeMd = "```js\nconsole.log('hi');\n```";

  it('renders simple code blocks without a highlighter', () => {
    const html = render(<MuiMarkdown>{codeMd}</MuiMarkdown>);
    expect(html).toContain('console.log');
  });

  it('renders highlighted code blocks with prism-react-renderer', () => {
    const html = render(
      <MuiMarkdown Highlight={Highlight} themes={themes}>
        {codeMd}
      </MuiMarkdown>
    );
    expect(html).toContain('console');
    // line numbers on by default
    expect(html).toContain('>1</span>');
  });

  it('supports hideLineNumbers', () => {
    const html = render(
      <MuiMarkdown Highlight={Highlight} themes={themes} hideLineNumbers>
        {codeMd}
      </MuiMarkdown>
    );
    expect(html).not.toContain('>1</span>');
  });

  it('supports name and copiable attributes from markdown', () => {
    const md = "```js name=\"src/app.ts\" copiable\nconsole.log('hi');\n```";
    const html = render(
      <MuiMarkdown Highlight={Highlight} themes={themes}>
        {md}
      </MuiMarkdown>
    );
    expect(html).toContain('src/app.ts');
    expect(html).toContain('Copy code');
  });

  it('supports bare hideLineNumbers markdown attribute (v9 infoString regression)', () => {
    const md = "```js hideLineNumbers\nconsole.log('hi');\n```";
    const html = render(
      <MuiMarkdown Highlight={Highlight} themes={themes}>
        {md}
      </MuiMarkdown>
    );
    expect(html).not.toContain('>1</span>');
  });

  it('supports highlighted/removed/inserted line markers', () => {
    const md = '```js highlighted="1" inserted="2"\nconst a = 1;\nconst b = 2;\n```';
    const html = render(
      <MuiMarkdown Highlight={Highlight} themes={themes}>
        {md}
      </MuiMarkdown>
    );
    // inserted line marker (prism splits code into token spans, so match tokens)
    expect(html).toContain('>+</span>');
    expect(html).toContain('const');
  });

  it('uses custom table scrollbar wrapper when enabled', () => {
    const md = '| a |\n| - |\n| 1 |';
    const html = render(
      <MuiMarkdown customTableScrollbar>{md}</MuiMarkdown>
    );
    expect(html).toContain('MuiTable');
  });
});

describe('mermaid diagrams', () => {
  it('routes mermaid code blocks to the DiagramComponent', () => {
    const seen: string[] = [];
    const FakeDiagram = (props: any) => {
      seen.push(String(props.children));
      return <div className='fake-diagram' />;
    };
    const html = render(
      <MuiMarkdown enableMermaid DiagramComponent={FakeDiagram}>
        {'```mermaid\ngraph TD; A-->B;\n```'}
      </MuiMarkdown>
    );
    expect(html).toContain('fake-diagram');
    expect(seen[0]).toContain('graph TD');
  });

  it('renders mermaid blocks as regular code without enableMermaid', () => {
    const html = render(
      <MuiMarkdown>{'```mermaid\ngraph TD; A-->B;\n```'}</MuiMarkdown>
    );
    expect(html).toContain('graph TD');
    expect(html).not.toContain('fake-diagram');
  });
});

describe('math blocks', () => {
  const mathMd = '```math\nE = mc^2\n```';

  it('routes math code blocks to the MathComponent when enableMath is set', () => {
    const seen: string[] = [];
    const FakeMath = (props: any) => {
      seen.push(String(props.children));
      return <div className='fake-math' />;
    };
    const html = render(
      <MuiMarkdown enableMath MathComponent={FakeMath}>
        {mathMd}
      </MuiMarkdown>
    );
    expect(html).toContain('fake-math');
    expect(seen[0]).toContain('E = mc^2');
  });

  it('renders math blocks as regular code without enableMath', () => {
    const html = render(<MuiMarkdown>{mathMd}</MuiMarkdown>);
    expect(html).toContain('E = mc^2');
  });

  it('MathBlock renders a container (katex loads lazily on the client)', () => {
    const html = render(<MathBlock enableMath>{'E = mc^2'}</MathBlock>);
    expect(html).toContain('<div');
  });
});

describe('extractHeadings', () => {
  it('extracts text, level and id', () => {
    const md = '# Hello World\n\ntext\n\n## Sub _section_ two';
    expect(extractHeadings(md)).toEqual([
      { text: 'Hello World', level: 1, id: 'hello-world' },
      { text: 'Sub section two', level: 2, id: 'sub-section-two' },
    ]);
  });

  it('ids match the anchors MuiMarkdown renders', () => {
    const md = '## Some Long Heading';
    const [heading] = extractHeadings(md);
    const html = render(<MuiMarkdown>{md}</MuiMarkdown>);
    expect(html).toContain(`id="${heading.id}"`);
  });

  it('returns an empty array for markdown without headings', () => {
    expect(extractHeadings('just text')).toEqual([]);
  });
});

describe('helpers', () => {
  it('getOverrides keeps custom overrides and default components', () => {
    const overrides = getOverrides({ copiable: true });
    expect(overrides.a).toBe(defaultOverrides.a);
    expect((overrides.pre as any).props.copiable).toBe(true);
  });

  it('defaultMdxComponents exposes the default overrides', () => {
    expect(defaultMdxComponents.a).toBe(defaultOverrides.a);
    expect(defaultMdxComponents.input).toBe(defaultOverrides.input);
  });
});
