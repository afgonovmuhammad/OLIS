import React, { Suspense } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Louder from './component/Louder/Louder.jsx'
import {Layout, About_company, Objects,Press_center,Video,Contacts,Complete_Solutions,Our_equipment,Equipment_of_laboratories,Company_Services} from './Routes/Routes'

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <Suspense fallback = {<Louder/>} >
      <Layout />
    </Suspense>,
    children:[
      {
        index:true,
        element:(
          <Suspense fallback = {<Louder/>} >
            <About_company/>
          </Suspense> 
        ),
      },
      {
        path:"Objects",
        element:(
          <Suspense fallback = {<Louder/>} >
            <Objects/>
          </Suspense>
        )
      },
      {
        path:"Press_center",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Press_center/>
          </Suspense>
        )
      },
      {
        path:"Video",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Video/>
          </Suspense>
        )
      },
      {
        path:"Contacts",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Contacts/>
          </Suspense>
        )
      },
      {
        path:"Complete_Solutions",
        element:(
          <Suspense fallback = {<Louder/>} >
            <Complete_Solutions/>
          </Suspense>
        )
      },
      {
        path:"Our_equipment",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Our_equipment/>
          </Suspense>
        )
      },
      {
        path:"Equipment_of_laboratories",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Equipment_of_laboratories/>
          </Suspense>
        )
      },
      {
        path:"Company_Services",
        element:(
          <Suspense fallback = {<Louder/>}>
            <Company_Services/>
          </Suspense>
        )
      },
      {
        path:"*",
        element:(
          <Suspense fallback={<Louder/>}>
            <Error/>
          </Suspense>
        )
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App