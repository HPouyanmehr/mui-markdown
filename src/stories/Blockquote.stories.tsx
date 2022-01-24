import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const blockquote = `
###### single line blockquote
> A simple block of quote.

###### complex blockquote
> This blockquote contains a list
> - item one
> - item two

`;

stories.add('Blockquote', () => {
  return (
    <>
      <MuiMarkdown>{blockquote}</MuiMarkdown>
      <br />
      <MuiMarkdown blockquoteBorderColor='gold'>
        {`> A block of quote with custom border color`}
      </MuiMarkdown>
    </>
  );
});
