import Title from './components/title';

export default function Home() {
  return (
    <div>
      <Title title={'Sobre'}></Title>
      <article className="text-justify text-sm">
        <p>
          Olá! Sou o Guilherme, desenvolvedor de software de 21 anos com cerca
          de 1 ano e meio de experiência como fullstack, atuando tanto no
          front-end quanto no back-end. No front-end web, possuo conhecimento
          nas principais linguagens e ferramentas, como HTML, CSS e JavaScript.
          Além disso, estou familiarizado com bibliotecas e frameworks modernos
          como o React e VueJs, que utilizo para criar interfaces dinâmicas.
        </p>
        <br />
        <p>
          No back-end, minha especialidade é o framework Laravel, com a
          linguagem PHP, desenvolvendo APIs robustas em Laravel e construindo
          aplicações web que se comunicam perfeitamente com essas APIs. Procuro
          sempre seguir as melhores práticas, construindo páginas com
          componentes reutilizáveis e garantindo responsividade em diferentes
          dispositivos, aderindo o padrão REST e outros princípios essenciais.
        </p>
        <br />
        <p>
          Possuo um domínio em versionamento de código utilizando o Git. Minha
          experiência inclui procedimentos como commit, merge, resolução de
          conflitos e reversão de alterações, produzindo um fluxo de trabalho
          eficiente em repositórios.
        </p>
        <br />
        <p>
          Na esfera de banco de dados, compreendo a construção de consultas,
          tabelas, functions e triggers no Oracle e aliado aos conhecimentos em
          Laravel posso contruir uma integração fluida entre as APIs e as
          operações no banco de dados.
        </p>
        <br />
        <p>
          Estou sempre em busca de aprimorar minhas habilidades, abraçando
          desafios e buscando constantemente aprender algo novo. Recentemente,
          estou explorando a ferramenta NextJs, expandindo meu conjunto de
          habilidades para oferecer soluções ainda mais inovadoras. Estou pronto
          para novos desafios e oportunidades.
        </p>
      </article>
    </div>
  );
}
