import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";  // Import Main layout component
import HeroSection from "../Component/HeroSection";
import FooterSection from "../Component/FooterSection";
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
                path: "/FooterSection",
                element: <FooterSection />,
            },
            {
                path: "/FromSection",
                element: <FromSection />,
            },
            {
                path: "/ShefSection",
                element: <ShefSection />,
            },
            {
                path: "/MenuSection",
                element: <MenuSection />,
            },
        ],
    },
]);
