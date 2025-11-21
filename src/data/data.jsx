import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaFacebook, FaInstagram, FaTelegramPlane  } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMysql, SiMongodb, SiFirebase, SiC, SiJavascript, SiGit, SiGithub, SiFigma } from 'react-icons/si';
import { DiJava, DiVisualstudio } from 'react-icons/di';

export const navItems = [
  { name: "profile", href: "#profile" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "interests", href: "#interests" }
];

export const contactItems = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/itsraiki/",
    icon: <FaFacebook className="text-[#1877F2] text-2xl hover:opacity-80 transition" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imrickyyyg/",
    icon: <FaInstagram className="text-[#E4405F] text-2xl hover:opacity-80 transition" />,
  },
  {
    name: "Telegram",
    link: "https://t.me/imrickyyyg",
    icon: <FaTelegramPlane className="text-[#229ED9] text-2xl hover:opacity-80 transition" />,
  },
];


export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS (learning)", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS (learning)",  icon: <RiTailwindCssFill className="text-teal-400" />},
      { name: "Bootstrap (cant remember tho)", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node JS (i think)", icon: <FaNodeJs className="text-green-400" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

export const projectItems = [
  {
    title: "E-commerce Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Fitness App UI",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Analytics Dashboard",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
  },
];

export const interestsData = [
  {
    category: "Gaming",
    items: [
      { name: "Monster Hunter", image: "https://assetsio.gnwcdn.com/gore-magala-head.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"},
      { name: "League Of Legends", image: "https://preview.redd.it/2hj44387pmp61.png?auto=webp&s=23a805624fc96eb66854a79f8d7f55a56905b919"},
      { name: "Warframe", image: "https://www-static.warframe.com/uploads/53b7bb2e4ae64030bccf706c6bd5897f.jpg"},
      { name: "Mobile Legends: Bang Bang", image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/480386471_122245959812030708_3124257523423643209_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNH1nNWSPYrMHNYdSv4fDiBB22H4wOkxkEHbYfjA6TGdYflA9Lxa_gaBvFZZxl7pGuaGlrU0O2kEzA-npfll-h&_nc_ohc=kYbR7Sqi9g4Q7kNvwEvqZ8u&_nc_oc=Admb3Xve63TJOxPrP65_bKOYlHaXAwY1wc8S3dCNu6lVhtCZO0WYbTOg2mVXQ6U5c-g&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=RQgQERZVKalGt-gwlET6tA&oh=00_AfgCAkD1-sX-TeOAYkCmfnwt0j-CwkEzNMd8vOHMqBaQWg&oe=69266384"},
      { name: "Titanfall 2", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Titanfall_2.jpg/250px-Titanfall_2.jpg"}
    ],
  },
  {
    category: "Music",
    items: [
      { name: "XXXTENTACION", image: "https://i.scdn.co/image/ab67616d00001e0252cc5e3765a135c52e1bbbbc"},
      { name: "Kendrick Lamar", image: "https://i.scdn.co/image/ab6761610000517439ba6dcd4355c03de0b50918"},
      { name: "Kanye West", image: "https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg"},
      { name: "Tyler, The Creator", image: "https://preview.redd.it/random-tyler-memes-from-tiktok-v0-bnny8o8q8h8d1.jpg?width=640&crop=smart&auto=webp&s=193a4adc7c8506d5422fc22b2c6691fb36167d5f"},
      { name: "Chase Atlantic", image: "https://i.scdn.co/image/ab67616100005174a4e2d7045cbcca592ba6c7dd"}
    ],
  },
  {
    category: "Reads",
    items: [
      { name: "Omniscient Reader's Viewpoint", image: "https://i.pinimg.com/736x/e6/55/21/e655215623a190edf53368dd5b925fdd.jpg"},
      { name: "Pick Me Up!", image: "https://preview.redd.it/pick-me-up-bro-came-to-do-nothing-but-aura-farm-v0-k5vfiylse3jf1.jpg?width=640&crop=smart&auto=webp&s=8e046a3cef55bf9b7925065af6a7630e9dde3bc9"},
      { name: "Kagurabachi", image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/480470765_122196054332171978_8534311030345754383_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEivWBz3lEiSIH5_6knJHu2c4y0l-4_SxVzjLSX7j9LFaDo4kAyMqBvG9gcO7zlNExxjXF3UceBdcMAn4U9CI9z&_nc_ohc=ej2EWRTwjc0Q7kNvwHLZb0O&_nc_oc=Admnxohr5z3sDCKiooTjIhzu9FdDOcR19inPD7wGi7nq_X8Ghp3jXsZMxijRwIoJ8wE&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=itNZNgEAli7xKkETUC-0Cw&oh=00_AfilgR3ZyivO-TFq0nuCzhwu1hAF604YdyfDO46PYAMTBQ&oe=6926546D"},
      { name: "The Beginning After The End", image: "https://i.redd.it/which-version-of-arthur-do-you-like-more-visually-v0-vt1fdhpvwjnc1.png?width=505&format=png&auto=webp&s=ba9c00ed0a99858338f46450878a9b1209ccc990"},
      { name: "World's Strongest Troll", image: "https://preview.redd.it/worlds-strongest-troll-is-it-any-good-v0-4xiq0m2viwgd1.jpeg?auto=webp&s=a4263009119d5842dcc0b34f1445dffa42e3ffb0"}
    ],
  },
];