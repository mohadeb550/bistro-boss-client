import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

export default function FoodCard({food}) {

  const { currentUser } = useAuth();
    const {_id, name , image, price ,recipe } = food || {};
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [ refetch ] = useCart();


    const handleAddToCart = (food) => {
      if(currentUser && currentUser.email){
       
        const cartItem = {menuId:_id, email: currentUser.email, name, image, price }
        
          axiosSecure.post('/carts', cartItem)
          .then(data => {
            if(data.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} Added on your cart!`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          })
      }
      else{
        Swal.fire({
          title: "You are not logged in!",
          text: "Please Login to Continue!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: { from: location}})
          }
        });
      }
    } 

  return (

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {name}</h2>
    <p> {recipe} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=> handleAddToCart(food)}>Add to cart </button>
    </div>
  </div>
</div>
  )
}
