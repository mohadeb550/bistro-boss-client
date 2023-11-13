
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


import { Link, useLocation, useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';





export default function Login() {


  const { loginUser , loginWithGoogle  } = useAuth();


  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const { mutateAsync: generateJwt } = useMutation({
    mutationKey: ['generateJwt'],
    mutationFn: async (payload) => {
      return axios.post(`https://savorspot-cafe-server.vercel.app/jwt`, payload, { withCredentials: true})
    }
  })
  
  
  const { mutateAsync: saveUser } = useMutation({
    mutationKey: ['save-user'],
    mutationFn: async (updatedUser) => {
      return axios.put(`https://savorspot-cafe-server.vercel.app/save-user/`, updatedUser)
    }
  })




    const handleLogin = (e) => {
        e.preventDefault();

        const form  = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')
        const user_captcha_value = form.get('captcha');

        if(!validateCaptcha(user_captcha_value)){
            return alert('Captcha Not Matched')
        }

        loginUser(email, password)
        .then(result => {

            toast.success('Login Successful !',{duration:3000});
            navigate(from);
            // generateJwt({email})
            // .then(data => {
            //   if(data.data.success){
                
            //   }
            // })

        })
        .catch(error =>  toast.error(error.message))
    }

    const googleLogin = () => {
      loginWithGoogle()
      .then(result => {
          toast.success('Login Successful!')
      
          generateJwt({email: result.user.email})
          .then(data => {
            console.log(data.data)
            if(data.data.success){
              navigate(location.state? location.state : '/');
            }
          })

          saveUser({name: result.user.displayName, email : result.user.email, photoURL : result.user.photoURL })
          .then(data => {

            if(data.data.modifiedCount > 0 || data.data.upsertedCount > 0 || data.data.matchedCount > 0){
              console.log('userInfo saved successfully')
            }
          })
    
      })
      .catch(error => {
          toast.error(error.message)
      })
  }



  return(
    <div className="hero h-[600px] pb-32 md:pb-0 md:h-[700px] max-w-[1300px] mx-auto px-4 bg-base-200 bg-[url('https://i.ibb.co/WDFtSWx/sincerely-media-4d-SXc-NTy-Xa-I-unsplash-1.jpg')]">

    <Helmet>
        <title> SavorSpotCafe / Login </title>
      </Helmet>
    <div className="hero-content flex-col w-full">

      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-[32px] text-white/90  px-24 py-3 font-bold text-center font-play">Login now!</h1>
      </div>

      <div className="rounded-md flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div className="p-5">


        <form onSubmit={handleLogin}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" name="email" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered" name="password" />
          

            <div className="mt-3">
                <h4 className="text-sm font-semibold"> Don't Have An Account? <Link to='/sign-up'> <span className="-600  hover:underline"> Sign Up </span></Link> </h4>
            </div>

            <div className="flex flex-col justify-evenly gap-3 mt-4 ">
                <div onClick={googleLogin} className="py-1 px-2 border rounded flex gap-1 items-center justify-center hover:bg-gray-50 cursor-pointer" > <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Google</p> </div>
            </div>

          </div>

          <div className="form-control">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input type="text" placeholder="Enter Captcha" className="input input-bordered" name='captcha' />
          </div>

          <div className="form-control mt-6">
            <button className="bg-lime-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-lime-700 text-sm md:text-base" type="submit"  > Login </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
