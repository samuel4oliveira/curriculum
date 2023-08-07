import Head from 'next/head';
import Contato from '~/components/Contato';
import Experiencia from '~/components/Experiencia';
import Formacao from '~/components/Formacao';
import Idiomas from '~/components/Idiomas';

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

      <main className="w-full max-w-3xl p-8 mx-auto text-text-color print:pt-0">
        <div className="md:grid print:grid md:grid-cols-[80%,20%] print:grid-cols-[80%,20%]">
          <div>
            <h1 className="text-3xl font-bold text-section-title">Samuel Oliveira</h1>
            <h2 className="text-xl">Desenvolvedor de Software - Frontend</h2>

            <Contato />
          </div>

          <img
            className="h-28 w-auto object-cover rounded-full hidden md:block print:block"
            src="/profile-picture.webp"
            alt="profile picture"
          />
        </div>

        <div className="grid gap-x-8 gap-y-4 mt-5 md:grid-cols-2 print:grid-cols-2">
          <Formacao />
          <Idiomas />
        </div>
        <Experiencia />
      </main>
    </>
  );
}
