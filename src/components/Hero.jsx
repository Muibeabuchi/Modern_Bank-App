import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from './GetStarted';


const Hero = () => {
  return (
    <section className={`flex flex-col md:flex-row ${styles.paddingY}`} id='#home'>
      <div className={`flex-1 flex-col px-6 sm:px-16 xl:px-6 ${styles.flexStart}`}>
        <div className="flex flex-row items-center py-[6px] px-4 mb-2 rounded-[10px] bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white"> 20% </span>
          Discount For {''}
          <span className="text-white">1 month </span>
          Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins flex-1 font-semibold text-white text-[52px] ss:text-[72px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" /> {''}
            <span className="text-gradient">Generation</span> {''}
          </h1>
          <div className="hidden ss:flex md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins  font-semibold text-white text-[52px] ss:text-[68px] w-fullss:leading-[100px] leading-[75px]' >
          Payment Method.
        </h1>
        <p className={`mt-5 max-w-[470px] ${styles.paragraph}`}>
          Our team of experts use a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates,annual fees.
        </p>
      </div>
      <div className={`md:my-0 my-10 relative flex-1 ${styles.flexCenter}`}>
        <img src={robot} alt="robot image" className="w-full h-full relative z-[5]" />
        <div className="absolute top-0 z-0 w-[40%] h-[35%] pink__gradient"></div>
        <div className="absolute bottom-40 right-0 rounded-full z-[1]  w-[80%] h-[80%] white__gradient"></div>
        <div className="absolute right-20 bottom-20 rounded-full z-0 w-[50%] h-[50%] blue__gradient"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero