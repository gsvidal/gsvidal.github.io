/** Files under `public/` — prefix with Vite `base` (e.g. `/new/…`) for GitHub Pages. */
function asset(relativePath: string) {
  const path = relativePath.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${path}`;
}

export const site = {
  name: 'Gonzalo Vidal',
  title: 'Front-End Web Developer',
  domain: 'https://www.gonzalovidal.dev',
  oldPortfolioPath: '/',
  blogPath: '/blog/blog.html',
  heroImage: asset('images/gonzaPic-transparency.png'),
};

export const about = {
  headline: "Hello! I'm Gonzalo Vidal.",
  body: `I'm a Front-End developer focused on building engaging user interfaces with React. I care about clear UX, solid engineering practices, and smooth client-side workflows.`,
} as const;

export type ExperienceItem = {
  company: string;
  url: string;
  logo: string;
  logoAlt: string;
  role: string;
};

export const experience: ExperienceItem[] = [
  {
    company: 'AdriaLabs',
    url: 'https://adrialabs.dev',
    logo: asset('images/adrialabs.jpeg'),
    logoAlt: 'AdriaLabs logo',
    role: 'Fullstack Web Developer',
  },
  {
    company: 'Code The Dream',
    url: 'https://codethedream.org/',
    logo: asset('images/ctd2.webp'),
    logoAlt: 'Code The Dream logo',
    role: 'Coding Mentor',
  },
  {
    company: 'Globant',
    url: 'https://globant.com',
    logo: asset('images/globant_logo.png'),
    logoAlt: 'Globant logo',
    role: 'Sr. Web UI Developer',
  },
  {
    company: 'BitHug',
    url: 'https://bithug.dev',
    logo: asset('images/bithug-logo.png'),
    logoAlt: 'BitHug logo',
    role: 'Frontend Web Developer',
  },
];

export type TechItem = { name: string; icon: string };

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
    icon: 'https://reactrouter.com/_brand/react-router-brand-assets/logo/Dark.svg',
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
    icon: asset('images/scrum.svg'),
  },
  {
    name: 'Jira',
    icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png',
  },
];

export const technologiesComplementary: TechItem[] = [
  {
    name: 'Node.js',
    icon: 'https://images.seeklogo.com/logo-png/26/1/node-js-logo-png_seeklogo-269242.png',
  },
  {
    name: 'Express.js',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&s',
  },
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
];

export type CertificateItem = {
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  /** Optional asset for dark UI (dark card BG); SVG wordmarks often use black fill. */
  imageOnDark?: string;
};

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
    label: 'Harvard CS50 — Introduction to Computer Science',
    href: 'https://certificates.cs50.io/d8442942-5daf-4ea7-99f5-8ee789cc3d01.pdf?size=letter',
    image: asset('images/CS50X.png'),
    imageAlt: 'CS50X certificate',
  },
  {
    label: 'Harvard CS50 — Web Programming with Python and JavaScript',
    href: 'https://cs50.harvard.edu/certificates/0b1c974d-8977-4d2c-ae28-26d4c7e12a4a',
    image: asset('images/CS50W.png'),
    imageAlt: 'CS50 Web certificate',
  },
  {
    label: 'Udemy — Test Driven Development Bootcamp',
    href: 'https://www.udemy.com/certificate/UC-689f3797-fd77-49ac-8350-a525e8dd6ffd/',
    image: asset('images/certificates/udemy-light.svg'),
    imageOnDark: asset('images/certificates/udemy-dark.svg'),
    imageAlt: 'Udemy',
  },
  {
    label: 'Google — Web Development I & II',
    href: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
    image:
      'https://lh3.googleusercontent.com/5-yf7s6KGhPFu3hm8UwGnOwloyrEK5hVervmLKfbU1YVj5qwr0dqZ-I2BaleZ14smfc8sjIhnqHbmjS7VFAMZZwS9UQK_RlX6bFmAB8=-rw',
    imageAlt: 'Google Activate',
  },
  {
    label: 'EF SET — English B2 (Upper Intermediate), 58/100',
    href: 'https://cert.efset.org/en/VZ9p7X',
    image:
      'https://cdn.efset.org/efset-widget/img/v2/social-media/certificate/cefr-badge-B2.svg',
    imageAlt: 'EF SET English certificate — B2 Upper Intermediate',
  },
];

export type Project = {
  title: string;
  description: string;
  /** Main entry URL (deployed app, npm, or repo when there is no public demo). */
  liveUrl: string;
  /** When true, show a “Live” link to `liveUrl` plus “Repository”; use for static/front-end demos and the two listed full-stack exceptions. */
  isLive: boolean;
  repoUrl?: string;
  privateRepo?: boolean;
  imageUrl: string;
  /** GIF (or video) shown on hover — matches legacy `data-hover` on project thumbnails. */
  hoverImageUrl?: string;
  imageAlt: string;
  note?: string;
};

export const projectsDisclaimer =
  'Note: Live demos for some projects as Pet Health Tracker, Gmarket, Aim Game App, and Auctions App, etc... may be unavailable when the database is stopped to reduce hosting costs. Source code remains available on GitHub.';

export const featuredProjects: Project[] = [
  {
    title: 'Pet Health Tracker',
    description: 'React, Django, PostgreSQL',
    liveUrl: 'https://pet-health-tracker-front.onrender.com/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/pet-health-tracker-front',
    imageUrl: 'https://i.postimg.cc/bvvd3xcB/pet-health-tracker.png',
    hoverImageUrl: 'https://i.postimg.cc/65zHDKGN/pet_health_tracker.gif',
    imageAlt: 'Pet Health Tracker',
  },
  {
    title: 'Find a Dev Job',
    description: 'Full-stack product (private repository)',
    liveUrl: 'https://findadevjob.com',
    isLive: true,
    privateRepo: true,
    imageUrl: 'https://i.postimg.cc/9Md39kgT/findadevjob.png',
    hoverImageUrl: 'https://i.postimg.cc/9Fc8800s/findadevjob.gif',
    imageAlt: 'Find a Dev Job',
  },
  {
    title: 'Gmarket E-commerce',
    description:
      'Django, PostgreSQL, React (TypeScript), Redux, unit tests, Sass',
    liveUrl: 'https://github.com/gsvidal/gmarket',
    isLive: false,
    repoUrl: 'https://github.com/gsvidal/gmarket',
    imageUrl: 'https://i.postimg.cc/XvWgbj5k/gmarket.png',
    hoverImageUrl: 'https://i.postimg.cc/9MLNzTxk/gmarket.gif',
    imageAlt: 'Gmarket',
    note: 'Demo may be offline; see GitHub.',
  },
  {
    title: 'Aim Game App',
    description: 'React (TypeScript), Flask, PostgreSQL',
    liveUrl: 'https://github.com/gsvidal/aim-app',
    isLive: false,
    repoUrl: 'https://github.com/gsvidal/aim-app',
    imageUrl: 'https://i.postimg.cc/CKjBGmy6/aim-app.png',
    hoverImageUrl: 'https://i.postimg.cc/zXdy7sHM/aim-app.gif',
    imageAlt: 'Aim Game App',
    note: 'Demo may be offline; see GitHub.',
  },
  {
    title: 'Auctions App',
    description: 'Django, JavaScript, PostgreSQL',
    liveUrl: 'https://github.com/gsvidal/auction-app',
    isLive: false,
    repoUrl: 'https://github.com/gsvidal/auction-app',
    imageUrl: 'https://i.postimg.cc/RhZf0qCw/auctions2-1.png',
    hoverImageUrl: 'https://i.postimg.cc/RZF3vqCs/auctions.gif',
    imageAlt: 'Auctions App',
    note: 'Demo may be offline; see GitHub.',
  },
  {
    title: 'Pet Adoption Center',
    description:
      'React, TypeScript, TDD, Jest, React Testing Library, Context API, Node.js (Render)',
    liveUrl: 'https://pet-finder-client.onrender.com/',
    isLive: false,
    repoUrl: 'https://github.com/gsvidal/pet-finder-ts-tdd-client',
    imageUrl: 'https://i.postimg.cc/cLvNryFM/pet-finder.png',
    hoverImageUrl: 'https://i.postimg.cc/R0v3hS2M/ezgif-com-optimize.gif',
    imageAlt: 'Pet Adoption Center',
  },
  {
    title: 'Flowers E-commerce',
    description: 'React, React Router, Sass, Firebase',
    liveUrl: 'https://charming-dusk-1de24b.netlify.app/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/toma-accion-flowers',
    imageUrl: 'https://i.postimg.cc/YSXGWKtj/toma-accion-flowers.png',
    hoverImageUrl: 'https://i.postimg.cc/kXLCTcrs/toma-accion-flowers.gif',
    imageAlt: 'Flowers e-commerce',
  },
  // {
  //   title: 'Npm Finder',
  //   description: 'React, TypeScript, Redux',
  //   liveUrl: 'https://www.gonzalovidal.dev/npm-packages-finder-redux-ts/',
  //   isLive: true,
  //   repoUrl: 'https://github.com/gsvidal/npm-packages-finder-redux-ts',
  //   imageUrl: 'https://i.postimg.cc/kGrxPCYN/find-npm-package-ts.png',
  //   imageAlt: 'Npm packages finder',
  // },
];

export const moreProjects: Project[] = [
  {
    title: 'Sorting Algorithm Visualizer',
    description: 'Vanilla JavaScript',
    liveUrl: 'https://sorting-algorithms-visualizer.onrender.com/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/sorting-algorithms-visualizer',
    imageUrl: 'https://i.postimg.cc/Mp5gNFMH/sorting-algorithm-visualizer.png',
    hoverImageUrl: 'https://i.postimg.cc/MpCn5r8Z/sorting-algorithms.gif',
    imageAlt: 'Sorting visualizer',
  },
  {
    title: 'Calculator',
    description: 'React, Vite, TDD, Vitest, React Testing Library',
    liveUrl: 'https://www.gonzalovidal.dev/calculator-tdd/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/calculator-tdd',
    imageUrl: 'https://i.postimg.cc/X7pV4bDc/rsz-sin-t-tulo-1-1.png',
    imageAlt: 'Calculator',
  },
  {
    title: 'Gradient Generator',
    description: 'Vanilla JavaScript',
    liveUrl:
      'https://www.gonzalovidal.dev/gradient-background-generator-vanilla-js/',
    isLive: true,
    repoUrl:
      'https://github.com/gsvidal/gradient-background-generator-vanilla-js',
    imageUrl: 'https://i.postimg.cc/rmFx1SNS/gradient-bg-generator.png',
    imageAlt: 'Gradient generator',
  },
  {
    title: 'Online Paint',
    description: 'Canvas, Vanilla JavaScript (desktop)',
    liveUrl: 'https://gsvidal.github.io/drawing-canvas-paint/public/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/drawing-canvas-paint',
    imageUrl: asset('images/projects-logos/onlinepaint.png'),
    imageAlt: 'Online Paint',
  },
  {
    title: 'Valorant Stats',
    description: 'Angular 17',
    liveUrl: 'https://www.gonzalovidal.dev/valorant-stats/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/valorant-stats-app',
    imageUrl: asset('images/projects-logos/valorant-stats.png'),
    hoverImageUrl: 'https://i.postimg.cc/4Nq4y4Dp/valorant.gif',
    imageAlt: 'Valorant Stats',
  },
  {
    title: 'Life Calendar',
    description: 'Vue',
    liveUrl: 'https://www.gonzalovidal.dev/life-calendar/',
    isLive: true,
    repoUrl: 'https://github.com/gsvidal/life-calendar',
    imageUrl: asset('images/projects-logos/life-calendar.png'),
    imageAlt: 'Life Calendar',
  },
  {
    title: 'Factorial Calculator (npm)',
    description: 'Node module published on npm',
    liveUrl: 'https://www.npmjs.com/package/factorial-calculator',
    isLive: false,
    repoUrl: 'https://github.com/gsvidal/factorial-calculator',
    imageUrl:
      'https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg',
    imageAlt: 'npm package',
  },
];

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/gsvidal',
    icon: asset('images/social/github.png'),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gsvidal/',
    icon: asset('images/social/linkedin.png'),
  },
  {
    label: 'Torre',
    href: 'https://bio.torre.co/es/gsvidal',
    icon: asset('images/social/torre.png'),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gsvidal.web/',
    icon: asset('images/social/instagram.png'),
  },
];
