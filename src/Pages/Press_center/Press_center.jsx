import React from 'react'

import '../../App.css'

import main1 from './img/main1.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Press_center = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1 py-[100px]">
        <div className="contener text-center lg:w-[90%] mx:w-[80%] mx-auto">
          <div className=' flex flex-col justify-center items-center'>
            <div className='lg:py-[80px] mx:py-[10px]'>
            <img src={main1} alt="" />
            </div>
            <h1 className='lg:text-[50px] mx:text-[42px] xl:w-[33%] font-[700]'>{t("text13")}</h1>
            <h1 className='lg:text-[26px] mx:text-[18px] xl:w-[32%] py-[20px] font-[400]'>{t("text13A")}</h1>
            <div>
            <div className='flex gap-[20px]'>
              <div>
              <div className='bg-[#FEAD04] rounded-[50%] p-[10px]'></div>
              </div>
              <div>
                <p>{t("text13B")}</p>
              </div>
            </div>
            <div className='flex py-[20px] gap-[20px]'>
              <div>
              <div className='bg-[#FEAD04] rounded-[50%] p-[10px]'></div>
              </div>
              <div>
                <p>{t("text13C")}</p>
              </div>
            </div>
            <div className='flex gap-[20px]'>
              <div className='bg-[#FEAD04] rounded-[50%] p-[10px]'></div>
              <div>
                <p>{t("text13D")}</p>
              </div>
            </div>
            </div>



            <div className='py-[35px] flex lg:justify-start mx:justify-center'>
                <button className='bg-[#FEAD04] py-[10px] px-[50px] text-[#fff] text-[17px] font-[700]'>{t("text12B")}</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Press_center