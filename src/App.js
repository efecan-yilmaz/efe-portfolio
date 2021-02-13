import './App.css';
import AppBar from './components/AppBar';
import IconHolder from './components/IconHolder';
import SlideButton from './components/SlideButton';

import PPic from './assets/pp.jpg';

function App() {
  return (
    <div className="app">
        <AppBar />
        <div className="welcome">
            <div>
                <p>Welcome! I'm Efe.</p>
                <SlideButton selector=".intro" text="Click to learn more!" />
            </div>
        </div>
        <div className="intro">
            <h1>Who am I?</h1>
            <div className="intro-grid">
                <div className="intro-grid-ppic">
                    <img className="ppic" src={PPic} />
                </div>
                <div className="value">
                    <IconHolder icon="cpu" text="High performance, responsive apps"/>
                    <IconHolder icon="sun" text="Clean and understandable code"/>
                    <IconHolder icon="codesandbox" text="Always progressive architecture"/>
                    <IconHolder icon="message-square" text="Communication with peers and customers"/>
                    <IconHolder icon="mic" text="Include every team member to create the best value"/>
                </div>
                <div className="intro-grid-full-row">
                    <h2>Hi! I am Efe. I am a front-end developer who pursues the goal of creating high performance apps with clean codes. I am a strict believer of team-work and communication. And I am a passionate JavaScript warior. Wanna know about my experiences?</h2>
                </div>
                <div className="intro-grid-full-row">
                    <SlideButton selector=".experience" text="Yes!" />
                </div>
            </div>
        </div>
        <div className="experience">
            <h1>My Experiences</h1>
        </div>
    </div>
  );
}

export default App;
