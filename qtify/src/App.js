import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Logo from './Component/Logo/Logo';
import Hero from './Component/Hero/Hero';
import Cart from './Component/Cart/Cart';
import Section from './Component/Section/Section';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
          <Navbar />
          <Hero />
          <Section/>
    </>
    
  );
}

export default App;
