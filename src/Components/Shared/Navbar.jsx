
import { Link, NavLink ,useNavigate, } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { FiShoppingCart} from 'react-icons/fi'
import useCart from "../../Hooks/useCart";




export default function Navbar() {
 
  const { currentUser , logOut } = useAuth();
  const navigate = useNavigate();
  const  [ , cartItems ] = useCart();


  const navLinks = <>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold border-b text-red-500 px-1 py-[3px] ': '' } to='/'> Home </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold border-b text-red-500 px-1 py-[3px] ': '' } to='/our-menu'> Our Menu </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold border-b text-red-500 px-1 py-[3px] ': '' } to='/our-shop/salad'> Our Shop </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold border-b text-red-500 px-1 py-[3px] ': '' } to='/dashboard'> Dashboard </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-semibold border-b text-red-500 px-1 py-[3px] ': '' } to='/login'> Login </NavLink></li>

   <NavLink to='/dashboard/cart'>
   <li ><button className="btn relative">
  <FiShoppingCart size={24} />
   <span className=" bg-red-600 p-1 absolute top-1 right-1 text-white/80 rounded-full"> {cartItems.length} </span>
</button></li>
   </NavLink>
  
  </>

    const signOut = () => {
      logOut()
      .then(result => {
        toast.success('Logged Out !')
  
         axios.get('https://savorspot-cafe-server.vercel.app/logout', {withCredentials : true})
         .then(data => {
          if(data.data.success){
            navigate('/');  
          }
         }) 
      })
      .catch(error => {
        toast.error('Something went wrong')
      })
    }

  return (
    <div className={`navbar max-w-[1300px] mx-auto flex justify-between text-white/80  fixed z-10 bg-black/30`}>
  <div className="navbar-start z-50" >
    <div className="dropdown z-50">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className={`menu-sm text-gray-700 dropdown-content mt-2 p-2 shadow bg-base-100 rounded w-52 font-play `}>
        {navLinks}
      </ul>


    </div>
    <div className="flex items-center gap-1">
    <p className="text-[18px]  md:text-xl lg:text-2xl font-semibold text-white/70 font-play"> Bistro<span className="text-white/70">Boss</span> </p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-10 menu-horizontal px-1 font-play ">
      {navLinks}
    </ul>
  </div>


  <div className="dropdown dropdown-end flex items-center justify-center gap-2 z-50" data-aos ="fade-left">
    
        {!currentUser && <Link to='/login'><button className={`font-semibold  text-sm md:text-[16px] p-1 px-3 rounded bg-gray-50 hover:bg-gray-100 `}> Login </button></Link>}
        
        <div className="z-30 lg:w-10 rounded-full p-[2px] mr-2">
          {currentUser && <img tabIndex={0} src={currentUser?.photoURL || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="dropdown w-8 md:w-9 cursor-pointer rounded-full border border-lime-500 p-[1px]" />}

          {currentUser && 
         <ul tabIndex={0} className={`dropdown-content p-2 shadow bg-base-100 rounded w-52 font-play`}>
          {currentUser && <li className="font-semibold border p-2 rounded text-black/60 flex items-center gap-2"> {currentUser?.displayName || 'User'}  <img tabIndex={0} src={currentUser?.photoURL || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="w-7 md:w-8 rounded-full" /></li>}
            
         <Link to='/my-added-foods'> <li className="font-semibold border p-2 transition-all rounded  hover:bg-slate-500/10 text-lime-600/90 text-sm flex items-center gap-2 "> My Added Foods  </li></Link>

         <Link to='/add-food'> <li className="font-semibold border p-2 transition-all rounded  hover:bg-slate-500/10 text-lime-600/90 text-sm flex items-center gap-2 "> Add Food  </li></Link>

         <Link to='/ordered-foods'> <li className="font-semibold border p-2 transition-all rounded hover:bg-slate-500/10 text-lime-600/90 text-sm flex items-center gap-2 "> My Ordered Foods  </li></Link>
         <li className="cursor-pointer transition-all p-1 rounded hover:underline text-gray-700" onClick={()=> signOut() }> Log out</li> 

        </ul>}
        </div>
     
    </div>

</div>
  )
}
