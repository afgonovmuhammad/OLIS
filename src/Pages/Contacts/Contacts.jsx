import React from 'react'

import '../../App.css'
import './Contacts.css'

import PhoneIcon from '@mui/icons-material/LocalPhone';


import main1 from './img/main1.png'

import icon from '../../Layout/img/icon.png'
import icon2 from '../../Layout/img/icon2.png'
import icon3 from '../../Layout/img/icon3.png'

import main8 from '../About_company/img/main8.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Contacts = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className='dark:text-[#000]'>
      <div className="main_1">
        <div className="contener lg:w-[80%] mx:w-[60%]  mx-auto">
          <div className="main_1A lg:flex py-[40px] justify-center">
            <div className="left_1 lg:w-[30%] px-[40px] pb-[15px] pt-[30px] bg-[#fff]">
              <h1 className='text-[27px] xl:w-[60%] font-[700]'>{t("text17")}</h1>
              <div className='flex pt-[30px] pb-[15px]  gap-[8px]'>
                <PhoneIcon className='text-[#FEAD04] font-[800]'/>
                <div>
                <p className='text-[16px] font-[300]' >+38 (067) 822-85-58</p>
                <p className='text-[#d8be3c] py-[7px] text-[16px] font-[500]'>{t("text10D1")}</p>
                </div>
              </div>

              <div className='flex py-[15px]  gap-[8px]'>
                <PhoneIcon className='text-[#FEAD04] font-[800]'/>
                <div>
                <p className='text-[16px] font-[300]' >+38 (067) 822-85-58</p>
                <p className='text-[#d8be3c] py-[7px] font-[500]'>Многоканальный</p>
                </div>
              </div>

              <div className='flex py-[15px]  gap-[8px]'>
                <PhoneIcon className='text-[#FEAD04] font-[800]'/>
                <div>
                <p className='text-[16px]  font-[300]' >+38 (067) 822-85-58</p>
                <p className='text-[16px]  font-[300]' >+38 (67) 485-19-95</p>
                <p className='text-[#d8be3c] text-[16px] py-[7px] xl:w-[60%] font-[500]'>Отдел “Оборудование для очистки и переработки зерна”</p>
                </div>
              </div>

              <div className='flex  py-[15px]  gap-[8px]'>
                <PhoneIcon className='text-[#FEAD04] font-[800]'/>
                <div>
                <p className='text-[16px] font-[300]' >+38 (067) 822-85-58</p>
                <p className='text-[#d8be3c] py-[7px] xl:w-[60%] text-[16px] font-[500]'>Отдел “Лабораторное оборудование”</p>
                </div>
              </div>

              <div className='flex py-[15px]  gap-[8px]'>
                <PhoneIcon className='text-[#FEAD04] font-[800]'/>
                <div>
                <p className='text-[16px] font-[300]' >+38 (067) 822-85-58</p>
                <p className='text-[#d8be3c] py-[7px] xl:w-[60%] font-[500]'>Отдел “Экспорта оборудования”</p>
                </div>
              </div>

              <div className='flex  py-[15px]  gap-[8px]'>
                <PhoneIcon className='text-[#FEAD04] font-[800]'/>
                <div>
                <p className='text-[16px] font-[300]' >+38 (067) 822-85-58</p>
                <p className='text-[#d8be3c] py-[7px]  text-[16px] font-[500]'>Отдел “Сервиса”</p>
                </div>
              </div>

              <div className='flex justify-center gap-[25px]'>
                <img src={icon} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />

              </div>


            </div>
            <div className="right_1 lg:w-[70%]">
              <img src={main1} alt="" />
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

export default Contacts