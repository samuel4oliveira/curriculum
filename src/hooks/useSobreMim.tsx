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
  "Sou um desenvolvedor de software com uma base sólida em desenvolvimento frontend usando React, TypeScript, Vue e Javascript. Gosto de criar sistemas fáceis de usar, performáticos e responsivos. Estou me aprofundando em desenvolvimento backend com .NET, C#, bancos de dados SQL e ORM's como Dapper e Entity Framework.";

const aboutMe =
  "I'm a software developer with a solid foundation in frontend development using React, TypeScript, Vue and Javascript. I like creating easy-to-use, performant and responsive systems. I'm delving deeper into backend development with .NET, C#, SQL databases and ORM's like Dapper and Entity Framework.";

export default useSobreMim;
