import React from 'react'
import '../../App.css'
import './About_company.css'

import icon from '../../Layout/img/icon.png'
import icon2 from '../../Layout/img/icon2.png'
import icon3 from '../../Layout/img/icon3.png'

import main1 from './img/main1.png'
import main2 from './img/main2.png'

import main3 from './img/main3D.png'
import main3A from './img/main3A.png'
import main3B from './img/main3B.png'
import main3C from './img/main3C.png'
import main3D from './img/main3D.png'
import main3I from './img/main3I.png'

import main4 from './img/main4.png'
import main6 from './img/main6.jpg'
import main7 from './img/main7.jpg'
import main8 from './img/main8.png'
import main4A from './img/main4A.jpg'
import main4B from './img/main4B.png'
import main4C from './img/main4C.png'
import main4D from './img/main4D.png'
import main4I from './img/main4I.png'

import main5 from './img/main5.png'
import main5A from './img/main5A.png'
import main5B from './img/main5B.png'
import main5C from './img/main5C.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const About_company = () => {
    
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className=' lg:text-start mx:text-center'>
      <div className="main_1 py-[40px]">
        <div className="contener  mx-auto">
          <div className="main_1A flex mx:flex-col-reverse lg:flex-row  justify-between">
            <div className="left_1 flex xl:w-[40%]  items-center">
              <div className='lg:px-[40px] lg:flex flex-col hidden'>
                <h1 className='H_ONE py-[40px] font-[700] text-[18px]'>{t("text11B")}</h1>
                <div className='KAHT1  lg:flex flex-col items-center my-[40px] '>

                </div>
                <div className='z-[1] pt-[20px] flex flex-col items-center gap-y-[10px]'>
                  <div>
                  <img src={icon} alt="" />
                  </div>
                  <div>
                  <img src={icon2} alt="" />
                  </div>
                  <div>
                  <img src={icon3} alt="" />
                  </div>
                </div>

              </div>
              <div className=' z-[1]  mx:mx-auto lg:mx-0 '>
              <h1 className='text-[#FEAD04] mx:text-[40px] mx-auto font-[900] xl:text-[60px]'>{t("text11")}</h1>
              <div className='KAHT lg:flex hidden w-[80%] my-[20px] '>

              </div>
              <h1 className='mx:text-[20px] font-[300] xl:text-[36px]'>{t("text11A")}</h1>

              </div>

            </div>
            <div className='rihgt_1 py-[20px] lg:float-right'>
              <img className=' dark:opacity-[0.4]' src={main1} alt="" />

            </div>

          </div>
        </div>
      </div>
      <div className="main_2 py-[100px]">
        <div className="contener lg:w-[93%] mx:w-[80%] sm:w-[60%] mx-auto">
          <h1 className='text-[50px] lg:pl-[40px] font-[400]'>{t("text6")}</h1>
          <div className="main_2A flex flex-wrap justify-center">
            <div className='lg:w-[33%]'><img className='' src={main2} alt="" /></div>
            <div className='lg:w-[33%]'><img src={main2} alt="" /></div>
            <div className='lg:w-[33%]'><img src={main2} alt="" /></div>
            <div className='lg:w-[33%]'><img src={main2} alt="" /></div>
            <div className='lg:w-[33%]'><img src={main2} alt="" /></div>
            <div className='lg:w-[33%]'><img src={main2} alt="" /></div>


          </div>
        </div>
      </div>

      <div className="main_3 py-[100px]">
        <div className="contener lg:w-[93%] mx:w-[80%] sm:w-[60%]  mx-auto">
          <h1 className='text-[50px] lg:pl-[40px] font-[400]'>{t("text5")}</h1>
          <div className="main_3A flex flex-wrap pt-[50px] justify-between">
            <div className='lg:w-[33%] py-[0px]'><img src={main3} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3A} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3D} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3C} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3D} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3I} alt="" /></div>


          </div>
        </div>
      </div>

      <div className="main_4 py-[100px]">
        <div className="contener lg:w-[93%] mx:w-[80%] sm:w-[60%] mx-auto">
          <h1 className='text-[50px] font-[400]'>{t("text8")}</h1>
          <div className="main_4A flex flex-wrap pt-[50px] items-center">
            <div className='lg:w-[33%] py-[0px]'><img src={main4} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main4A} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main4} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main4C} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main4D} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main4I} alt="" /></div>


          </div>
        </div>
      </div>

      <div className="main_5 py-[100px]">
        <div className="contener  mx:w-[80%] mx-auto">
          <h1 className='text-[50px] text-center font-[400]'>{t("text11C")}</h1>
          <div className="main_4A flex flex-wrap pt-[70px] justify-center mx-auto">
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[10px]'><img src={main5} alt="" /></div>
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[10px]'><img src={main5A} alt="" /></div>
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[10px]'><img src={main5B} alt="" /></div>
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[10px]'><img src={main5C} alt="" /></div>

          </div>
        </div>
      </div>

      <div className="main_6 py-[40px]">
        <div className="contener mx:w-[80%] lg:w-[100%] mx-auto">
          <div className="main_1A flex flex-col-reverse lg:flex-row  justify-between">
            <div className="left_1 flex flex-col  lg:pl-[50px] lg:w-[30%] justify-center">

    
              <h1 className=' mx:text-[40px]  font-[400] xl:text-[63px]'>{t("text12")}</h1>
              <h1 className='mx:text-[17px] font-[300] xl:text-[18px]'>{t("text12A")}</h1>
              <div className='py-[35px] flex lg:justify-start mx:justify-center'>
                <button className='bg-[#FEAD04] py-[10px] px-[50px] text-[#fff] text-[17px] font-[700]'>{t("text12B")}</button>
              </div>

   

            </div>
            <div className='rihgt_1 py-[20px] lg:float-right'>
              <img className=' dark:opacity-[0.4]' src={main6} alt="" />

            </div>

          </div>
        </div>
      </div>

      <div className="main_6 py-[100px]">
        <div className="contener mx:w-[80%] lg:w-[100%] mx-auto">
          <div className="main_1A flex flex-col-reverse lg:flex-row  justify-between">
            <div className='rihgt_1 py-[20px] lg:float-left'>
              <img className=' dark:opacity-[0.4]' src={main7} alt="" />
            </div>
            <div className="left_1 flex flex-col  lg:pl-[50px] lg:w-[30%] justify-center">

    
              <h1 className=' mx:text-[40px]  font-[400] xl:text-[63px]'>В каких странах мы работаем</h1>
              <h1 className='mx:text-[17px] lg:w-[70%] font-[300] xl:text-[18px]'>Технологический уровень и организация нашего производства позволяет обеспечить высокое качество изделий по убедительным ценам и поставлять их более чем в 30 стран ближнего и дальнего зарубежья.</h1>
              <div className='py-[35px] flex lg:justify-start mx:justify-center'>
                <button className='bg-[#FEAD04] py-[10px] px-[50px] text-[#fff] text-[17px] font-[700]'>{t("text12B")}</button>
              </div>

   

            </div>

          </div>

        </div>
      </div>
      <div className="main_8">
        <div className="contener">
        <div className='py-[100px]'>
              <img src={main8} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_company