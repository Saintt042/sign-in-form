import logo from './images/bbg.jpeg';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <ul className='ul-list'>
         <button className='home'> <li>Home</li></button>
         <button className='user'> <li>User</li></button>
         <button className='contact'> <li>Contact</li></button>
         <button className='blog'> <li>Blog</li></button>
          
          
          
        </ul>
      </nav>
      <img src={logo} className='imags' alt='imgs'/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );

}

export default App;
