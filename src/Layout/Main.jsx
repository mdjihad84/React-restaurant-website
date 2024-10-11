import { Outlet } from "react-router-dom";
import HeaderSection from "../Component/HeaderSection";
import ProductSection from "../Component/ProductSection";
import MenuSection from "../Component/MenuSection";
import ContactSection from "../Component/ContactSection";
import ShefSection from "../Component/ShefSection";
import FromSection from "../Component/FromSection";
import Testimonials from "../Component/Testimonials";
import FooterSection from "../Component/FooterSection";

const Main = () => {
  return (
    <div>
      <HeaderSection />
      <Outlet />
      <ProductSection/>
      <MenuSection/>
      <ContactSection/>
      <ShefSection/>
      <FromSection/>
      <Testimonials/>
      <FooterSection/>
    </div>
  );
};
export default Main;