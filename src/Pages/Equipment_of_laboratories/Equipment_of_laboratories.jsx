import React from 'react'
import '../../App.css'

import main1 from './img/main1.png'
import main1A from './img/main1A.png'

import main5 from '../About_company/img/main5.png'
import main5A from '../About_company/img/main5A.png'
import main5B from '../About_company/img/main5B.png'
import main5C from '../About_company/img/main5C.png'

import main6 from './img/main6.jpg'
import main4 from './img/main4.jpg'

import main8 from '../About_company/img/main8.png'


import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Equipment_of_laboratories = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className=" main_1">
        <div className="contener w-[90%] mx-auto">
        <div className=' lg:py-[100px]'>
              <img className='lg:flex hidden'  src={main1} alt="" />
          </div>

        </div>
      </div>

      
<div className="main_4 lg:pt-[60px]">
        <div className="contener">
        <div className='py-[100px]'>
              <img src={main4} alt="" />
          </div>
        </div>
      </div>
      <div className="main_5 pb-[60px]">
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
      <div className="main_6 py-[90px]">
        <div className="contener lg:w-[93%] mx:w-[80%] mx-auto">
          <h1  className='lg:text-[50px] mx:text-center lg:text-start mx:text-[40px] lg:pl-[90px] font-[400] uppercase'>наши сертификаты</h1>
          <div className="main_4A flex flex-wrap pt-[70px] justify-center mx-auto">
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[20px]'><img src={main6} alt="" /></div>
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[20px]'><img src={main6} alt="" /></div>
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[20px]'><img src={main6} alt="" /></div>
            <div className='lg:w-[25%] flex justify-center px-[20px] py-[20px]'><img src={main6} alt="" /></div>

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

export default Equipment_of_laboratories