import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import image from './assets/A._P._J._Abdul_Kalam.jpg';
import image_chatbot from './assets/chatbot.jpg'
import image_sudoko from './assets/sudoku_game.jpg'
import image_currency_convertor from './assets/Currency_convertor.jpg'
import image_Nora_AI from './assets/Nora_AI.jpg'
import image_AI_Image_Generation from './assets/AI_Image_Generation.jpg'
import image_College_Website from './assets/College_Website.jpg'
import { FiFileText } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineInvertColors } from "react-icons/md";

// Exports Links 
export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className="nav_icons" />,
        path: '/'
    }, {
        id: 2,
        name: 'About',
        icon: <FaUser className="nav_icons" />,
        path: '/About'
    }, {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className="nav_icons" />,
        path: '/PortFolio'
    }, {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className="nav_icons" />,
        path: '/Contact'
    }
]

// Export PortFolio
export const PortFolio = [
    {
        id: 1,
        img: image_chatbot,
        title: 'AI Chatbot',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project',
                desc: 'AI Chatbot',
            },
            {
                icon: <FiUser />,
                title: 'Technology',
                desc: 'HTML CSS JS',
            },
            {
                icon: <FaGithub />,
                title: 'Github',
                desc: 'https://github.com/Shivanshagrawall/AI_Chatbot.git',
            },
            {
                icon: <CgWebsite />,
                title: 'Website',
                desc: 'https://shivanshagrawall.github.io/AI_Chatbot/',
            },
        ]
    },
    {
        id: 2,
        img: image_sudoko,
        title: 'Sudoku_game',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project',
                desc: 'Sudoku_game',
            },
            {
                icon: <FiUser />,
                title: 'Technology',
                desc: 'HTML CSS JS',
            },
            {
                icon: <FaGithub />,
                title: 'Github',
                desc: 'https://github.com/Shivanshagrawall/sudoku_game2.git',
            },
            {
                icon: <CgWebsite />,
                title: 'Website',
                desc: 'https://shivanshagrawall.github.io/sudoku_game2/',
            },
        ]
    },
    {
        id: 3,
        img: image_currency_convertor,
        title: 'Currency Convertor',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project',
                desc: 'Currency Convertor',
            },
            {
                icon: <FiUser />,
                title: 'Technology',
                desc: 'HTML CSS JS',
            },
            {
                icon: <FaGithub />,
                title: 'Github',
                desc: 'https://github.com/Shivanshagrawall/Currency-Convertor.git',
            },
            {
                icon: <CgWebsite />,
                title: 'Website',
                desc: 'https://shivanshagrawall.github.io/Currency-Convertor/',
            },
        ]
    },
    {
        id: 4,
        img: image_Nora_AI,
        title: 'Nora AI Assistant',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project',
                desc: 'Nora AI',
            },
            {
                icon: <FiUser />,
                title: 'Technology',
                desc: 'React Js',
            },
            {
                icon: <FaGithub />,
                title: 'Github',
                desc: 'https://github.com/Shivanshagrawall/Nora-Virtual-Assistant',
            },
            {
                icon: <CgWebsite />,
                title: 'Website',
                desc: 'https://shivanshagrawall.github.io/Nora-Virtual-Assistant/',
            },
        ]
    },
    {
        id: 5,
        img: image_AI_Image_Generation,
        title: 'AI Image Generation',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project',
                desc: 'AI Image Generation',
            },
            {
                icon: <FiUser />,
                title: 'Technology',
                desc: 'React JS',
            },
            {
                icon: <FaGithub />,
                title: 'Github',
                desc: 'https://github.com/Shivanshagrawall/AI_Image_Generation/',
            },
            {
                icon: <CgWebsite />,
                title: 'Website',
                desc: 'https://shivanshagrawall.github.io/AI_Image_Generation/',
            },
        ]
    },
    {
        id: 6,
        img: image_College_Website,
        title: 'College Website',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project',
                desc: 'College Website',
            },
            {
                icon: <FiUser />,
                title: 'Technology',
                desc: 'React Js',
            },
            {
                icon: <FaGithub />,
                title: 'Github',
                desc: 'https://github.com/Shivanshagrawall/college_website',
            },
            {
                icon: <CgWebsite />,
                title: 'Website',
                desc: 'https://shivanshagrawall.github.io/college_website/',
            },
        ]
    }
]

// Export Personal Info 
export const personalInfo = [
    {
        id: 1,
        title: 'First Name',
        description: 'Shivansh'
    },
    {
        id: 2,
        title: 'Last Name',
        description: 'Agrawal'
    },
    {
        id: 3,
        title: 'Age',
        description: '23 Years'
    },
    {
        id: 4,
        title: 'Nationality',
        description: 'Indian'
    },
    {
        id: 5,
        title: 'Education',
        description: ' Undergraduate'
    },
    {
        id: 6,
        title: 'Address',
        description: 'Varanasi'
    },
    {
        id: 7,
        title: 'Email',
        description: 'shivanshagrawal3007@gmail.com'
    },
    {
        id: 8,
        title: 'Phone No.',
        description: '+91 8840458752'
    },
    {
        id: 9,
        title: 'Open to Work',
        description: 'Available'
    },
    {
        id: 10,
        title: 'Languages',
        description: 'English, Hindi'
    },

]

// Export Stats Section
export const stats = [
    {
        id: 1,
        no: "300+",
        title: 'DSA Question'
    },
    {
        id: 2,
        no: "70+",
        title: 'Github Respositories'
    },
    {
        id: 3,
        no: "8.4 CGPA",
        title: 'College Percentage'
    },
    {
        id: 4,
        no: "1+",
        title: 'Intership Completed'
    }
]

// Export Skills Section
export const skills = [
    {
        id: 1,
        title: 'HTML',
    },
    {
        id: 2,
        title: 'CSS',
    },
    {
        id: 3,
        title: 'Javascript',
    },
    {
        id: 4,
        title: 'React',
    },
    {
        id: 5,
        title: 'Nodejs',
    },
    {
        id: 6,
        title: 'MongoDB',
    },
    {
        id: 7,
        title: 'Python',
    },
    {
        id: 8,
        title: 'C++',
    },
]

// Export Experience Section
export const experience = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase />,
        year: 'Oct 2023 - Dec 2023',
        title: 'Web development Intern',
        desc: 'Make 3 Website during Intership',
    },
    // {
    //     id: 2,
    //     category: 'experience',
    //     icon: <FaBriefcase />,
    //     year: '2018-present',
    //     title: 'Web development Intern',
    //     desc: 'I am the best in this universe',
    // },
    // {
    //     id: 3,
    //     category: 'experience',
    //     icon: <FaBriefcase />,
    //     year: '2018-present',
    //     title: 'Web development Intern',
    //     desc: 'I am the best in this universe',
    // }
]

// Export Education Section
export const education = [
    {
        id: 1,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2022-2026',
        title: 'Graduation',
        desc: 'Ambedkar Institite of Technology',
        marks: '8.4 SGPA',
    },
    {
        id: 2,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2021',
        title: '12th CBSE Board with PCM',
        desc: 'DAV Public School',
        marks: "93.4%",
    },
    {
        id: 3,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2019',
        title: '10th CBSE Board',
        desc: 'DAV Public School',
        marks: "90%",
    },
]

// Export Theme Items Section
export const themeItems = [
    {
        id: 1,
        img: <MdOutlineInvertColors />,
        color: 'hsl(252,35%,51%)',
    },
    {
        id: 2,
        img: <MdOutlineInvertColors />,
        color: 'hsl(4,93%,54%)',
    },
    {
        id: 3,
        img: <MdOutlineInvertColors />,
        color: 'hsl(271,71%,53%)',
    },
    {
        id: 4,
        img: <MdOutlineInvertColors />,
        color: 'hsl(225,73%,57%)',
    },
    {
        id: 5,
        img: <MdOutlineInvertColors />,
        color: 'hsl(43,74%,49%)',
    },
    {
        id: 6,
        img: <MdOutlineInvertColors />,
        color: 'hsl(339,81%,66%)',
    },
    {
        id: 7,
        img: <MdOutlineInvertColors />,
        color: 'hsl(182, 54%, 52%)',
    },
    {
        id: 8,
        img: <MdOutlineInvertColors />,
        color: 'hsl(305, 60%, 55%)',
    },
    {
        id: 9,
        img: <MdOutlineInvertColors />,
        color: 'hsl(58, 67%, 60%)',
    },
    {
        id: 10,
        img: <MdOutlineInvertColors />,
        color: 'hsl(12, 76%, 62%)',
    },
]