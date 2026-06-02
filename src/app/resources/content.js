import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Odin",
  lastName: "Wattez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "o.wattez@student.alfa-college.nl",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Nederlands", "Engels"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter = {
//   display: false,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: (
//     <>
//       I occasionally write about design, technology, and share thoughts on the intersection of
//       creativity and engineering.
//     </>
//   ),
// };

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/OdinWattz',
  },
  {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/odin-wattez-a78a02264/',
  },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  // },
];

const home = {
  path: "/",
  image: "/images/og/home.webp",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Student Software Development</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Kiosk App</strong></>,
    href: "/work/kioskapp",
  },
  subline: (
    <>
      Ik ben Odin, Ik ben een Software Developer op het Alfa-College, waar ik leer te programmeren.
      <br/>Buiten school, maak ik mijn eigen projecten en doe ik andere dingen.
      <br/>Na deze opleiding sla ik een andere richting in en neem ik geleidelijk afstand van de developmentwereld.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Odin Wattez, 20 jaar, derdejaars student Software Developer. Kennis van Python, PHP, React, TypeScript en Next.js.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Werk Ervaring",
    experiences: [
      {
        company: "Zorgboodschap Ommen",
        timeframe: "Mei 2023 - Heden",
        role: "Bezorger/Bijrijder",
        achievements: [
          <>
            Wanneer ik bezorg ben ik bijrijder en brengen we gerechten naar Bejaardetehuizen en Zorginstellingen.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
              src: '/images/projects/werk/zorgboodschap.webp',
              alt: 'Zorgboodschap',
              width: 16,
              height: 9
          },
        ],
      },
      {
        company: 'Meceda',
        timeframe: 'Feb 2026 - Jul 2026',
        role: 'Stagiar Software Developer',
        achievements: [
            <>Hier loop ik stage vanaf Februari 2026 tot Juli 2026.</>,
            <>Ik maak hier projecten en help hun met bepaalde software opdrachten.</>,
        ],
        images: [
            {
                src: '/images/projects/werk/meceda.webp',
                alt: 'Meceda',
                width: 16,
                height: 9
            }
        ]
      },
      {
        company: 'Dappr Hoogeveen',
        timeframe: 'Feb 2025 - Jul 2025',
        role: 'Stagiar Software Developer',
        achievements: [
            <>Hier liep ik stage vanaf Februari 2025 tot Juli 2025.</>,
            <>Ik maakte hier projecten en hielp hun met bepaalde software opdrachten.</>
        ],
        images: [
            {
                src: '/images/projects/werk/dappr.webp',
                alt: 'Dappr',
                width: 16,
                height: 9
            }
        ]
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Opleidingen",
    institutions: [
      {
          name: 'Alfa-College Groningen',
          role: 'Software Developer',
          description: <>Doe de opleiding Software Development<br/>2023 - Present</>,
      },
      {
          name: 'Alfa-college Groningen',
          role: 'Technicus Engineering',
          description: <>Deed de opleiding Technicus Engineering<br/>2022 - 2023</>,
      },
      // {
      //     name: 'Dr. Nassau College Beilen',
      //     description: <>Deed Mavo op het Dr. Nassau College in Beilen<br/>2018 - 2022</>,
      // }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: 'React/Electron',
        description: <>Ik heb voor een project op school react gebruikt.</>,
        images: [
            {
                src: '/images/projects/cadeaubon-app/login.webp',
                alt: 'Project image',
                width: 16, 
                height: 9
            },
            {
                src: '/images/projects/cadeaubon-app/dashboard.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/cadeaubon-app/dashboard-melding.webp',
                alt: 'Project image',
                width: 16, 
                height: 9
            },
            {
                src: '/images/projects/cadeaubon-app/registreren.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            // {
            //     src: '/images/projects/cadeaubon-app/registrerenbon.webp',
            //     alt: 'Project image',
            //     width: 16, 
            //     height: 9
            // },
            // {
            //     src: '/images/projects/cadeaubon-app/gebruiken.webp',
            //     alt: 'Project image',
            //     width: 16,
            //     height: 9
            // },
            // {
            //     src: '/images/projects/cadeaubon-app/deactiveren.webp',
            //     alt: 'Project image',
            //     width: 16, 
            //     height: 9
            // },
            // {
            //     src: '/images/projects/cadeaubon-app/cadeabon-checken.webp',
            //     alt: 'Project image',
            //     width: 16,
            //     height: 9
            // },
        ],
      },
      {
        title: 'Next.js (ONCE UI)',
        description: <>Ik heb met Next.Js mijn nieuwe portfolio gemaakt.</>,
        images: [
            {
                src: '/images/projects/werk/portfolio2.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
        ],
      },
      // {
      //   title: 'Wordpress',
      //   description: <>Ik heb met Wordpress een website gemaakt om het te leren voor op mijn stage.</>,
      //   images: [
      //       {
      //           src: '/images/projects/ramensite-odin/producten.webp',
      //           alt: 'Project image',
      //           width: 16, 
      //           height: 9
      //       },
      //       {
      //           src: '/images/projects/ramensite-odin/landingramen.webp',
      //           alt: 'Project image',
      //           width: 16,
      //           height: 9
      //       }
      //   ],
      // },
      {
        title: 'PHP',
        description: <>Ik heb met PHP en een database voor een school opdracht een webshop gemaakt.</>,
        images: [
            {
                src: '/images/projects/werk/webshop.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/blackwoodfantasyproduct.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/signuppage.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/loginpage.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Projecten",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   path: "/gallery",
//   label: "Gallerij",
//   title: `Photo gallery – ${person.name}`,
//   description: `A photo collection by ${person.name}`,
//   images: [

//   ],
// };

export { person, social, home, about, work };
