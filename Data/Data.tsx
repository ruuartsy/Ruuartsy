import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode, BsCameraVideoFill } from "react-icons/bs";
import { HiOutlineCamera } from "react-icons/hi";


const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "Photographys", icon: <HiOutlineCamera />, finished: 500 },
  { id: 2, title: "Videographys", icon: <BsCameraVideoFill />, finished: 209 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 1,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 20,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 500,
    text: "Design Items",
  },
  {
    id: 4,
    number: 10,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.png",
    name: "Random Password Generator",
    href:"google.com",
  },
 
];

const contacts: ContactsProps[] = [
  { id: 2, title: "Phone", text: "+94741722569" },
  { id: 3, title: "Email", text: "ruu.artsy@gmail.com" },
];

export {navLinks, projects, countUpItems, services,  contacts };
