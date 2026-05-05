export const site = {
  name: 'Gonzalo Vidal',
  title: 'Front-End Web Developer',
  domain: 'https://www.gonzalovidal.dev',
  oldPortfolioPath: '/',
  blogPath: '/blog/blog.html',
  heroImage: 'https://i.postimg.cc/R0ZtsZxq/Z7x9Riw.gif',
} as const

export const about = {
  headline: "Hello! I'm Gonzalo Vidal.",
  body: `I'm a Front-End developer focused on building engaging user interfaces with React. I care about clear UX, solid engineering practices, and smooth client-side workflows.`,
} as const

export type ExperienceItem = {
  company: string
  url: string
  logo: string
  logoAlt: string
  role: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'AdriaLabs',
    url: 'https://adrialabs.dev',
    logo: '/images/adrialabs.jpeg',
    logoAlt: 'AdriaLabs logo',
    role: 'Fullstack Web Developer',
  },
  {
    company: 'Code The Dream',
    url: 'https://codethedream.org/',
    logo: '/images/ctd2.webp',
    logoAlt: 'Code The Dream logo',
    role: 'Code Mentor',
  },
  {
    company: 'Globant',
    url: 'https://globant.com',
    logo: '/images/globant_logo.png',
    logoAlt: 'Globant logo',
    role: 'Sr. Web UI Developer',
  },
  {
    company: 'BitHug',
    url: 'https://bithug.dev',
    logo: 'https://i.postimg.cc/Y0NCyMSK/LOGO-1.png',
    logoAlt: 'BitHug logo',
    role: 'Frontend Web Developer',
  },
]

export type TechItem = { name: string; icon: string }

export const technologiesMain: TechItem[] = [
  {
    name: 'HTML',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Redux',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg',
  },
  {
    name: 'React Router',
    icon: 'https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.svg',
  },
  {
    name: 'Vite',
    icon: 'https://vitejs.dev/logo.svg',
  },
  {
    name: 'Jest',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/jest/jest-plain.svg',
  },
  {
    name: 'Vitest',
    icon: 'https://vitest.dev/logo-shadow.svg',
  },
  {
    name: 'Testing Library',
    icon: 'https://testing-library.com/img/octopus-64x64.png',
  },
  {
    name: 'Sass',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/sass/sass-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Git',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg',
  },
  {
    name: 'npm',
    icon: 'https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg',
  },
  {
    name: 'Scrum',
    icon: '/images/scrum.svg',
  },
  {
    name: 'Jira',
    icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png',
  },
]

export const technologiesComplementary: TechItem[] = [
  {
    name: 'C',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/c/c-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg',
  },
  {
    name: 'Flask',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/flask/flask-original-wordmark.svg',
  },
  {
    name: 'Django',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/django/django-plain-wordmark.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-original-wordmark.svg',
  },
  {
    name: 'SQLite',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/sqlite/sqlite-original-wordmark.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://images.seeklogo.com/logo-png/26/1/node-js-logo-png_seeklogo-269242.png',
  },
]

export type CertificateItem = {
  label: string
  href: string
  image: string
  imageAlt: string
}

export const certificates: CertificateItem[] = [
  {
    label: 'Platzi — 30+ Web Development certificates',
    href: 'https://platzi.com',
    image:
      'https://images.seeklogo.com/logo-png/40/1/platzi-logo-png_seeklogo-405663.png',
    imageAlt: 'Platzi',
  },
  {
    label: 'CertiProf — Scrum Foundation',
    href: 'https://www.credly.com/badges/233abc1a-291e-43b4-9aa4-0d97c5d0297f/linked_in?t=rhm3ox',
    image:
      'https://images.credly.com/size/340x340/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png',
    imageAlt: 'CertiProf Scrum',
  },
  {
    label: "Harvard CS50 — Introduction to Computer Science",
    href: 'https://certificates.cs50.io/d8442942-5daf-4ea7-99f5-8ee789cc3d01.pdf?size=letter',
    image: '/images/CS50X.png',
    imageAlt: 'CS50X certificate',
  },
  {
    label: "Harvard CS50 — Web Programming with Python and JavaScript",
    href: 'https://cs50.harvard.edu/certificates/0b1c974d-8977-4d2c-ae28-26d4c7e12a4a',
    image: '/images/CS50W.png',
    imageAlt: 'CS50 Web certificate',
  },
  {
    label: 'Udemy — Test Driven Development Bootcamp',
    href: 'https://www.udemy.com/certificate/UC-689f3797-fd77-49ac-8350-a525e8dd6ffd/',
    image: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    imageAlt: 'Udemy',
  },
  {
    label: 'Google — Web Development I & II',
    href: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
    image:
      'https://lh3.googleusercontent.com/5-yf7s6KGhPFu3hm8UwGnOwloyrEK5hVervmLKfbU1YVj5qwr0dqZ-I2BaleZ14smfc8sjIhnqHbmjS7VFAMZZwS9UQK_RlX6bFmAB8=-rw',
    imageAlt: 'Google Activate',
  },
]

export type Project = {
  title: string
  description: string
  liveUrl: string
  repoUrl?: string
  privateRepo?: boolean
  imageUrl: string
  imageAlt: string
  note?: string
}

export const projectsDisclaimer =
  'Note: Live demos for Gmarket, Aim Game App, and Auctions App may be unavailable when the database is stopped to reduce hosting costs. Source code remains available on GitHub.'

export const featuredProjects: Project[] = [
  {
    title: 'Pet Health Tracker',
    description: 'React, Django, PostgreSQL',
    liveUrl: 'https://pet-health-tracker-front.onrender.com/',
    repoUrl: 'https://github.com/gsvidal/pet-health-tracker-front',
    imageUrl: 'https://i.postimg.cc/bvvd3xcB/pet-health-tracker.png',
    imageAlt: 'Pet Health Tracker',
  },
  {
    title: 'Find a Dev Job',
    description: 'Full-stack product (private repository)',
    liveUrl: 'https://findadevjob.com',
    privateRepo: true,
    imageUrl: 'https://i.postimg.cc/9Md39kgT/findadevjob.png',
    imageAlt: 'Find a Dev Job',
  },
  {
    title: 'Gmarket E-commerce',
    description:
      'Django, PostgreSQL, React (TypeScript), Redux, unit tests, Sass',
    liveUrl: 'https://github.com/gsvidal/gmarket',
    repoUrl: 'https://github.com/gsvidal/gmarket',
    imageUrl: 'https://i.postimg.cc/XvWgbj5k/gmarket.png',
    imageAlt: 'Gmarket',
    note: 'Demo may be offline; see GitHub.',
  },
  {
    title: 'Aim Game App',
    description: 'React (TypeScript), Flask, PostgreSQL',
    liveUrl: 'https://github.com/gsvidal/aim-app',
    repoUrl: 'https://github.com/gsvidal/aim-app',
    imageUrl: 'https://i.postimg.cc/CKjBGmy6/aim-app.png',
    imageAlt: 'Aim Game App',
    note: 'Demo may be offline; see GitHub.',
  },
  {
    title: 'Auctions App',
    description: 'Django, JavaScript, PostgreSQL',
    liveUrl: 'https://github.com/gsvidal/auction-app',
    repoUrl: 'https://github.com/gsvidal/auction-app',
    imageUrl: 'https://i.postimg.cc/RhZf0qCw/auctions2-1.png',
    imageAlt: 'Auctions App',
    note: 'Demo may be offline; see GitHub.',
  },
  {
    title: 'Pet Adoption Center',
    description:
      'React, TypeScript, TDD, Jest, React Testing Library, Context API, Node.js (Render)',
    liveUrl: 'https://pet-finder-client.onrender.com/',
    repoUrl: 'https://github.com/gsvidal/pet-finder-ts-tdd-client',
    imageUrl: 'https://i.postimg.cc/cLvNryFM/pet-finder.png',
    imageAlt: 'Pet Adoption Center',
  },
  {
    title: 'Flowers E-commerce',
    description: 'React, React Router, Sass, Firebase',
    liveUrl: 'https://charming-dusk-1de24b.netlify.app/',
    repoUrl: 'https://github.com/gsvidal/toma-accion-flowers',
    imageUrl: 'https://i.postimg.cc/YSXGWKtj/toma-accion-flowers.png',
    imageAlt: 'Flowers e-commerce',
  },
  {
    title: 'Npm Finder',
    description: 'React, TypeScript, Redux',
    liveUrl: 'https://www.gonzalovidal.dev/npm-packages-finder-redux-ts/',
    repoUrl: 'https://github.com/gsvidal/npm-packages-finder-redux-ts',
    imageUrl: 'https://i.postimg.cc/kGrxPCYN/find-npm-package-ts.png',
    imageAlt: 'Npm packages finder',
  },
]

export const moreProjects: Project[] = [
  {
    title: 'Quiz App',
    description: 'React, TypeScript, TDD, React Testing Library',
    liveUrl: 'https://www.gonzalovidal.dev/quiz-app-ts-tdd/',
    repoUrl: 'https://github.com/gsvidal/quiz-app-ts-tdd',
    imageUrl: 'https://i.postimg.cc/SNx1DYR7/quiz-app.png',
    imageAlt: 'Quiz App',
  },
  {
    title: 'Todo App',
    description: 'React, TypeScript, CSS Modules',
    liveUrl: 'https://www.gonzalovidal.dev/todo-app-2.0-typescript/',
    repoUrl: 'https://github.com/gsvidal/todo-app-2.0-typescript',
    imageUrl: 'https://i.postimg.cc/FRRpQwmX/todo-app-typescript.png',
    imageAlt: 'Todo App',
  },
  {
    title: 'Budget Planner',
    description: 'React, Vite',
    liveUrl: 'https://www.gonzalovidal.dev/budget-planner-2.0/',
    repoUrl: 'https://github.com/gsvidal/budget-planner-2.0/tree/develop',
    imageUrl: 'https://i.postimg.cc/W4gJmCFb/budget-planner.png',
    imageAlt: 'Budget Planner',
  },
  {
    title: 'Calculator',
    description: 'React, Vite, TDD, Vitest, React Testing Library',
    liveUrl: 'https://www.gonzalovidal.dev/calculator-tdd/',
    repoUrl: 'https://github.com/gsvidal/calculator-tdd',
    imageUrl: 'https://i.postimg.cc/X7pV4bDc/rsz-sin-t-tulo-1-1.png',
    imageAlt: 'Calculator',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    description: 'Vanilla JavaScript',
    liveUrl: 'https://sorting-algorithms-visualizer.onrender.com/',
    repoUrl: 'https://github.com/gsvidal/sorting-algorithms-visualizer',
    imageUrl: 'https://i.postimg.cc/Mp5gNFMH/sorting-algorithm-visualizer.png',
    imageAlt: 'Sorting visualizer',
  },
  {
    title: 'Gradient Generator',
    description: 'Vanilla JavaScript',
    liveUrl:
      'https://www.gonzalovidal.dev/gradient-background-generator-vanilla-js/',
    repoUrl: 'https://github.com/gsvidal/gradient-background-generator-vanilla-js',
    imageUrl: 'https://i.postimg.cc/rmFx1SNS/gradient-bg-generator.png',
    imageAlt: 'Gradient generator',
  },
  {
    title: 'Online Paint',
    description: 'Canvas, Vanilla JavaScript (desktop)',
    liveUrl: 'https://gsvidal.github.io/drawing-canvas-paint/public/',
    repoUrl: 'https://github.com/gsvidal/drawing-canvas-paint',
    imageUrl: '/images/projects-logos/onlinepaint.png',
    imageAlt: 'Online Paint',
  },
  {
    title: 'Valorant Stats',
    description: 'Angular 17',
    liveUrl: 'https://www.gonzalovidal.dev/valorant-stats/',
    repoUrl: 'https://github.com/gsvidal/valorant-stats-app',
    imageUrl: '/images/projects-logos/valorant-stats.png',
    imageAlt: 'Valorant Stats',
  },
  {
    title: 'Life Calendar',
    description: 'Vue',
    liveUrl: 'https://www.gonzalovidal.dev/life-calendar/',
    repoUrl: 'https://github.com/gsvidal/life-calendar',
    imageUrl: '/images/projects-logos/life-calendar.png',
    imageAlt: 'Life Calendar',
  },
  {
    title: 'Factorial Calculator (npm)',
    description: 'Node module published on npm',
    liveUrl: 'https://www.npmjs.com/package/factorial-calculator',
    repoUrl: 'https://github.com/gsvidal/factorial-calculator',
    imageUrl: 'https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg',
    imageAlt: 'npm package',
  },
]

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/gsvidal',
    icon: 'https://i.postimg.cc/ncDt7Hyb/github.png',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gsvidal/',
    icon: 'https://i.postimg.cc/P5bs3SfS/linkedin.png',
  },
  {
    label: 'Torre',
    href: 'https://bio.torre.co/es/gsvidal',
    icon: 'https://i.postimg.cc/VkPPWxwS/torre.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gsvidal.web/',
    icon: 'https://i.postimg.cc/QNycccgD/Webp-net-resizeimage-4.png',
  },
] as const
