import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AppBar from './Portfolio/components/AppBar';
import { Main as PortfolioMain } from './Portfolio/components/Main';
import { Main as BlogMain } from './Blog/components/Main';

function App() {
  return (
    <Router>
        <main className="app">
            <AppBar />
            <Routes>
                <Route exact path="/" element={<PortfolioMain/>} />
            </Routes>
        </main>
    </Router>
  );
}

export default App;
