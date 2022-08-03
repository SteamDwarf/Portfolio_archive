import './app.scss';
import About from './components/about/about.component';
import Header from './components/header/header.component';
import HeaderNav from './components/header/__nav/header__nav.component';
import Projects from './components/projects/projects.component';
import Skills from './components/skills/skills.component';


function App() {
  return (
    <div className="app app__container">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
