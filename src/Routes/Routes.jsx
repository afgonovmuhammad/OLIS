import { lazy } from "react";

export const Layout = lazy (()=> import("../Layout/Layout.jsx"))
export const About_company = lazy (() => import("../Pages/About_company/About_company.jsx"))
export const Objects = lazy (() => import("../Pages/Objects/Objects.jsx"))
export const Press_center = lazy (() => import("../Pages/Press_center/Press_center.jsx"))
export const Video = lazy (() => import("../Pages/Video/Video.jsx"))
export const Contacts = lazy (() => import("../Pages/Contacts/Contacts.jsx"))
export const Complete_Solutions = lazy (() => import("../Pages/Complete_Solutions/Complete_Solutions.jsx"))
export const Our_equipment = lazy (() => import("../Pages/Ou_equipment/Our_equipment.jsx"))
export const Equipment_of_laboratories = lazy (() => import ("../Pages/Equipment_of_laboratories/Equipment_of_laboratories.jsx"))
export const Company_Services = lazy (() => import("../Pages/Company_Services/Company_Services.jsx"))

