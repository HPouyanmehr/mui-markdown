import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const lists = `
## Unordered list
- item one
- item two
- item four

## Ordered list
1. item one
2. item two
3. item three

## Nested list
* item
* item
  * nested item
  * nested item
`;

stories.add('Lists', () => {
  return <MuiMarkdown>{lists}</MuiMarkdown>;
});
