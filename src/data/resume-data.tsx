import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ritvik Nimmagadda",
  initials: "RN",
  location: "Los Angeles, CA, PST",
  locationLink: "https://www.google.com/maps/place/Los+Angeles,+CA/",
  about:
    "ML/AI Engineer with a passion to automate stuff",
  summary:
    "I'm a AI engineer, researcher, and developer. I currently work as an AI software engineer at Cigna, where I'm working on building intelligent systems for finance use cases using Generative AI and LLMs",
  avatarUrl: "https://avatars.githubusercontent.com/RitvikNimm",
  personalWebsiteUrl: "https://ritvikn.vercel.app/",
  contact: {
    email: "rnimmaga@usc.edu",
    tel: "+12132450650",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RitvikN18",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritvikn/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/RitvikN18",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Southern California",
      degree: "Master's Degree in Computer Science",
      start: "2022",
      end: "2024",
    },
    {
      school: "International Institute of Information Technology, Bhubaneswar",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2018",
      end: "2022",
    }
  ],
  work: [
    {
      company: "Cigna",
      link: "https://www.cigna.com/",
      badges: ["Remote"],
      title: "AI Software Engineer",
      logo: ParabolLogo,
      start: "Aug 2023",
      end: "Present",
      description:
        "Spearheaded the development of a system that autonomously extracts key insights from daily reports provided by investment banking companies and answers questions from those reports, resulting in an anticipated cost savings of over $200k annually. Successfully implemented RAG (Retrieval Augmented Generation), using Redis vector DB for similarity search and integrating Langchain's OpenAI wrapper operating GPT4 LLM to boost natural language understanding, contributing to ~30% reduction in manual effort. Developed robust backend API endpoints using Flask, ensuring seamless communication between the front-end and the underlying AI engine"
    },
    {
      company: "University of California, Los Angeles",
      link: "https://www.ucla.edu/",
      badges: ["Los Angeles, CA"],
      title: "Research Intern",
      logo: ClevertechLogo,
      start: "May 2023",
      end: " August 2023",
      description:
        "Developed a Python tool automating patient data into flowcharts, reduced manual data processing time by 40%, and initiated NLP for standardized hospital data interpretation, enhancing healthcare efficiency. Designed a patient flow prediction AI model based on initial complaints and medical data, improving healthcare outcomes through data-driven insights. Created an interactive web app with React and Flask, enabling real-time execution and visualization of the algorithm"
      },
    {
      company: "Tiger Analytics",
      link: "https://www.tigeranalytics.com/",
      badges: ["Chennai, India"],
      title: "Data Science Intern",
      logo: JojoMobileLogo,
      start: "Jan 2022",
      end: "June 2022",
      description:
        "Designed and configured data pipeline using Apache Airflow, Python, and MySQL. Performed ETL testing on MySQL database and generated reports using Tableau. Enhanced work order efficiency by more than 12% through the implementation of an ML-based recommendation engine for technician assignments. Leveraged Docker, Azure Container Registry, and Azure Kubernetes Service to deploy and maintain ML models in production",
    },
    {
      company: "Omdena",
      link: "https://www.omdena.com/",
      badges: ["Remote"],
      title: "Junior Machine Learning Engineer",
      logo: NSNLogo,
      start: "July 2021",
      end: "August 2021",
      description: "Optimized PID engineering drawing digitization by utilizing the YOLOv5 model, following an exploration of multiple pre-trained object detection models. Reduced manual effort by 30% and expedited project timelines. Led a non-profit project, 'Leveraging AI to Analyze the Socio-Economic Impact of Covid-19 in India,' and constructed a machine learning model to identify the infected region in a Covid-19 patient's CT scans",
    },
      {
      company: "Ontario Tech University",
      link: "https://ontariotechu.ca/",
      badges: ["Oshawa, Ontario"],
      title: "AI Research Intern",
      logo: NSNLogo,
      start: "May 2021",
      end: "August 2021",
      description: "Built machine learning models for Audio Based Emotion Recognition using a multi-modal (audio and text) approach for use in companion robots, achieving more than 80% accuracy. Developed a web application using JavaScript to record audio constantly, classify emotion shown by the speaker, and alert the nurse when any negative emotion is detected. Presented the project to the Ontario Shores Centre staff and published a research paper in The Journal of Supercomputing",
    },
      {
      company: "International Institute of Information Technology",
      link: "https://www.iiit-bh.ac.in/",
      badges: ["Bhubaneswar, India"],
      title: "Undergraduate Researcher",
      logo: NSNLogo,
      start: "June 2020",
      end: "December 2020",
      description: "Improved performance of existing deep learning models for License Plate Corner Point Detection by performing feature selection on these models using various meta-heuristic optimization techniques. Reduced the SSD loss from 0.040 to 0.015 (61.54% decrease) by employing Genetic Algorithm for feature selection. Won the best paper award by presenting a research paper at an international conference",
    },
  ],
  skills: [
    "Python", "C++", "Java", 
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "Flask",
    "TensorFlow",
    "PyTorch",
    "AWS",
    "Azure",
    "LLMs",
    "RAG",
    "Redis",
    "Weaviate",
    "Langchain"
  ],
  projects: [
    {
      title: "Event Search Website",
      techStack: [ "Angular", "Node.js", "AJAX", "Bootstrap"],
      description: "A platform to search events and buy tickets",
      logo: ConsultlyLogo,
      link: {
        label: "eventsearch.com",
        href: "https://assignment8-frontend-382423.wl.r.appspot.com/",
      },
    },
    
  ],
} as const;
