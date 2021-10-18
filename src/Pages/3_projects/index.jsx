import { useEffect } from 'react';
import { useGlobalState } from '../../Provider';
import ProjectCard from '../../Components/ProjectCard';
import './styles.css';

export default function ProjectsPage() {
  const { setPageIndex } = useGlobalState();
  useEffect(() => {
    setPageIndex(2);
  });

  return (
    <div className="projects-div fade-in">
      <ProjectCard project="recipes" />
      <ProjectCard project="starwars" />
      <ProjectCard project="trivia" />
      <ProjectCard project="ticTacToe" />
    </div>
  );
};
