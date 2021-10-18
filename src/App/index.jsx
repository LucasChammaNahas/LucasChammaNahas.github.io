import './styles.css';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useGlobalState } from '../Provider';
import Header from '../Components/Header';
import HomePage from '../Pages/1_homePage';
import AboutMe from '../Pages/2_aboutMe';
import Projects from '../Pages/3_projects';
import Skills from '../Pages/4_skills';
import Contact from '../Pages/5_contact';

export default function App() {

  let ScrollTimeout;
  let history = useHistory();
  const routesArr = [
    '/home',
    '/about-me',
    '/projects',
    '/skills',
    '/contact',
  ];
  const { pageIndex } = useGlobalState();
  
  function handleScroll({ deltaY }) {
    clearInterval(ScrollTimeout);
    ScrollTimeout = setTimeout(() => {
      if (deltaY > 0 && pageIndex < 4) history.push(routesArr[pageIndex + 1]);
      if (deltaY < 0 && pageIndex > 0) history.push(routesArr[pageIndex - 1]);
    }, 100);
  }

  function handleKeyPress({ key }) {
    if (key === 'ArrowDown' && pageIndex < 4) history.push(routesArr[pageIndex + 1]);
    if (key === 'ArrowUp'   && pageIndex > 0) history.push(routesArr[pageIndex - 1]);
  }

  return (
    <div
      className="master-container"
      id="master-container"
      onWheel={ handleScroll }
      onKeyDown={ handleKeyPress }
      tabIndex="0"
    >
      <Header />
      <Switch>
        <Route exact path="/home" component={ HomePage } />
        <Route exact path="/about-me" component={ AboutMe } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/skills" component={ Skills } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route><Redirect to="/home" /></Route>
      </Switch>
    </div>
  );
}
