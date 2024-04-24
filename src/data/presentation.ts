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
  mail: "adityaacodes01@gmail.com",
  title: "*Hi*, I’m Aditya ",
  profile: "/profile-logo.webp",
  description:
    "**Aditya** The introvert transitioning towards a more **coding**-focused career. I am dedicated to honing my expertise in **B**ackend using **Python** and expanding my capabilities in **F**rontend with **NextJS** and **Astro**. Fascinated by **AI** and its potential, exploring **Machine Learning** and **LLM**'s.",

  socials: [
    {
      label: "Github",
      link: "https://github.com/1dvlpr",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/webdevaditya/",
    },
  ],
};

export default presentation;
