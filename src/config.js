module.exports = {
  siteTitle: 'Balaji Nagaraj Kumar',
  siteDescription: 'Balaji Nagaraj Kumar - Digital Products Lead @ Volvo Cars is on a mission to..',
  siteKeywords:
    'Balaji Nagaraj Kumar, Balaji, Kumar, Computer Science, Student, Software Development, Engineer, Digital, Products',
  siteUrl: 'https://kbalajinagaraj.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-DSLF69D28L',
  googleVerification: 'QlSS7OP5I8FoR2nt8dmRiYXQhr0YxeugkqZa0KFZU1A',
  name: 'Balaji Nagaraj Kumar',
  location: 'Gothenburg, CA',

  github: 'https://github.com/kbalajinagaraj',
  twitterHandle: 'https://twitter.com/BalajiNagarajK1',
  email: 'kbalajinagaraj@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kbalajinagaraj/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/balaji_nagaraj_kumar/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BalajiNagarajK1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/balajinagarajkumar/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/balajikingy',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Education',
      url: '/#study',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
