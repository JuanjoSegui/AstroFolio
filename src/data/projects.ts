export type Project = {
  title: string;
  techs: string[];
  link: string;
  description?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Tu Presencia En Internet",
    techs: ["Odoo (Python)", "XML", "JavaScript", "PostgreSQL", "Nginx", "Docker", "WordPress"],
    link: "https://tupresenciaeninternet.com/",
    description: "Proyecto personal que refleja mi pasión por transformar ideas en experiencias digitales impactantes. Como freelancer especializado en Odoo y WordPress, estoy aquí para llevar tu visión al siguiente nivel.",
  },
  {
    title: "Presence Control",
    techs: ["ASP.NET", "Astro"],
    link: "https://github.com/JuanjoSegui/PresenceControl",
    description: "Proyecto para el control de presencia de empleados en una empresa. Se trata de una aplicación web que permite a los empleados registrar su presencia en la empresa, y a los administradores gestionar los empleados, los horarios y las presencias.",
  },
  {
    title: "Portfolio Personal",
    techs: ["Astro"],
    link: "https://github.com/JuanjoSegui/AstroFolio",
    description: "Proyecto personal para mostrar mi portfolio. Se trata de una aplicación web que permite a los usuarios ver mis proyectos, y a mi gestionarlos.",
  },
  {
    title: "Rumore.fun (Coming Soon)",
    techs: ["ASP.NET", "Astro"],
    link: "https://rumore.fun/",
    description: "Proyecto personal el cual aún no puedo desvelar de que se trata, pero que estoy seguro que te va a encantar.",
    isComingSoon: true,
  
  },
];

export default projects;
