import { MuiMarkdown } from 'mui-markdown';

const md = `
# Heading One

## Heading Two
`;

const App = () => (
  <div className='App'>
    <MuiMarkdown>{md}</MuiMarkdown>
  </div>
);
export default App;
