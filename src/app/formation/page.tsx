import Title from '../components/title';
import { Content } from '../lib/content';
import Card from './components/card';

export default function Formation() {
  return (
    <div>
      <Title title={'Formação Acadêmica'}></Title>
      {Content.formations.map((formation) => {
        return <Card formation={formation}></Card>;
      })}
    </div>
  );
}
