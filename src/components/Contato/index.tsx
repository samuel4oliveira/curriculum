import useContatos from '~/hooks/useContatos';

const Contato = () => {
  const contatos = useContatos();

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

export default Contato;
