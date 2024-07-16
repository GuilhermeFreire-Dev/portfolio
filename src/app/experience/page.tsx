'use client';
import Card from '../components/card';
import { Content } from '../lib/content';
import SideBar from './components/sidebar';
import { useState } from 'react';
import { diff, toDate } from '../helpers/dateTime';
import Typography, { Variant } from '../components/tipography';
import Section from '../components/section';

export default function Experience() {
  const [handleDetails, setHandleDetails] = useState(false);
  const [details, setDetails] = useState(Object);

  function icon(active: boolean) {
    if (active) {
      return (
        <div className="flex items-center">
          <small className="mr-3 sm:hidden lg:block">atualmente</small>
          <span className="w-3 h-3 flex items-center justify-center bg-white rounded-full">
            <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
          </span>
        </div>
      );
    }
  }

  function openDetails(details: object) {
    setHandleDetails(true);
    setDetails(details);
  }

  function closeDetails() {
    setHandleDetails(false);
    setDetails({});
  }

  return (
    <>
      <Section title={'Experiência'}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {Content.experiences.map((experience, index) => {
            return (
              <div
                onClick={() => {
                  openDetails(experience);
                }}
                className="cursor-pointer"
                key={index}
              >
                <Card>
                  <div className="" key={experience.company}>
                    <div className="flex justify-between">
                      <Typography variant={Variant.h6}>
                        {experience.company}
                      </Typography>
                      {icon(experience.actual)}
                    </div>
                    <div>
                      <div className="">
                        <p>{experience.office}</p>
                        <small>
                          {diff(
                            toDate(experience.start_at) ?? new Date(),
                            toDate(experience.end_at) ?? new Date()
                          )}
                        </small>
                        <br />
                        <i className="text-xs">{experience.location}</i>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Section>
      <SideBar
        handle={closeDetails}
        state={handleDetails}
        content={details}
      ></SideBar>
    </>
  );
}
