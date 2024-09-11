import swapLogo from '@/assets/swap-logo.png';
import tuqLogo from '@/assets/tuq-logo.png';

export const jobs = [
  {
    name: 'Tuq',
    title: 'Software Developer',
    start: 'January 2022',
    end: 'April 2022',
    logo: tuqLogo,
    achievements: [
      'Designed and developed applications based on client specifications, employing Ruby on Rails and Sorbet for backend development, in conjunction with Angular, TypeScript, and HTML for frontend implementation.',
      'Developed REST APIs that interact with Active Record models, implemented unit tests, and documented with Swagger API for applications, enhancing application reliability and company software quality.',
      'Met with clients to discuss specifications for applications, and designed Entity-Relationship Diagrams based on those specifications, ensuring alignment with client needs and project success.'
    ]
  },
  {
    name: 'Swap Robotics',
    title: 'Autonomous Robotics Software Development Co-op',
    start: 'September 2022',
    end: 'December 2022',
    logo: swapLogo,
    achievements: [
      'Utilized Python, ROS, and Foxglove to develop code for real-time data tracking, reporting, and visualization of autonomous robots.',
      'Retrieved and monitored real-time safety diagnostics of a motor MCU from a CAN bus in Python, to enhance safety measures in robot operations.',
      'Applied object-oriented principles to optimize class efficiency and code architecture.',
      'Collaborated closely with management to prioritize project needs, and define clear ticket criteria.',
      'Contributed effectively within a Scrum framework, actively engaging in bi-daily standup meetings and sprint-focused development cycles, and effectively utilized ClickUp for ticket management and organization.'
    ]
  },
  {
    name: 'Swap Robotics',
    title: 'Web Debeloper Co-op',
    start: 'May 2023',
    end: 'August 2023',
    logo: swapLogo,
    achievements: [
      'Used JavaScript, HTML, CSS, and Material-UI to implement 15+ user-requested features to a Dockerized React application, including monitoring critical robot systems and implementing fail-safe protocols to prevent autonomous operations in case of system failures.',
      'Integrated Google Maps APIs to simultaneously track and visualize the real time locations of 20+ robots.',
      'Developed robust REST APIs to interact with AWS S3 Buckets as well as PostgreSQL database through the Prisma ORM.',
      'Increased code coverage by 70% by implementing Jest unit tests for REST APIs and established GitHub Actions for automated testing on an AWS EC2 Instance.'
    ]
  }
];
