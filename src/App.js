import * as React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://api.mocki.io/v1/b043df5a").then(response => response.json()).then(responseData => setData(responseData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data?.map(user => (
            <div>{user.name}, {user.city}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
