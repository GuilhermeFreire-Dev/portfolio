import { FaRegClock } from 'react-icons/fa';
import Card from '../components/card';
import Title from '../components/title';
import { Content } from '../lib/content';

export default function Experience() {
  function icon(active: boolean) {
    if (active) {
      return (
        <div className="flex items-center">
          <small className="mr-3">atualmente</small>
          <span className="w-3 h-3 flex items-center justify-center bg-white rounded-full">
            <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
          </span>
        </div>
      );
    }
  }

  return (
    <div>
      <Title title={'Experiência'}></Title>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {Content.experiences.map((experience) => {
          return (
            <Card>
              <div className="" key={experience.company}>
                <div className='flex justify-between'>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {experience.company}
                  </h3>
                  {icon(experience.actual)}
                </div>
                <div>
                  <div className="">
                    <h4 className="text-sm sm:text-base font-medium mr-3">
                      {experience.position.name}
                    </h4>
                    <p className="text-xs sm:text-sm">
                      {experience.position.duration}
                    </p>
                    <i className="text-xs">{experience.position.location}</i>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
