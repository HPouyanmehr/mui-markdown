import MuiMarkdown from 'MuiMarkdown';

const md = `

| First Name | Last Name | Home Num | Age | Phone Number |
|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 |
|   |   |   |   |   |
|   |   |   |   |   |

`;

const App = () => {
  return (
    <div>
      <MuiMarkdown>{md}</MuiMarkdown>
    </div>
  );
};

export default App;
