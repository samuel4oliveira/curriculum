const Formacao = () => {
  return (
    <section>
      <h3 className="text-xl text-section-title font-medium border-b-[3px] border-section-border mb-2">
        Formação Acadêmica
      </h3>

      <div>
        <h4>UFMT - Universidade Federal de Mato Grosso</h4>
        <h5 className="text-sm font-medium">Bacharel em Ciência da Computação</h5>

        <div className="flex items-center gap-1 text-xs">
          <img
            src="/calendar-outline.svg"
            alt="Ícone de calendário"
            className="h-3.5 w-3.h-3.5"
          />

          <p>2016 - 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
