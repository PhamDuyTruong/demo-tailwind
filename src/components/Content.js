import React from 'react'
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../Assets/mobile/checkpoint.svg";
import {useSpring, animated} from "react-spring"

const Content = () => {

  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });
  return (
    <section className='md:flex md:flex-row'>
       <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md rounded-[24px] from-white/40 to-transparent  md:w-[20%]'>
         <div className='mt-16 gap-8 flex items-start'>
            <FaUser size={"22px"} className="mt-[12px]"/>
            <div className='text-26'>
              <animated.div>
                 {customer.customers.to((val) => Math.floor(val))}
              </animated.div>
              <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
            </div>
         </div>
         <div className='flex items-start mb-16 gap-8'>
            <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
            <div className='text-26'>
               <animated.div>
                 {card.cards.to((val) => Math.floor(val))}
               </animated.div>
               <p className="text-13 font-semibold md:text-16"> Cards Issued </p>
            </div>
       </div>
       </div>
       <div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]'>
            <div className='flex gap-8 ml-[70px] mr-[29px] items-center mb-[51px]'>
                <img src={checkIconMobile} alt="Icon"/>
                <p>Card reports sent to your phone every weeks</p>
            </div>
            <div className='mb-[51px] flex gap-8 ml-[70px] mr-[29px] items-center'>
                <img src={checkIconMobile} alt="Icon"/>
                <p>No external fees</p>
            </div>
            <div className='flex gap-8 ml-[70px] mr-[29px] items-center'>
                <img src={checkIconMobile} alt="Icon"/>
                <p>Set spending limits and restrictions</p>
            </div>
       </div>
    </section>
  )
}

export default Content