import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineHome, AiFillForward } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { GiClick } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { SidebarContext } from "./SidebarContext";

const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome,
    },
    {
        name: "Tracking Management",
        href: "/tracking",
        icon: AiFillForward,
    },
    {
        name: "Booking Managemnet",
        href: "/booking",
        icon: GiClick,
    },
];

export default function Sidebar() {
    const { isCollapsedSidebar, toggleSidebarCollapseHandler } =
        useContext(SidebarContext);




    return (
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toggleSidebarCollapseHandler}>
                <MdOutlineKeyboardArrowLeft />
            </button>
            <aside className="sidebar" data-collapse={isCollapsedSidebar}>
                <div className="sidebar_top">
                    <Image
                        src="/autobot.jpg"
                        width={80}
                        height={80}
                        className="sidebar_logo"
                        alt="logo"
                    />
                    <p className="sidebar_logo-name">RobotMaker</p>
                </div>
                <ul className="sidebar_list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className="sidebar_item" key={name}>
                            <Link href={href} className="sidebar_link">
                                <span className="sidebar_icon">
                                    <Icon />
                                </span>
                                <span className="sidebar_name">{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );



}