import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`flex-wrap w-full ${styles.flexCenter}`}>
        {clients.map((client)=>(
          <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`} key={client.id} >
            <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients