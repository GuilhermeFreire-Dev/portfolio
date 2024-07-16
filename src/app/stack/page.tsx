import Card from './components/card';
import { Content } from '../lib/content';
import Section from '../components/section';
import Typography, { Variant } from '../components/tipography';

export default function Stack() {
  return (
    <Section title={'Tecnologias'}>
      <div className="px-3 sm:pl-0">
        {Content.stacks.map((stack, index) => {
          return (
            <div key={index}>
              <Typography variant={Variant.h4}>{stack.type}</Typography>
              <br />
              <div className="grid grid-cols-3 gap-2 my-3 sm:grid-cols-10">
                {stack.technologies.map((stack) => {
                  return <Card stack={stack} key={stack.name}></Card>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
