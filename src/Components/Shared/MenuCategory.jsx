import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";


export default function MenuCategory({items, buttonText}) {

  return (
   <>
    <section className="grid md:grid-cols-2 gap-5 my-10">

{items.map(menu => <MenuItem key={menu._id} menu={menu} />)}

</section>
    <div className="flex items-center justify-center mb-16">
   <Link to={`/our-shop/${items[0].category}`}> <button className="p-2 border-b-2 border-black/80 px-5 hover:border-black/40 rounded-md"> { buttonText} </button>
   </Link>
    </div>
   </>
  )
}
