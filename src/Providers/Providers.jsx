import React, { createContext, useState } from 'react'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loader from '../components/Ui/Loader/Loader'
export const LangContext = createContext('Ru')

const Providers = ({children}) => {
  const [ lang, setLang ]= useState(JSON.parse(localStorage.getItem('lang') ?? 'null') ?? {active: 'Ru',prev: ''})

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <LangContext.Provider  value={{lang, setLang}}>
          {children}
        </LangContext.Provider>
      </Suspense>
    </BrowserRouter>
  )
}

export default Providers