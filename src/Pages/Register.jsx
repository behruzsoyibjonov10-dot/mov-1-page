import React from 'react';
import Banner from '../Components/Main/Banner'
const Register = () => {
  return (
   <div>
     <div className="bg-[#0f0f0f] min-h-screen flex items-center justify-center p-4 ">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1300px] gap-12 mt-20">
        
        <div className="hidden md:block w-[35%]"> 
          <div className="rounded-xl overflow-hidden border border-[#262626]">
            <img 
              src="/img/Sub Container.png" 
              alt="Movies Grid" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-[55%] flex flex-col items-center"> 
          <h1 className="text-white text-[32px] md:text-[40px] font-bold mb-10 text-center mt-15">
            Please login to use our app
          </h1>
          
          <form className="w-full space-y-6 relative bottom-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-white text-lg font-medium">Email</label>
              <input 
                type="email" 
                placeholder="example@email.com" 
                className="w-full bg-[#141414] border border-[#262626] p-3 rounded-xl text-gray-400 focus:outline-none focus:border-[#E50000] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-lg font-medium">Password</label>
              <input 
                type="password" 
                placeholder="password" 
                className="w-full bg-[#141414] border border-[#262626] p-3 rounded-xl text-gray-400 focus:outline-none focus:border-[#E50000] transition-all"
              />
            </div>

<button className="w-full bg-[#E50000] text-white py-3 px-6 rounded-lg font-bold  hover:bg-red-700 transition-all mt-2 flex justify-start items-center">
  Login
</button>
          </form>

          <div className="w-full mt-10">
            <p className=" relative bottom-18 relative right-20 text-center text-gray-400 mb-6">Don't have an account?</p>
            
           <div className="flex flex-col sm:flex-row w-full gap-2 relative bottom-12 justify-center">
  <button className="relative right-44 bottom-10 w-44 flex items-center justify-center gap-2 bg-[#141414] border border-[#262626] px-1 py-2 rounded-lg hover:bg-[#1f1f1f] transition-all">
    <img
      src="https://www.svgrepo.com/show/355037/google.svg"
      className="w-4"
      alt="google"
    />
    <span className="text-white text-xs font-medium">
      Login with Google
    </span>
  </button>

  <button className=" relative right-44 bottom-10 w-44 flex items-center justify-center gap-2 bg-[#141414] border border-[#262626] px-1 py-3 rounded-lg hover:bg-[#1f1f1f] transition-all">
    <img
      src="https://www.svgrepo.com/show/512317/github-142.svg"
      className="w-4 invert"
      alt="github"
    />
    <span className="text-white text-xs font-medium">
      Login with Github
    </span>
  </button>
</div>

          </div>  
        </div>

      </div>
      
    </div>
    <Banner/>
   </div>
  );
};

export default Register;