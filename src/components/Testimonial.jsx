import styles, {layout} from '../style';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';


const Testimonial = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`} id='clients'>
      {/* TODO */}
      <div className='absolute h-[60%] w-[60%] z-[0] rounded-full -right-1/2 blue__gradient'/>
      <div className='flex w-full justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]'>
        <h1 className={styles.heading2}>What people are <br className='hidden sm:block'/>  saying about us.</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='w-full flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1] '>
        {feedback.map((card)=> {
          return(
            <FeedbackCard key={card.id} {...card}/>
          )
        })}
      </div>

    </section>
  )
}

export default Testimonial