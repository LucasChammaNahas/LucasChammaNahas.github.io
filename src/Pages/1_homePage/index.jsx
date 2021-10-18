import { useEffect } from 'react';
import { useGlobalState } from '../../Provider';
import programmer from '../../Images/programmer.png'
import './styles.css';

export default function HomePage() {
  const { setPageIndex } = useGlobalState();
  useEffect(() => {
    setPageIndex(0);
  });

  return (
    <div className="welcome-div fade-in">
      <img src={ programmer } alt="programmer" />
      <h1>Lucas Chamma Nahas</h1>
      <h2>Web Developer</h2>
    </div>
  );
};
