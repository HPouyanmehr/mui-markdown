import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const table = `
| Title one   | Title two   |
| ----------- | ----------- |
| Text        | Text        |
| Text        | Text        |
`;

stories.add('Table', () => {
  return <MuiMarkdown>{table}</MuiMarkdown>;
});
