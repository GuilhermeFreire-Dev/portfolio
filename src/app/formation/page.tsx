import Card from '../components/card';
import Section from '../components/section';
import Typography, { Variant } from '../components/tipography';
import Title from '../components/title';
import { yearsInterval } from '../helpers/dateTime';
import { Content } from '../lib/content';

export default function Formation() {
  return (
    <Section title={'Formação Acadêmica'}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {Content.formations.map((formation, index) => {
          return (
            <Card key={index}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Typography variant={Variant.h6}>{formation.name}</Typography>
                  <p className="text-sm sm:text-base my-1">
                    {formation.institute}
                  </p>
                </div>
                <p className="text-xs">
                  {yearsInterval(formation.start_at, formation.end_at)}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
