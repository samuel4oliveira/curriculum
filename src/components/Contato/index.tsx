const Contato = () => {
  return (
    <section className="flex gap-x-4 gap-y-1 flex-wrap mt-2">
      {contatos.map(({ icon, link, title }, index) => (
        <a href={link} aria-label="title" target="_blank" type="mail" key={index}>
          <div className="flex gap-x-2 items-center">
            {icon}

            <div className="text-sm">{title}</div>
          </div>
        </a>
      ))}
    </section>
  );
};

const contatos: { title: string; icon: React.ReactNode; link?: string }[] = [
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

export default Contato;
