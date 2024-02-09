import './App.css';
import Heading from './components/Heading';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Example from './components/Example';
import mylove from './mylove.jpg';
import Btn from './components/Btn';
import ModeToggle from './components/ModeToggle';

function Picture(props) {
  return <img className="mylove" src={mylove} alt="My Love" />;
}


function App() {
  return ( 
    <div className="App"> 
      <ModeToggle />
    </div> 
  ); 
} 
 
export default App;
