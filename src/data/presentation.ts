type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "contacto@juanjosegui.es",
  title: "Hola, soy Juan José Seguí 👋",
  // profile: "/profile.webp",
  description:
    "Soy un desarrollador full-stack, especializado en el desarrollo/implentación de Odoo y en el ecosistema .NET. Me encanta crear aplicaciones web y móviles, y también me gusta mucho aprender cosas nuevas siempre que sea posible.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/juanjosegui",
    },
    {
      label: "TikTok",
      link: "https://tiktok.com/@tupresenciaeninternet",
    },
    {
      label: "Github",
      link: "https://github.com/juanjosegui",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/juanjosesegui",
    },
  ],
};

export default presentation;
