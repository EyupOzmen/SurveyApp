import React from "react";
import {useTranslation} from 'react-i18next'

const Header = ({surveyNumver}) => {
    const {t,i18n} = useTranslation()

    const handleClick =(opt) => {
      i18n.changeLanguage(opt)
    }
    return (
        <div className="header" >
            <div>
                <h1>{t("_HEADER")}</h1>
                <h3 className="survey-number" > {t("_SURVEYS")} : {surveyNumver}</h3>
            </div>
            <div className="btn-language">
                    <button onClick={()=>handleClick('tr')} className="btn btn-lng" value="tr">Türkçe</button>
                    <button onClick={()=>handleClick('en')} className="btn btn-lng" value="en">English</button>
            </div>
        </div>
    )
}

export default Header