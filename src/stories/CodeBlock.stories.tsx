import { storiesOf } from '@storybook/react';

import MuiMarkdown from '..';
import md from './CodeBlock.stories.md';

const stories = storiesOf('MuiMarkdown', module);

stories.add('Code Block', () => {
  return <MuiMarkdown>{md}</MuiMarkdown>;
});
