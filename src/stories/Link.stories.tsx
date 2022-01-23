import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const links = `
<a>Link without href</a>  
<a href='#'>Link with href</a>  
<a href='#' target='_blank'>Link with href and target</a>  
`;

stories.add('Links', () => {
  return <MuiMarkdown>{links}</MuiMarkdown>;
});
