import Subtitle from '../components/subtitle';
import Title from '../components/title';
import Card from './components/card';
import { Content } from '../lib/content';

export default function Stack() {
  return (
    <div>
      <Title title={'Stack'}></Title>
      {Content.stacks.map((stack) => {
        return (
          <div key={stack.type}>
            <Subtitle subtitle={stack.type}></Subtitle>
            <div className="grid grid-cols-3 gap-2 sm:gap-1 sm:grid-cols-5">
              {stack.technologies.map((stack) => {
                return <Card stack={stack} key={stack.name}></Card>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
