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
  IoLogoVue,
  IoMail
} from 'react-icons/io5';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
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
  experiences: [
    {
      actual: true,
      company: 'Rede JS Peças',
      office: 'Analista de Desenvolvimento Jr',
      start_at: '2024-09-23T00:00:00.000Z',
      end_at: '',
      location: 'híbrido',
      tecnologies: [
        'VueJs',
        'Tailwind CSS',
        'PHP',
        'Laravel',
        'Banco de dados Oracle',
        'Sankhya',
        'Python'
      ],
      activities: [
        'Desenvolvimento full-stack em Laravel e VueJs',
        'Modelagem e implementação de estruturas de banco de dados.',
        'Desenvolvimento de integrações com o ERP Sankhya'
      ]
    },
    {
      actual: false,
      company: 'Novo Mundo SA',
      office: 'Analista de Sistemas',
      start_at: '2023-06-30T00:00:00.000Z',
      end_at: '2024-09-23T00:00:00.000Z',
      location: 'híbrido',
      tecnologies: [
        'VueJs',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'PHP 7.4',
        'PHP 8.2',
        'Laravel',
        'Banco de dados Oracle'
      ],
      activities: [
        'Desenvolvimento de APIs em Laravel;',
        'Desenvolvimento front-end com VueJs;',
        'Modelagem e implementação de estruturas de banco de dados.'
      ]
    },
    {
      actual: false,
      company: 'Novo Mundo SA',
      office: 'Desenvolvedor Trainee',
      start_at: '2022-10-17T00:00:00.000Z',
      end_at: '2023-06-30T00:00:00.000Z',
      location: 'presencial',
      tecnologies: [
        'VueJs',
        'HTML',
        'CSS',
        'Bootstrap 4',
        'PHP 7.4',
        'Laravel'
      ],
      activities: [
        'Desenvolvimento de APIs em Laravel;',
        'Desenvolvimento front-end com VueJs;',
        'Desenvolvimento de documentação para os sitemas.'
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
      start_at: '2020-02-01T00:00:00.000Z',
      end_at: '2024-12-31T00:00:00.000Z'
    },
    {
      image: '/senai-logo.png',
      name: 'Desenvolvedor de Software',
      institute: 'Faculdade SENAI Fatesg',
      start_at: '2022-10-17T00:00:00.000Z',
      end_at: '2023-01-30T00:00:00.000Z'
    }
  ],
  platforms: [
    {
      name: 'GitHub',
      url: 'https://github.com/GuilhermeFreire-Dev/',
      icon: <LuGithub size={28}></LuGithub>
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/guilhermefreiremagalhaes',
      icon: <LuLinkedin size={28}></LuLinkedin>
    }
  ]
};
