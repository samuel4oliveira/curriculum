import Head from 'next/head';
import useIdioma from '~/hooks/useIdioma';

const Metadata = () => {
  const idioma = useIdioma();

  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="./favicon.svg" />

      <title>{`Samuel Oliveira - ${
        idioma === 'portugues' ? 'Currículo' : 'Resume'
      }`}</title>

      <meta
        content={`Samuel Oliveira - ${
          idioma === 'portugues' ? 'Desenvolvedor de Software' : 'Software Developer'
        }`}
        name="description"
      />

      <meta
        property="og:title"
        content={`Samuel Oliveira - ${idioma === 'portugues' ? 'Currículo' : 'Resume'}`}
      />

      <meta
        property="og:url"
        content={`https://samuel4oliveira.github.io/curriculum/${
          idioma === 'portugues' ? '' : 'english'
        }`}
      />

      <meta
        property="og:description"
        content="O melhor lugar de Cuiabá para comprar bombons, ovos de páscoa, barras de chocolate e outros doces."
      />

      <meta property="og:image:url" content="./favicon.svg" />

      <meta name="theme-color" content="#FFFFFF" />
    </Head>
  );
};

export default Metadata;
