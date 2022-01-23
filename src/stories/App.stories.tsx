import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

stories.add('App', () => {
  return (
    <MuiMarkdown>{`
# Heading one
## Heading two
### Heading three
[mopeim](mopeim.com)
`}</MuiMarkdown>
  );
});
