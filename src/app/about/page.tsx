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
            Me chamo Guilherme Freire e sou desenvolvedor de software formado em Ciências da Computação.
          </p>
          <br />
          <p>
            Ao longo da minha carreira, venho atuando como desenvolvedor
            full-stack, participando de todo o ciclo de desenvolvimento: desde o
            levantamento de requisitos e a elaboração do projeto, passando pelo
            design de interfaces, até a implementação do código. Embora tenha
            experiência em todas essas etapas, meu ponto forte está em
            compreender a lógica e os requisitos do negócio e transformá-los em
            soluções eficientes por meio do código.
          </p>
          <br />
          <p>
            As principais tecnologias com as quais trabalho são Laravel e
            Vue.js. No back-end, utilizando Laravel, desenvolvi principalmente
            APIs para integração com outros sistemas e comunicação com o
            front-end, com destaque para integrações com plataformas de
            pagamento. Já no front-end, atuei de forma consistente no
            desenvolvimento de interfaces web funcionais e intuitivas.
          </p>
          <p>
            Tenho grande interesse em criar soluções, resolver desafios
            complexos e investigar como as coisas funcionam. Sou movido pelo
            aprendizado contínuo e busco constantemente aprimorar minhas
            habilidades. Além disso, gosto de compartilhar conhecimento e trocar
            experiências que contribuam para o crescimento coletivo.
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
