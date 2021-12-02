import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Main as PortfolioMain } from './Portfolio/components/Main';
import { Main as BlogMain } from './Blog/components/Main';
import { NotFound } from './Shared/components/NotFound';

function App() {
  return (
    <Router>
        <main className="app">
            <Routes>
                <Route exact path="/" element={<PortfolioMain />} />
                <Route exact path="/blog" element={<BlogMain />} />
                <Route path='*' element={<Navigate to="/404" />} />
                <Route path='/404' element={<NotFound />} />
            </Routes>
        </main>
    </Router>
  );
}

export default App;
