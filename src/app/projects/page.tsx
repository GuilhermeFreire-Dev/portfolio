import { IoLogoGithub } from 'react-icons/io5';
import Card from '../components/card';
import Title from '../components/title';
import { Content } from '../lib/content';
import { TbExternalLink } from 'react-icons/tb';
import Section from '../components/section';
import Typography, { Variant } from '../components/tipography';

export default function Projects() {
  function icon(github: boolean) {
    if (github) {
      return <IoLogoGithub></IoLogoGithub>;
    } else {
      return <TbExternalLink></TbExternalLink>;
    }
  }

  return (
    <Section title={'Principais projetos'}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
        {Content.projects.map((project, index) => {
          return (
            <Card key={index}>
              <div>
                <Typography variant={Variant.h6}>{project.name}</Typography>
                <p className="text-sm my-2">{project.description}</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                className={project.storedOnGitHub ? 'flex' : 'flex text-white'}
                rel="noreferrer"
              >
                {icon(project.storedOnGitHub)}
                <p className="text-xs mx-1">{project.label}</p>
              </a>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
