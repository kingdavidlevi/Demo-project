import React, { useState, useEffect } from "react";
import './style.css'
const thumbPrint : string = require('./Images/human_logo-removebg-preview 1.png');
const blueColor : string  = require('./Images/Rectangle 15.png');
const writeUp = ('./Images/As you touch a human soul, be just another human soul. -C.G. Jung.png');
const linkedIn : string = require('./Images/Group (3).png')
const facebook : string = require('./Images/Facebook logo.png')
const google : string = require('./Images/XMLID_28_.png')
const twitter : string = require('./Images/Group (5).png')
const arrow : string = require('./Images/Group (6).png')
   

const  Login : React.FC = () => {

 


    return(
     <div className="bg-white signup-div m-auto ">
     
 
     <header className="flex  justify-between signup-div fixed">


  
        <div className="flex">

      <div className="w-22 h-20 mt-7 "><img alt="thumbprint" src={thumbPrint} /></div>
      <div className="mt-12"><p className=" WorkSansFont text-4xl font-normal">Human</p></div>

        </div>


        <div className="w-13 h-13 grid place-items-center mt-11   rounded-full border border-black">
     
       <div>   
      <div className="bg-black w-4.5 h-0.2  mb-1.5"></div>
      <div className="bg-black w-4.5 h-0.2 mb-1.5"></div>
      
      <div className="bg-black w-4.5 h-0.2  " ></div>
        </div>
        </div> 

     </header>




    

  <div className="flex items-center lg:pt-24 pt-10 h-screen   relative justify-between ">



  <div className=" w-98 grid  relative   place-items-center h-200" >
 <img alt="blue" className="w-98 block   h-200" src={blueColor} />
<div className=" absolute ">
  <p className="WorkSansFont text-5xl text-white font-medium">As You touch </p>
  <p className="WorkSansFont text-5xl text-white mt-4 font-medium">a human </p>
  <p className="WorkSansFont text-5xl text-white  mt-4 font-medium">soul, be just </p>
  <p className="WorkSansFont text-5xl text-white  mt-4 font-medium">another </p>
  <p className="WorkSansFont text-5xl text-white  mt-4 font-medium">human soul. </p>
  <p className="WorkSansFont text-lg text-white  mt-4 font-thine">-C.G. jung</p>
  
 
  </div>
  </div>







 <div className="lg:w-98 md:w-90 xl:w-200 xl:mr-30 relative  h-200">


    <h2 className="WorkSansFont grid mb-6 place-items-center text-2xl lg:text-3xl font-semibold">Sign in </h2>
  <form>
  <input required name="username "  className="WorkSansFont text-base xl:w-200 font-normal lg:w-98 md:w-90 placeholder:font-normal placeholder:text-lg placeholder:text-black  rounded-cd border border-black  outline-none pt-2 pb-2 pl-4 " type="text" placeholder="Username or Email Address" /><br/>
  <input required name="password" className="WorkSansFont text-base xl:w-200 mt-4 lg:w-98 md:w-90 placeholder:font-normal placeholder:text-lg placeholder:text-black  rounded-cd border border-black  outline-none pt-2 pb-2 pl-4" type="password" placeholder="Password" /><br/>


  <div className="flex mt-4 justify-between xl:w-200  lg:w-98 md:w-90 ">

    < div >
   <input id="checkbox" className="w-6 ml-4 h-6" name="checkbox" type="checkbox" required />
   <label htmlFor="checkbox" className="WorkSansFont font-normal absolute top-32 lg:mt-12 mt-11 ml-4  text-base">Remember me</label>
   </div>

   <div>
    <p className="WorkSansFont  font-normal text-base text-teal-500 ">Forgot Password? </p>
   </div>

   </div>
    <button className="WorkSansFont rounded-cd mt-4 xl:w-200 lg:w-98 md:w-90 pt-2 p-2 border bg-black text-lg font-normal text-white" type="submit">Sign In</button>

  </form>


    
   <div className="flex xl:w-200 mt-4  lg:w-98 md:w-90 justify-center gap-6">
  <div className="bg-black lg:w-28 xl:w-34 h-0.1 md:w-20 mt-3" ></div>
  <div><p className="WorkSansFont text-black font-normal text-base">Or Sign In With</p></div>
  <div className="bg-black  xl:w-34 lg:w-28  mt-3 w- h-0.1 md:w-20 "></div>

   </div>



  <div className="lg:w-98  md:w-90 xl:w-200 gap-6 mt-4 flex justify-center">
 <div className="p-2  hover:cursor-pointer rounded-full border border-black"><img className="w-5 h-5" alt="linkedIn-icon" src={linkedIn} /></div>
 <div className="p-2 hover:cursor-pointer rounded-full border border-black"><img className="w-5 h-5" alt="google-icon" src={google} /> </div>
 <div className="p-2 hover:cursor-pointer rounded-full border border-black"><img className="w-5 h-5" alt="twitter-icon" src={twitter} /></div>
 <div className="p-2 hover:cursor-pointer rounded-full border border-black"><img className="w-5 h-5" alt="facebook-icon" src={facebook} /></div>
  </div>
  



<div className="mt-16 mb-2">
<p className="WorkSansFont text-black font-medium text-base">New to Human</p>

</div>


<div className="flex justify-between">
  <div className="md:px-8  gap-1 xl:px-12 rounded-md flex md:gap-4 border text-black border-black py-1.5"><p className="text-sm WorkSansFont text-black font-normal">For Candidates</p> <img className="w-4 h-3 xl:ml-2 mt-1.5" alt="arrow" src={arrow} /></div>
  <div className="border border-black h-5 mt-1.5 w-0.3"></div>
  <div  className="md:px-8 xl:px-12  rounded-md flex gap-4 border text-black border-black py-1.5"><p className="text-sm WorkSansFont font-normal">For Companies</p> <img className="w-4 h-3 mt-1.5 xl:ml-2" alt="arrow" src={arrow} /></div>
  
</div>



 </div>




  </div>












     </div>

    )




}


export default Login;

// ml-12