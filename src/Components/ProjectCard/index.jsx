import React, { useState } from 'react';
import recipes   from '../../Images/recipes.png';
import starwars  from '../../Images/starwars.png';
import trivia    from '../../Images/trivia.png';
import ticTacToe from '../../Images/ticTacToe.png';
import './styles.css';


export default function ProjectCard({ project }) {
  
  const [isHovering, setIsHovering] = useState(false);

  const imgObj = {
    recipes,
    starwars,
    trivia,
    ticTacToe,
  };

  const textObj = {
    recipes:   'Recipes App',
    starwars:  'Planet Search',
    trivia:    'Trivia Game',
    ticTacToe: 'Tic Tac Toe',
  };

  const linkObj = {
    recipes:   'Recipes-App',
    starwars:  'Starwars-Planet-Search',
    trivia:    'Trivia-Game',
    ticTacToe: 'Tic-Tac-Toe',
  };


  const img  = imgObj[project];
  const text = textObj[project];
  const link = linkObj[project];

  return (
    <a 
      className={`project-card-div ${isHovering ? 'project-card-on-hover' : ''}`} 
      href={ `https://lucaschammanahas.github.io/${link}/` }
      target="_blank"
      rel="noreferrer"
      onMouseEnter={ () => setIsHovering(true) }
      onMouseLeave={ () => setIsHovering(false) }
    >
      <img src={ img } alt={ project } />
      <p>{ text }</p>
    </a>
  );
};




