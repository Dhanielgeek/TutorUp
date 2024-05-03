import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-[100%] h-[12vh] bg-[#00b4d8] flex justify-around items-center">
        <div className="w-[20%] h-[100%] bg-green-500"></div>
        <div className="w-[60%] h-[100%]  flex justify-around items-center">
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Home</NavLink>
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Programs</NavLink>
            <NavLink className='font-medium text-[#fdfdf7] text-md'>Tutors</NavLink>
            <NavLink className='font-medium text-[#fdfdf7] text-md'>About</NavLink>
            <button className="w-[20%] h-[50%] font-semibold text-[#Fdfdf7] cursor-pointer rounded-md bg-yellow-500 flex justify-center items-center">Contact Us</button>
        </div>
    </div>
  )
}

export default Header