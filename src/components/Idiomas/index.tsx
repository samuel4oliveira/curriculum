import useIdioma from '~/hooks/useIdioma';
import useIdiomas from '~/hooks/useIdiomas';

const Idiomas = () => {
  const idioma = useIdioma();
  const idiomas = useIdiomas();

  return (
    <section>
      <h3 className="text-xl text-section-title font-medium border-b-[3px] border-section-border mb-2">
        {idioma === 'portugues' ? 'Idiomas' : 'Languages'}
      </h3>

      <div>
        {idiomas.map(({ idioma, nivel }, index) => (
          <div key={index}>
            <span className="font-medium">{idioma}</span>:{' '}
            <span className="text-sm">{nivel}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Idiomas;
