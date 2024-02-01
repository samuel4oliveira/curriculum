import useIdioma from './useIdioma';

interface Idioma {
  idioma: string;
  nivel: string;
}

const useIdiomas = () => {
  const idioma = useIdioma();
  return idioma === 'portugues' ? idiomas : languages;
};

const idiomas: Idioma[] = [
  {
    idioma: 'Inglês',
    nivel: 'Avançado',
  },
  {
    idioma: 'Português',
    nivel: 'Nativo',
  },
];

const languages: Idioma[] = [
  {
    idioma: 'English',
    nivel: ' Professional proficiency',
  },
  {
    idioma: 'Portuguese',
    nivel: 'Native',
  },
];
export default useIdiomas;
