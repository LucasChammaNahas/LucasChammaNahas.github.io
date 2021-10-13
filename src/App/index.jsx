import './styles.css';
import Header from '../Components/Header';
import LandingPage from '../Pages/1_landingPage';
import AboutMe from '../Pages/2_aboutMe';
import Projects from '../Pages/3_projects';
import Tools from '../Pages/4_tools';
import Contact from '../Pages/5_contact';

export default function App() {
  return (
    <div className="master-container">
      <Header />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Tools />
      <Contact />
      <p>body</p>
    </div>
  );
}
