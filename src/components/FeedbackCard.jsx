import { quotes } from "../assets"


const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className='flex justify-between px-10 py-12 flex-col rounded-[20px] max-w-[370px]  mr-0 md:mr-10 sm:mr-5 my-5 feedback-card'>
      <img src={quotes} alt="quotes icon" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
      <div className="flex flex-row items-center">
        <img src={img} alt={name} className='h-[48px] w-[48px] rounded-full' />
        <div className="ml-4 flex flex-col">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard