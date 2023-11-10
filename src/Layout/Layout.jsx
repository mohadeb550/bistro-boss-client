import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";


export default function Layout() {
  return (
    <section className="max-w-[1300px] mx-auto px-4">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </section>
  )
}
