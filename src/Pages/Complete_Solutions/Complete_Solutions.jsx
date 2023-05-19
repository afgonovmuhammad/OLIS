import React from 'react'

import '../../App.css'
import './Complete_Solutions.css'

import main8 from '../About_company/img/main8.png'

import main1 from './main1.png'
import main2A from './main2A.jpg'

import main3 from '../About_company/img/main3.png'
import main4 from './main4.jpg'
import main6 from './main6.jpg'
import main3A from '../About_company/img/main3A.png'
import main3B from '../About_company/img/main3B.png'
import main3C from '../About_company/img/main3C.png'
import main3D from '../About_company/img/main3D.png'
import main3I from '../About_company/img/main3I.png'

import main5 from '../About_company/img/main5.png'
import main5A from '../About_company/img/main5A.png'
import main5B from '../About_company/img/main5B.png'
import main5C from '../About_company/img/main5C.png'


import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Complete_Solutions = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>

      <div className="main_1AA py-[100px]">
        <div className="contener lg:w-[93%] mx:w-[80%] sm:w-[60%]  mx-auto">
          <h1 className='text-[50px] lg:pl-[20px] text-center uppercase lg:w-[30%] mx-auto font-[700]'>{t("text5")}</h1>
          <div className="main_3A flex flex-wrap pt-[50px] justify-between">
            <div className='lg:w-[33%] py-[0px]'><img src={main3D} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3A} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3D} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3C} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3D} alt="" /></div>
            <div className='lg:w-[33%] py-[0px]'><img src={main3I} alt="" /></div>


          </div>
        </div>
      </div>

      <div className="main_2A lg:flex  pt-[50px] justify-between">
          <div className="right_2 flex flex-col xl:w-[50%] mx:w-[80%] mx:mx-auto lg:mx-0 lg:pl-[50px]   items-center">

              <div className='pt-[60px] pb-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Предварительная очистка зернового вороха</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение легких, мелких и крупных примесей с целью обеспечения бла­гоприятных условий при выполнении последующих техноло­гических операций послеуборочной обработки зерна, главным образом его сушки.</p>
              </div>

              <div className='py-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Первичная очистка зерна</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение крупных, мелких и легких примесей и сортирование на основную (про­довольственную и семенную) и фуражную фракции при ми­нимальных потерях основного зерна. При этом основная фракция должна соответствовать нормам заготовитель­ных базисных кондиций. При невысокой засоренности и влаж­ности зерна послеуборочную обработку можно начинать с пер­вичной очистки.</p>
              </div>

              <div className=' py-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Вторичная очистка</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение легких, мелких и крупных примесей с целью обеспечения бла­гоприятных условий при выполнении последующих техноло­гических операций послеуборочной обработки зерна, главным образом его сушки.</p>
              </div>

              <div className='py-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Сортирование</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение крупных, мелких и легких примесей и сортирование на основную (про­довольственную и семенную) и фуражную фракции при ми­нимальных потерях основного зерна. При этом основная фракция должна соответствовать нормам заготовитель­ных базисных кондиций. При невысокой засоренности и влаж­ности зерна послеуборочную обработку можно начинать с пер­вичной очистки.</p>
              </div>

            </div>
            <div className='left_2 lg:flex hidden lg:float-right'>
              <img className=' dark:opacity-[0.4]' src={main1} alt="" />
            </div>
          </div>

          <div className="main_2A lg:flex  pb-[50px] justify-between">
            <div className='left_2 pb-[20px] mx:w-[80%] mx-auto lg:w-[100%] lg:float-left'>
              <img className=' dark:opacity-[0.4]' src={main2A} alt="" />
            </div>
          <div className="right_2 flex flex-col xl:w-[50%] mx:w-[80%] mx-auto  lg:pl-[50px]   items-center">

              <div className='pt-[60px] pb-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Предварительная очистка зернового вороха</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение легких, мелких и крупных примесей с целью обеспечения бла­гоприятных условий при выполнении последующих техноло­гических операций послеуборочной обработки зерна, главным образом его сушки.</p>
              </div>

              <div className='py-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Первичная очистка зерна</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение крупных, мелких и легких примесей и сортирование на основную (про­довольственную и семенную) и фуражную фракции при ми­нимальных потерях основного зерна. При этом основная фракция должна соответствовать нормам заготовитель­ных базисных кондиций. При невысокой засоренности и влаж­ности зерна послеуборочную обработку можно начинать с пер­вичной очистки.</p>
              </div>

              <div className=' py-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Вторичная очистка</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение легких, мелких и крупных примесей с целью обеспечения бла­гоприятных условий при выполнении последующих техноло­гических операций послеуборочной обработки зерна, главным образом его сушки.</p>
              </div>

              <div className='py-[20px]'>
              <h1 className=' mx:text-[24px]   font-[700] xl:text-[26px]'>Сортирование</h1>
              <p className=' xl:w-[70%] font-[300] py-[10px] text-[16px]'>Выделение крупных, мелких и легких примесей и сортирование на основную (про­довольственную и семенную) и фуражную фракции при ми­нимальных потерях основного зерна. При этом основная фракция должна соответствовать нормам заготовитель­ных базисных кондиций. При невысокой засоренности и влаж­ности зерна послеуборочную обработку можно начинать с пер­вичной очистки.</p>
              </div>

            </div>
          </div>    

      <div className="main_4 pt-[60px]">
        <div className="contener ">
        <div className='py-[100px]'>
              <img src={main4} alt="" />
          </div>
        </div>
      </div>
      <div className="main_5 pb-[60px]">
        <div className="contener  mx:w-[80%]  mx-auto">
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

export default Complete_Solutions