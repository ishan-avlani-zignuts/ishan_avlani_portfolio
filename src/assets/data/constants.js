import react from "../images/react.svg";
import redux from "../images/redux.svg"
import next from "../images/next.png"
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import bootstrap from "../images/bootstrap.png";
import mui from "../images/mui.png";
import mongo from "../images/mongodb.jpeg";
import node from "../images/node.jpeg"

import holysaints from "../images/holysaints.jpeg";
import mu from "../images/mu.png";
import stmarys from "../images/stmarys.jpeg";

//importing company images
import tcs from "../images/tcs_logo.png"

//importing project images
import pipelean from "../images/pipelean.png";
import panto from "../images/panto.png";
import cars from "../images/cars.jpeg";
import mendelson from "../images/mendelson.png";
import shop from "../images/e-shop.png"
import hotels from "../images/sentiment_analysis.png";

import ishan from "../images/ishan.jpeg";
export const Bio = {
  name: "Ishan Avlani",
  roles: [
    "Software Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/ishan-avlani-zignuts",
  resume:
    "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
};

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
    date: "2018 - 2020",
    grade: "70 PR",
    desc: "I completed my class 12 high school education at St. Mary's School, Rajkot,  where I studied 11th and 12th standard.",
    degree: "Class 12th, Science with PCM, State Board",
  },
  {
    id: 2,
    img: holysaints,
    school: "Holy Saints School, Rajkot, Gujarat",
    date: "Start - 2018",
    grade: "93 PR",
    desc: "I completed my 10th-grade education at Holy Saints School, Rajkot, where I studied up to the 10th standard.",
    degree: "Class 10th, State Board",
  },
];

export const experiences = [
  {
    id: 0,
    img: "http://surl.li/tzomb",
    role: "Software Developer Intern",
    company: "Zignuts Technolab Pvt. Ltd.",
    date: "January 2024 - Present",
    desc: "This is the Campus Placement. Here First 6 Months were Internship with stipend and then I am permanent employee. I am working in the live project named Pipelean.io which is from UK, Europe.",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuYMsHYO063wSlxQazxoKKx2ti07UZFe2cA&s",
    role: "Software Developer Intern",
    company: "Ace Infoway Pvt. Ltd.",
    date: "May 2023 - July 2023",
    desc: "This was a summer internship where I worked in project of Food Ordering Website",
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
    // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
    img: tcs,
    role: "Campus Ambassador",
    company: "Tata Consultancy Services (TCS) ",
    date: "June 2022 - May 2023",
    desc: "Here as a Ambassador in my University I have served as mediator between Marwadi University and TCS. I had to do promotions, sales and placement help to students.",
    skills: [
      "Management",
      "Promotions",
      "Sales",
      "Public Speaking",
      "Event Management",
    ],
  },
];

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

export const projects = [
  {
    id: 0,
    img: pipelean,
    name: "Pipelean.io",
    desc: "It is a conversational CRM which is used to increase the sales rapidly. It is a live project from Portugal.",
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
 

export const achievements = [
  {
    id: 0,
    img: "https://shorturl.at/G6XUB",
    desc: "Campus Ambassador of Tata Consultancy Services (TCS) in Marwadi University for Academic Year 2022 - 2023",
  },

  {
    id: 1,
    img: ishan,
    desc: "Got the Early Campus Placement Achievement from Marwadi University",
  },

  {
    id: 2,
    img: "https://shorturl.at/7LRdR",
    desc: "Completed Computer Engineering with 1st Rank by securing 10 / 10 SGPA throughout the last year.",
  },
];
