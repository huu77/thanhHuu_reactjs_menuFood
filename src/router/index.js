
import Login from "../compoment/login";
import Home from "../compoment/page/home";
import Menu from "../compoment/page/menu";
import About from "../compoment/page/about";
import Contact from "../compoment/page/contact";
import Info from "../compoment/page/info";
import MenuChild from "../compoment/page/menuChild";
import ERR from "../compoment/page/404";
import newCard from "../compoment/page/newCard";

const PulichRouter=[
{path:'/',component:Login,layout:null},
{path:'/home',component:Home},
{path:'/menu',component:Menu},
{path:'/menu/:slug',component:MenuChild},
{path:'/about',component:About},
{path:'/about/newCard',component:newCard},
{path:'/contact',component:Contact},
{path:'/info',component:Info},
{path:'*',component:ERR},
];
export  {PulichRouter};