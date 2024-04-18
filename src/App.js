import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  const users = [
    {
      firstname: "saeide",
    },
    {
      firstname: "shima",
    },
    {
      firstname: "sara",
    },
    {
      firstname: "samane",
    }

  ]
  const user = "Sara"

  const elementName = <h1>{users[0].firstname}</h1>

  return (
    <div className="App">
      <header className="App-header">

        {/* hello */}
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {elementName}
        <p>
          ________
        </p>
        {user ? <h1>hello {user}</h1> : <h1>hello user</h1>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        {
          users.map(item => (
            <h5>{item.firstname}</h5>

          ))}

      </header>

    </div>
  );
}

export default App;
