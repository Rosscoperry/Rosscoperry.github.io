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
import heroImage from '../images/header-background.webp';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.png';
import porfolioImage15 from '../images/portfolio/portfolio-15.webp';
import profilepic from '../images/profilepic.webp';
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
  title: "Ross Perry's Webpage",
  description: "ross-perry.co.uk",
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
  name: `Hello.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              I'm Ross, I currently work as a <strong className="text-stone-100">Data Scientist</strong> at 
              <strong className="text-stone-100"> Staffscanner</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I love keeping busy with <strong className="text-stone-100">hobby projects</strong>,
        stroking my cat Eggy, or exploring the beautiful <strong className="text-stone-100">Highlands of Scotland</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ]
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
    description: `Im an engineering graduate with 1 years experience in a developer/data scientist role. My projects range from 
                  building a semantic lamp to doing environmental data analysis work. I mainly code in Python and have a strong
                  competency in t-SQL.`,
  aboutItems: [
    {label: 'Location', text: 'Glasgow, Scotland', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Scottish', Icon: FlagIcon},
    {label: 'Interests', text: 'E-Sports, Hiking, IOT Hobby projects', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Glasgow & University of Strathclyde', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Staffscanner LTD', Icon: OfficeBuildingIcon},
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
          name: 'Chinese (Mandarin)',
        level: 3,
        },
        {
            name: 'Spanish',
            level: 2,
        },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 't-SQL',
        level: 8,
      },
      {
        name: 'C++ and MATLAB',
        level: 4,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'A Brief Look at the Air Quality of Aberdeen between 2018-2021',
    description: 'Some analysis on the air quality of Aberdeen',
        url: 'https://medium.com/@rosscoperryy/a-brief-look-at-the-air-quality-of-aberdeen-in-the-past-3-years-3c69a5213b26',
    image: porfolioImage12,
  },
  {
    title: 'How to get started with analysing data in Dota 2 games',
    description: 'Learn how to use a open source API to start analysing dota 2 games',
      url: 'https://medium.com/@rosscoperryy/how-to-get-started-with-analysing-data-in-dota-2-games-5d5cdbf78b90',
    image: porfolioImage13,
  },
  {
    title: 'Movie Poster Search Made With React',
    description: 'A movie poster search app that calls a movie poster API',
    url: '/react-movie-poster/',
    image: porfolioImage14,
  },
  {
    title: 'Semantic Lamp using Python',
    description: 'A program that controls the colour of a lamp using the semantics of utterances picked up by a microphone',
    url: 'https://github.com/Rosscoperry/Semantic-Lamp',
    image: porfolioImage15,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '09/2020 - 09/2021',
        location: 'University of Strathclyde',
        title: 'Machine Learning and Deep Learning (MSc) - Distinction',
        content: <div>
            <ul>
                <li><b>Core Modules</b> - Digital Signal Processing Principles, Image and Video Processing,
                Intelligent Sensing, Reasoning and Deep Learning, Machine Learning for Data Analytics, Big Data Technologies,
                    Assignment and Professional Studies
                </li>
                <li>
                    <b>Dissertation</b> - Improving clinical diagnosis through deep learning analysis of voice recordings
                </li>
            </ul>
        </div>
  },
  {
    date: '09/2015 - 09/2020',
      location: 'University of Glasgow',
      title: 'Biomedical Engineering (BEng) - with Honours of 2.1',
      content: <div>
          <ul>
              <li><b>Core Modules</b> - Biosensors and Diagnostics, Microelectronics in Consumer Products, Rehabilitation Engineering, Bioethics for
                  Biomedical Engineering, Signal Processing of Biosignatures, Ultrasound Technology and Applications, Control Systems Analysis and
                  Design, Entrepreneurship in Biomedical Engineering
              </li>
              <li>
                  <b>Dissertation</b> - Lane Swimming Assistive Device for Blind People
              </li>
          </ul>
      </div>
  },
];

export const experience: TimelineItem[] = [
  {
        date: '12/2021 - Present',
    location: 'Staffscanner',
        title: 'Data Scientist',
    content: (
        <div>
            <ul>
                <li>
                    My role's primary purpose was to find usefulness in the vast amount of data collected by users on the app/website
                </li>
                <li>
                    I created weekly KPI reports, visualisations and ad-hoc data requests all to help upper management make important business
                    decisions.
                </li>
                <li>
                    I developed a 5000+ line python library that automates the interaction between Staffscanner's app and neutral vendors.
                </li>
                <li>
                    I gained immense confidence in my t-SQL abilities, so much so that I have begun hosting tutorials within the company, teaching how
                    to approach data science problems.
                </li>
                <li>
                    In a company of 3 employees, I am required to be a jack-of-all-trades with expertise in various areas.
                </li>
            </ul>
        </div>
    ),
  },
  {
      date: '06/2016 - 03/2020',
      location: 'Argos, Tesco, Tim Hortons',
      title: 'Customer Service Roles',
    content: (
      <p>
        From late high school to mid-university, I worked in numerous roles in customer service. These roles included stacking shelves, cleaning the shop floor, preparing food to order and most importantly, serving customers. Here I learnt the importance of going the
        extra mile when representing a brand and what it takes to stand out in customer satisfaction.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Eggy, the cat',
      text: 'Back stratching technique is statisfactory but belly rubs are 10/10',
    },
    {
      name: "Ross's GPU",
      text: 'Help.',
    },
    {
        name: 'Confucius',
        text: "Real knowledge is to know the extent of one's ignorance.",
    }
  ]
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm friendly, I promise.",
  items: [
    {
      type: ContactType.Email,
      text: 'rosscoperry@gmail.com',
          href: 'mailto:rosscoperry@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Glasgow, Scotland',
        href: 'https://www.google.ca/maps/place/Glasgow/@55.8555734,-4.3725425,11z/data=!3m1!4b1!4m6!3m5!1s0x488815562056ceeb:0x71e683b805ef511e!8m2!3d55.864237!4d-4.251806!16zL20vMGh5eHY',
    },
    {
      type: ContactType.Instagram,
        text: '@rossco_perry',
        href: 'https://www.instagram.com/rossco_perry/',
    },
    {
      type: ContactType.Github,
        text: 'Rosscoperry',
        href: 'https://github.com/Rosscoperry'
    },
  ]
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    { label: 'Github', Icon: GithubIcon, href: 'https://github.com/Rosscoperry'},
    { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/18657563/rossperry'},
    { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rossalexanderperry/'},
    { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rossco_perry/'},
    { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/RossPerry_'},
];
