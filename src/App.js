import './App.css';
import AppBar from './components/AppBar';
import { ArrowRight } from 'react-feather';

function App() {
  return (
    <div className="app">
        <AppBar />
        <div className="welcome">
            <div>
                <p>Welcome! I'm Efe.</p>
                <span className="main-button">Click to learn more!<ArrowRight className="button-icon"/></span>
            </div>
        </div>
    </div>
  );
}

export default App;
