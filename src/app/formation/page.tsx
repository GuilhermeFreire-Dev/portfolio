import Card from '../components/card';
import Title from '../components/title';
import { Content } from '../lib/content';

export default function Formation() {
  return (
    <div>
      <Title title={'Formação Acadêmica'}></Title>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-5'>
        {Content.formations.map((formation) => {
          return <Card>
            <div className="w-4/5 mx-4">
              <h3 className="text-base sm:text-lg font-semibold">{formation.name}</h3>
              <p className="text-sm sm:text-base my-1">{formation.institute}</p>
              <p className="text-xs">{`${formation.start_at} - ${formation.end_at}`}</p>
            </div>
          </Card>;
        })}
      </div>
    </div>
  );
}
