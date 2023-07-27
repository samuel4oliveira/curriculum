import Head from 'next/head';
import Experiencia from '~/components/Experiencia';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          content="Currículo de Samuel Oliveira - Desenvolvedor de Software - Frontend Front-end Curriculum"
          name="description"
        />
        <title>Samuel Oliveira - Currículo</title>
      </Head>

      <main className="w-full max-w-5xl pt-8 px-8 lg:mx-auto lg:px-0 lg:pt-4">
        <h1 className="text-3xl font-bold">Samuel Oliveira</h1>
        <h2>Desenvolvedor de Software - Frontend</h2>

        <Experiencia />
      </main>
    </>
  );
}
