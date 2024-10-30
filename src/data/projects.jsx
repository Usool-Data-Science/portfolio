import { FaAws, FaC, FaDocker, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6'
import { SiAwselasticloadbalancing, SiCss3, SiD3Dotjs, SiDjango, SiExpress, SiFlask, SiGooglecloud, SiHtml5, SiJquery, SiKubernetes, SiMongodb, SiMysql, SiNextdotjs, SiPrisma, SiPuppet, SiSocketdotio, SiStripe, SiTailwindcss, SiTensorflow, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiDigitalOcean, DiRedis } from 'react-icons/di'
import { FcLinux } from 'react-icons/fc'

const python = <FaPython size={30} />
const javaScript = <IoLogoJavascript size={30} />
const flask = <SiFlask />
const react = <FaReact />
const linux = <FcLinux />
const typeScript = <SiTypescript size={30} />
const C = <FaC size={40} />
const django = <SiDjango />
const tensorFlow = <SiTensorflow />
const nodeJs = <FaNodeJs />
const jQuery = <SiJquery />
const d3Js = <SiD3Dotjs />
const mySql = <SiMysql />
const mongoDb = <SiMongodb />
const postgreSql = <BiLogoPostgresql />
const redis = <DiRedis />
const aws = <FaAws />
const gcp = <SiGooglecloud />
const docker = <FaDocker />
const kubernetes = <SiKubernetes />
const puppet = <SiPuppet />
const digitalOcean = <DiDigitalOcean />
const html = <SiHtml5 />
const css = <SiCss3 />
const loadbalancer = <SiAwselasticloadbalancing />
const socket = <SiSocketdotio />
const nextjs = <SiNextdotjs />
const tailwindcss = <SiTailwindcss />
const stripe = <SiStripe />
const prisma = <SiPrisma />
const express = <SiExpress />

export const PROJECTS = [
    {
        id: 1,
        title: "Coders' Lodge",
        datetime: "5-Sep-2024",
        link: "https://coders-lodge.onrender.com/",
        thumbnail: "Images/coderslodge.PNG",
        headline: "A repository that holds list of my coding pals. It uses react in the frontend and flask framework in the backend to handle all CRUD operations.",
        loom: "https://www.loom.com/share/fa09f21c504e4f129abff357c7ec45d1?sid=7e58272c-b7f3-4dcb-acec-ad65542f48a1",
        github: "https://github.com/Usool-Data-Science/Coders_Lodge",
        stack: [python, react, linux, flask, javaScript],
        stack_string: "python, react, linux, flask, javaScript",
        features: ["✨API Integration ✨Responsive Frontend ✨Database Persistence"]
    },
    {
        id: 2,
        title: "EFCC Information Management System",
        datetime: "16-March-2024",
        link: "",
        thumbnail: "Images/efcc.png",
        headline: "An information management system for Economic and Financial Crime Commission, a Nigerian Federal Government parastatal that keep financial and cyber crime records for prosecution.",
        loom: "https://www.loom.com/share/96e804c8816f4d309c023f0b98f288ec?sid=e140bfac-936b-4c16-910d-e291decdb9eb",
        github: "",
        stack: [docker, python, react, linux, flask, javaScript, puppet, digitalOcean],
        stack_string: "docker, python, react, linux, flask, javaScript, puppet, digitalOcean",
        features: ["✨API Integration ✨Responsive Frontend ✨Database Persistence/Migration ✨User Authentication ✨User Authorization ✨Admin Dashboard ✨Custom CLI"]
    },
    {
        id: 3,
        title: "AirBnB Minified",
        datetime: "03-Mar-2024",
        link: "https://dev.to/usooldatascience/mastering-closures-and-decorators-in-python-from-basics-to-advanced-16o",
        thumbnail: "Images/airbnb.png",
        headline: "A scalable AirBnB application built for client to lease a comfortable home for a fixed period of time.",
        loom: "",
        github: "",
        stack: [html, css, javaScript, python, linux, flask, puppet, loadbalancer, digitalOcean],
        stack_string: "html, css, javaScript, python, linux, flask, puppet, loadbalancer, digitalOcean",
        features: ["✨Auto-scaling ✨API Integration ✨Responsive Frontend ✨Database Persistence/Migration ✨User Authentication ✨User Authorization ✨Admin Dashboard ✨Custom CLI"]
    },
    {
        id: 4,
        title: "Coders' Talk",
        datetime: "10-May-2023",
        link: "https://coders-talk.onrender.com/",
        thumbnail: "Images/chatting_.webp",
        headline: "A scalable realtime chat application built for developers to interact between themselves. The application uses websocket to track each user activity and broadcast it to the others.",
        loom: "https://www.loom.com/share/fa035bfeac1a4beba4cb280f44979577?sid=7e7f9a8d-4535-4df4-b382-3520ccf62d95",
        github: "https://github.com/Usool-Data-Science/coders-talk",
        stack: [html, css, javaScript, python, flask, socket],
        stack_string: "html, css, javaScript, python, flask, socket",
        features: ["✨Auto-scaling ✨Web Socket ✨Responsive Frontend"]
    },
    {
        id: 5,
        title: "Study Buddy",
        datetime: "13-Sept-2024",
        link: "",
        thumbnail: "Images/Study-buddy.webp",
        headline: "A highly responsive realtime discord-like chat application built for developers to interact between themselves. The can create groups and focus on their main discussions",
        loom: "https://www.loom.com/share/e3d0b4563df94c31b67ecd5063f8dea3?sid=f035e90e-f7eb-4d85-982b-b1eae71734d8",
        github: "https://github.com/Usool-Data-Science/coders-talk",
        stack: [html, css, javaScript, python, django, socket],
        stack_string: "html, css, javaScript, python, django, socket",
        features: ["✨Auto-scaling ✨Web Socket ✨Responsive Frontend ✨Realtime Messaging"]
    },
    {
        id: 6,
        title: "OnlyHorse",
        datetime: "23-Oct-2023",
        link: "",
        thumbnail: "Images/onlyhorse.png",
        headline: "An onlyfan page for horse sales and care services. Users can create account, post about their horses, transact and seek medical care for thier horses.",
        loom: "",
        github: "https://github.com/Usool-Data-Science/coders-talk",
        stack: [html, css, javaScript, nextjs, typeScript, tailwindcss, prisma, postgreSql, stripe],
        stack_string: "html, css, javaScript, nextjs, typeScript, tailwindcss, prisma, postgreSql, stripe",
        features: ["✨Auto-scaling✨Responsive Frontend ✨Authentication ✨Payment method ✨OTP ✨User profile ✨Image/video upload"]
    },
    {
        id: 7,
        title: "MyMall",
        datetime: "23-Oct-2023",
        link: "",
        thumbnail: "Images/ecommerce2.png",
        headline: "An ecommerce store that allows users to shop for their desired products, admins can upload product and update product prices. Each customer can add product to their cart and pay with the most convenient payment method.",
        loom: "",
        github: "https://github.com/Usool-Data-Science/MyMall",
        stack: [html, css, javaScript, mongoDb, react, stripe, nodeJs, redis],
        stack_string: "html, css, javaScript, mongoDb, react, stripe, nodeJs, redis",
        features: ["✨Auto-scaling✨Responsive Frontend ✨Authentication ✨Caching ✨Payment method ✨OTP ✨User profile ✨Shopping Cart ✨Admin Dashboard"]
    },
    {
        id: 8,
        title: "Netflix Clone",
        datetime: "05-June-2023",
        link: "",
        thumbnail: "Images/netflix.png",
        headline: "A video streaming application like netflix, that allows users to create an account, stream live videos, save favorite videos and also get personalized recommendations based on their interest.",
        loom: "",
        github: "https://github.com/Usool-Data-Science/Netflix_Clone",
        stack: [html, css, react, mongoDb, tailwindcss, express, nodeJs],
        stack_string: "html, css, react, mongoDb, tailwindcss, express, nodeJs",
        features: ["✨Watch Trailers ✨Responsive Frontend ✨Authentication with JWT ✨Caching ✨Payment method ✨Recommendation System ✨User profile ✨Shopping Cart"]
    },
    {
        id: 9,
        title: "Linkedin Clone",
        datetime: "12-Jan-2024",
        link: "",
        thumbnail: "Images/linkedin.png",
        headline: "A professional networking platform where users can connect, share their work experiences, and build business relationships. It allows professionals to showcase their skills, search for jobs, and participate in industry discussions. Companies also use LinkedIn to post job openings, recruit talent, and build their brand presence..",
        loom: "",
        github: "https://github.com/Usool-Data-Science/Netflix_Clone",
        stack: [html, css, react, mongoDb, tailwindcss, express, nodeJs],
        stack_string: "html, css, react, mongoDb, tailwindcss, express, nodeJs",
        features: ["✨Watch Trailers ✨Responsive Frontend ✨Authentication with JWT ✨Caching ✨Payment method ✨Recommendation System ✨User profile ✨Shopping Cart"]
    },
]