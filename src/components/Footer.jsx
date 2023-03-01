import styles from '../style';
import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constants';


const Footer = () => {
  // console.log(icon);
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} flex-col md:flex-row md:justify-between md:items-start md:space-x-4 w-full pb-5 border-b-[0.2px] border-dimWhite   `}>
        <div className='flex flex-col justify-start'>
          <img src={logo} alt="logo" className='w-[300px] h-[53px] mb-6' />
          <p className={`${styles.paragraph} max-w-[320px] ml-6`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
          {footerLinks.map(({title,links},index)=>{
            return(
              <div className='flex flex-col items-start  ' key={index}>
                <h4 className='text-white font-poppins font-medium text-[18px] sm:text-[16px] leading-[27px] mb-4' >{title}</h4>
                {links.map(({name,link})=>{
                  return(
                      <a href={link} key={name} className={`text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-3`}>{name}</a>

                  )
                })}
              </div>
              // {links.map(({name,link})=>{
              //   return (
              //   )
              // })}
            )
          })}
      </div>
      {/* <div  className='bg-dimWhite h-1 w-full'/> */}
      <div className='pt-8 flex flex-col md:flex-row md:items-center w-full'>
        <p  className={styles.paragraph}>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className='hidden space-x-6 md:flex flex-row  items-center flex-1 justify-end'>
          {socialMedia.map(({id,icon,link})=>(
            
            <a href={link} key={id } target='_blank' className='w-[27px] h-[27px] text-white'>
              <img src={icon} alt="icon" />
            </a>
            
            
          ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer