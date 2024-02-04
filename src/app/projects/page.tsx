import Title from '../components/title';
import { Content } from '../lib/content';
import Card from './components/card';

export default function Projects() {
  return (
    <div>
      <Title title={'Principais projetos'}></Title>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
        {Content.projects.map((project) => {
          return <Card project={project}></Card>;
        })}
      </div>
    </div>
  );
}
