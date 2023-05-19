import React from 'react'
import '../../App.css'
import './Objects.css'

import main1 from './img/main1.jpg'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Objects = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1 py-[100px]">
        <div className="contener lg:w-[90%] md:w-[65%] mx:w-[95%] mx-auto">
        <h1 className='text-[#000] text-center mx:text-[40px]  font-[700] xl:text-[60px]'>{t("text1")}</h1>

        <div className='xl:flex justify-between'>
        <div className='bg-[#e8e5e5]  xl:w-[49.5%] p-[30px] my-[20px] lg:flex justify-between'>
          <h1 className='text-[26px] dark:text-[#000] font-[700]'>{t("text12C")}</h1>
          <select className='SELECT2 text-start dark:text-[#000] ' name="" id="">
            <option value="">Страна</option>
            <option value="">Страна</option>
            <option value="">Страна</option>
          </select>
          <select className='SELECT2  mx-[10px] dark:text-[#000]' name="" id="">
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
            <option value="">Область</option>
          </select>

        </div>

        <div className=' bg-[#e8e5e5] dark:text-[#000] xl:w-[49.5%] p-[30px] my-[20px] lg:flex justify-between'>
          <h1 className='text-[26px] font-[700] '>{t("text12D")}</h1>
          <select className='SELECT2 dark:text-[#000]  ' name="" id="">
            <option value="">Год</option>
            <option value="">Год</option>
            <option value="">Страна</option>
          </select>
          <select className='SELECT2 dark:text-[#000]  mx-[10px]' name="" id="">
            <option value="">Месяц</option>
            <option value="">Месяц</option>
            <option value="">Месяц</option>
          </select>

        </div>

        </div>

        <div className='py-[35px] flex gap-[40px] lg:justify-start mx:justify-center'>
                <button className='bg-[#FEAD04] py-[10px] px-[50px] text-[#fff] text-[17px] font-[700]'>Украина</button>
                <button className='bg-[#FEAD04] py-[10px] px-[50px] text-[#fff] text-[17px] font-[700]'>Житомирская</button>
        </div>
        <div className="main_1A">
       
          <h1 className='text-[50px] font-[400]'>{t("text8")}</h1>
          <div className="main_4A flex flex-wrap pt-[50px] justify-between">
            <div className='lg:w-[33%] py-[0px]'><img src={main1} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main1} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main1} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main1} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main1} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main1} alt="" /></div>


          </div>

        </div>

         

        </div>
      </div>
    </div>
  )
}

export default Objects