import {
  FaAws,
  FaC,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiAwselasticloadbalancing,
  SiCss3,
  SiD3Dotjs,
  SiDjango,
  SiExpress,
  SiFlask,
  SiGithubactions,
  SiGooglecloud,
  SiHtml5,
  SiJquery,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiPuppet,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDigitalOcean, DiRedis } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

// Store the **component references**, not JSX
const python = FaPython;
const githubactions = SiGithubactions;
const javaScript = IoLogoJavascript;
const flask = SiFlask;
const react = FaReact;
const linux = FcLinux;
const typeScript = SiTypescript;
const cLang = FaC;
const django = SiDjango;
const tensorFlow = SiTensorflow;
const nodeJs = FaNodeJs;
const jQuery = SiJquery;
const d3Js = SiD3Dotjs;
const mysql = SiMysql;
const mongoDb = SiMongodb;
const postgreSql = BiLogoPostgresql;
const redis = DiRedis;
const aws = FaAws;
const gcp = SiGooglecloud;
const docker = FaDocker;
const kubernetes = SiKubernetes;
const puppet = SiPuppet;
const digitalOcean = DiDigitalOcean;
const html = SiHtml5;
const css = SiCss3;
const loadbalancer = SiAwselasticloadbalancing;
const socket = SiSocketdotio;
const nextjs = SiNextdotjs;
const tailwindcss = SiTailwindcss;
const stripe = SiStripe;
const prisma = SiPrisma;
const express = SiExpress;

export const PROJECTS = [
  {
    id: 1,
    title: "Quick connector",
    datetime: "5-Sep-2024",
    link: "https://www.nfseek.com/",
    thumbnail: "Images/nfseek-logo.png",
    headline:
      "A NFC powered device that helps bridges the physical and digital worlds using NFC technology. Our smart products — like business cards, lost & found tags, and retail review board — instantly connect people to essential information with a simple tap. No charging. No app download. Just smart, tap-and-go functionality built for real life.",
    loom: "",
    github: "",
    stack: [react, nextjs, express, javaScript, nodeJs, mongoDb, redis],
    stack_string: "nodejs, react, nextjs, express,mongoDB, redis, javaScript",
    features: [
      "✨API Integration ✨Responsive Frontend ✨Database Persistence",
    ],
  },
  {
    id: 2,
    title: "Herbal Store",
    datetime: "16-March-2024",
    link: "https://mern-stack-projects-1lwp.vercel.app/",
    thumbnail: "Images/askia.jpg",
    headline:
      "A modern e-commerce platform designed for selling natural and herbal products. The website features a clean, calming UI, product listings with detailed descriptions, and a smooth shopping experience focused on wellness, sustainability, and trust. Built with usability and performance in mind to showcase herbal remedies and lifestyle products effectively",
    loom: "",
    github: "",
    stack: [
      docker,
      python,
      react,
      linux,
      flask,
      javaScript,
      puppet,
      digitalOcean,
    ],
    stack_string:
      "docker, python, react, linux, flask, javaScript, puppet, digitalOcean",
    features: [
      "✨API Integration ✨Responsive Frontend ✨Database Persistence/Migration ✨User Authentication ✨User Authorization ✨Admin Dashboard ✨Custom CLI",
    ],
  },
  {
    id: 10,
    title: "Sales Metric",
    datetime: "30-Oct-2024",
    link: "https://sales-metric.vercel.app/",
    thumbnail: "Images/salesMetric.png",
    headline:
      "A dynamic, responsive dashboard that presents sales and income performance through animated data visualizations for non-technical audiences. Leveraging the React library Recharts, it animates individual plot components seamlessly, while Tailwind CSS enhances the design’s complexity and responsiveness. Additionally, it includes a user profile section, enabling users to manage activities and settings efficiently.",
    loom: "",
    github: "https://github.com/Usool-Data-Science/salesMetric",
    stack: [html, css, react, tailwindcss],
    stack_string: "html, css, react, tailwindcss",
    features: ["✨Animated Plots ✨Responsive Frontend ✨User's Profile"],
  },
  {
    id: 11,
    title: "HomeBnB",
    datetime: "29-Dec-2024",
    render: 1,
    link: "https://homebnb-jwsu.onrender.com/apidocs/#/",
    thumbnail: "Images/homebnb.PNG",
    headline:
      "A RESTful backend API built with Python and Flask that replicates core Airbnb functionalities, including user authentication, property listings, bookings, reviews, and availability management. Designed with scalable architecture, secure endpoints, and database-driven services to support a full-featured accommodation marketplace..",
    loom: "",
    github: "https://github.com/Usool-Data-Science/HomeBnB",
    stack: [mysql, githubactions, python, flask],
    stack_string: "mysql, githubactions, python, flask",
    features: ["✨REST API ✨Database Migration, ✨Caching,✨Automated DevOps"],
  },
  {
    id: 12,
    title: "Fabricare",
    datetime: "2-Jan-2025",
    render: 1,
    link: "https://fabricare.vercel.app/",
    thumbnail: "Images/Fabricare.png",
    headline:
      "An e-commerce store with a dynamic user interface built using React allows users to shop for products, while admins manage inventory via a dedicated dashboard. The backend, powered by Python, handles business logic and integrates with Stripe for secure payments. MySQL stores product and order data, with Redis optimizing performance through caching. GitHub Actions automates CI/CD pipelines for efficient development, and AWS provides scalable hosting and infrastructure, ensuring a fast, secure, and reliable platform.",
    loom: "https://www.loom.com/share/4d91169ec43d46f0b3769c04cdfea326?sid=93e79a45-ffa1-43c8-adef-91808ab275d1",
    github: "https://github.com/Usool-Data-Science/FabriCare",
    stack: [
      html,
      css,
      react,
      tailwindcss,
      stripe,
      redis,
      mysql,
      githubactions,
      aws,
      python,
      flask,
    ],
    stack_string:
      "html, css, react, tailwindcss, stripe, redis, mysql, githubactions, aws, python, flask",
    features: [
      "✨REST API ✨Responsive Frontend ✨User's Profile, ✨Database Migration, ✨Caching, ✨Payment Gateway, ✨Automated DevOps",
    ],
  },
  {
    id: 13,
    title: "MernChat",
    datetime: "2-Feb-2025",
    render: 1,
    link: "https://mern-chat-app-1lwr.onrender.com",
    thumbnail: "Images/mern-chat-app.png",
    headline:
      "A full-stack real-time chat application supporting instant, bidirectional communication between two users. The system is built on a robust RESTful API with secure authentication and authorization, efficient state management, and real-time messaging. It incorporates database migrations for maintainable schema evolution and caching mechanisms to optimize performance and reduce latency.",
    loom: "",
    github: "https://github.com/Usool-Data-Science/mern-chat-app",
    stack: [mongoDb, react, nodeJs, express, socket, tailwindcss],
    stack_string:
      "mongoDb, react.js, node.js, express.js, socket.io, tailwindCSS",
    features: [
      "✨REST API ✨Database Migration, ✨Caching,✨Authentication and Authorization, ✨State management, ✨Realtime messaging.",
    ],
  },
];
