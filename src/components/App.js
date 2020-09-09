import React,{useContext} from 'react';
import '../App.css'
import SurveyList from './SurveyList'
import SurveyForm from "./SurveyForm"
import Header from "./Header"
import {SurveyListContext} from "../context/SurveyListContext" 

const App = () => {
    const{surveys}= useContext(SurveyListContext)
    return (
       
        <div className="container">
            <div className="app-wrapper" >
                <Header surveyNumver={surveys.length}/>
                <div className="main">
                
                    <SurveyList />
                    <SurveyForm />
               
                </div>
            </div>
        </div>
       
    )
}

export default App