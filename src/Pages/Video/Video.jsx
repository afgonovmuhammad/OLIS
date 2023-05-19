import React from 'react'

import '../../App.css'
import './Video.css'

import main1 from './img/main1.png'
import main2 from './img/main2.png'
import main4 from './img/main4.png'
import main4A from './img/main4A.png'

import main8 from '../About_company/img/main8.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Video = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1">
        <div className="contener lg:w-[100%] mx:w-[80%] mx-auto">
          <div className="main_1A flex mx:flex-col-reverse lg:flex-row  justify-between">
            <div className='left_1 pt-[20px] lg:float-left'>
              <img className=' dark:opacity-[0.4]' src={main1} alt="" />
            </div>
          <div className="right_1 flex xl:w-[49%]  items-center">

              <div className=' z-[1]'>
              <h1 className=' mx:text-[40px] xl:w-[60%]  font-[900] xl:text-[60px]'>{t("text14")}</h1>

              <h1 className='mx:text-[16px] lg:w-[80%] xl:w-[60%] pt-[20px] font-[300] xl:text-[17px]'>Послеуборочная очистка является обязательным звеном производства зерна. Эффективность этого процесса прямо влияет на эффективность последующих операций (сушка, хранение, переработка) и во многом определяет результаты всего производства. <br />
<br />
Зерновой ворох, поступающий на послеуборочную очистку, представляет собой смесь полноценного, щуплого и поврежден­ного зерна основной культуры, семян различных культурных и сорных растений, а также примесей частиц растений, соломы, колосьев, половы, песка, комочков земли и др. При этом содер­жание примесей в зерне основной культуры может составлять от 2-х до 15-ти %,</h1>

              </div>

            </div>
          </div>

        </div>
      </div>
          <div className="main_2A lg:flex mx:w-[80%] mx-auto lg:w-[100%]  pb-[50px] justify-between">
          <div className="right_2 flex flex-col xl:w-[50%] lg:pl-[50px]   items-center">

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
            <div className='left_2 pb-[20px] lg:float-right'>
              <img className=' dark:opacity-[0.4]' src={main2} alt="" />
            </div>
          </div>

          <div className="main_4 py-[60px]">
            <div className="contener lg:w-[95%] mx:w-[80%] mx-auto">
            <h1 className=' mx:text-[40px] xl:w-[60%]  font-[900] xl:text-[60px]'>{t("text3")}</h1>
            <div className="main_4A py-[30px] lg:flex justify-between">
              <img className='py-[20px]' src={main4} alt="" />
              <img className='py-[20px]' src={main4A} alt="" />
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

export default Video