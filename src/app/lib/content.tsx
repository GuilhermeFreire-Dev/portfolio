import { BiLogoPhp } from 'react-icons/bi';
import { FaFigma } from 'react-icons/fa';
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoLinkedin,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoTux,
  IoLogoVue,
  IoMail
} from 'react-icons/io5';
import { SiClickup, SiTailwindcss } from 'react-icons/si';

export const Content = {
  stacks: [
    {
      type: 'Front-end',
      technologies: [
        {
          icon: (
            <IoLogoJavascript
              size={42}
              className="text-yellow-400"
            ></IoLogoJavascript>
          ),
          name: 'Javascript'
        },
        {
          icon: <IoLogoVue size={42} className="text-teal-500"></IoLogoVue>,
          name: 'VueJs'
        },
        {
          icon: <IoLogoReact size={42} className="text-blue-500"></IoLogoReact>,
          name: 'ReactJs'
        },
        {
          icon: (
            <IoLogoHtml5 size={42} className="text-orange-500"></IoLogoHtml5>
          ),
          name: 'HTML'
        },
        {
          icon: <IoLogoCss3 size={42} className="text-sky-600"></IoLogoCss3>,
          name: 'CSS'
        },
        {
          icon: (
            <SiTailwindcss size={42} className="text-cyan-600"></SiTailwindcss>
          ),
          name: 'Tailwind'
        }
      ]
    },
    {
      type: 'Back-end',
      technologies: [
        {
          icon: (
            <IoLogoLaravel size={42} className="text-red-600"></IoLogoLaravel>
          ),
          name: 'Laravel'
        },
        {
          icon: <BiLogoPhp size={42} className="text-purple-900"></BiLogoPhp>,
          name: 'PHP'
        },
        {
          icon: (
            <IoLogoNodejs size={42} className="text-lime-500"></IoLogoNodejs>
          ),
          name: 'NodeJs'
        }
      ]
    },
    {
      type: 'Versionamento',
      technologies: [
        {
          icon: (
            <IoLogoGithub
              size={42}
              className="text-slate-950 dark:text-slate-50"
            ></IoLogoGithub>
          ),
          name: 'GitHub'
        },
        {
          icon: (
            <IoLogoGitlab size={42} className="text-orange-500"></IoLogoGitlab>
          ),
          name: 'GitLab'
        }
      ]
    },
    {
      type: 'Ferramentas',
      technologies: [
        {
          icon: (
            <IoLogoTux
              size={42}
              className="text-black dark:text-white"
            ></IoLogoTux>
          ),
          name: 'WSL 2'
        },
        {
          icon: <FaFigma size={42} className=""></FaFigma>,
          name: 'Figma'
        },
        {
          icon: <SiClickup size={42} className="text-purple-600"></SiClickup>,
          name: 'ClickUp'
        }
      ]
    }
  ],
  experience: [
    {
      actual: true,
      company: 'Novo Mundo SA',
      positions: [
        {
          name: 'Desenvolvedor JR',
          duration: '8m',
          location: 'híbrido',
          attributions: [
            'Desenvolvimento de APIs utilizando o framework Laravel',
            'Desenvolvimento de páginas web responsivas com VueJs'
          ]
        },
        {
          name: 'Desenvolvedor Trainee',
          duration: '10m',
          location: 'presencial',
          attributions: ['Desenvolvimento de páginas web com VueJs']
        }
      ]
    }
  ],
  contacts: [
    {
      icon: <IoMail size={24} className="mr-1"></IoMail>,
      label: 'guilhermefreire700@hotmail.com',
      url: 'mailto:guilhermefreire700@hotmail.com'
    },
    {
      icon: <IoLogoLinkedin size={24} className="mr-1"></IoLogoLinkedin>,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/guilhermefreiremagalhaes/'
    }
  ],
  projects: [
    {
      name: 'Game Store',
      description: 'Protótipo de um ecommerce de jogos',
      url: 'https://github.com/GuilhermeFreire-Dev/game-store',
      storedOnGitHub: true,
      label: 'GitHub'
    },
    {
      name: 'Evolução Bike',
      description: 'Landing page para uma loja de bicicletas',
      url: 'https://www.evolucaobike.com.br',
      storedOnGitHub: false,
      label: 'www.evolucaobike.com.br'
    },
    {
      name: 'Este Portifólio',
      description: 'Portifólio pessoal',
      url: 'https://github.com/GuilhermeFreire-Dev/portfolio',
      storedOnGitHub: true,
      label: 'GitHub'
    }
  ],
  formations: [
    {
      image: '/puc-goias.png',
      name: 'Ciência da Computação',
      institute: 'Pontifícia Universidade Católica de Goiás',
      start_at: 'Jan.2020',
      end_at: 'Dez. 2024'
    },
    {
      image: '/senai-logo.png',
      name: 'Desenvolvedor de Software',
      institute: 'Faculdade SENAI Fatesg',
      start_at: 'Out.2022',
      end_at: 'Jan. 2023'
    }
  ]
};
