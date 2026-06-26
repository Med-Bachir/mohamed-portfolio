// Non-translatable data: links, images, tech tags, icons, numbers. All user-facing
// prose lives in translations.js and is looked up by these keys.
import siaraShot from './assets/projects/siara.jpg'
import tajmallShot from './assets/projects/tajmall.jpg'
import areYouAddictedShot from './assets/projects/areyouaddicted.jpg'
import amazonShot from './assets/projects/amazon.jpg'
import merdaciShot from './assets/projects/merdaci.jpg'
import qaShot from './assets/projects/qa.jpg'
import iotShot from './assets/projects/iot.jpg'

export const links = {
  github: 'https://github.com/Med-Bachir',
  linkedin: 'https://www.linkedin.com/in/mohamed-bachir-bouchaib-539a06294/',
  email: 'mouhamedbachir2323@gmail.com',
  resume: '/Mohamed-Bouchaib-CV.pdf',
}

export const techMarquee = [
  'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker',
  'PyTorch', 'Flask', 'React Native', 'LightGBM', 'Socket.IO',
]

// value/suffix are language-agnostic; label key resolves via t('about.stats.<key>')
export const statsMeta = [
  { key: 'projects', value: 8, suffix: '+' },
  { key: 'tech', value: 20, suffix: '+' },
  { key: 'langs', value: 3, suffix: '' },
]

export const aboutFactKeys = ['location', 'languages', 'openTo', 'focus']

export const languageBars = [
  { nameKey: 'arabic', levelKey: 'native', fill: 100 },
  { nameKey: 'english', levelKey: 'englishLevel', fill: 85 },
  { nameKey: 'french', levelKey: 'frenchLevel', fill: 66, cert: '/Mohamed-Bouchaib-TCF.pdf' },
]

// `current: true` renders the period end as the translated "Present" word.
export const experience = [
  { key: 'freelance', start: '2025', current: true, icon: '💼' },
]

export const education = [
  { key: 'master', period: '2024 – 2026', graduated: true, icon: '🎓' },
  { key: 'licence', period: '2021 – 2024', icon: '🖥️' },
  { key: 'bac', period: '2020 – 2021', icon: '📐' },
]

// `href` is optional — link the actual certificate/badge when you have a file or URL.
export const certifications = [
  { key: 'tcf', year: '2025', icon: '🇫🇷', href: '/Mohamed-Bouchaib-TCF.pdf' },
  { key: 'awscf', year: '2025', icon: '☁️', href: 'https://www.credly.com/badges/3260bc60-131f-4f05-8d2e-7e0de39a645a/public_url' },
]

export const featuredProject = {
  key: 'siara',
  name: 'siara',
  image: siaraShot,
  tags: ['React', 'Node.js', 'Express', 'PostgreSQL / PostGIS', 'Python', 'Flask', 'LightGBM', 'PyTorch', 'scikit-learn', 'Socket.IO', 'React Native', 'Docker'],
  cta: [
    { key: 'liveDemo', href: 'https://siaraalgeria.vercel.app/home', primary: true },
    { key: 'mobileBuild', href: 'https://expo.dev/accounts/siara-ai/projects/siara-mobile/builds/8d08e4f7-4439-41c9-bce3-8fa4b2025c9a' },
    { key: 'github', href: links.github },
  ],
}

export const projects = [
  {
    key: 'merdaci',
    name: 'Merdaci Menswear',
    image: merdaciShot,
    tags: ['React', 'Vite', 'Node.js', 'Express'],
    cta: [{ key: 'liveDemo', href: 'https://saber-ecommerce-qp3w.vercel.app/', primary: true }],
  },
  {
    key: 'tajmall',
    name: 'Taj Mall',
    image: tajmallShot,
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'UML'],
    cta: [
      { key: 'liveDemo', href: 'https://tajmall-jade.vercel.app', primary: true },
      { key: 'github', href: links.github },
    ],
  },
  {
    key: 'areyouaddicted',
    name: 'Are You Addicted?',
    image: areYouAddictedShot,
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Redux Toolkit', 'MUI'],
    cta: [{ key: 'github', href: links.github }],
  },
  {
    key: 'amazon',
    name: 'Amazon Review Sentiment',
    image: amazonShot,
    tags: ['Python', 'PySpark', 'Hadoop', 'scikit-learn', 'Pandas', 'Docker'],
    cta: [{ key: 'github', href: links.github }],
  },
  {
    key: 'qa',
    name: 'Multilingual Q&A Assistant',
    image: qaShot,
    tags: ['PyTorch', 'FastAPI', 'BERT', 'NLP', 'Q&A', 'Multilingual'],
    cta: [{ key: 'github', href: 'https://github.com/Med-Bachir/multilingual-qa-assistant' }],
  },
  {
    key: 'iot',
    name: 'IoT Smart Home Security',
    image: iotShot,
    tags: ['ESP32', 'MQTT', 'AWS IoT Core', 'Lambda', 'DynamoDB', 'SNS', 'CloudWatch', 'EC2', 'Grafana', 'Cisco Packet Tracer', 'Wokwi'],
    cta: [{ key: 'github', href: links.github }],
  },
  {
    key: 'idl',
    name: 'IDL Student Manager',
    tags: ['React', 'Vite', 'Material UI', 'React Router', 'Axios'],
    cta: [{ key: 'github', href: 'https://github.com/Med-Bachir/idl-student-manager' }],
  },
]

export const skillGroups = [
  { key: 'frontend', icon: '{ }', items: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'MUI'] },
  { key: 'backend', icon: '</>', items: ['Node.js', 'Express', 'Spring Boot', 'Laravel', 'Django', 'PHP'] },
  { key: 'dataml', icon: '∑', items: ['Python', 'Pandas', 'scikit-learn', 'PySpark', 'Hadoop', 'Spark'] },
  { key: 'databases', icon: '⛁', items: ['PostgreSQL / PostGIS', 'MySQL', 'MongoDB'] },
  { key: 'cloudiot', icon: '☁', items: ['AWS IoT Core', 'AWS Lambda', 'DynamoDB', 'SNS', 'CloudWatch', 'EC2', 'MQTT', 'ESP32', 'Grafana'] },
  { key: 'devops', icon: '⚙', items: ['Docker', 'Git / GitHub', 'Linux', 'UML'], wide: true },
]

// ---- Neural "About Me" map ----------------------------------------------
// An interactive force-directed graph. Node labels & details are translatable
// (translations.js → neural.nodes.<id>), everything visual/structural lives here.
// `group` drives node colour and the legend; `size` is the base radius (world units).
export const neuralGroups = {
  self: { color: '#7dd3fc' }, // center is drawn with the accent gradient; this is its fallback/legend tint
  skills: { color: '#22d3ee' },
  education: { color: '#3b82f6' },
  interests: { color: '#a78bfa' },
  languages: { color: '#2dd4bf' },
  now: { color: '#f5b53d' },
}

// Order of groups shown in the legend (the center "self" node is self-evident).
export const neuralLegend = ['skills', 'education', 'interests', 'languages', 'now']

export const neuralNodes = [
  { id: 'me', group: 'self', size: 30 },

  // hubs
  { id: 'skills', group: 'skills', size: 16 },
  { id: 'education', group: 'education', size: 16 },
  { id: 'interests', group: 'interests', size: 16 },
  { id: 'languages', group: 'languages', size: 16 },
  { id: 'now', group: 'now', size: 16 },

  // skills
  { id: 'fullstack', group: 'skills', size: 9.5 },
  { id: 'ml', group: 'skills', size: 9.5 },
  { id: 'dataeng', group: 'skills', size: 9.5 },
  { id: 'systems', group: 'skills', size: 9.5 },

  // education
  { id: 'master', group: 'education', size: 9.5 },
  { id: 'licence', group: 'education', size: 9.5 },
  { id: 'bac', group: 'education', size: 9.5 },

  // interests
  { id: 'ai', group: 'interests', size: 9.5 },
  { id: 'oss', group: 'interests', size: 9.5 },
  { id: 'products', group: 'interests', size: 9.5 },
  { id: 'learning', group: 'interests', size: 9.5 },

  // languages
  { id: 'arabic', group: 'languages', size: 9.5 },
  { id: 'english', group: 'languages', size: 9.5 },
  { id: 'french', group: 'languages', size: 9.5 },

  // now
  { id: 'available', group: 'now', size: 9.5 },
  { id: 'location', group: 'now', size: 9.5 },
  { id: 'siara', group: 'now', size: 9.5 },
]

export const neuralHubs = ['skills', 'education', 'interests', 'languages', 'now']

export const neuralLinks = [
  // center → hubs
  ['me', 'skills'], ['me', 'education'], ['me', 'interests'], ['me', 'languages'], ['me', 'now'],
  // hubs → leaves
  ['skills', 'fullstack'], ['skills', 'ml'], ['skills', 'dataeng'], ['skills', 'systems'],
  ['education', 'master'], ['education', 'licence'], ['education', 'bac'],
  ['interests', 'ai'], ['interests', 'oss'], ['interests', 'products'], ['interests', 'learning'],
  ['languages', 'arabic'], ['languages', 'english'], ['languages', 'french'],
  ['now', 'available'], ['now', 'location'], ['now', 'siara'],
  // cross-links — the strands that make it read as a web, not a tree
  ['ml', 'ai'], ['master', 'ml'], ['siara', 'fullstack'], ['available', 'products'],
]
