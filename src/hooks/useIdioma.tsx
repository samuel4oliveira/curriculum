import { usePathname } from 'next/navigation';

const useIdioma = () => {
  const pathname = usePathname();
  return pathname === '/english' ? 'ingles' : 'portugues';
};

export default useIdioma;
