import { MdCheck } from "react-icons/md"

const Access = () => {
  return (
    <div className=" w-[100%] h-[90vh] flex justify-around items-center phone:flex-col">
        <div className="w-[40%] h-[100%] bg-green-500 phone:w-[90%]"></div>
        <div className="w-[45%] h-[70%]  px-3 flex justify-around items-start flex-col phone:w-[90%] phone:h-[50rem]">
            <div className="w-[100%] h-[25%] flex justify-center items-start flex-col px-3 phone:h-[40%]">
                <h2 className="font-bold text-4xl phone:text-2xl">Access to everything, for everyone</h2>
                <p>Easy secure access to digital learning resource should be the status in the education.</p>
            </div>
            <div className=" w-[70%] h-[10%]  flex justify-around items-center phone:w-[100%] phone:h-[16%]">
                <div className=" w-[50%] h-[50%]  flex justify-start gap-1 items-center">
                <div className=" w-6 h-6 rounded-full bg-yellow-400 justify-center flex items-center">
                    <MdCheck className="text-white font-semibold"/>
                </div>
                <p className="font-semibold text-lg">World Class</p>
                </div>
                <div className=" w-[50%] h-[50%] flex gap-1 justify-start items-center">
                <div className=" w-6 h-6 rounded-full bg-yellow-400 justify-center flex items-center">
                    <MdCheck className="text-white font-semibold"/>
                </div>
                <p className="font-semibold text-lg">Flexable</p>
                </div>
               
            </div>
            <div className=" w-[70%] h-[10%]  flex justify-around items-center phone:w-[100%] phone:h-[16%]">
            <div className=" w-[50%] h-[50%]  flex justify-start gap-1 items-center">
            <div className=" w-6 h-6 rounded-full bg-yellow-400 justify-center flex items-center">
                    <MdCheck className="text-white font-semibold"/>
                </div>
                <p className="font-semibold text-lg">Affordable</p>
                </div>
                <div className=" w-[50%] h-[50%] flex justify-start gap-1 items-center">
                <div className=" w-6 h-6 rounded-full bg-yellow-400 justify-center flex items-center">
                    <MdCheck className="text-white font-semibold"/>
                </div>
                <p className="font-semibold text-lg">Easy Learning</p>
                </div>
            </div>
            <div className="w-[100%] h-[25%] flex justify-start items-center px-3 phone:h-[30%]">
                <button className="w-[40%] h-[50%] bg-yellow-500 rounded-full text-lg font-bold text-white phone:w-[50%]">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Access