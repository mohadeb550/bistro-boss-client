import { NavLink, Outlet } from "react-router-dom";
import { FiCalendar, FiHome, FiShoppingCart} from 'react-icons/fi'
import { GoCodeReview} from 'react-icons/go'
import { BsCardList} from 'react-icons/bs'

export default function Dashboard() {

  return (
    <section className="flex">
        <div className="w-64 h-screen bg-red-100">
        <ul className="menu py-4 text-lg">

            <li className="border-b border-black/10"> <NavLink to='/dashboard/userHome'> <FiHome/> User Home </NavLink> </li>

            <li className="border-b border-black/10"> <NavLink to='/dashboard/reservation'> <FiCalendar/> Reservation </NavLink> </li>

            <li className="border-b border-black/10"> <NavLink to='/dashboard/cart'> <FiShoppingCart/> My Cart </NavLink> </li>

            <li className="border-b border-black/10"> <NavLink to='/dashboard/review'> <GoCodeReview/> Add Review </NavLink> </li>

            <li className="border-b border-black/10"> <NavLink to='/dashboard/bookings'> <BsCardList/> My Booking </NavLink> </li>
        </ul>
        </div>

        <div className="flex-1">
        <Outlet/>
        </div>
    </section>
  )
}
