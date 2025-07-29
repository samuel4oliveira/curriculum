import useIdioma from './useIdioma';

interface Experience {
  title: string;
  subTitle: string;
  date: string;
  location: string;
  description: string[];
  skillsList: string[];
}

const useExperiencias = () => {
  const idioma = useIdioma();
  if (idioma === 'ingles') return experiences;
  return experiencias;
};

const experiencias: Experience[] = [
  {
    title: 'Desenvolvedor de Software - Frontend',
    subTitle: 'UsadosBr',
    date: 'nov de 2021 - atualmente',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de uma biblioteca de Design System para centralizar todos os componentes de interface compartilháveis dos projetos da empresa, eliminando a duplicação de código e otimizando os testes.',
      'Desenvolvimento de sistemas de classificados de veículos para mais de 95 mil anúncios de veículos e mais de 3 mil revendas.',
      'Desenvolvimento de um sistema para realizar simulações de financiamento e consórcio de veículos em bancos parceiros.',
      'Reescrita de um sistema de gerenciamento de contas, melhorando a componentização, tipagem e simplificando o código.',
      'Desenvolvimento de uma plataforma para conexão de usuários a produtos, serviços e suporte.',
      'Escrita de testes unitários e E2E para os componentes e fluxos dos sistemas.',
      'Desenvolvimento de landing pages com foco em SEO e performance.',
    ],
    skillsList: [
      'TypeScript',
      'Nextjs',
      'React.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Linux',
      'Git',
      'Node.js',
      'Zustand',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Fullstack',
    subTitle: 'Beautiful food - Freelance',
    date: 'mar de 2025 - mai de 2025',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento da UI, API e Banco de dados para um sistema de gestão de assinaturas de clientes.',
      'Importação de dados de arquivos .CSV para o banco de dados do novo sistema.',
    ],
    skillsList: [
      'C#',
      'ASP.NET',
      'Entity Framework',
      'PostgreSQL',
      'React.js',
      'TailwindCSS',
      'Zustand',
      'Docker',
      'Linux',
      'Git',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Fullstack',
    subTitle: 'Vilma Confeitaria e Cafeteria - Freelance',
    date: 'jul de 2024 - nov de 2024',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de um sistema de gestão abrangente para controle de pedidos, dados de funcionários, informações de clientes, perfis de usuários e estoque de produtos.',
      'Documentação, prototipação e implementação.',
    ],
    skillsList: [
      'C#',
      'ASP.NET',
      'Entity Framework',
      'PostgreSQL',
      'React.js',
      'TailwindCSS',
      'Zustand',
      'Docker',
      'Linux',
      'Git',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Frontend',
    subTitle: 'Sydy',
    date: 'fev de 2021 - nov de 2021',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de venda de sementes de soja, incumbida de processar mais de R$ 50 milhões em vendas anuais.',
      'Desenvolvimento de novas funcionalidades e manutenção de plataformas proprietárias de cadastro e divulgação de dados e informações de agronegócio.',
      'Desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de gerenciamento de sementes de soja.',
      'Desenvolvimento de protótipos, em conjunto com a participação na concepção e documentação de funcionalidades.',
    ],
    skillsList: [
      'TypeScript',
      'React.js',
      'JavaScript',
      'Vue.js',
      'HTML',
      'CSS',
      'Linux',
      'Git',
      'Node.js',
      'Ant.Design',
      'MobX',
      'Bootstrap',
      'Redux.js',
    ],
  },
  {
    title: 'Desenvolvedor de Software Jr',
    subTitle: 'Infocorp - Empresa Júnior',
    date: 'nov de 2018 - jun de 2021',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de aplicações web com foco em SEO, performance e responsividade.',
      'Participação na concepção, documentação e engenharia de sistemas.',
      'Desenvolvimento de protótipos para interfaces de sistemas.',
    ],
    skillsList: [
      'JavaScript',
      'HTML',
      'CSS',
      'Linux',
      'Git',
      'Chart.js',
      'Figma',
      'Adobe XD',
    ],
  },
  {
    title: 'Pesquisador de Iniciação Científica',
    subTitle: 'Laboratório de Ambientes Virtuais Interativos - UFMT',
    date: 'ago de 2017 - mar de 2018',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de jogos educativos, em parceria com Hospital Universitário Júlio Müller, atuando na pesquisa e concepção de jogos com temas como diabetes e reciclagem. O desenvolvimento dos ambientes virtuais tridimensionais dos jogos foram feitos utilizando o moto gráfico Unity e a programação feita em C#.',
      'Busca por avaliação de metodologias de tecnologia assistiva, por meio de leitura de artigos e realização de revisões sistemáticas.',
    ],
    skillsList: ['C#', 'Unity3D', 'Linux', 'Git'],
  },
];

const experiences: Experience[] = [
  {
    title: 'Software Developer - Frontend',
    subTitle: 'UsadosBr',
    date: 'nov 2021 - present',
    location: 'Mato Grosso, Brazil',
    description: [
      "Development of a Design System library to centralize all shareable interface components for the company's projects, eliminating code duplication and optimizing testing.",
      'Development of vehicle classifieds systems for more than 95 thousand vehicle advertisements and more than 3 thousand resales.',
      'Development of a system to carry out financing and vehicle consortium simulations at partner banks.',
      'Rewriting an account management system, improving componentization, typing and simplifying the code.',
      'Development of a platform to connect users to products, services and support.',
      'Writing unit and E2E tests for system components and flows.',
      'Development of pages focused on SEO and performance.',
    ],
    skillsList: [
      'TypeScript',
      'Nextjs',
      'React.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Linux',
      'Git',
      'Node.js',
      'Zustand',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Fullstack',
    subTitle: 'Beautiful food - Freelance',
    date: 'mar de 2025 - may de 2025',
    location: 'Cuiabá, MT',
    description: [
      'Development of UI, API and Database for a customer subscription management system.',
      'Importing data from .CSV files into the new system database.',
    ],
    skillsList: [
      'C#',
      'ASP.NET',
      'Entity Framework',
      'PostgreSQL',
      'React.js',
      'TailwindCSS',
      'Zustand',
      'Docker',
      'Linux',
      'Git',
    ],
  },
  {
    title: 'Desenvolvedor de Software - Fullstack',
    subTitle: 'Vilma Confeitaria e Cafeteria - Freelance',
    date: 'jul 2024 - nov 2024',
    location: 'Mato Grosso, Brazil',
    description: [
      'Development of a management system to control orders, employee data, customer information, user profiles and product inventory.',
      'Documentation, prototyping and implementation.',
    ],
    skillsList: [
      'C#',
      'ASP.NET',
      'Entity Framework',
      'PostgreSQL',
      'React.js',
      'TailwindCSS',
      'Zustand',
      'Docker',
      'Linux',
      'Git',
    ],
  },
  {
    title: 'Software Developer - Frontend',
    subTitle: 'Sydy',
    date: 'feb 2021 - nov 2021',
    location: 'Mato Grosso, Brazil',
    description: [
      'Development of new functionalities and maintenance of a proprietary soybean seed sales platform, responsible for processing more than R$50 million in annual sales.',
      'Development of new functionalities and maintenance of proprietary platforms for registering and disseminating agribusiness data and information.',
      'Development of new functionalities and maintenance of a proprietary soybean seed management platform.',
      'Development of prototypes of new functionalities for the systems, together with participation in the design and documentation of these functionalities.',
    ],
    skillsList: [
      'TypeScript',
      'React.js',
      'JavaScript',
      'Vue.js',
      'HTML',
      'CSS',
      'Linux',
      'Git',
      'Node.js',
      'Ant.Design',
      'MobX',
      'Bootstrap',
      'Redux.js',
    ],
  },
  {
    title: 'Software Developer - Frontend Jr',
    subTitle: 'Infocorp',
    date: 'nov 2018 - jun 2021',
    location: 'Mato Grosso, Brazil',
    description: [
      'Development of web applications with a focus on SEO, performance and responsiveness.',
      'Participation in the design, documentation and engineering of systems.',
      'Development of prototypes for system interfaces.',
    ],
    skillsList: [
      'JavaScript',
      'HTML',
      'CSS',
      'Linux',
      'Git',
      'Chart.js',
      'Figma',
      'Adobe XD',
    ],
  },
  {
    title: 'Scientific Initiation Researcher',
    subTitle: 'Interactive Virtual Environments Laboratory - UFMT',
    date: 'aug 2017 - mar 2018',
    location: 'Mato Grosso, Brazil',
    description: [
      "Development of educational games, in partnership with Hospital Universitário Júlio Müller, working on research and design of games with themes such as diabetes and recycling. The development of the games' three-dimensional virtual environments was carried out using the Unity graphics engine and programming in C#.",
      'Research to evaluate assistive technology methodologies, by reading articles and carrying out systematic reviews.',
    ],
    skillsList: ['C#', 'Unity3D', 'Linux', 'Git'],
  },
];

export default useExperiencias;
