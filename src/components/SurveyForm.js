import React,{useContext,useState,useEffect} from 'react'
import {SurveyListContext} from "../context/SurveyListContext"
import {useTranslation} from 'react-i18next'

const SurveyForm = ()=> {
   const{addSurvey,editItem,editSurvey}= useContext(SurveyListContext)
   const [title,setTitle]=useState('')
   const {t} = useTranslation()
    
   const handleChange = (e)=>{
        setTitle(e.target.value)

   }
   
   const handleSubmit = (e)=>{
       e.preventDefault()
       if(!editItem){
       addSurvey(title)
       setTitle('')
       }else{
           editSurvey(title,editItem.ID)
           
       }
   }
   
   useEffect(()=>{
    if(editItem){
        setTitle(editItem.Name)
    }else{
        setTitle('')
    }
   },[editItem])
   
   return (
        <form onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            value={title} 
            type="text"
            className="survey-input"
            placeholder={t("_CREATE_SURVEY")}
            required
        />
        <div className="buttons" >
            <button type="submit" className="btn add-survey-btn " >
                {editItem?t("_EDIT"):t("_CREATE")}</button>
           
        </div>
        </form>
        
    )
}

export default SurveyForm