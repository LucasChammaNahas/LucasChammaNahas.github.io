import { useEffect } from 'react';
import { useGlobalState } from '../../Provider';
import profile from '../../Images/profile.png';
import './styles.css';

export default function AboutMePage() {
  const { setPageIndex } = useGlobalState();
  useEffect(() => {
    setPageIndex(1);
  });

  return (
    <div className="about-me-div fade-in">
      <div>
        <p>
          Web Development and Computer Science
          student with entry-level knowledge of
          programming and relative experience
          with startup environments.
        </p> 
        <p>
          I have worked and built projects with small teams, 
          and I am looking for a role where I can expand
          my knowledge and continue to learn from
          more experienced people.
        </p> 
      </div>     
      <img src={ profile } alt="Profile" />
    </div>
  );
};
