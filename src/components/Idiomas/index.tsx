const Idiomas = () => {
  return (
    <section className="mt-5">
      <h3 className="text-xl font-medium border-b-[3px] border-slate-800 mb-2">
        Idiomas
      </h3>

      <div>
        {idiomas.map(({ language, level }) => (
          <div>
            <span className="font-medium">{language}</span>: <span>{level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const idiomas: { language: string; level: string }[] = [
  {
    language: 'Inglês',
    level: 'Avançado',
  },
  {
    language: 'Português',
    level: 'Nativo',
  },
];

export default Idiomas;
