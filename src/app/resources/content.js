import { Logo } from "@/once-ui/components";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights'; 

inject();
injectSpeedInsights();

const person = {
  firstName: "Odin",
  lastName: "Wattez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "odin@odinwattz.nl",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Nederlands", "Engels"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

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
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Student Software Development</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">DNS Script</strong></>,
    href: "/work/dnscheck",
  },
  subline: (
    <>
      Ik ben Odin, Ik ben een Software Developer op het Alfa-College, waar ik leer te programmeren.<br/>Buiten school, maak ik mijn eigen projecten en doe ik andere dingen.
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
        Odin Wattez, 19 jaar, derdejaars student Software Developer. Kennis van HTML, CSS, JavaScript, Python, PHP, Wordpress, Docker en Next.js. Gedreven om te leren en code creatief toe te passen!
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
            Wanneer ik bezorg ben ik bijrijder en brengen we voedsel naar Bejaardetehuizen en Zorginstellingen.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
              src: '/images/projects/werk/zorgboodschap.jpg',
              alt: 'Zorgboodschap',
              width: 16,
              height: 9
          },
        ],
      },
      {
        company: 'Dappr Hoogeveen',
        timeframe: 'Feb 2025 - Jul 2025',
        role: 'Stagiar Software Developer',
        achievements: [
            <>Hier loop ik stage vanaf Februari 2025 tot Juli 2025.</>,
            <>Ik maak hier projecten en help hun met bepaalde software opdrachten.</>
        ],
        images: [
            {
                src: '/images/projects/werk/dappr.png',
                alt: 'Dappr',
                width: 16,
                height: 9
            }
        ]
      },
      {
        company: 'Action Beilen',
        timeframe: '2021 - 2023',
        role: 'Vakkenvuller',
        achievements: [
            <>Ik vulde de schappen bij en hielp klanten.</>,
        ],
        images: [
            {
                src: '/images/projects/werk/action.jpg',
                alt: 'Action Beilen',
                width: 16,
                height: 9
            }
         ]
      }
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
          role: 'Technicus Engineering/Technischus Informatica',
          description: <>Deed de opleiding Technicus Engineering en Technicus Informatica<br/>2022 - 2023</>,
      },
      {
          name: 'Dr. Nassau College Beilen',
          description: <>Deed Mavo op het Dr. Nassau College in Beilen<br/>2018 - 2022</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: 'Blender',
        description: <>Ik heb met Blender een aantal 3D modellen gemaakt.</>,
        images: [
            {
                src: '/images/projects/blender/webp/DonutDrink.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/blender/webp/HellYeah.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/blender/webp/CarInSpace4k.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/blender/webp/Poolrooms.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/blender/webp/Mclaren.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/blender/webp/Lambo.webp',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/videos/0001-0160.mp4',
                alt: 'Blender video',
                width: 16,
                height: 9
            },
            {
                src: '/videos/0001-0200.mp4',
                alt: 'Blender video',
                width: 16,
                height: 9
            },
            {
                src: '/videos/0001-0150.mp4',
                alt: 'Blender video',
                width: 16,
                height: 9
            },
        ],
      },
      {
        title: 'Next.js (ONCE UI)',
        description: <>Ik heb met Next.Js mijn nieuwe portfolio gemaakt.</>,
        images: [
            {
                src: '/images/projects/werk/portfolio2.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
        ],
      },
      {
        title: 'Wordpress',
        description: <>Ik heb met Wordpress een website gemaakt om het te leren voor op mijn stage.</>,
        images: [
            {
                src: '/images/projects/ramensite-odin/producten.webp',
                alt: 'Project image',
                width: 16, 
                height: 9
            },
            {
                src: '/images/projects/ramensite-odin/landingramen.png',
                alt: 'Project image',
                width: 16,
                height: 9
            }
        ],
      },
      {
        title: 'PHP',
        description: <>Ik heb met PHP en een database voor een school opdracht een webshop gemaakt.</>,
        images: [
            {
                src: '/images/projects/werk/webshop.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/blackwoodfantasyproduct.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/signuppage.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/loginpage.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
        ],
      },
      {
        title: 'HTML, CSS, JavaScript',
        description: <>Ik heb met behulp van HTML, CSS en JavaScript al een aantal websites gemaakt. </>,
        images: [
            {
                src: '/images/projects/werk/oudeportfolio.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
              },
            {
                src: '/images/projects/werk/projectpageportfolio.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/contactpageoud.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/cvpageportfolio.jpg',
                alt: 'Project image',
                width: 16,
                height: 9
            },
            {
                src: '/images/projects/werk/rekensite.jpg',
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

const gallery = {
  path: "/gallery",
  label: "Gallerij",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: '/images/projects/blender/webp/HellYeah.webp',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/projects/blender/webp/Poolrooms.webp',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/projects/blender/webp/DonutDrawFilter2.webp',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
        src: '/images/projects/blender/webp/DonutDrink.webp',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
      src: '/videos/0001-0160.mp4',
      alt: 'video',
      orientation: 'horizontal'
    },
    {
      src: '/videos/0001-0200.mp4',
      alt: 'video',
      orientation: 'horizontal'
    },
    {
      src: '/videos/0001-0150.mp4',
      alt: 'video',
      orientation: 'horizontal'
    },
    {
        src: '/images/projects/blender/webp/Mclaren.webp',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
        src: '/images/projects/blender/webp/Flyingcar.webp',
        alt: 'image',
        orientation: 'vertical'
    },
    {
        src: '/images/projects/blender/webp/OdinWattzNeon.webp',
        alt: 'image',
        orientation: 'horizontal'
    },
    { 
        src: '/images/projects/ramensite-odin/producten.webp',
        alt: 'image',
        orientation: 'vertical'
    },
    {
        src: '/images/projects/blender/webp/Huis.webp',
        alt: 'image',
        orientation: 'vertical'
    },
    {
        src: '/images/projects/werk/pythonapp1.jpg',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
        src: '/images/projects/werk/webshop.jpg',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
        src: '/images/projects/werk/portfolio2.jpg',
        alt: 'image',
        orientation: 'vertical'
    },
    {
        src: '/images/projects/werk/blackwoodfantasyproduct.jpg',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
        src: '/images/projects/werk/signuppage.jpg',
        alt: 'image',
        orientation: 'horizontal'
    },
    {
        src: '/images/projects/werk/loginpage.jpg',
        alt: 'image',
        orientation: 'horizontal'
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
