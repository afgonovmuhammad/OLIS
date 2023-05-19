import React from 'react'

import main1 from './img/main1.png'
import main2 from './img/main2.png'
import main1A from './img/main1A.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Our_equipment = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1 lg:py-[90px]">
        <div className="contener lg:w-[90%] mx:w-[80%] mx-auto">
        <h1 className=' mx:text-[40px] text-center uppercase font-[800] xl:text-[60px]'>{t("text15")}</h1>
        <div className="main_4A lg:py-[30px] lg:flex justify-between">
          <div className='lg:w-[49%]'>
          <img className='py-[30px]' src={main1} alt="" />
          <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[12px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>

          </div>

          <div className="lg:w-[49%]">
          <img className='py-[30px]' src={main1A} alt="" />
          <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[12px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>

          </div>
        </div>
        <div className="main_4A lg:py-[30px] lg:flex  justify-between">
          <div className='lg:w-[49%] gap-[20px] lg:flex'>
            <div className=''>
          <img className='py-[30px]' src={main2} alt="" />

            </div>
            <div className='pt-[25px] lg:w-[80%] flex flex-col justify-center'>
            <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[13px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>
            </div>


          </div>

          <div className="lg:w-[49%] gap-[20px] lg:flex ">
          <div className=''>
          <img className='py-[30px] ' src={main2} alt="" />

            </div>
            <div className=' pt-[25px] lg:w-[80%] flex flex-col justify-center'>
            <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[13px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>
            </div>
          </div>
        </div>

        <div className="main_4A lg:py-[30px] lg:flex justify-between">
          <div className='lg:w-[49%]'>
          <img className='py-[30px]' src={main1} alt="" />
          <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[12px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>

          </div>

          <div className="lg:w-[49%]">
          <img className='py-[30px]' src={main1A} alt="" />
          <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[12px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>

          </div>
        </div>
        <div className="main_4A lg:py-[30px] lg:flex  justify-between">
          <div className='lg:w-[49%] gap-[20px] lg:flex'>
            <div className=''>
          <img className='py-[30px]' src={main2} alt="" />

            </div>
            <div className='pt-[25px] lg:w-[80%] flex flex-col justify-center'>
            <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[13px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>
            </div>


          </div>

          <div className="lg:w-[49%] gap-[20px] lg:flex ">
          <div className=''>
          <img className='py-[30px] ' src={main2} alt="" />

            </div>
            <div className=' pt-[25px] lg:w-[80%] flex flex-col justify-center'>
            <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[13px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>
            </div>
          </div>
        </div>
        <div className="main_4A lg:py-[30px] lg:flex justify-between">
          <div className='lg:w-[49%]'>
          <img className='py-[30px]' src={main1} alt="" />
          <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[12px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>

          </div>

          <div className="lg:w-[49%]">
          <img className='py-[30px]' src={main1A} alt="" />
          <h1 className='lg:text-[26px] mx:text-[23px]  font-[700]'>ООО "Прометей-Сервис"</h1>
          <p className='text-[16px] xl:w-[70%] py-[12px] font-[300]'>В 2020 году компанией ОЛИС запущен комплекс по очистке зерна на базе сепаратора ЛУЧ ЗСО-200 в Николаевской области!
Представляем Вашему вниманию отзыв руководителя предприятия ООО "Прометей-Сервис".
На предприятии установлен зерноочистительный сепаратор барабанного типа ЛУЧ ЗСО-200 производительностью 200 т/час.</p>

          </div>
        </div>
        </div>
      </div>

      
    </div>
  )
}

export default Our_equipment