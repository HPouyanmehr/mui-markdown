import MuiMarkdown from 'MuiMarkdown';

const md = `

> This is a blockquote...

Normal text

> این یک نقل قول است...

`;

const App = () => {
  return (
    <div>
      <MuiMarkdown>{md}</MuiMarkdown>
    </div>
  );
};

export default App;
