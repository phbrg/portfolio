import Lateral from './components/Lateral';
import Projects from './components/Projects';
import About from './components/About';

import './App.css';

function App() {
  return (
    <main className="App">
      <Lateral />
      <div className="content">
        <About />
        <Projects />
      </div>
    </main>
  );
}

export default App;
