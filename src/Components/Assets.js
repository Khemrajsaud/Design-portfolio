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



export const assets = {
    sun_icon, 
    moon_icon,
    right_arrow,
    menu_white,
    close_white,hand_icon,
    download_icon,about_me,
    code_icon, code_icon_dark, edu_icon, edu_icon_dark , project_icon, project_icon_dark,vs_code,
    mongodb, firebase, git,figma,work_1,work_2,work_3,work_4,profileabout,projecta,projectb
  
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
        title: 'Frontend project',
        description: 'It is usually design for Skytop Academy for making user interactive and friendly',
        bgImage: assets.projecta,
        links: {
            site: "https://skytop-academy.vercel.app/",
            github: "https://github.com/Khemrajsaud/skytop-website",
        },
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: assets.work_2,
        links: {
            site: "https://todoappdesign.netlify.app",
            github: "#",
        },
    },
    {
        title: 'E-commerce Website',
        description: 'E-commerce website design used Reactjs and tailwind css. it is fully functionaly and user interface design',
        bgImage: assets.projectb,
        links: {
            site: "https://e-commerce-five-mu-96.vercel.app/", 
            github: "#",
        },
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: assets.work_4,
        links: {
            site: "https://todoappdesign.netlify.app",
            github: "#",
        },
    },
];

