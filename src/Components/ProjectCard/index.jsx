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
    starwars:  'Planet Finder',
    trivia:    'Trivia Game',
    ticTacToe: 'Tic Tac Toe',
  };

  const img  = imgObj[project];
  const text = textObj[project];

  return (
    <div 
      className={`project-card-div ${isHovering ? 'project-card-on-hover' : ''}`} 
      onMouseEnter={ () => setIsHovering(true) }
      onMouseLeave={ () => setIsHovering(false) }
    >
      <img src={ img } alt={ project } />
      <p>{ text }</p>
    </div>
  );
};
