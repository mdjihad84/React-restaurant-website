import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";  // Import Main layout component
import HeroSection from "../Component/HeroSection";
import ContactSection from "../Component/ContactSection";
import MenuSection from "../Component/FromSection";
import ShefSection from "../Component/ShefSection";
import FromSection from "../Component/FromSection";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HeroSection />,
            },
            {
                path: "/contact",
                element: <ContactSection />,
            },
            {
                path: "/from",
                element: <FromSection />,
            },
            {
                path: "/menu",
                element: <MenuSection />,
            },
            {
                path: "/chef",
                element: <ShefSection />,
            },
        ],
    },
]);
