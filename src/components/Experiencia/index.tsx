import useExperiencias from '~/hooks/useExperiencias';
import useIdioma from '~/hooks/useIdioma';

const Experiencia = () => {
  const idioma = useIdioma();
  const experiencias = useExperiencias();

  return (
    <section className="mt-5">
      <h3 className="text-xl text-section-title font-medium border-b-[3px] border-section-border mb-2">
        {idioma === 'portugues' ? 'Experiência' : 'Experience'}
      </h3>

      {experiencias.map(
        ({ date, subTitle, location, title, description, skillsList }, index) => (
          <div className="mb-4" key={index}>
            <h4>{title}</h4>
            <h5 className="text-sm font-medium">{subTitle}</h5>

            <div className="flex gap-x-4 text-xs">
              <div className="flex items-center gap-1">
                <img
                  src="./calendar-outline.svg"
                  alt="Ícone de calendário"
                  className="h-3.5 w-3.h-3.5"
                />

                <p>{date}</p>
              </div>

              <div className="flex items-center gap-0.5">
                <img
                  src="./location-outline.svg"
                  alt="Ícone de calendário"
                  className="h-3.5 w-3.h-3.5"
                />

                <p>{location}</p>
              </div>
            </div>

            <ul className="list-disc pl-4 mt-2">
              {description.map((item, index) => (
                <li className="text-sm mb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm">
              <span className="font-medium text-section-title">
                {idioma === 'portugues' ? 'Competências' : 'Skills'}:
              </span>

              {skillsList.map(
                (skill, index) =>
                  ` ${skill} ${index !== skillsList.length - 1 ? '-' : ''}`
              )}
            </p>
          </div>
        )
      )}
    </section>
  );
};

export default Experiencia;
