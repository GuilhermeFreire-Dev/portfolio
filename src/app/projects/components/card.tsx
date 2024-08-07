import { IoLogoGithub } from 'react-icons/io5';
import { TbExternalLink } from 'react-icons/tb';

type Project = {
  name: string;
  description: string;
  url: string;
  storedOnGitHub: boolean;
  label: string;
};

export default function Card({ project }: { project: Project }) {
  function icon(github: boolean) {
    if (github) {
      return <IoLogoGithub></IoLogoGithub>;
    } else {
      return <TbExternalLink></TbExternalLink>;
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-4 flex flex-col justify-between">
      <div>
        <h5 className="my-2 font-semibold">{project.name}</h5>
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
    </div>
  );
}
