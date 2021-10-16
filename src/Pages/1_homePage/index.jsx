import programmer from '../../Images/programmer.png'
import './styles.css';

export default function HomePage() {
  return (
    <div className="welcome-div">
      <img src={ programmer } alt="programmer" />
      <h1>Lucas Chamma Nahas</h1>
      <h2>Web Developer</h2>
    </div>
  );
};
