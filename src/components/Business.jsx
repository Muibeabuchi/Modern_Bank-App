import { features } from "../constants"
import styles, { layout }  from "../style"
import Button from '../components/Button';


const FeatureCard =({index , content, icon , title })=>(
  <div className={`flex flex-row p-6 rounded-[20px]  feature-card ${index !== features.length-1 ? 'mb-6' : 'mb-0'}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain "/>
    </div>
    <div className="flex flex-col ml-3 flex-1">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfosectionInfo}>
        <h2 className={styles.heading2}>You do the business, <hr className="sm:block hidden "/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard index={index} key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Business