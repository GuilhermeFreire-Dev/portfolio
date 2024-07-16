import Link from 'next/link';
import Section from '../components/section';
import Typography, { Variant } from '../components/tipography';

export default function About() {
  return (
    <Section title={'Sobre'}>
      <Typography variant={Variant.h5}>
        Olá! Que bom ver você por aqui...
      </Typography>
      <br />
      <div className="">
        <article className="text-justify sm:w-4/5">
          <p>
            Me chamo Guilherme Freire, sou desenvolvedor de software com
            formação em andamento em Ciência da Computação.
          </p>
          <br />
          <p>
            Tenho experiencia no desenvolvimento front-end. Em minhas
            atividades, estive inserido em desafios para transformar as ideias
            dos stakeholders em algo que pudesse ser visto em telas de
            smartphones, tablets e desktops. Sempre participando desde a
            concepção do layout até a sua implementação, alinhando requisitos e
            boas práticas para o desenvolvimento de um bom produto e que atenda
            às necessidades propostas.
          </p>
          <br />
          <p>
            Também possuo experiência no desenvolvimento back-end. Aqui, estive
            imerso em desafios mais intensos, construindo aplicações de grande
            relevância para o negócio e traduzindo as regras de negócio para o
            código.
          </p>
          <p>
            Participei do desenvolvimento de APIs (
            <i>Application Programming Interface</i>) para integrar com sistemas
            externos. Dentre os projetos em que atuei como desenvolvedor
            back-end, destaca-se o desenvolvimento de uma API para integração
            com o Nupay. Neste projeto, pude experienciar conceitos de
            comunicação HTTP, tokens de autenticação, criptografia, projeto de
            banco de dados e mesageria.
          </p>
          <br />
          <p>
            Sei que ainda tenho muito o que aprender. Como desenvolvedor, tenho
            a consciência de que os estudos e o aprendizado sempre estarão em
            meu dia a dia. Mas isso não é um problema, sou motivado por desafios
            e inovação; portanto, estou sempre buscando evoluir e aprender cada
            vez mais.
          </p>
          <br />
          <p>
            Fique a vontade para conhecer um pouco mais sobre minhas{' '}
            <Link href={'/experience'} className="underline">
              experiências
            </Link>
            ,{' '}
            <Link href={'/formation'} className="underline">
              formações
            </Link>{' '}
            e alguns{' '}
            <Link href={'/projects'} className="underline">
              projetos pessoais
            </Link>{' '}
            que desenvolvi.
          </p>
        </article>
      </div>
      <div></div>
    </Section>
  );
}
