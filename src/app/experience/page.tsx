import Title from '../components/title';
import { Content } from '../lib/content';
import Card from './components/card';

export default function Experience() {
  function icon(active: Boolean) {
    if (active) {
      return (
        <span className="w-3 h-3 flex items-center justify-center bg-green-600 rounded-full mt-2 mr-5">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
        </span>
      );
    }
  }

  return (
    <div>
      <Title title={'Experiência'}></Title>
      {Content.experience.map((experience) => {
        return (
          <div className="flex items-start">
            {icon(experience.actual)}
            <div className="w-full">
              <div className="flex items-center">
                <h3 className="text-base sm:text-lg font-semibold">{experience.company}</h3>
                {experience.actual && (
                  <i className="ml-3 text-xs sm:text-sm">{'(atual)'}</i>
                )}
              </div>
              {experience.positions.map((position) => {
                return <Card position={position}></Card>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
