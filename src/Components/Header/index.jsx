import { useHistory } from "react-router-dom";
import { useGlobalState } from '../../Provider';
import './styles.css';

export default function Header() {
  let history = useHistory();
  const { pageIndex } = useGlobalState();
  const routesArr = [
    '/home',
    '/about-me',
    '/projects',
    '/skills',
    '/contact',
  ];

  const handleClick = (id) => {
    history.push(routesArr[id]);
  };

  return (
    <header>

      <div className="logo">
        <p>{ '{ LCN }' }</p>
      </div>

      <nav id="nav" className="nav">

        <button
          onClick={ () => handleClick(0) }
          className={ pageIndex === 0 ? 'selected' : '' }
          >HOME
        </button>
        
        <button
          onClick={ () => handleClick(1) }
          className={ pageIndex === 1 ? 'selected' : '' }
          >ABOUT ME
        </button>
        
        <button
          onClick={ () => handleClick(2) }
          className={ pageIndex === 2 ? 'selected' : '' }
          >PROJECTS
        </button>
        
        <button
          onClick={ () => handleClick(3) }
          className={ pageIndex === 3 ? 'selected' : '' }
          >SKILLS
        </button>
        
        <button
          onClick={ () => handleClick(4) }
          className={ pageIndex === 4 ? 'selected' : '' }
          >CONTACT
        </button>

      </nav>
    </header>
  );
};
