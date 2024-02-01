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
      'Desenvolvimento de sistemas de classificados de veículos, contendo buscas, listagem/filtragem e visualização de mais de 95 mil anúncios de veículos e mais de 3 mil revendas. Também foram desenvolvidas funcionalidades para realizar simulações de financiamento e consórcio nos veículos anunciados.',
      'Desenvolvimento de um sistema de CRM(Customer Relationship Management), possibilitando a criação, visualização, edição e deleção de atendimentos e tarefas. Também foram desenvolvidas funcionalidades para visualização de relatórios, chat com o cliente, etc.',
      'Desenvolvimento de uma plataforma conectando os usuários aos serviços e produtos oferecidos pela empresa, assim como suporte para os mesmos.',
      'Reescrita de um sistema de gerenciamento de contas, melhorando a componentização, tipagem e simplificando o código para futuras manutenções.',
      'Desenvolvimento de testes unitários para os componentes.',
      'Desenvolvimento de páginas com foco em SEO e performance.',
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
    title: 'Desenvolvedor de Software - Frontend',
    subTitle: 'Sydy',
    date: 'fev de 2021 - nov de 2021',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de venda de sementes de soja, incumbida de processar mais de R$ 50 milhões em vendas anuais.',
      'Desenvolvimento de novas funcionalidades e manutenção de plataformas proprietárias de cadastro e divulgação de dados e informações de agronegócio.',
      'Desenvolvimento de novas funcionalidades e manutenção de plataforma proprietária de gerenciamento de sementes de soja.',
      'Desenvolvimento de protótipos de novas funcionalidades para os sistemas, em conjunto com a participação na concepção e documentação dessas funcionalidades.',
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
    title: 'Desenvolvedor de Software - Frontend Jr',
    subTitle: 'Infocorp - Empresa Júnior',
    date: 'nov de 2018 - jun de 2021',
    location: 'Cuiabá, MT',
    description: [
      'Desenvolvimento de um sistema web de gamificação para a empresa, visando incentivar o engajamento e o alcance de melhores performances a partir do uso de elementos como pontuações, competições, premiações, etc.',
      'Desenvolvimento de documentações para os projetos da empresa e participação em reuniões com clientes, auxiliando assim no processo de concepção e documentação dos sistemas.',
      'Desenvolvimento de Protótipos utilizando Figma e Adobe XD para aplicações desenvolvidas na empresa.',
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
      'Desenvolvimento de jogos educativos, em parceria com Hospital Universitário Júlio Müller, atuando na pesquisa e concepção de jogos com temas como Diabetes e Reciclagem. O desenvolvimento dos ambientes virtuais tridimensionais dos jogos foram feitos utilizando o moto gráfico Unity e a programação feita em C#.',
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
      'Development of a vehicle classifieds system. Functionalities were developed for searching, listing/filtering and viewing more than 95 thousand vehicle advertisements and more than 3 thousand stores. Functionalities were developed to carry out financing and consortium simulations on advertised vehicles.',
      'Development of a CRM system (Customer Relationship Management). Functionalities were developed allowing the creation, viewing, editing and deletion of leads and tasks. Functionalities for viewing reports, chatting with customers, etc. were also developed.',
      'Development of a platform connecting users to the services and products offered by the company, as well as support for them.',
      'Rewriting an account management system, improving componentization, typing and simplifying the code for future maintenance.',
      'Development of pages focused on SEO and performance.',
      'Development of unit tests for components.',
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
      'Development of a web gamification system for the company, aiming to encourage engagement and achieve better performances through the use of elements such as scores, competitions, prizes, etc.',
      "Development of documentation for the company's projects and participation in meetings with clients, thus assisting in the systems design and documentation process.",
      'Development of Prototypes using Figma and Adobe XD for applications developed in the company.',
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
      "Development of educational games, in partnership with Hospital Universitário Júlio Müller, working on research and design of games with themes such as Diabetes and Recycling. The development of the games' three-dimensional virtual environments was carried out using the Unity graphics engine and programming in C#.",
      'Research to evaluate assistive technology methodologies, by reading articles and carrying out systematic reviews.',
    ],
    skillsList: ['C#', 'Unity3D', 'Linux', 'Git'],
  },
];

export default useExperiencias;
