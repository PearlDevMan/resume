import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import resumeImage3 from '../images/resume/AF_logo (1).png';
import resumeImage1 from '../images/resume/Creighton_University_seal.svg.png';
import resumeImage4 from '../images/resume/deebecon.png';
import resumeImage2 from '../images/resume/UNewHampshire_seal.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Araki | Resume',
  description: "Resume about Araki Honda as A Good System/Data Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Araki Honda.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Omaha based <strong className="text-stone-100">System/Data Engineer</strong>, currently working
        at <strong className="text-stone-100">Advanced Fixtures Inc</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Swimming</strong>,
        or exploring beautiful{' '}
        <strong className="text-stone-100">famous mountains</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1jXKeEnvs4DqRC49Eu04oi32PZsJTKmlaLSNpQUNK0aU/edit',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a system engineer. In my study, there are so many fields related to system engineering. 
  Mainly, SAP and System Engineering is my Best Feature compared to others. And I can communicate with some Asian Customers by my language skill`,
  aboutItems: [
    {label: 'Location', text: '	Omaha,	New Hampshire', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'United State', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming, Karate, Climbing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of New Hampshire', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Advanced Fixtures Inc', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 4,
      },
      {
        name: 'Japanes',
        level: 2,
      },
    ],
  },
  {
    name: 'Data Engineer',
    skills: [
      {
        name: 'Data Analysis',
        level: 9,
      },
      {
        name: 'Data Visualizaion',
        level: 7,
      },
      {
        name: 'Database',
        level: 6,
      },
    ],
  },
  {
    name: 'System Engineer',
    skills: [
      {
        name: 'System Administration',
        level: 8,
      },
      {
        name: 'MicroSoft 365',
        level: 6,
      },
      {
        name: 'System Configuration',
        level: 4,
      },
      {
        name: 'Enterprise Architecture',
        level: 4,
      }
    ],
  },
  {
    name: 'Web Developer',
    skills: [
      {
        name: 'Back-End',
        level: 9,
      },
      {
        name: 'Front-End',
        level: 5,
      },
      {
        name: 'SEO',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Scaled Composites',
    description: 'My First Development For Large Company.',
    url: 'https://www.scaled.com/',
    image: porfolioImage1,
  },
  {
    title: 'Advanced Fixutures',
    description: 'AFi is a wonderful company for web developer.',
    url: 'https://advancedfixtures.com/',
    image: porfolioImage2,
  },
  {
    title: 'AWS',
    description: 'AWS is my favorite service in my DevOps role.',
    url: 'https://aws.amazon.com/',
    image: porfolioImage3,
  },
  {
    title: 'RAYMOND WEIL',
    description: 'My most proud site in UI design.',
    url: 'https://www.raymond-weil.com/en/',
    image: porfolioImage4,
  },
  {
    title: 'Granata Olive',
    description: 'Just 3 days work.',
    url: 'http://granataolive.it/',
    image: porfolioImage5,
  },
  {
    title: 'Coinhomes.io',
    description: 'Cryptocurrency is a great creature in this century.',
    url: 'https://CoinHomes.io',
    image: porfolioImage6,
  },
  {
    title: 'Software Business Intelligence',
    description: 'A trader want his/her own BI/UI.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Medical Software and Apss using Python and Data Science',
    description: 'My IoT solution for Health Care .',
    url: 'https://#',
    image: porfolioImage8,
  },
  {
    title: 'Realty Meter',
    description: 'Realty Meter about for Mange sales, Transaction, Goal, Reports and also important thing is that customer pay online for process.',
    url: 'https://realtymeter.com',
    image: porfolioImage9,
  },
  {
    title: "New Year's Miracle",
    description: 'I had developed the personalized call order SPA site.',
    url: 'https://zvonok.novogodnee-chudo.ru/',
    image: porfolioImage10,
  },
  {
    title: 'ROLZO',
    description: 'React | Redux | Material-UI | Node | MySQL',
    url: 'https://rolzo.com',
    image: porfolioImage11,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 - Present',
    location: 'Advanced Fixtures Inc',
    title: 'System Manager',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
    trademark: resumeImage3,
    imageheight: '150px',
    imagewidth: '150px'
  },
  {
    date: 'March 2018 - February 2021',
    location: 'DeeBeCon. Inc',
    title: 'Senior Web Developer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
    trademark: resumeImage4,
    imageheight: '150px',
    imagewidth: '150px'
  },
];

export const educations: TimelineItem[] = [
  {
    date: 'April 2015',
    location: 'University of New Hampshire',
    title: 'Masters in System engineering',
    content: (
      <p>
        In university days, I majored in System Engineering and studied about web development myself. 
        When I was on research for graduation, I lead a development team which was formed by students and complete a project to impletenent SAP in a local business company named MyGoNorth.
      </p>
    ),
    trademark: resumeImage2,
    imageheight: '150px',
    imagewidth: '150px'
  },
  {
    date: 'March 2011',
    location: 'Creighton University',
    title: 'Bachelor in Business Administration',
    content: (
      <p>
        I was in College of Business Administration and in every field of major, 
        I showed good skills and enthusiasm. 
        Especially, ERP and Database was always on my mind and I grew up those to my main skills.
      </p>
    ),
    trademark: resumeImage1,
    imageheight: '150px',
    imagewidth: '150px'
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'He is an expert in Azure, ML, Kubernetes and Dockers. It is very difficult to find an expert like him on DevOps and Azure services. Everything was very good!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Osmel Burg',
      text: 'The experience with Kashif was amazing. He is very professional and very fast. Is attentive to details and proposes practical solutions to problems. The relation quality/price is very fair too. I look forward to working with him on future projects. Recommend him 100%. Thanks very much for the experience Araki. Best Regards Osmel',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Baalwi Lee',
      text: 'Excellent service until problem solved throughout the night. 5 stars',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can send me Email using this form.',
  items: [
    {
      type: ContactType.Email,
      text: 'bluedreamy123@skiff.com',
      href: 'mailto:bluedreamy123@skiff.com',
    },
    {
      type: ContactType.Location,
      text: 'Omaha NH, United State',
      href: 'https://www.google.ca/maps/place/7615+Dodge+St,+Omaha,+NE+68114,+%D0%A1%D0%A8%D0%90/@41.259317,-96.0349636,17z/data=!4m10!1m2!2m1!1s7615+Dodge+St+Omaha,+NH+united+state!3m6!1s0x87938d0c3dce1dd1:0x20baf19cd1fe94e5!8m2!3d41.259317!4d-96.0323887!15sCiQ3NjE1IERvZGdlIFN0IE9tYWhhLCBOSCB1bml0ZWQgc3RhdGWSARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F11bw4hg999',
    },
    {
      type: ContactType.Instagram,
      text: '@bluedreamy123',
      href: 'https://www.instagram.com/#',
    },
    {
      type: ContactType.Github,
      text: 'pearldevman',
      href: 'https://github.com/PearlDevMan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/PearlDevMan'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/#'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/#/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/#/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/#'},
];
