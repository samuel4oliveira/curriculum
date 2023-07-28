const Idiomas = () => {
  return (
    <section>
      <h3 className="text-xl font-medium border-b-[3px] border-gray-900 mb-2">Idiomas</h3>

      <div>
        {idiomas.map(({ language, level }, index) => (
          <div key={index}>
            <span className="font-medium">{language}</span>:{' '}
            <span className="text-sm">{level}</span>
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
