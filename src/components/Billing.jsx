import styles, { layout } from '../style';
import {apple,bill,google} from '../assets';


const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='w-full h-full relative  z-[5] object-contain' />
        <div className='absolute z-[3] top-0 -left-1/2 w-1/2 h-1/2 white__gradient rounded-full ' />
        <div className='absolute z-[0] bottom-0 -left-1/2 w-1/2 h-1/2 pink__gradient rounded-full ' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoice.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel suscipit, ad enim laborum minus! Iure obcaecati porro culpa ducimus.</p>
        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} alt="apple store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google store" className='w-[128px] h-[42px] object-contain  cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing