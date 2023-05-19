import React from 'react'

import '../../App.css'

import main1 from './img/main1.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Company_Services = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1 py-[80px]">
        <div className="contener w-[90%] mx-auto">
        <h1 className=' mx:text-[40px] pb-[20px]  lg:w-[50%] mx-auto text-center uppercase font-[700] xl:text-[57px]'>{t("text16")}</h1>

          <div className="main_1A flex flex-wrap lg:justify-between mx:justify-center">
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />
            <img className='lg:w-[33%]' src={main1} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Company_Services