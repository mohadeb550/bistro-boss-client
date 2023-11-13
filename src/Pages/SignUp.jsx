
import { Link, useNavigate } from "react-router-dom";
import auth from "../config/firebase.config.js";

import toast  from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth.js";
import { useForm } from "react-hook-form";




export default function SignUp() {

  const { register, handleSubmit, formState: {errors}} = useForm();

    const { createUser , loginWithGoogle, updateUserProfile } = useAuth();
    const navigate = useNavigate();


    const onSubmit = (data) => {
      createUser(data.email, data.password)
        .then(result => {

           updateUserProfile(data.name, data.photo)
           .then(result => {
            console.log(result)
            navigate('/');
            toast.success('Successfully Account Created!',{duration: 3000});
           }).catch(()=> toast.error('Something went wrong!') )
        })
        .catch(error =>  {
            console.log(error)
            toast.error('Something went wrong!')
        })
    }

    
    const googleLogin = () => {
      
       loginWithGoogle()
        .then(result => {
          navigate('/');
          toast.success('Successfully Account Created!',{duration: 3000});
        })
        .catch(error => {
            toast.error('Something went wrong!')
        })
    }


  return (
    <div className="hero h-[700px] md:h-[720px] max-w-[1300px] mx-auto px-4 bg-[url('https://i.ibb.co/q0mx6HV/philipp-deus-a-ZTq83-ESIEg-unsplash.jpg')]">

      <Helmet>
        <title> BistroBoss / Sign-up </title>
      </Helmet>
    <div className="hero-content flex-col w-full gap-0">

    <div className="text-center lg:text-left pt-5 rounded-l-lg">
        <h1 className="text-[27px] lg:text-[32px] text-white/90 font-bold text-center mb-4 font-play"> Create New Account !</h1>
      </div>

      <div className="rounded flex-shrink-0 w-full max-w-lg  bg-base-100">
        <div className="p-6">


        <form onSubmit={handleSubmit(onSubmit)}>
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered" {...register('name',{required: true, minLength: 6, maxLength: 10})} />
            <span className="text-red-500 text-sm p-1"> {errors.name?.type === 'required' && 'Name is required'} {errors.name?.type === 'minLength' && 'Name Must Have 6 Characters'} {errors.name?.type === 'maxLength' && 'Name Maximum 8 Characters'}  </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered" {...register('photo',{required: true})} />
            <span className="text-red-500 text-sm p-1"> {errors.photo?.type === 'required' && 'Photo URL is required'}  </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" {...register('email', {required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />

            <span className="text-red-500 text-sm p-1">{errors.email?.type === 'required' && 'Email is required'} {errors.email?.type === 'pattern' && 'Please input a valid email'}</span>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered" {...register('password', {required: true, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,8}$/ })} />

            <span className="text-red-500 text-sm p-1"> {errors.password?.type === 'required' && 'Password is required'} {errors.password?.type === 'pattern' && 'Min 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, min 6 characters, max 8 characters.'} </span>
           
            <div>
                <h4 className="text-sm font-semibold"> Already Have An Account? <Link to='/login'> <span className="text-lime-600 hover:underline"> Login</span></Link> </h4>
            </div>

           
            <div className="flex flex-col gap-3 mt-4">
                <div className="py-1 px-2 border rounded flex justify-center gap-1 items-center hover:bg-gray-50 cursor-pointer"  onClick={ googleLogin}> <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600" > Sign up  with Google</p> </div>

            </div>
          </div>
          <div className="form-control mt-6">
            <button className="bg-lime-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base" type="submit"> Sign Up </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
