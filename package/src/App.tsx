import MuiMarkdown from 'MuiMarkdown';

const md = '[Contenido](https://contenidojs.com)';

const App = () => {
  return (
    <div>
      <MuiMarkdown>{md}</MuiMarkdown>
    </div>
  );
};

export default App;
