import './styles.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import WelcomePage from '../Pages/1_welcomePage';
import AboutMe from '../Pages/2_aboutMe';
import Projects from '../Pages/3_projects';
import Skills from '../Pages/4_skills';
import Contact from '../Pages/5_contact';

export default function App() {
  return (
    <div className="master-container">
      <Header />
      <Switch>
        <Route exact path="/welcome" component={ WelcomePage } />
        <Route exact path="/about-me" component={ AboutMe } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/skills" component={ Skills } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/"><Redirect to="/welcome" /></Route>
        <Route><Redirect to="/welcome" /></Route>
      </Switch>
    </div>
  );
}
