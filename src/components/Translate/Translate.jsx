import { useContext, useEffect, useState } from "react";
import translate from "translate";
import { LangContext } from "../../Providers/Providers";


translate.engine = "google";

export const Translate = ({children}) => {
  const {lang,setLang} = useContext(LangContext)
  const [original, setOriginal] = useState(children)
  useEffect(()=>{
    (async function(){
      try {
        const text = await translate(children, {from:lang.prev,to:lang.active});
        setOriginal(text)
      }
      catch{
        return children
      }
    }())
  },[ lang ])
  return original
}

export const useTranslate = (children) => {
  const {lang,setLang} = useContext(LangContext)
  const [original, setOriginal] = useState(children)
  useEffect(()=>{
    (async function(){
      try {
        const text = await translate(children, {from:lang.prev,to:lang.active});
        setOriginal(text)
      }
      catch{
        return children
      }
    }())
  },[ lang ])
  return original
}
