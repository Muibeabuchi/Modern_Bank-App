import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`p-[2px] cursor-pointer ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient`}>
      <div className={`${styles.flexCenter} w-full h-full rounded-full bg-primary flex-col`}>
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt="arrowup" className='w-[23px] h-[23px] object-contain'/>
        </div>

        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className='text-gradient'>Started</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default GetStarted