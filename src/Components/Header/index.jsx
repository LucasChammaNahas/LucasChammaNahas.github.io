import { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';
import logo from '../../Images/logo.png';

export default function Header() {

  const [pageIndex, setPageIndex] = useState(0);
  let history = useHistory();
  const pagesNames = [
    'welcome',
    'about-me',
    'projects',
    'skills',
    'contact',
  ]

  const handleClick = (id) => {
    setPageIndex(id);
    history.push("/home");
  };

  return (
    <header>

      <div className="logo">
        <img src={ logo } alt="Logo" />
        <p>.LCN</p>
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
