import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

stories.add('Code Block', () => {
  return <MuiMarkdown>{'# hi'}</MuiMarkdown>;
});
