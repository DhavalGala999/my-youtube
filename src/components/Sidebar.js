import React from "react";
import { useSelector } from "react-redux";
import { FaFire, FaTrophy, FaLightbulb } from "react-icons/fa";
import { IoMdHome, IoMdSettings, IoIosHelpCircle } from "react-icons/io";
import { IoGameControllerSharp } from "react-icons/io5";
import { RiLiveFill, RiFlagFill, RiFeedbackFill } from "react-icons/ri";
import SidebarItemList from "./SidebarItemList";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  let sideBarItems = [
    {
      itemName: "Home",
      imgSrc: <IoMdHome />,
    },
    {
      itemName: "Trending",
      imgSrc: <FaFire />,
      searchParam: "/trending",
    },
    {
      itemName: "Gaming",
      imgSrc: <IoGameControllerSharp />,
      searchParam: "/gaming",
    },
    {
      itemName: "Sports",
      imgSrc: <FaTrophy />,
      searchParam: "/sports",
    },
    {
      itemName: "Learn",
      imgSrc: <FaLightbulb />,
      searchParam: "/learn",
    },
    {
      itemName: "Live",
      imgSrc: <RiLiveFill />,
      searchParam: "/live",
    },
    {
      itemName: "Settings",
      imgSrc: <IoMdSettings />,
    },
    {
      itemName: "Report",
      imgSrc: <RiFlagFill />,
    },
    {
      itemName: "Help",
      imgSrc: <IoIosHelpCircle />,
    },
    {
      itemName: "Feedback",
      imgSrc: <RiFeedbackFill />,
    },
  ];

  return (
    <div className="w-40 pl-2 pt-2 fixed z-10 bg-white h-screen border border-gray-200 shadow-md">
      <div>
        <ul>
          {/* Using index as key is not recommended */}
          {sideBarItems.map((item, i) => (
            <SidebarItemList key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
