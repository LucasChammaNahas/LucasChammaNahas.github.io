import { useEffect } from 'react';
import { useGlobalState } from '../../Provider';
import './styles.css';

export default function ContactPage() {
  const { setPageIndex } = useGlobalState();
  useEffect(() => {
    setPageIndex(4);
  });

  return (
    <div>ContactPage</div>
  );
};
