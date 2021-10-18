import { useEffect } from 'react';
import { useGlobalState } from '../../Provider';
import './styles.css';

export default function SkillsPage() {
  const { setPageIndex } = useGlobalState();
  useEffect(() => {
    setPageIndex(3);
  });

  return (
    <div>Skills</div>
  );
};
