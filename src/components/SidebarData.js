import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "DashBoard",
    path: "/home",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Patients",
    path: "/patientlist",
    icon: <FaIcons.FaUserInjured />,
    cName: "nav-text",
  },
  {
    title: "Doctors",
    path: "/doctorlist",
    icon: <FaIcons.FaUserNurse />,
    cName: "nav-text",
  },
];
