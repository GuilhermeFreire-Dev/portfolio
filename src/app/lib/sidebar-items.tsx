import { LuBriefcase, LuCode2, LuGraduationCap, LuLayers, LuUser2 } from "react-icons/lu";

export const SideBarItems = {
  items: [
    {
      icon: (<LuUser2 size={36}></LuUser2>),
      text: 'Sobre',
      path: '/about'
    },
    {
      icon: (<LuCode2 size={36}></LuCode2>),
      text: 'Projetos',
      path: '/projects'
    },
    {
      icon: (<LuGraduationCap size={36}></LuGraduationCap>),
      text: 'Formação Academica',
      path: '/formation'
    },
    {
      icon: (<LuLayers size={36}></LuLayers>),
      text: 'Stack',
      path: '/stack'
    },
    {
      icon: (<LuBriefcase size={36}></LuBriefcase>),
      text: 'Experiência',
      path: '/experience'
    }
  ]
}