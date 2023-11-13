import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";


export default function Layout() {

  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('sign-up');

  return (
    <section className="max-w-[1300px] mx-auto px-4">
      <Toaster/>
   {!noHeaderFooter && <Navbar/>}
    <Outlet/>
   {!noHeaderFooter &&  <Footer/>}
    </section>
  )
}
