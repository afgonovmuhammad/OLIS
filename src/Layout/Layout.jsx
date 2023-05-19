import React,{useEffect} from 'react'
import { Link,Outlet } from 'react-router-dom'

import Switcher from '../component/Switcher.jsx'

import Temporary from '../component/navbar.jsx'

import '../App.css'
import './layout.css'

import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import Telegram from '@mui/icons-material/Telegram';

import nav1 from './img/nav1.png'
import icon from './img/icon.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'


import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Layout = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  function handleChange(e) {
    const { value } = e.target
    changeLanguage(value)
    setLng(value)
  }
  return (
      <div className=' dark:bg-[#000] dark:text-[#fff] bg-[#f9f8f8]'>
        <div className='contener'>
        <div className="navbar  w-[97%] px-[7px] py-[15px] mx-auto flex justify-between">
          <div className=' 2xl:w-[10%] lg:w-[15%] sm:w-[20%] flex items-center'>
            <img src={nav1} alt="" />
          </div>
          <div className='flex justify-between w-[85%] '>
          <div className='xl:w-[75%] pt-[10px] px-[5px] '>
          <ul className='UL_ONE pb-[10px] lg:flex hidden xl:w-[77%] text-[16px] font-[400] mx-auto px-[10px] justify-between '>
                <Link to = "/" >
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text")}</li>
                </Link>


                <Link to = "/Objects">
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text1")}</li>
                </Link>

                <Link to = "/Press_center">
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text2")}</li>
                </Link>

                <Link to = "/Video">
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text3")}</li>
                </Link>

                <Link to = "/Contacts" >
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text4")}</li>
                </Link>
              </ul>

              <ul className='UL lg:flex hidden xl:w-[88%] lg:w-[95%]  text-[16px] font-[400] mx-auto px-[10px] justify-between '>
                <Link to ='/Complete_Solutions' >
                  <li className='  hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text5")}</li>
                </Link>


                <Link to = "/Our_equipment">
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text6")}</li>
                </Link>

                <Link to = "/Equipment_of_laboratories">
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text7")}</li>
                </Link>

                <Link to = "/Company_Services">
                  <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text8")}</li>
                </Link>
              </ul>
              </div>
              <div className=' flex gap-[20px] pt-[7px]'>
                  <div className='lg:flex hidden pt-[20px]'>
                    <Switcher/>
                  </div>
                  <div className='pt-[25px]'>
                  <SearchIcon/>
                  </div>
                  <div className=' py-[20px]'>
                    <select className='SELECT dark:text-[#010000] font-[600]  p-[5px]' value={lng} onChange={handleChange}>
                         <option value={"en"}>En</option>
                         <option value={"ru"}>Ru</option>
                    </select>
                  </div>  
                  <div className='2xl:flex flex-col hidden pt-[10px]'>
                    <p className='text-[16px] font-[400] pb-[5px]'>{t("text9")}</p>
                    <div className='flex gap-[8px]'>
                      <PhoneIcon className='text-[#ded63c] font-[800]'/>
                      <p className='text-[16px] font-[900]' >+38 (067) 822-85-58</p>
                    </div>
                  </div>
                  <div className='mx:flex items-center py-[5px] rounded-[30px] bg-[#FEAD04] lg:hidden my-[15px]'>
                    <Temporary/>
                  </div>
              </div>    
          </div>
        </div>
        </div>
        <Outlet/>

        <div className='contener'>
          <div className="footer lg:w-[96%] md:w-[30%] mx:w-[70%] px-[7px] py-[40px] mx-auto lg:flex lg:justify-between  mx:flex-col lg:flex-row gap-y-[60px]">

            <div className=''>
                <img className='xl:w-[55%] md:w-[50%] lg:pb-[35px] sm:w-[40%] mx:w-[50%]' src={nav1} alt="" />
              <p className='text-[#000] text-[14px] lg:w-[60%] py-[25px] font-[400]'>{t("text10")}</p>
              <p className='text-[#FEAD04] text-[18px] font-[500]'>{t("text10A")}</p>
            </div>
            <div>
              <h1 className='text-[18px] font-[700]'>{t("text10B")}</h1>
              <div className='flex py-[20px]'>
                <input className='INPUT md:px-[30px]  mx:px-[10px] py-[10px]' type="text" placeholder='E-mail' />
                <div className=' flex items-center px-[10px] bg-[#FEAD04]'>
                  <Telegram/>
                </div>

              </div>
            </div>
            <ul className=' flex flex-col px-[5px] gap-y-[15px]'>
              <h1 className='text-[18px] font-[700]'>{t("text10C")}</h1>
              <li>{t("text10C1")}</li>
              <li>{t("text10C2")}</li>
              <li>{t("text10C3")}</li>

            </ul>
            <ul className=' 2xl:flex hidden  flex-col gap-y-[15px]'>
              <h1 className='text-[18px] font-[700]'>{t("text2")}</h1>
              <li>{t("text10C1")}</li>
              <li>{t("text10C2")}</li>
              <li>{t("text10C3")}</li>

            </ul>

            <ul className=' flex flex-col px-[5px] gap-y-[7px]'>
              <h1 className='text-[18px] pb-[6px] font-[700]'>{t("text4")}</h1>
              <li className='text-[16px] font-[700]'>{t("text10D1")}
              <li className='text-[16px] font-[300]'>+38 (067) 822-85-58</li></li>
              <li className='text-[16px] font-[700]'>{t("text10D2")}
              <li className='text-[16px] font-[300]'>+7 (831) 288-93-74</li></li>
            </ul>
            <ul className=' flex flex-col gap-y-[7px]'>
              <div className='flex gap-[5px] pb-[10px]'>
                <img src={icon} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />

              </div>
              <li className='text-[16px] font-[700]'>E-mail
              <li className='text-[16px] font-[300]'>olis1@ukr.net</li>
              <li className='text-[16px] font-[300]'>info@olis.com.ua</li></li>
              <li className='text-[16px] font-[700]'>{t("text10D3")}
              <li className='text-[16px] font-[300]'>{t("text10D4")}</li></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Layout