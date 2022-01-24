import { storiesOf } from '@storybook/react';
import MuiMarkdown from '..';

const stories = storiesOf('MuiMarkdown', module);

const buttons = `
###### with html tag
<button>Click me</button>

###### with MUI component
<Button>Primary</Button>  
  
<Button variant='contained'>Contained</Button>  
  
<Button variant='outlined'>Outlined</Button>  
`;

stories.add('Button', () => {
  return <MuiMarkdown>{buttons}</MuiMarkdown>;
});
