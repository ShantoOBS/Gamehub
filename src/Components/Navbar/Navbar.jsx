import { NavLink } from 'react-router';
import logo from '../../assets/download (1).png'

export default function Navbar(){

  const links= <>
    
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-game">All Game</NavLink>
        <NavLink to="/about">About</NavLink>
     
      
    </>
  
  return  <div className="navbar bg-gray-900 text-white shadow-sm shadow-blue-500 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
     <img src={logo} alt="" className='h-15 w-15 bg-cover' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 font-bold ">
    {
        links
    }
    </ul>
  </div>
  <div className="navbar-end">
     <button
                
                className="flex-none rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition"
              >
                Subscribe
              </button>
  </div>
</div>
  
  
}
