function App() {

  localStorage.setItem('bro', JSON.stringify(['slurp', 'slip']))
  return (
    <div className="App">
      <header className="App-header">
        <p>
          bro Jancok
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a>
      </header>
    </div>
  );
}

export default App;
