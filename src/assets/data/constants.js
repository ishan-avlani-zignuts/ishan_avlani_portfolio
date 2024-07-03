// skills images
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import next from "../images/next.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import bootstrap from "../images/bootstrap.png";
import mui from "../images/mui.png";
import mongo from "../images/mongodb.jpeg";
import node from "../images/node.jpeg";

// education images
import holysaints from "../images/holysaints.jpeg";
import mu from "../images/mu.png";
import stmarys from "../images/stmarys.jpeg";

// company images
import tcs from "../images/tcs_logo.png";
import ace from "../images/ace.jpeg";
import zignuts from "../images/zignuts_logo.png";

// project images
import crm from "../images/crm.png";
import panto from "../images/panto.png";
import cars from "../images/cars.jpeg";
import mendelson from "../images/mendelson.png";
import shop from "../images/e-shop.png";
import hotels from "../images/sentiment_analysis.png";

// achievements images
import ishan from "../images/achievement.jpeg";
import ambassador from "../images/ambassador.jpg";
import first from "../images/first.webp";
import satellite from "../images/satellite.png"
// About me Data
export const Bio = {
  name: "Ishan Sandip Avlani",
  roles: [
    "Software Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
};

// Education Data
export const education = [
  {
    id: 0,
    img: mu,
    school: "Marwadi University, Rajkot, Gujarat",
    date: "2020 - 2024",
    grade: "9.6 CGPA",
    desc: "I have always been in top 3 of the University and in last year of Engineering I was the First Rank holder throughout the year with 10 / 10 SGPA.",
    degree: "B.Tech in Computer Engineering",
  },
  {
    id: 1,
    img: stmarys,
    school: "St. Mary's School, Rajkot, Gujarat",
    date: "2019 - 2020",
    grade: "70 PR",
    desc: "I completed my class 12 high school education at St. Mary's School, Rajkot,  where I studied 11th and 12th standard.",
    degree: "Class 12th, Science with PCM, State Board",
  },
  {
    id: 2,
    img: holysaints,
    school: "Holy Saints School, Rajkot, Gujarat",
    date: "2017 - 2018",
    grade: "93 PR",
    desc: "I completed my 10th-grade education at Holy Saints School, Rajkot, where I studied up to the 10th standard.",
    degree: "Class 10th, State Board",
  },
];

// Experience Data
export const experiences = [
  {
    id: 0,
    img: zignuts,
    role: "Software Developer",
    company: "Zignuts Technolab Pvt. Ltd.",
    date: "January 2024 - Present",
    desc: "I work at Zignuts Technolab Pvt. Ltd. as a Software Developer, where I create and manage innovative software solutions for clients around the world. Using modern technologies, I design, develop, and test software applications. I work collaboratively with cross-functional teams to provide dependable, scalable solutions that meet client requirements and exceed expectations. Here at Zignuts Technolab there are many projects from variety of industries, so I'm able to get a broad range of knowledge in solving challenging business problems with cutting-edge technologies and smart solutions.",
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Material UI",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Mongo DB",
    ],
  },

  {
    id: 1,
    img: ace,
    role: "Software Developer Intern",
    company: "Ace Infoway Pvt. Ltd.",
    date: "May 2023 - July 2023",
    desc: "During my internship at Ace Infoway Pvt. Ltd., I had the opportunity to work on a challenging project: a Food Ordering System. This project allowed me to apply cutting-edge technologies and best practices in Software Development. I designed and implemented the system from scratch, showcasing my skills in frontend and backend development, database management, and user interface design. This experience has strengthened my problem-solving abilities and deepened my understanding of software development lifecycle.",
    skills: [
      "React.js",
      "Node.js",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
      "Mongo DB",
    ],
  },

  {
    id: 2,
    img: tcs,
    role: "Campus Ambassador",
    company: "Tata Consultancy Services (TCS) ",
    date: "June 2022 - May 2023",
    desc: "As a Campus Ambassador of Tata Consultancy Services (TCS) at Marwadi University, I bridged the gap between the University and Tata Consultancy Services (TCS), focusing on promotions, sales, and student placement support. I promoted TCS's career opportunities through workshops and events, enhancing student engagement and career readiness. I also provided guidance to students on resumes, interviews, and professional development, ensuring a seamless recruitment process. This role honed my skills in communication, project management, and fostering partnerships between academics and industry. 450 + students registered for TCS NQT Exam for placements under my era.",
    skills: [
      "Management",
      "Promotions",
      "Sales",
      "Public Speaking",
      "Event Management",
      "Placement Support",
    ],
  },
];

// Skills Data
export const skills = [
  {
    id: 0,
    img: react,
    desc: "React Js",
  },

  {
    id: 1,
    img: redux,
    desc: "Redux",
  },

  {
    id: 2,
    img: next,
    desc: "Next Js",
  },

  {
    id: 3,
    img: html,
    desc: "HTML",
  },

  {
    id: 4,
    img: css,
    desc: "CSS",
  },

  {
    id: 5,
    img: js,
    desc: "Javascript",
  },
  {
    id: 6,
    img: bootstrap,
    desc: "Bootstrap",
  },

  {
    id: 7,
    img: mui,
    desc: "Material UI",
  },

  {
    id: 8,
    img: node,
    desc: "Node Js",
  },

  {
    id: 9,
    img: mongo,
    desc: "Mongo DB",
  },
];

// Projects Data
export const projects = [
  {
    id: 0,
    img: crm,
    name: "Conversational CRM System",
    desc: "It is a world`s first conversational CRM which is used to increase the sales rapidly. It is a live project from Europe.",
    link: "/restricted",
  },

  {
    id: 1,
    img: panto,
    name: "Panto UI",
    desc: "This is a frontend project used to order your customised furniture.",
    link: "https://github.com/ishan-avlani-zignuts/panto",
  },

  {
    id: 2,
    img: cars,
    name: "Car Rental Management System",
    desc: "It is a MERN Full Stack Project used to manage the car rental system.",
    link: "https://github.com/ishan-avlani-zignuts/cars-assignment/tree/main/react-app-test",
  },

  {
    id: 3,
    img: hotels,
    name: "Sentiment Analysis of Hotel Reviews",
    desc: "This project is used to do analysis of reviews and based on that provides wordcloud to help hotels easily identify issues or good comments.",
    link: "/restricted",
  },
  {
    id: 4,
    img: mendelson,
    name: "Mendelson UI",
    desc: "This is a frontend project for Mendelson which is used for Communication and Engagement.",
    link: "https://github.com/ishan-avlani-zignuts/figma-ui-assignment/tree/main/mendelson-ui",
  },
  {
    id: 5,
    img: shop,
    name: "E-Commerce Web App",
    desc: "This is a E-Commerce web app with Next.js which is used to order things online with great features.",
    link: "https://github.com/ishan-avlani-zignuts/next-mui-e-commerce/tree/main",
  },
];

// Achievements Data
export const achievements = [
  {
    id: 0,
    img: ambassador,
    desc: "Campus Ambassador of Tata Consultancy Services (TCS) in Marwadi University for Academic Year 2022 - 2023",
  },

  {
    id: 1,
    img: ishan,
    desc: "Got the Early Campus Placement Achievement from Marwadi University",
  },

  {
    id: 2,
    img: first,
    desc: "Completed Computer Engineering with First Rank by securing 10 / 10 SGPA throughout the last year.",
  },

  {
    id: 3,
    img: satellite,
    desc: "Got the chance to work as Software Developer in Gujarat`s First Student Satellite Team of Marwadi University.",
  },
];
