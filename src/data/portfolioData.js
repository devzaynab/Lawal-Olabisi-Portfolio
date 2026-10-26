
import adinoheightDesign from '../assets/adinoheight student dashboard design.png';
import craigslistDesign from '../assets/craigslist design.png';
import winampDesign from '../assets/winamp design.png';
import petDesign from '../assets/pet design.png';


import cravecrazeImage from '../assets/cravecraze website.png';
import declutterImage from '../assets/declutter  website.png';
import jobtrackImage from '../assets/jobtrack website.png'
import traverseImage from '../assets/traverse website.png';
import decodesignsImage from '../assets/decodesigns website.png';
import elabImage from '../assets/e-lab lis dashboard website.png'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Project', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export const footerNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Project', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export const roles = [
  'Frontend Developer',
  'React Developer',
  'UI/UX Enthusiast',
];

export const cvPath = '/cv/Lawal-Olabisi-CV.pdf';

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    title: 'Styling',
    items: ['Tailwind CSS', 'Sass', 'Responsive Design'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vite', 'Vercel'],
  },
  {
    title: 'Design & Backend Services',
    items: ['Figma', 'Firebase'],
  },
];

export const projects = [
  {
    name: 'CraveCraze',
    description:
      'A food ordering dashboard for browsing menus and managing orders.',
    technologies: ['Html', 'CSS3', 'sass'],
    repoUrl: 'https://github.com/devzaynab/food-ordering-website-dashboard-',
    liveUrl: 'https://food-ordering-website-dashboard-ghmc.vercel.app/',
    status: '',
    image: cravecrazeImage,
    imageLabel: 'CraveCraze website screenshot',
  },
    {
    name: 'Seranova Declutter',
    description:
      'A decluttering website showcasing home organization services.',
    technologies: ['React','JavaScript','CSS3','Firebase', 'Cloud Firestore','EmailJS'],
    repoUrl: 'https://github.com/devzaynab/seranova-declutter',
    liveUrl: 'https://seranova-declutter.vercel.app/',
    status: '',
    image: declutterImage,
    imageLabel: 'Declutter website screenshot',
  },
    {
    name: 'JobTrack',
    description:
      'A job application tracker for organizing and monitoring applications.',
    technologies: ['React', 'CSS3', 'firebase', 'local storage'],
    repoUrl: 'https://github.com/devzaynab/JobTrack',
    liveUrl: 'https://jobtrack-snowy.vercel.app/',
    status: '',
    image: jobtrackImage,
    imageLabel: 'jobtrack website screenshot',
  },
  {
    name: 'Traverse tours',
    description:
      'A travel website showcasing tour packages and destinations.',
    technologies: ['HTML', 'CSS3', 'JavaScript', 'SASS', 'SCSS'],
    repoUrl: 'https://github.com/devzaynab/traverse_tours',
    liveUrl: 'https://traverse-tours-pga7.vercel.app/',
    status: '',
    image: traverseImage,
    imageLabel: 'Traverse website screenshot',
  },
  {
    name: 'DecodeDesigns',
    description:
      'An interior design website showcasing services and projects.',
    technologies: ['Html', 'CSS3', 'JavaScript', 'Responsive Design'],
    repoUrl: 'https://github.com/devzaynab/DecoDesigns',
    liveUrl: 'https://deco-designs.vercel.app/',
    status: '',
    image: decodesignsImage,
    imageLabel: 'DecodeDesigns website screenshot',
  },
  {
    name: 'E-Lab LIS Dashboard',
    description:  'A laboratory dashboard interface for managing laboratory operations.',
    technologies: ['Html', 'CSS3','JavaScript'],
    repoUrl: 'https://github.com/devzaynab/Netwalkers',
    liveUrl: 'https://netwalkers.vercel.app/',
    status: '',
    image: elabImage,
    imageLabel: 'E-Lab LIS Dashboard screenshot',
  },
];

export const designGallery = [
  {
    title: 'Adinoheight Student Dashboard',
    alt: 'Adinoheight Student Dashboard Figma design',
    href: 'https://www.figma.com/design/8VJOUMcv06v6wfeOOd4sUU/Untitled?node-id=0-1&t=luFjmbiRvXQam76Z-1',
    image: adinoheightDesign,
  },
  {
    title: 'Craigslist Design',
    alt: 'Craigslist Figma design',
    href: 'https://www.figma.com/proto/UZTF7TgVreKbRs5obLu1Gd/Craiglist?node-id=10-350&t=RYA5Y9gICLuLdAQb-1',
    image: craigslistDesign,
  },
  {
    title: 'Winamp Design',
    alt: 'Winamp Figma design',
    href: 'https://www.figma.com/proto/CFq03BSHmwUYFLNnxtJ4Ma/music-playlist?node-id=10-298&starting-point-node-id=10%3A298&t=15xxOkPqjORDxlBi-1',
    image: winampDesign,
  },
  {
    title: 'Pet Design',
    alt: 'Pet Figma design ',
    href: 'https://www.figma.com/proto/kHlh0J4VEbXA0fCzmEw5Yc/pet_companions?node-id=244-12&t=R9awCa9hRS3ihmZE-1',
    image: petDesign,
  },
];

export const mindsetCards = [
  {
    title: 'Understand',
    description:
      "Clarify the problem, identify the user's needs and understand what a successful solution should achieve.",
  },
  {
    title: 'Plan',
    description:
      'Break the problem into clear, manageable tasks and decide how the different parts should work together.',
  },
  {
    title: 'Build',
    description:
      'Turn ideas into functional, responsive interfaces while keeping the code organized and maintainable.',
  },
  {
    title: 'Improve',
    description:
      'Test the result, identify issues, learn from feedback and make thoughtful improvements.',
  },
];

export const journeyEntries = [
  {
    year: '2026',
    title: 'B.Agric (Hons), Pasture and Range Management',
    details: 'Federal University of Agriculture, Abeokuta (FUNAAB).',
  },
  {
    year: 'May 2024',
    title: 'Mobile App Development Training',
    details: 'Bincom — HTML, CSS3, JavaScript and Cordova.',
  },
  {
    year: '2021',
    title: 'HNG Internship',
    details: 'UI/UX Design.',
  },
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'lawalolabisi614@gmail.com',
    href: 'mailto:lawalolabisi614@gmail.com',
  },
  {
  label: 'GitHub',
  value: 'github.com/devzaynab',
  href: 'https://github.com/devzaynab',
  },
  {
  label: 'LinkedIn',
  value: 'linkedin.com/in/lawal-olabisi-b478b4309',
  href: 'https://www.linkedin.com/in/lawal-olabisi-b478b4309/',
  },
  {
  label: 'Twitter/X',
  value: 'x.com/zaynay14',
  href: 'https://x.com/zaynay14',

  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/2347054425207',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/devzaynab' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lawal-olabisi-b478b4309/'},
  { label: 'Twitter/X', href: 'https://x.com/zaynay14' },
  { label: 'WhatsApp', href: 'https://wa.me/2347054425207' },
];
