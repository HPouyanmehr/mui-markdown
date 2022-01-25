import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

stories.add('Inline Code', () => {
  return (
    <>
      <MuiMarkdown>
        {
          '<h2>Basic inline code</h2><p>To commit changes, first you need to add them with this command`git add .`</p>'
        }
      </MuiMarkdown>
      <MuiMarkdown inlineCodeBgColor='gold'>
        {
          '<h2>Custom background color</h2><p>Install the package via `npm i mui-markdown` or `yarn add mui-markdown`</p>'
        }
      </MuiMarkdown>
      <MuiMarkdown inlineCodeColor='dodgerblue'>
        {
          '<h2>Custom text color</h2><p>Install the package via `npm i mui-markdown` or `yarn add mui-markdown`</p>'
        }
      </MuiMarkdown>
    </>
  );
});
