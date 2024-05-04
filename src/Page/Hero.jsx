

const Hero = () => {
  return (
    <div className="w-[100%] h-[85vh] bg-[#17B7C1] flex justify-around items-center phone:flex-col phone:h-[54rem]">
        <div className="w-[40%] h-[60%] flex justify-around items-center flex-col phone:w-[90%]">
            <div className="w-[100%] h-[40%] flex items-center justify-start">
                <h2 className="font-bold text-5xl text-[#FDFDF7]">Better, Brighter Future for Kids</h2>
            </div>
            <div className=" w-[100%] h-[30%] flex justify-start items-center">
                <p className=" font-medium text-lg text-[#edf2fb]">Get personalized home tutoring that is designed to guide your children
                    toward exam success,boost their confidence, and get better school grades.
                </p>
            </div>
            <div className="w-[100%] h-[20%]  flex justify-start items-center">
                <button className="w-[40%] h-[80%] bg-yellow-500 rounded-md text-lg text-[#edf2fb] font-semibold">Get Started</button>
            </div>
        </div>
        <div className="Image-Part"></div>
    </div>
  )
}

export default Hero