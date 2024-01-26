import { JoyuiMarkdown } from 'joyui-markdown';

const md = `
# Heading One

## Heading Two
`;

const App = () => (
  <div className='App'>
    <JoyuiMarkdown>{md}</JoyuiMarkdown>
  </div>
);
export default App;
