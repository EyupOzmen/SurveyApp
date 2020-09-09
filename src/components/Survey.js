import React,{useContext} from 'react';
import {SurveyListContext} from '../context/SurveyListContext'


const Survey = ({survey}) => {
    const{removeSurvey,findItem}=useContext(SurveyListContext)

    return(
        <li className="list-item" >
            <span>{survey.Name}</span>
            <div className="surveyButton" >
                <button onClick={()=>removeSurvey(survey.ID)} className="btn-delete survey-btn">
                    <i className="fas fa-trash-alt" ></i>
                </button>
                <button onClick={() => findItem(survey.ID)
                } className="btn-edit survey-btn">
                    <i className="fas fa-pen" ></i>
                </button>
            </div>
        </li>
    )

}
export default Survey