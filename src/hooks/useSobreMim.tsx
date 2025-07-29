import useIdioma from './useIdioma';

interface Idioma {
  idioma: string;
  nivel: string;
}

const useSobreMim = () => {
  const idioma = useIdioma();
  return idioma === 'portugues' ? sobreMim : aboutMe;
};

const sobreMim =
  'Sou um desenvolvedor fullstack, focado em desenvolvimento Frontend e Backend. Meus conhecimentos abrangem Typescript, Javascript e React para a construção de interfaces leves e bonitas. No lado do servidor, desenvolvo aplicações eficientes e seguras com C# e ASP.NET, integrando-as a bancos de dados SQL como PostgreSQL e MS SQL Server. Gosto de entregar software de alta qualidade, buscando otimizar e seguir as melhores práticas de desenvolvimento.';

const aboutMe =
  "I'm a full-stack developer proficient in both frontend and backend technologies. My expertise includes Typescript, Javascript, and React for building lightweight and visually appealing user interfaces. On the server side, I develop efficient and secure applications with C# and ASP.NET, integrating them with SQL databases like PostgreSQL and MS SQL Server. I'm dedicated to delivering high-quality software, always aiming for optimization and following the best development practices.";

export default useSobreMim;
