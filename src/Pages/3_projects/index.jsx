import ProjectCard from '../../Components/ProjectCard';
import './styles.css';

export default function ProjectsPage() {
  return (
    <div className="projects-div">
      <ProjectCard project="recipes" />
      <ProjectCard project="starwars" />
      <ProjectCard project="trivia" />
      <ProjectCard project="ticTacToe" />
    </div>
  );
};
