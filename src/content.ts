/**
 * ============================================================
 * EDIT THIS FILE — everything personal lives here.
 * Swap the placeholders below with your real info, then rebuild.
 * ============================================================
 */

export const site = {
  /** Your full name — shown as the hero brand */
  name: 'Jeffrey Boman',

  /** Short role line under your name */
  headline: 'Computer Science student',

  /** One supporting sentence in the hero */
  tagline:
    'Building software, learning systems, and looking for internships where I can ship real work.',

  /** Used in <title> and meta tags */
  pageTitle: 'Jeffrey Boman — CS Student',
  pageDescription:
    'Personal site of Jeffrey Boman, computer science student. Projects, experience, and ways to get in touch.',

  /** Live site URL (repo: Pikas3/jeffreyboman.github.io) */
  siteUrl: 'https://pikas3.github.io/jeffreyboman.github.io',

  location: 'Your City, ST',

  /** Primary call-to-action in the hero */
  primaryCta: {
    label: 'View projects',
    href: '#projects',
  },
  secondaryCta: {
    label: 'Get in touch',
    href: '#contact',
  },
}

export const links = {
  email: 'you@example.com',
  github: 'https://github.com/Pikas3',
  linkedin: 'https://www.linkedin.com/in/jeffreyboman',
  /** Optional — put '/resume.pdf' after you add public/resume.pdf; leave '' to hide */
  resume: '',
  /** Optional — leave empty string to hide */
  twitter: '',
}

export const about = {
  title: 'About',
  paragraphs: [
    'Replace this with a short intro. Who you are, what you study, and what kinds of problems you like working on.',
    'Add a second paragraph if you want — interests outside class, clubs, hackathons, or what you are looking for next (internship, research, open source).',
  ],
}

export const education = [
  {
    school: 'Your University',
    degree: 'B.S. Computer Science',
    dates: '2024 — 2028',
    details: 'Relevant coursework: Data Structures, Algorithms, Systems, Discrete Math.',
  },
]

export const experience = [
  {
    role: 'Software Engineering Intern',
    org: 'Company Name',
    dates: 'Summer 2025',
    bullets: [
      'Describe impact in one line — what you built and who it helped.',
      'Mention a tech stack or measurable outcome if you have one.',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'Intro to CS',
    dates: 'Fall 2025',
    bullets: [
      'Helped students debug assignments and graded weekly labs.',
    ],
  },
]

export const projects = [
  {
    name: 'Project One',
    description:
      'One or two sentences on what it does and why it matters. Swap this for a real project.',
    tags: ['TypeScript', 'React', 'Node'],
    links: {
      live: 'https://example.com',
      source: 'https://github.com/jeffreyboman/project-one',
    },
  },
  {
    name: 'Project Two',
    description:
      'Another project — class work, hackathon build, or personal tool. Keep the description concrete.',
    tags: ['Python', 'FastAPI'],
    links: {
      live: '',
      source: 'https://github.com/jeffreyboman/project-two',
    },
  },
  {
    name: 'Project Three',
    description:
      'Optional third slot. Delete the whole object in content.ts if you only have two projects for now.',
    tags: ['C++', 'Systems'],
    links: {
      live: '',
      source: '',
    },
  },
]

export const skills = {
  title: 'Skills',
  groups: [
    {
      label: 'Languages',
      items: ['Python', 'TypeScript', 'Java', 'C++', 'SQL'],
    },
    {
      label: 'Tools & frameworks',
      items: ['React', 'Git', 'Linux', 'Docker', 'PostgreSQL'],
    },
    {
      label: 'Coursework & interests',
      items: ['Algorithms', 'Operating systems', 'Web development', 'ML basics'],
    },
  ],
}

export const contact = {
  title: 'Contact',
  blurb:
    'Open to internships, research, and interesting side projects. The fastest way to reach me is email.',
}
