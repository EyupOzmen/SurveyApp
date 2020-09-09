import React,{useContext} from 'react';
import {SurveyListContext} from '../context/SurveyListContext';
import Survey from './Survey'
import {useTranslation} from 'react-i18next'

const SurveyList = () => {
    const{surveys}=useContext(SurveyListContext)
    const {t} = useTranslation()
    return (
        <div className="listMain" >
            {surveys.length? <ul className="list" >
                {surveys.map((survey) => {
                    return <Survey survey={survey} key={survey.ID} />
                })}
            </ul>:<div className="no-surveys">{t("_NO_SURVEY")}</div>}
           
        </div>
    )
}

export default SurveyList