import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const headings = `
# Heading one

## Heading two

### Heading three

#### Heading four

##### Heading five

###### Heading six
`;

stories.add('Headings', () => {
  return <MuiMarkdown>{headings}</MuiMarkdown>;
});
