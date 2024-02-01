import useIdioma from './useIdioma';

interface Contato {
  title: string;
  icon: React.ReactNode;
  link?: string;
}

const useContatos = () => {
  const idioma = useIdioma();
  if (idioma === 'ingles') return contacts;
  return contatos;
};

const contatos: Contato[] = [
  {
    icon: (
      <img
        src="./location-outline.svg"
        alt="Ícone de localização"
        className="w-3.5 h-3.5 mb-1 -mr-1"
      />
    ),
    title: 'Cuiabá, MT',
  },
  {
    icon: (
      <img
        src="./mail-outline.svg"
        alt="samuel oliveira email"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'br.samuel.oliveira@gmail.com',
    link: 'mailto: br.samuel.oliveira@gmail.com',
  },
  {
    icon: (
      <img
        src="./call-outline.svg"
        alt="samuel oliveira telefone"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: '(65) 99251-3151',
    link: 'tel:+5565992513151',
  },
  {
    icon: (
      <img
        src="./logo-linkedin.svg"
        alt="samuel oliveira linkedin"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'samuel4oliveira',
    link: 'https://www.linkedin.com/in/samuel4oliveira/',
  },
  {
    icon: (
      <img
        src="./logo-github.svg"
        alt="samuel oliveira github"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'samuel4oliveira',
    link: 'https://github.com/samuel4oliveira/',
  },
];

const contacts: Contato[] = [
  {
    icon: (
      <img
        src="./location-outline.svg"
        alt="Location icon"
        className="w-3.5 h-3.5 mb-1 -mr-1"
      />
    ),
    title: 'Mato Grosso, Brazil',
  },
  {
    icon: (
      <img
        src="./mail-outline.svg"
        alt="samuel oliveira email"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'br.samuel.oliveira@gmail.com',
    link: 'mailto: br.samuel.oliveira@gmail.com',
  },
  {
    icon: (
      <img
        src="./call-outline.svg"
        alt="samuel oliveira telefone"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: '+55 (65) 99251-3151',
    link: 'tel:+5565992513151',
  },
  {
    icon: (
      <img
        src="./logo-linkedin.svg"
        alt="samuel oliveira linkedin"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'samuel4oliveira',
    link: 'https://www.linkedin.com/in/samuel4oliveira/',
  },
  {
    icon: (
      <img
        src="./logo-github.svg"
        alt="samuel oliveira github"
        className="w-3.5 h-3.5 mb-0.5"
      />
    ),
    title: 'samuel4oliveira',
    link: 'https://github.com/samuel4oliveira/',
  },
];

export default useContatos;
