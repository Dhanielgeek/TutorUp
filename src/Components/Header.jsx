import { NavLink } from "react-router-dom"
import { useState } from "react";
import Logo from '../assets/image 8.svg'
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";
const Header = () => {


const [Toggle, setToggle] = useState(false)



const HandleToggle = ()=>{
  setToggle(!Toggle)
}

  return (
    <div className="w-[100%] h-[12vh] bg-[#17B7C1] flex justify-around items-center">
        <div className="w-[15%] h-[90%]  flex justify-center items-center">
          <img src={Logo} alt="" className=" h-[100%] w-[90%] object-fill" />
        </div>
        <div className="w-[60%] h-[100%]  flex justify-around items-center smallPhone:hidden phone:hidden">
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Home</NavLink>
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Programs</NavLink>
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Tutors</NavLink>
            <NavLink className='font-medium text-[#fdfdf7] text-md'>About</NavLink>
            <button className="w-[20%] h-[50%] font-semibold text-[#Fdfdf7] cursor-pointer rounded-md bg-yellow-500 flex justify-center items-center">Contact Us</button>
        </div>
        {/* Mobile view */}
        <div className="Mobile relative">
          {
            Toggle ?   <MdOutlineClear className="text-[1.8rem] text-[#FDFDF7]" onClick={HandleToggle} /> : <MdOutlineMenu className="text-[1.8rem] text-[#FDFDF7]" onClick={HandleToggle} /> 
          }
          {
            Toggle ? ( <div className="w-[30rem] h-[28rem] bg-[#17b7c1] absolute top-[99.5%] right-[-130px] flex flex-col justify-around  items-start px-7">
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Home</NavLink>
              <NavLink className='font-medium text-[#fdfdf7] text-md'>Programs</NavLink>
              <NavLink className='font-medium text-[#fdfdf7] text-md'>Tutors</NavLink>
              <NavLink className='font-medium text-[#fdfdf7] text-md'>About</NavLink>
              <button className="w-[40%] h-[10%] font-semibold text-[#Fdfdf7] cursor-pointer rounded-md bg-yellow-500 flex justify-center items-center">Get Started</button>
            </div>) : null
          }
         
        </div>
    </div>
  )
}

export default Header