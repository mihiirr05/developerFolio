/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mihir Khandelwal",
  title: "Hi all, Mihir Khandelwal",
  subTitle: emoji(
    "Technical Business Analyst | M.S. in Business Analytics (GPA: 3.90) Bridging the gap between complex engineering and business strategy with 3+ years of experience. I specialize in SQL-driven insights, Agile requirements elicitation, and end-to-end UAT to deliver scalable software solutions. By standardizing metrics and optimizing workflows, I have a proven track record of reducing operational inefficiencies by '12%' and driving high-impact continuous improvement."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HboLsH4fgLT-5cmf9YbuUD675f4hAOv3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mihiirr05",
  linkedin: "https://www.linkedin.com/in/mihir-khandelwal05/",
  gmail: "mihirkhl478@gmail.com",
  facebook: " ",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUSINESS SYSTEMS & DATA ANALYST WITH A PRODUCT-FOCUSED MINDSET",
  skills: [
    emoji(
      "⚡ Gather, analyze, and document business and system requirements"
    ),
    emoji("⚡ Build dashboards and reports using Excel, SQL, and BI tools"),
    emoji(
      "⚡ Support system improvements through data analysis and process mapping"
    ),
    emoji("⚡ Bridge the gap between business stakeholders and technical teams")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Excel",
    fontAwesomeClassname: "fas fa-file-excel"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Business Analysis",
    fontAwesomeClassname: "fas fa-briefcase"
  },
  {
    skillName: "Data Analysis",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "Requirements Gathering",
    fontAwesomeClassname: "fas fa-tasks"
  },
  {
    skillName: "Process Improvement",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "JIRA",
    fontAwesomeClassname: "fab fa-jira"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  }
],
display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/ASULOGO.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "January 2025 - December 2025",
      desc: "Delivered two capstone projects translating data into business and strategic insights.",
descBullets: [
  "Executed a market research study to identify customer needs, competitive gaps, and growth opportunities",
  "Applied machine learning techniques to analyze real-world data and communicate insights through clear visualizations and reports"
]

    },
    {
      schoolName: "Sanjivani College Of Engineering",
      logo: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/SanjivaniLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - April 2022",
      desc: "Applied engineering principles to design, analyze, and improve software and data-driven systems across academic and project-based work.",
descBullets: [
  "Designed and implemented end-to-end solutions involving data analysis, system workflows, and application logic using Python, SQL, and modern development tools",
  "Collaborated in team-based engineering projects, translating requirements into scalable and maintainable technical solutions"
]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

 const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "B", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ],
//   displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Membership Services Supervisor",
      company: "Arizona State University (SDFC)",
      companylogo: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/ASULOGO.png"),
      date: "Apr 2025 – Dec 2025",
      desc: "Led data-driven operational reporting and performance analysis to improve efficiency across multiple service teams.",
      descBullets: [
        "Standardized performance metrics across three teams, reducing reporting inefficiencies by 12%",
        "Analyzed operational data and customer feedback to identify trends, improvement opportunities, and ensure accurate documentation"
      ]
    },
    {
      role: "Data Analyst",
      company: "Humane Bits",
      companylogo: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/Hbits.png"),
      date: "May 2024 – Jul 2024",
      desc: "Supported system re-architecture and delivered analytical insights through scalable dashboards and validated data pipelines.",
      descBullets: [
        "Designed Power BI dashboards using Power Query and DAX to translate complex business logic into actionable insights",
        "Validated end-to-end data flows during system migration, ensuring 100% data integrity across backend services and reporting layers"
      ]
    },
    {
      role: "Business Analyst",
      company: "Persistent Systems",
      companylogo: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/Persistent.png"),
      date: "Feb 2022 – Feb 2024",
      desc: "Worked in the BFSI domain supporting a healthcare insurance client by bridging business requirements with technical implementation.",
      descBullets: [
        "Created user stories, acceptance criteria, and supported QA automation for insurance policy and claims validation",
        "Built scalable Power BI dashboards analyzing customer profiles, policy performance, and claims behavior",
        "Conducted UAT and delivered data-driven recommendations to improve policy offerings and claims handling"
      ]
    },
    {
      role: "Data Analyst",
      company: "Lanzay",
      // companylogo: require("./assets/images/lanzayLogo.png"),
      date: "Feb 2021 – Feb 2022",
      desc: "Applied data analytics to improve pricing accuracy and decision-making in interior design and renovation projects.",
      descBullets: [
        "Developed automated Power BI dashboards analyzing multi-source pricing data, reducing data retrieval time by 40%",
        "Collaborated with Engineering and Product teams to implement data governance protocols ensuring 100% data integrity"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Professional certifications, academic achievements, and credentials demonstrating expertise in data analytics, business analysis, and process improvement.",

  achievementsCards: [
    {
      title: "Lean Six Sigma Green Belt",
      subtitle:
        "Certified in process improvement methodologies, root-cause analysis, and data-driven decision-making for operational excellence.",
      image: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/SIXSIGMA.png"),
      imageAlt: "Lean Six Sigma Green Belt",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Deloitte – Data Analytics Certification",
      subtitle:
        "Hands-on certification covering data analysis, visualization, and business insights using real-world case studies.",
      image: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/Deloitte.png"),
      imageAlt: "Deloitte Data Analytics Certification",
      footerLink: [
        {
          name: "Certification",
          url: "" // add link if available
        }
      ]
    },
    {
      title: "Alation – Data Analytics Advocate",
      subtitle:
        "Certified in modern data governance, data cataloging, metadata management, and promoting analytics-driven culture within organizations.",
      image: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/Alation.jpg"),
      imageAlt: "Alation Data Analytics Advocate",
      footerLink: [
        {
          name: "Certification",
          url: "" // add link if available
        }
      ]
    },
    {
      title: "Supply Chain Foundations: Project Management",
      subtitle:
        "Certified in Supply chain Management, data governance, project management, metadata management performance in analytics, and business intelligence.",
      image: require("/Users/mihirkhandelwal/Desktop/Portfolio/developerFolio/src/assets/images/Screenshot 2026-01-11 at 10.05.53 AM.png"),
      imageAlt: "Supply Chain Foundations: Project Management",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(623)273-9954",
  email_address: "mihirkhl478@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
