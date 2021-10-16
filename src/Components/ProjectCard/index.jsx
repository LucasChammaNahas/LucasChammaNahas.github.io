import recipes from '../../Images/recipes.png';
import starwars from '../../Images/starwars.png';
import trivia from '../../Images/trivia.png';
import ticTacToe from '../../Images/ticTacToe.png';
import './styles.css';

export default function ProjectCard({ project }) {
  let img;
  if      (project === 'recipes' ) img = recipes;
  else if (project === 'starwars') img = starwars;
  else if (project === 'trivia'  ) img = trivia;
  else img = ticTacToe;

  return (
    <img src={img} alt="" />
  );
};
