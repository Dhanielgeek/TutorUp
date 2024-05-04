import Fire from '../assets/noto_fire.svg'
import Clock from '../assets/noto_alarm-clock.svg'
import Laoptop from  '../assets/emojione-v1_laptop-computer.svg'

const OurProgram = () => {
  return (
    <div className="w-[100%] h-[65vh] flex justify-around items-center phone:flex-col phone:h-[65rem]">
      <div className="w-[30%] h-[80%] bg-[#FDFDF7] shadow-lg rounded-md phone:w-[90%] ">
        <div className="w-[100%] h-[30%]  flex justify-center items-center">
          <img src={Fire} alt=""  className="" />
        </div>
        <div className='w-[100%] h-[20%] flex justify-center items-center'>
          <h2 className='font-semi bold text-3xl'>Our Program</h2>
        </div>
        <div className='w-[100%] h-[50%]  flex justify-center items-center'>
          <p className=' font-semibold text-2xl text-center'>It is a long established face that
           readers will be distracted</p>
        </div>
      </div>
      <div className="w-[30%] h-[80%] bg-[#fdfdf7] shadow-lg rounded-md  phone:w-[90%]">
      <div className="w-[100%] h-[30%]  flex justify-center items-center">
          <img src={Clock} alt=""  className="" />
        </div>
        <div className='w-[100%] h-[20%] flex justify-center items-center'>
          <h2 className='font-semi bold text-3xl'>Creative Thinking</h2>
        </div>
        <div className='w-[100%] h-[50%]  flex justify-center items-center'>
          <p className=' font-semibold text-2xl text-center'>It is a long established face that
           readers will be distracted</p>
        </div>
      </div>
      <div className="w-[30%] h-[80%] bg-[#FDFDF7] shadow-lg rounded-md phone:w-[90%] ">
      <div className="w-[100%] h-[30%]  flex justify-center items-center">
          <img src={Laoptop} alt=""  className="" />
        </div>
        <div className='w-[100%] h-[20%] flex justify-center items-center'>
          <h2 className='font-semi bold text-3xl'>Career Planning</h2>
        </div>
        <div className='w-[100%] h-[50%]  flex justify-center items-center'>
          <p className=' font-semibold text-2xl text-center'>It is a long established face that
           readers will be distracted</p>
        </div>
      </div>
    </div>
  )
}

export default OurProgram