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



export const assets = {
    sun_icon, 
    moon_icon,
    right_arrow,
    menu_white,
    close_white,hand_icon,
    download_icon,about_me,
    code_icon, code_icon_dark, edu_icon, edu_icon_dark , project_icon, project_icon_dark,vs_code,
    mongodb, firebase, git,figma
  
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