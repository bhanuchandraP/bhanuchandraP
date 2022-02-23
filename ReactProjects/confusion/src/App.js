import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color='warning'>
          <div className='container'>
            <NavbarBrand href="/">CONFUSION</NavbarBrand>
          </div>
      </Navbar>
    </div>
  );
}

export default App;
