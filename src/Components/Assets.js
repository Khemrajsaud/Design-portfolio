import sun_icon from '../Components/Image/sun_icon.png';
import moon_icon from './Image/moon_icon.png';
import right_arrow from './Image/right-arrow-bold.png';
import menu_white from './Image/menu-white.png';
import close_white from './Image/close-white.png';
import hand_icon from './Image/hand-icon.png'
import download_icon from './Image/download-icon.png'
import about_me from './Image/about_me.jpg'
import code_icon from './Image/code-icon.png'
import code_icon_dark from './Image/code-icon-dark.png'
import edu_icon from './Image/edu-icon.png'
import edu_icon_dark from './Image/edu-icon-dark.png'
import project_icon from './Image/project-icon.png'
import project_icon_dark from './Image/project-icon-dark.png'
import vs_code from './Image/vscode.png'
import mongodb from './Image/mongodb.png'
import firebase from './Image/firebase.png'
import git from './Image/git.png'
import figma from './Image/figma.png'
import work_1 from './Image/work-1.png'
import work_2 from './Image/work-2.png'
import work_3 from './Image/work-2.png'
import work_4 from './Image/work-3.png'
import profileabout from "../Components/Image/aboutprofile.png"
import projecta from "../Components/Image/projecta.png"
import projectb from "../Components/Image/projectb.png"
import task from "../Components/Image/task.png";
import skytopacademy from "../Components/Image/skytopacademy.png";
import calculater from "../Components/Image/calculater.png"
import todo from "../Components/Image/todo.png";
import sopecart from "../Components/Image/shopcart.png"
import website from "../Components/Image/website.png";



export const assets = {
    sun_icon, 
    moon_icon,
    right_arrow,
    menu_white,
    close_white,hand_icon,
    download_icon,about_me,
    code_icon, code_icon_dark, edu_icon, edu_icon_dark , project_icon, project_icon_dark,vs_code,
    mongodb, firebase, git,figma,work_1,work_2,work_3,work_4,profileabout,projecta,projectb,task,skytopacademy,calculater,todo,sopecart, website
  
};


export const infoList = [

    {
        icon : assets.code_icon, iconDark: assets.code_icon_dark, 
        title: 'Languages',
        description: 'HTML, CSS, JavaScript, React Js, Next Js'
    },
    {
        icon: assets.edu_icon, iconDark: assets.edu_icon_dark, 
        title: 'Educaton',
        description: 'BIT '
    },

    {
        icon: assets.project_icon, iconDark: assets.project_icon_dark ,
        title: 'Project',
        description: 'Build more than 5 project'
    }
]

export const toolsData =[
    assets.vs_code, assets.firebase,assets.git, assets.mongodb,
    
    
]

export const workData = [
    {
        title: 'Skytop Academy',
        description: 'It is usually design for Skytop Academy for making user interactive and friendly',
        bgImage: assets.skytopacademy,
        links: {
            site: "https://skytop-jet.vercel.app/",
            github: "https://github.com/Khemrajsaud/skytop-website",
        },
    },
    {
        title: 'Task Management',
        description: 'This Task Management project is built with a Node.js backend and a React.js frontend, styled using Tailwind CSS. It allows users to add, edit, complete/incomplete, and delete tasks easily. The app features a clean, responsive UI for smooth user interaction. Backend APIs handle all task data operations securely. This project showcases my skills in full-stack development and building functional CRUD applications.',
        bgImage: assets.task,
        links: {
            site: "https://taskmanagement-h59r.vercel.app/",
            github: "https://github.com/Khemrajsaud/taskmanagement",
        },
    },
    {
        title: 'Mern Stack E-commerce Website',
        description: 'This project is a fully functional MERN-stack e-commerce website built using Next.js with Tailwind CSS and ShadCN UI for modern design. It features Clerk authentication for secure login and user management. The product data and categories are managed using Sanity.io as the headless CMS. Key functionalities include adding and deleting products, managing product categories, and favoriting products. The platform is designed to be scalable, responsive, and user-friendly.',
        bgImage: assets.sopecart,
        links: {
            site: "https://shop-cart-xv9g.vercel.app/", 
            github: "https://github.com/Khemrajsaud/ShopCart",
        },
    },
    {
        title: 'Calculater Design ',
        description: 'Design Calculater used Javascript and HTML and CSS',
        bgImage: assets.calculater,
        links: {
            site: "https://newmoderncalculator.netlify.app/",
            github: "https://github.com/Khemrajsaud/Calculator",
        },
    },
    {
        title: 'To-Do app ',
        description: 'Design Calculater used ReactJS and TailwindCSS',
        bgImage: assets.todo,
        links: {
            site: "https://todoappdesign.netlify.app/",
            github: "https://github.com/Khemrajsaud/Todolist-app",
        },
    },
    {
        title: 'Website Design ',
        description: 'Design Website Tailwind css , ReactJS with motion animation',
        bgImage: assets.website,
        links: {
            site: "https://web-ten-beta-48.vercel.app/",
            github: "https://github.com/Khemrajsaud/web",
        },
    },

];

export const educationData = [
  {
    degree: "Bachelor of Information Technology (BIT)",
    institution: "Texas College of Management & IT",
    year: "2022 - 2026",
    details: [
      "Specialization in software development and web technologies",
      "Focused on MERN stack, cloud, and mobile app development"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "ABC Higher Secondary School",
    year: "2020 - 2022",
    details: [
      "Science stream with Computer Science major"
    ]
  }
];






